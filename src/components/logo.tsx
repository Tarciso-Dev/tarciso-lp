import logoBlack from "@/assets/tarciso_heli_logo_black.svg"
import logoWhite from "@/assets/tarciso_heli_logo_white.svg"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type LogoProps = {
  /** `light` = logo branca (fundo escuro). `dark` = logo preta (fundo claro). */
  variant?: "light" | "dark"
  className?: string
  loading?: "eager" | "lazy"
}

export function Logo({
  variant = "light",
  className,
  loading = "eager",
}: LogoProps) {
  const src = variant === "light" ? logoWhite : logoBlack

  return (
    <img
      src={src}
      alt={site.name}
      width={206}
      height={144}
      loading={loading}
      decoding="async"
      className={cn(
        "h-9 w-auto max-w-[10.5rem] object-contain object-left md:h-10 md:max-w-[12rem]",
        className
      )}
    />
  )
}
