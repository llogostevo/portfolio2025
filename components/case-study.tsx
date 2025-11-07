import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface CaseStudyProps {
  title: string
  company: string
  year: string
  image: string
  problem: string
  solution: string
  outcome: string
  tech: string[]
  index: number
}

export function CaseStudy({ title, company, year, image, problem, solution, outcome, tech, index }: CaseStudyProps) {
  return (
    <article className="grid gap-12 md:grid-cols-2 md:gap-16">
      <div className={`space-y-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{company}</span>
            <span>·</span>
            <span>{year}</span>
          </div>
          <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">{title}</h2>
        </div>

        <div className="space-y-6">
          <Section title="Problem" content={problem} />
          <Section title="Solution" content={solution} />
          <Section title="Outcome" content={outcome} />
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <Badge key={item} variant="secondary" className="rounded-md px-3 py-1 text-sm font-normal">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
        <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-muted">
          <Image src={image || "/placeholder.svg"} alt={`${title} preview`} fill className="object-cover" />
        </div>
      </div>
    </article>
  )
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{title}</h3>
      <p className="text-pretty leading-relaxed text-foreground">{content}</p>
    </div>
  )
}
