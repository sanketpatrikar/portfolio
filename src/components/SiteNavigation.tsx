import { Link } from "@tanstack/react-router"
import { MapPin } from "lucide-react"

import { ThemeToggle } from "@/components/ThemeToggle"

export function SiteNavigation() {
  return (
    <header className="flex items-start justify-between gap-4 pb-8 pt-10 md:pt-16">
      <div className="min-w-0">
        <Link to="/" aria-label="Sanket Patrikar home" className="block w-fit">
          <p className="text-xl font-medium leading-7 text-[var(--heading)]">Sanket Patrikar</p>
        </Link>
        <p className="mt-1 text-base leading-6 text-muted">software engineer</p>
        <p className="mt-2 flex items-center gap-2 text-sm font-medium leading-relaxed text-muted">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          Nagpur, India.
        </p>
      </div>
      <ThemeToggle />
    </header>
  )
}
