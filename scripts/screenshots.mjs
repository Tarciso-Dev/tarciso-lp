import { mkdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import puppeteer from "puppeteer"

const { site } = await import("../src/lib/site.ts")

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const casesDir = join(root, "public", "cases")

const shots = [
  { width: 1280, height: 800, suffix: "" },
  { width: 390, height: 844, suffix: "-mobile" },
]

function placeholderHtml(title) {
  return `<!doctype html>
<html>
  <body style="margin:0;background:#1c1916;color:#f4efe6;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;padding:32px;text-align:center">
    <div>
      <p style="letter-spacing:.2em;text-transform:uppercase;color:#e4c36a;font-size:12px">Prévia indisponível</p>
      <h1 style="font-size:32px;font-weight:500">${title}</h1>
    </div>
  </body>
</html>`
}

async function capture(page, item, shot, file) {
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 })
  try {
    await page.goto(item.url, { waitUntil: "networkidle0", timeout: 45_000 })
  } catch (error) {
    console.warn(`Falhou ${item.url} (${shot.width}px): ${error.message}. Tentando domcontentloaded.`)
    try {
      await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 30_000 })
      await new Promise((resolve) => setTimeout(resolve, 1500))
    } catch (secondError) {
      console.warn(`Placeholder para ${file}: ${secondError.message}`)
      await page.setContent(placeholderHtml(item.title), { waitUntil: "domcontentloaded" })
    }
  }
  await page.screenshot({
    path: join(casesDir, file),
    type: "webp",
    quality: 80,
  })
  console.log(`Case: ${file}`)
}

function ogHtml() {
  const logo = readFileSync(
    join(root, "src", "assets", "tarciso_heli_logo_white.svg"),
    "utf8"
  )
  return `<!doctype html>
<html>
  <body style="margin:0;width:1200px;height:630px;background:#1c1814;color:#f4efe6;font-family:Georgia, 'Times New Roman', serif;display:flex;align-items:center;justify-content:space-between;padding:72px;box-sizing:border-box">
    <div style="max-width:760px">
      <p style="margin:0 0 16px;letter-spacing:.22em;text-transform:uppercase;color:#e4c36a;font-family:sans-serif;font-size:18px">Uberaba-MG</p>
      <h1 style="margin:0 0 20px;font-size:68px;font-weight:500;line-height:1.05">${site.name}</h1>
      <p style="margin:0;font-family:sans-serif;font-size:32px;line-height:1.35;color:#ddd4c4">Sites e atendimento no WhatsApp para o comércio local.</p>
    </div>
    <div style="width:200px;flex:none">${logo.replace("<svg", '<svg style="width:200px;height:auto;display:block"')}</div>
  </body>
</html>`
}

mkdirSync(casesDir, { recursive: true })

const browser = await puppeteer.launch({ headless: true })
const failed = []

try {
  const page = await browser.newPage()
  for (const item of site.cases) {
    for (const shot of shots) {
      const file = `${item.id}${shot.suffix}.webp`
      try {
        await capture(page, item, shot, file)
      } catch (error) {
        failed.push(`${item.id} ${shot.suffix || "desktop"}: ${error.message}`)
        console.warn(`Erro ao gravar ${file}: ${error.message}`)
      }
    }
  }

  const ogPage = await browser.newPage()
  await ogPage.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
  await ogPage.setContent(ogHtml(), { waitUntil: "domcontentloaded" })
  await ogPage.screenshot({
    path: join(root, "public", "og-image.png"),
    type: "png",
  })
  console.log("OG: public/og-image.png")
  await ogPage.close()
  await page.close()
} finally {
  await browser.close()
}

if (failed.length) {
  console.warn("Páginas com falha:")
  for (const line of failed) console.warn(`- ${line}`)
  process.exitCode = 0
}
