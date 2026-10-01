import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { site, whatsappHref } from "@/lib/site"
import { cn } from "@/lib/utils"

type CtaButtonsProps = {
  size?: "default" | "lg"
  className?: string
  whatsappMessage?: string
  showPhoneEmail?: boolean
  layout?: "inline" | "stack"
}

export function CtaButtons({
  size = "lg",
  className,
  whatsappMessage,
  showPhoneEmail = true,
  layout = "inline",
}: CtaButtonsProps) {
  const btnSize = size === "lg" ? "lg" : "default"
  const stacked = layout === "stack"
  const whatsappLink = whatsappMessage
    ? whatsappHref(whatsappMessage)
    : site.whatsapp.href

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        !stacked && "sm:flex-row sm:flex-wrap sm:items-center",
        className
      )}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ size: btnSize }),
          "min-h-11",
          stacked && "w-full"
        )}
      >
        <MessageCircle data-icon="inline-start" aria-hidden />
        {site.whatsapp.label}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
      <div
        className={cn(
          "flex flex-col gap-2",
          stacked ? "w-full" : "sm:flex-row sm:flex-wrap"
        )}
      >
        <a
          href={site.contact.scheduleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: btnSize }),
            "min-h-11",
            stacked && "w-full"
          )}
        >
          <CalendarDays data-icon="inline-start" aria-hidden />
          {site.contact.scheduleLabel}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        {showPhoneEmail ? (
          <>
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
          </>
        ) : null}
      </div>
    </div>
  )
}
