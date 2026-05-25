import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const links: { href: string; label: string; primary?: boolean }[] = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-ajudo", label: "Como ajudo" },
  { href: "#contato", label: "Contato", primary: true },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-foreground"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X aria-hidden /> : <Menu aria-hidden />}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 z-50"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/80"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute top-0 right-0 flex h-full w-[min(100%,18rem)] flex-col gap-1 border-l border-border bg-background p-4 pt-16 shadow-xl">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-lg px-3",
                      link.primary
                        ? "text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
