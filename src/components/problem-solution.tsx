import { Separator } from "@/components/ui/separator"
import { site } from "@/lib/site"

export function ProblemSolution() {
  return (
    <section
      id="como-ajudo"
      className="border-y border-border bg-card/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="mb-10 md:mb-14">{site.problem.sectionTitle}</h2>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="readable readable-stack">
            <p className="section-label text-foreground">{site.problem.title}</p>
            <h3>Quando o negócio depende só das redes</h3>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              {site.problem.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-destructive">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="readable readable-stack md:border-l md:border-border md:pl-16">
            <p className="section-label">{site.solution.title}</p>
            <h3>Presença própria e atendimento inteligente</h3>
            <ul className="flex flex-col gap-3 text-foreground">
              {site.solution.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-primary">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="mt-12 md:mt-16" />
      </div>
    </section>
  )
}
