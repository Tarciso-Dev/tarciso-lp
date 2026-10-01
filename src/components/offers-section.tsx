import { formatFromPrice, site } from "@/lib/site"

import { CtaButtons } from "./cta-buttons"

export function OffersSection() {
  return (
    <section
      id="ofertas"
      aria-labelledby="ofertas-title"
      className="border-y border-border bg-card/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="section-heading readable-stack mb-10 md:mb-14">
          <p className="section-label">Ofertas</p>
          <h2 id="ofertas-title" className="section-heading-title">
            {site.offersSection.title}
          </h2>
          <p className="text-muted-foreground">{site.offersSection.intro}</p>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {site.offers.map((offer) => {
            const price = site.pricing[offer.id]
            return (
              <li key={offer.id} className="min-w-0">
                <article className="service-card flex h-full flex-col gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10 md:p-6">
                  <h3 className="text-xl md:text-2xl">{offer.title}</h3>
                  <p className="text-muted-foreground">{offer.summary}</p>
                  <p className="text-2xl font-medium text-primary">
                    {formatFromPrice(price.setup, price.monthly)}
                  </p>
                  <p className="text-foreground">{site.offersSection.conditions}</p>
                  <CtaButtons
                    className="mt-auto"
                    size="default"
                    layout="stack"
                    whatsappMessage={offer.message}
                    showPhoneEmail={false}
                  />
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
