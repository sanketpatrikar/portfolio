import { Link, createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

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
		<main className="mx-auto w-full max-w-[44rem] px-6 pb-6 pt-6 sm:px-10 md:mx-auto md:px-12 md:pt-8 lg:px-16">
			<section>
				<div className="mt-6 space-y-5 text-base leading-[1.75] sm:text-lg">
					<p>
						<strong className="font-semibold text-[var(--heading)]">Right now,</strong> I
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


      <section className="mt-8" aria-labelledby="sections-heading">
        <h2 id="sections-heading" className="text-sm font-semibold tracking-wide text-muted">
          Sections
        </h2>
        <nav aria-labelledby="sections-heading" className="mt-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link
                to="/resume"
                className="inline-flex min-h-7 items-center text-sm font-medium text-[var(--heading)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                /resume
              </Link>
            </li>
          </ul>
        </nav>
      </section>

			<section className="projects-section mt-24" aria-labelledby="projects-heading">
				<h2 id="projects-heading" className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
					Current projects
				</h2>
				<p className="mt-6 text-lg text-muted">Projects will appear here when they are ready.</p>
			</section>
		</main>
	);
}
