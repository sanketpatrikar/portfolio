import { Link } from "@tanstack/react-router"
import { MapPin } from "lucide-react"

import { ThemeToggle } from "@/components/ThemeToggle"

export function SiteNavigation() {
  return (
    <header className="flex items-start justify-between gap-4 pb-8 pt-10 md:pt-16">
      <div className="min-w-0">
        <Link to="/" aria-label="Sanket Patrikar home" className="block w-fit">
          <p className="text-2xl font-semibold leading-8 tracking-tight text-[var(--heading)]">Sanket Patrikar</p>
        </Link>
        <p className="mt-1 text-base font-medium leading-6 text-[var(--ink)]">Software Engineer</p>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm font-normal leading-5 text-muted">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          Nagpur, India.
        </p>
      </div>
      <ThemeToggle />
    </header>
  )
}
