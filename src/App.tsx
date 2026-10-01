import { lazy, Suspense } from "react"

import { ChatwootWidget } from "@/components/chatwoot-widget"
import { Hero } from "@/components/hero"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { SeoHead } from "@/components/seo-head"
import { mainNav } from "@/lib/site"
import { cn } from "@/lib/utils"

const CasesSection = lazy(() =>
  import("@/components/cases-section").then((m) => ({ default: m.CasesSection }))
)
const OffersSection = lazy(() =>
  import("@/components/offers-section").then((m) => ({ default: m.OffersSection }))
)
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
  "inline-flex min-h-11 items-center rounded-sm px-2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"

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
        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    navLinkClass,
                    "primary" in link && link.primary && "text-primary hover:underline"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </header>
      <main>
        <Hero />
        <Suspense fallback={null}>
          <CasesSection />
          <OffersSection />
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
