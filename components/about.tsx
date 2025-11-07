export function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
      <div className="space-y-12">
        {/* Introduction */}
        <div className="space-y-4">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">About Me</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Hi, I'm Lloyd — a Product Manager and former Assistant Head Teacher passionate about building tools that
            make learning and daily life simpler and smarter.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            With over 18 years of experience in education and a background in Computer Science, I've led curriculum
            innovation, managed large-scale IT systems, and now focus on developing web applications that solve
            real-world problems in education and healthcare. My work blends strategy, empathy, and technical fluency —
            turning ideas into usable, impactful products.
          </p>
        </div>

        {/* Product Philosophy */}
        <div className="space-y-4 border-l-2 border-border pl-6">
          <h3 className="text-xl font-medium text-foreground">My Product Philosophy</h3>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I believe great products start with understanding people — their frustrations, habits, and what truly makes
            their day easier. My goal is to design intuitive, data-driven tools that reduce cognitive load, streamline
            communication, and empower users through clarity and insight.
          </p>
        </div>

        {/* Toolkit */}
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-foreground">Toolkit</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Tech & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Supabase", "SQL", "Python", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Product & Design</h4>
              <div className="flex flex-wrap gap-2">
                {["Product Discovery", "Roadmapping", "UX/UI Design", "Balsamiq", "Figma", "Data Analysis"].map(
                  (skill) => (
                    <span key={skill} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Beyond Work */}
        <div className="space-y-4 border-l-2 border-border pl-6">
          <h3 className="text-xl font-medium text-foreground">Beyond Work</h3>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Outside of building products, I'm a long-distance runner and lifelong educator. Both have taught me the
            value of persistence, reflection, and learning from feedback — qualities I bring to every product I create.
          </p>
        </div>
      </div>
    </section>
  )
}
