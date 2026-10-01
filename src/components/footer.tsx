import { Separator } from "@/components/ui/separator"
import { site } from "@/lib/site"

import { Logo } from "./logo"
import { SocialLinks } from "./social-links"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-10 pt-6">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col gap-6 text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <Logo className="h-7 max-w-[9rem] opacity-90" loading="lazy" />
            <p>
              © {year} {site.name}. {site.footer.location}.
            </p>
            <a
              href={site.privacyPolicyUrl}
              className="inline-flex min-h-11 items-center rounded-sm hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Política de Privacidade
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <SocialLinks />
            <ul className="flex flex-col gap-1">
              {site.social.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-sm hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.siteUrl}
              className="inline-flex min-h-11 items-center rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              tarciso.dev
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
