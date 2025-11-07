import { Header } from "@/components/header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center md:px-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-6xl">
              Building products that make learning and life simpler
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Building products that make learning and life simpler. Product Manager with 18+ years in education, focused on data-driven tools in EdTech, with additional projects in healthcare.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/work"
              className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              About Me
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
