import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

import { getCanonicalLink, homeStructuredData } from "@/lib/seo";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		links: [getCanonicalLink()],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(homeStructuredData),
			},
		],
	}),
});

function App() {
	return (
		<main className="w-full max-w-[58ch] pb-12">
			<section>
				<div className="space-y-5 text-base leading-7">
					<p>
						<strong className="font-medium text-[var(--heading)]">Right now,</strong> I
						spend most of my time building software, trying to keep up with the latest AI
						releases, and reading up on the current in-trend thing on X.
					</p>
					<p>
						Alongside that, I tinker with tools &amp; technologies, and write when I have
						something worth sharing.
					</p>
					<p className="flex items-center gap-2 text-sm font-medium leading-relaxed text-muted">
						<MapPin className="size-4 shrink-0" aria-hidden="true" />
						Nagpur, India.
					</p>
				</div>

			</section>


        <nav aria-label="Pages" className="mt-8">
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            <li>
              <Link
                to="/resume"
                className="inline-flex min-h-7 items-center gap-0.5 rounded-sm text-base font-normal text-[light-dark(#000000,#fffffff2)] underline decoration-[light-dark(#52525b33,#ffffff33)] decoration-2 underline-offset-2 transition-colors duration-150 hover:decoration-[light-dark(#52525b66,#ffffff66)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none"
              >
                <span>resume</span>
                <ArrowUpRight className="size-2.5 self-start mt-1 shrink-0" strokeWidth={2} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>

			<section className="projects-section mt-24" aria-labelledby="projects-heading">
				<h2 id="projects-heading" className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
					Current projects
				</h2>
				<p className="mt-6 text-lg text-muted">Projects will appear here when they are ready.</p>
			</section>
		</main>
	);
}
