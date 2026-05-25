import { useEffect } from "react"

import { loadChatwoot } from "@/lib/chatwoot"

export function ChatwootWidget() {
  useEffect(() => {
    loadChatwoot().catch((error) => {
      console.error("[Chatwoot]", error)
    })
  }, [])

  return null
}
