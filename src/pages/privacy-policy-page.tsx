import { Logo } from "@/components/logo"
import { ChatwootWidget } from "@/components/chatwoot-widget"
import { Separator } from "@/components/ui/separator"
import {
  privacyPolicy,
  privacyPolicySections,
  type PrivacySection,
} from "@/lib/privacy-policy"
import { site } from "@/lib/site"

function renderSection(section: PrivacySection, index: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={index} className="text-muted-foreground">
          {section.text}
        </p>
      )
    case "subheading":
      return (
        <h3 key={index} className="text-xl md:text-2xl">
          {section.text}
        </h3>
      )
    case "list":
      return (
        <ul key={index} className="flex flex-col gap-3 text-muted-foreground">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="text-primary">
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "steps":
      return (
        <ol key={index} className="flex list-decimal flex-col gap-3 pl-5 text-muted-foreground">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
  }
}

export function PrivacyPolicyPage() {
  const year = new Date().getFullYear()

  return (
    <div className="grain min-h-svh">
      <ChatwootWidget />
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 lg:px-6">
        <a
          href="/"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Logo variant="light" />
        </a>
        <a
          href="/"
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Voltar ao site
        </a>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-4 lg:px-6 md:pb-24">
        <article className="readable legal-prose mx-auto">
          <p className="section-label">Legal</p>
          <h1 className="legal-title mb-4">{privacyPolicy.title}</h1>
          <p className="mb-8 text-muted-foreground">
            <strong className="font-medium text-foreground">Última atualização:</strong>{" "}
            {privacyPolicy.lastUpdated}
          </p>

          <div className="readable-stack text-foreground">
            <p className="text-muted-foreground">
              A presente Política de Privacidade regulamenta a forma como o aplicativo{" "}
              <strong className="font-medium text-foreground">Tarciso Dev</strong>,
              desenvolvido e operado por{" "}
              <strong className="font-medium text-foreground">
                TARCISO HELI FERREIRA JUNIOR LTDA - 49.764.068/0001-36
              </strong>
              , coleta, utiliza, armazena, processa e protege as informações e dados pessoais
              de seus usuários e clientes.
            </p>
            <p className="text-muted-foreground">
              Este documento foi redigido em estrita conformidade com a Lei Geral de Proteção
              de Dados Pessoais (LGPD - Lei nº 13.709/2018) do Brasil, bem como com as
              políticas, diretrizes e termos de uso exigidos pela Meta Platforms, Inc. (Meta
              Data Use Policy e Developer Policies).
            </p>
            <p className="text-muted-foreground">
              Ao integrar e utilizar o{" "}
              <strong className="font-medium text-foreground">Tarciso Dev</strong>, você declara
              estar ciente e de acordo com as práticas descritas nesta política.
            </p>
          </div>

          <Separator className="my-10" />

          <div className="readable-stack">
            {privacyPolicySections.map((block) => (
              <section key={block.id} id={block.id} className="readable-stack">
                <h2>{block.title}</h2>
                {block.content.map((section, index) => renderSection(section, index))}
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer className="border-t border-border pb-10 pt-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-muted-foreground lg:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.footer.location}.
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            {site.contact.email}
          </a>
        </div>
      </footer>
    </div>
  )
}
