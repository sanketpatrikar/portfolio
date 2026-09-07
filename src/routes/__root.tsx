import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import { NotFound } from "@/components/NotFound";
import { SocialLinks } from "@/components/SocialLinks";
import { reloadOnPreloadErrorScript } from "@/lib/preload-recovery";
import { getSeoMeta } from "@/lib/seo";
import { themeScript } from "@/lib/theme";

import appCss from "../styles.css?url";

const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
      {
        href: "/favicon.svg",
        rel: "icon",
        type: "image/svg+xml",
      },
      // To help RSS readers find your feed
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Posts by Sanket Patrikar",
        href: "https://sanketpatrikar.com/feed.xml",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      ...getSeoMeta({ type: "profile" }),
    ],
  }),

  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta id="theme-color" name="theme-color" content="#ffffff" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <HeadContent />
        {umamiWebsiteId ? (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={umamiWebsiteId}
            data-domains="sanketpatrikar.com,www.sanketpatrikar.com"
            data-do-not-track="true"
            data-exclude-search="true"
          />
        ) : null}
        <script
          dangerouslySetInnerHTML={{
            __html: reloadOnPreloadErrorScript,
          }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 sm:px-6">
          <div className="site-content flex-1">
            {children}
          </div>
          <footer className="flex w-full flex-wrap items-center gap-4 border-t border-[var(--border)] py-6">
            <SocialLinks />
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

