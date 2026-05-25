import { site } from "@/lib/site"

import { CtaButtons } from "./cta-buttons"

export function CtaSection() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 border border-border bg-card/40 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="readable readable-stack">
            <h2>{site.cta.title}</h2>
            <p className="text-muted-foreground">{site.cta.description}</p>
          </div>
          <CtaButtons className="md:shrink-0" />
        </div>
      </div>
    </section>
  )
}
