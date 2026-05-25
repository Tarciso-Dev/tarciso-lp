import { site } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="sobre" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="readable readable-stack mx-auto">
          <p className="section-label">Sobre</p>
          <h2>{site.about.title}</h2>
          <p className="text-muted-foreground">{site.about.intro}</p>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-col gap-2 text-foreground">
            {site.about.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="text-primary">
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p>{site.about.closing}</p>
        </div>
      </div>
    </section>
  )
}
