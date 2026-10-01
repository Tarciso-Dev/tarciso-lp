import { Badge } from "@/components/ui/badge"
import { site } from "@/lib/site"

import { CtaButtons } from "./cta-buttons"
import { SocialLinks } from "./social-links"
import { StatusTicker } from "./status-ticker"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative border-b border-border pb-16 pt-10 md:pb-24 md:pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Badge variant="outline" className="reveal reveal-1 section-label mb-4 w-fit">
          {site.hero.badge}
        </Badge>
        <h1 className="reveal reveal-2 display-title display-title-hero mb-6 md:mb-8">
          {site.hero.headline}
        </h1>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-12">
          <div className="flex flex-col gap-6">
            <p className="readable reveal reveal-3 text-muted-foreground">
              {site.hero.subheadline}
            </p>
            <div className="reveal reveal-4">
              <CtaButtons />
            </div>
            <div className="reveal reveal-5 flex flex-col gap-3">
              <p className="text-muted-foreground">
                {site.name} ·{" "}
                <a
                  href={site.siteUrl}
                  className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tarciso.dev
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </p>
              <SocialLinks className="-ml-1" />
            </div>
          </div>
          <div className="reveal reveal-3 relative w-full md:max-w-md md:justify-self-end">
            <div
              aria-hidden
              className="absolute -left-3 top-0 hidden h-full w-px bg-primary/40 md:block"
            />
            <StatusTicker />
          </div>
        </div>
      </div>
    </section>
  )
}
