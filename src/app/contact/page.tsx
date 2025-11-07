import { Header } from "@/components/header"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">Get in Touch</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm currently open to opportunities in Product Management or Product Development. Let's connect.
            </p>
          </div>

          <div className="space-y-6 border-t border-border pt-12">
            <h2 className="text-xl font-medium text-foreground">Contact Information</h2>
            <div className="space-y-4">
              <a
                href="mailto:lloyd@example.com"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                <span>lloyd@example.com</span>
              </a>
              <a
                href="https://linkedin.com/in/lloydstevens"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/lloydstevens</span>
              </a>
              <a
                href="https://github.com/lloydstevens"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span>github.com/lloydstevens</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 border-l-2 border-border pl-6">
            <h3 className="text-xl font-medium text-foreground">What I'm Looking For</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I'm open to Product Manager roles in EdTech, HealthTech, or SaaS companies where I can leverage my
              technical background and education experience to build impactful products. I'm particularly interested in
              opportunities that involve data-driven decision making, user-centered design, and cross-functional
              collaboration.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
