const CHATWOOT_BASE_URL = "https://chatwoot.tarciso.dev"
const CHATWOOT_WEBSITE_TOKEN = "2XoDxGekEUSBi83b2Y2KNePY"

export const chatwootSettings = {
  position: "right",
  type: "standard",
  launcherTitle: "Fale conosco no chat",
} as const

declare global {
  interface Window {
    chatwootSettings?: typeof chatwootSettings
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
    $chatwoot?: unknown
  }
}

let chatwootLoadPromise: Promise<void> | null = null

export function loadChatwoot(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }

  if (window.$chatwoot) {
    return Promise.resolve()
  }

  if (chatwootLoadPromise) {
    return chatwootLoadPromise
  }

  window.chatwootSettings = chatwootSettings

  chatwootLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-chatwoot-sdk="true"]'
    )

    if (existing) {
      if (window.$chatwoot) {
        resolve()
        return
      }
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", () => reject(new Error("Chatwoot SDK failed")), {
        once: true,
      })
      return
    }

    const script = document.createElement("script")
    script.dataset.chatwootSdk = "true"
    script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`
    script.async = true
    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: CHATWOOT_WEBSITE_TOKEN,
        baseUrl: CHATWOOT_BASE_URL,
      })
      resolve()
    }
    script.onerror = () => reject(new Error("Chatwoot SDK failed to load"))
    document.body.appendChild(script)
  })

  return chatwootLoadPromise
}
