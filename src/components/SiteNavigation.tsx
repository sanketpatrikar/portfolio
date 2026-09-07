import { Link } from "@tanstack/react-router"

import { ThemeToggle } from "@/components/ThemeToggle"

export function SiteNavigation() {
  return (
    <header className="pt-5">
      <div className="flex items-center justify-between gap-4">
        <nav aria-label="Main navigation" className="-ml-3 flex items-center gap-2 text-base text-[var(--heading)]">
          <Link to="/" aria-label="Home" className="rounded-full px-3 py-2 transition-opacity hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
            ~
          </Link>
          <Link to="/resume" className="rounded-full px-3 py-2 transition-opacity hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
            resume
          </Link>
        </nav>
        <ThemeToggle />
      </div>
      <div className="max-w-[58ch] pb-8 pt-8 md:pt-16">
        <Link to="/" aria-label="Sanket Patrikar home" className="block w-fit">
          <p className="text-xl font-medium leading-7 text-[var(--heading)]">Sanket Patrikar</p>
        </Link>
        <p className="mt-1 text-base leading-6 text-muted">Software engineer in Nagpur, India</p>
      </div>
    </header>
  )
}
