import { Compass, Globe, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const icons: Record<(typeof site.services)[number]["icon"], LucideIcon> = {
  globe: Globe,
  compass: Compass,
  message: MessageCircle,
}

const cardLayout = [
  "service-card h-full md:row-span-2",
  "service-card",
  "service-card",
] as const

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="section-heading readable-stack mb-10 md:mb-14">
          <p className="section-label">Serviços</p>
          <h2 className="section-heading-title">{site.servicesSection.title}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5 md:items-stretch">
          {site.services.map((service, index) => {
            const Icon = icons[service.icon]
            const isPrimary = index === 0

            return (
              <Card
                key={service.title}
                className={cn(
                  cardLayout[index],
                  "ring-border/60",
                  isPrimary && "min-h-[220px] md:min-h-0"
                )}
              >
                <CardHeader
                  className={cn(
                    "h-full",
                    isPrimary && "flex flex-col justify-start md:py-6"
                  )}
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/5 text-primary">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className={cn(!isPrimary && "text-xl md:text-2xl")}>
                    {service.title}
                  </h3>
                  <CardDescription className="readable text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
