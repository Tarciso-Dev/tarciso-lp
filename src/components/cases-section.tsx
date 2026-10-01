import { caseKindLabel, site } from "@/lib/site"
import { cn } from "@/lib/utils"

const kindClass = {
  cliente: "border-transparent bg-primary text-primary-foreground",
  modelo: "border-primary bg-background text-primary",
  produto: "border-transparent bg-secondary text-secondary-foreground",
} as const

export function CasesSection() {
  const visible = site.cases.filter((item) => item.published)

  return (
    <section id="cases" aria-labelledby="cases-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="section-heading readable-stack mb-10 md:mb-14">
          <p className="section-label">Cases</p>
          <h2 id="cases-title" className="section-heading-title">
            {site.casesSection.title}
          </h2>
          <p className="text-muted-foreground">{site.casesSection.intro}</p>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {visible.map((item) => (
            <li key={item.id} className="min-w-0">
              <article className="service-card flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
                <picture>
                  <source
                    media="(max-width: 639px)"
                    srcSet={item.imageMobile}
                    width={item.imageMobileWidth}
                    height={item.imageMobileHeight}
                  />
                  <img
                    src={item.image}
                    alt={`Print do site ${item.title}. ${item.summary}`}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </picture>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <p
                    className={cn(
                      "inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-medium",
                      kindClass[item.kind]
                    )}
                  >
                    {caseKindLabel[item.kind]}
                  </p>
                  <h3 className="text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.summary}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    Ver site
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
