import { lazy, Suspense } from "react"

import { ChatwootWidget } from "@/components/chatwoot-widget"
import { Hero } from "@/components/hero"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { SeoHead } from "@/components/seo-head"
import { cn } from "@/lib/utils"

const Services = lazy(() =>
  import("@/components/services").then((m) => ({ default: m.Services }))
)
const AboutSection = lazy(() =>
  import("@/components/about-section").then((m) => ({ default: m.AboutSection }))
)
const ProblemSolution = lazy(() =>
  import("@/components/problem-solution").then((m) => ({
    default: m.ProblemSolution,
  }))
)
const CtaSection = lazy(() =>
  import("@/components/cta-section").then((m) => ({ default: m.CtaSection }))
)
const Footer = lazy(() =>
  import("@/components/footer").then((m) => ({ default: m.Footer }))
)

const navLinkClass =
  "inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground"

function App() {
  return (
    <div className="grain min-h-svh">
      <ChatwootWidget />
      <SeoHead />
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 lg:px-6">
        <a
          href="#inicio"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Logo variant="light" />
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            <li>
              <a href="#servicos" className={navLinkClass}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#sobre" className={navLinkClass}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#como-ajudo" className={navLinkClass}>
                Como ajudo
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={cn(navLinkClass, "text-primary hover:underline")}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </header>
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <AboutSection />
          <ProblemSolution />
          <CtaSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
