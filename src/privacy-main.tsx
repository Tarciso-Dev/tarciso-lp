import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/600.css"
import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"

import { PrivacyPolicyPage } from "@/pages/privacy-policy-page"
import { privacyPolicy } from "@/lib/privacy-policy"

import "./index.css"

function PrivacyApp() {
  useEffect(() => {
    document.title = `${privacyPolicy.title} | Tarciso Dev`

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("name", name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta("description", privacyPolicy.metaDescription)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", privacyPolicy.url)
  }, [])

  return <PrivacyPolicyPage />
}

const root = document.getElementById("root")!

createRoot(root).render(
  <StrictMode>
    <PrivacyApp />
  </StrictMode>
)

requestAnimationFrame(() => {
  document.dispatchEvent(new Event("render-event"))
})
