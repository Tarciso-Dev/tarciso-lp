# Landing page — Tarciso Heli

Landing page em React + Vite + shadcn/ui.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Conteúdo e links

Edite [`src/lib/site.ts`](src/lib/site.ts) para alterar textos, WhatsApp, telefone e e-mail.

## Build

```bash
npm run build
npm run preview
```

O build inclui **pré-renderização** (`scripts/prerender.mjs`): o `dist/index.html` final contém o HTML completo para SEO e crawlers.

Arquivos estáticos em `public/`: `robots.txt`, `sitemap.xml`, `favicon.svg`.

### Charset no header HTTP

O `<meta charset="UTF-8">` no HTML não basta para alguns auditores — o servidor deve enviar `Content-Type: text/html; charset=utf-8`.

| Host | Arquivo |
|------|---------|
| Netlify / Cloudflare Pages | `public/_headers` |
| Vercel | `vercel.json` (raiz do projeto) |
| Apache / cPanel | `public/.htaccess` |

Após `npm run build`, `_headers` e `.htaccess` vão para `dist/` automaticamente.
