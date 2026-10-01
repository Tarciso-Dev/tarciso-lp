import path from "path"
import { defineConfig, type IndexHtmlTransformContext } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

import { seoHeadHtml } from "./src/lib/seo.ts"

function siteSeoPlugin() {
  return {
    name: "site-seo",
    transformIndexHtml(html: string, ctx: IndexHtmlTransformContext) {
      if (ctx.path.includes("politica-privacidade")) return html
      if (!html.includes("<!--seo-->")) return html
      return html.replace("<!--seo-->", seoHeadHtml)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteSeoPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        politicaPrivacidade: path.resolve(
          __dirname,
          "politica-privacidade/index.html"
        ),
      },
    },
  },
})
