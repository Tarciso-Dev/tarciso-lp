import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import puppeteer from "puppeteer"
import { preview } from "vite"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const port = 4173

const routes = [
  { path: "/", outFile: join(root, "dist", "index.html") },
  {
    path: "/politica-privacidade/",
    outFile: join(root, "dist", "politica-privacidade", "index.html"),
  },
]

async function waitForServer(url, attempts = 30) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      await new Promise((r) => setTimeout(r, 500))
    }
  }
  throw new Error(`Preview não respondeu em ${url}`)
}

const previewServer = await preview({
  root,
  preview: { port, strictPort: true },
})

previewServer.printUrls()

const browser = await puppeteer.launch({ headless: true })

try {
  for (const route of routes) {
    const url = `http://localhost:${port}${route.path}`
    await waitForServer(url)

    const page = await browser.newPage()

    await page.setRequestInterception(true)
    page.on("request", (request) => {
      const url = request.url()
      if (url.includes("chatwoot.tarciso.dev")) {
        request.abort()
        return
      }
      request.continue()
    })

    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 })
      await page.waitForSelector("h1", { timeout: 15_000 })
      await page.evaluate(() => document.fonts?.ready)

      await page.evaluate(() => {
        document
          .querySelectorAll(
            "#cw-widget-holder, #cw-bubble-holder, #chatwoot_live_chat_widget, script[data-chatwoot-sdk]"
          )
          .forEach((el) => el.remove())
      })

      const html = await page.content()
      mkdirSync(dirname(route.outFile), { recursive: true })
      writeFileSync(route.outFile, html, "utf-8")
      console.log(`Prerender concluído: ${route.outFile}`)
    } finally {
      await page.close()
    }
  }
} finally {
  await browser.close()
  previewServer.httpServer.close()
}
