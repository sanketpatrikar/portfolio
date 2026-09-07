import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="flex w-full flex-col py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">404</p>
      <h1 className="mt-3 text-2xl font-medium leading-8 text-[var(--heading)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link to="/" className="mt-8 w-fit text-base font-semibold text-accent hover:text-[var(--accent-strong)]">
        Back home
      </Link>
    </main>
  );
}
