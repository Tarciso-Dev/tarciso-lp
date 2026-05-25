import { useEffect } from "react"

import { seo } from "@/lib/seo"
import { site } from "@/lib/site"

export function SeoHead() {
  useEffect(() => {
    document.title = site.title

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name"
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta("description", site.description)
    setMeta("og:title", seo.title, true)
    setMeta("og:description", seo.description, true)
    setMeta("og:url", seo.url, true)

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute("data-seo-head", "")
    script.textContent = JSON.stringify(seo.jsonLd)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}
