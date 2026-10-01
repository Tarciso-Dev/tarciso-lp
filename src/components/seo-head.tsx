import { useEffect } from "react"

import { seo } from "@/lib/seo"

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name"
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function SeoHead() {
  useEffect(() => {
    document.title = seo.title

    setMeta("description", seo.description)
    setMeta("og:title", seo.title, true)
    setMeta("og:description", seo.description, true)
    setMeta("og:url", seo.url, true)
    setMeta("og:image", seo.image.url, true)
    setMeta("og:image:width", String(seo.image.width), true)
    setMeta("og:image:height", String(seo.image.height), true)
    setMeta("og:image:alt", seo.image.alt, true)
    setMeta("twitter:card", "summary_large_image")
    setMeta("twitter:title", seo.title)
    setMeta("twitter:description", seo.description)
    setMeta("twitter:image", seo.image.url)
    setMeta("twitter:image:alt", seo.image.alt)

    const json = JSON.stringify(seo.jsonLd)
    const existing = document.getElementById("seo-jsonld")
    if (existing) {
      existing.textContent = json
      return
    }

    const script = document.createElement("script")
    script.id = "seo-jsonld"
    script.type = "application/ld+json"
    script.textContent = json
    document.head.appendChild(script)
  }, [])

  return null
}
