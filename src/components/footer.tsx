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
              className="hover:text-primary hover:underline"
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
                    className="hover:text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.siteUrl}
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              tarciso.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
