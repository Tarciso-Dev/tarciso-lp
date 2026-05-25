import { Check } from "lucide-react"

const highlights = [
  {
    title: "Automação no WhatsApp",
    description: "Respostas rápidas e menos mensagens repetidas.",
  },
  {
    title: "Site e sistemas",
    description: "Presença própria, fora do algoritmo das redes.",
  },
  {
    title: "Posicionamento digital",
    description: "Seu negócio encontrado por quem já está buscando.",
  },
] as const

export function StatusTicker() {
  return (
    <aside
      aria-label="Resumo dos serviços"
      className="w-full"
    >
      <div className="flex flex-col gap-4 border border-border bg-card/50 p-5 backdrop-blur-sm md:p-6">
        <p className="section-label tracking-[0.15em]">
          Como posso ajudar
        </p>
        <ul className="flex flex-col gap-4">
          {highlights.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span
                aria-hidden
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary"
              >
                <Check className="size-3" strokeWidth={2.5} />
              </span>
              <div className="flex min-w-0 flex-col gap-0.5">
                <p className="font-medium leading-snug text-foreground">
                  {item.title}
                </p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
