import { useRouter } from "@tanstack/react-router";

export const Header = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();

	return (
		<header className="flex gap-6 items-center mb-10">
			<button
				type="button"
				onClick={() => router.history.back()}
				aria-label="Go back"
				className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--heading)] transition-colors hover:bg-[var(--accent-soft)]"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M19 12H5M12 19l-7-7 7-7" />
				</svg>
			</button>
			<h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--heading)] md:text-4xl">
				{children}
			</h1>
		</header>
	);
};
