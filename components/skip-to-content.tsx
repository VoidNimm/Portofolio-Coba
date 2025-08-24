import Link from 'next/link'

export function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className="sr-only absolute left-4 top-4 z-[9999] rounded-md bg-background px-4 py-2 text-sm font-semibold text-foreground transition-transform focus:not-sr-only focus:-translate-y-0"
    >
      Skip to main content
    </Link>
  )
}
