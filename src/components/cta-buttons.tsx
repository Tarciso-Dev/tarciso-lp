import { MessageCircle, Mail, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type CtaButtonsProps = {
  size?: "default" | "lg"
  className?: string
}

export function CtaButtons({ size = "lg", className }: CtaButtonsProps) {
  const btnSize = size === "lg" ? "lg" : "default"

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className
      )}
    >
      <a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ size: btnSize }), "min-h-11")}
      >
        <MessageCircle data-icon="inline-start" aria-hidden />
        {site.whatsapp.label}
      </a>
      <div className="flex flex-col gap-2 sm:flex-row">
        <span className="sr-only">{site.contact.scheduleLabel}</span>
        <a
          href={`tel:${site.contact.phone}`}
          className={cn(
            buttonVariants({ variant: "outline", size: btnSize }),
            "min-h-11"
          )}
        >
          <Phone data-icon="inline-start" aria-hidden />
          {site.contact.phoneLabel}
        </a>
        <a
          href={`mailto:${site.contact.email}`}
          className={cn(
            buttonVariants({ variant: "outline", size: btnSize }),
            "min-h-11"
          )}
        >
          <Mail data-icon="inline-start" aria-hidden />
          {site.contact.emailLabel}
        </a>
      </div>
    </div>
  )
}
