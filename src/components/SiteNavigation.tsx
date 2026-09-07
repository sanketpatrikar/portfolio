import { Link } from "@tanstack/react-router"

import { ThemeToggle } from "@/components/ThemeToggle"

export function SiteNavigation() {
  return (
    <header className="bg-[var(--page-bg)]">
      <div className="mx-auto flex w-full max-w-[44rem] items-start justify-between gap-4 px-6 pb-5 pt-10 sm:px-10 sm:pt-14 md:px-12 lg:px-16">
        <Link to="/" aria-label="Sanket Patrikar home" className="block min-w-0">
          <p className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.04em] text-[var(--heading)] sm:text-[2.75rem]">
            Sanket Patrikar
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-muted sm:text-base">
            Software engineer in Nagpur, India
          </p>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
