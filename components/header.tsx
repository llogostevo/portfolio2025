import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div>
              <h1 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">Lloyd Stevens</h1>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">Product Manager</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm md:gap-8 md:text-base">
            <Link href="/work" className="text-muted-foreground transition-colors hover:text-foreground">
              Work
            </Link>
            <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
