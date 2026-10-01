import { site } from "./site"

export const canonicalUrl = "https://tarciso.dev/"

export const seoImage = {
  url: `${site.siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
  alt: `${site.name} — sites e atendimento no WhatsApp para o comércio em Uberaba-MG`,
} as const

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
}

export const seo = {
  title: site.title,
  description: site.description,
  url: canonicalUrl,
  locale: "pt_BR",
  image: seoImage,
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.siteUrl}/#person`,
        name: site.name,
        url: site.siteUrl,
        email: site.contact.email,
        telephone: site.contact.phone,
        image: seoImage.url,
        jobTitle: "Desenvolvedor web",
        description: site.description,
        sameAs: site.social.map((item) => item.href),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.siteUrl}/#service`,
        name: site.name,
        url: site.siteUrl,
        description: site.description,
        telephone: site.contact.phone,
        email: site.contact.email,
        image: seoImage.url,
        logo: seoImage.url,
        sameAs: site.social.map((item) => item.href),
        areaServed: {
          "@type": "City",
          name: "Uberaba",
          containedInPlace: {
            "@type": "State",
            name: "Minas Gerais",
          },
        },
        provider: { "@id": `${site.siteUrl}/#person` },
        serviceType: [
          "Sites para comércio local",
          "Atendimento no WhatsApp",
          "Presença digital",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Ofertas",
          itemListElement: site.offers.map((offer) => ({
            "@type": "Offer",
            name: offer.title,
            description: `${offer.summary} Resultados possíveis: ${offer.results.join("; ")}.`,
          })),
        },
      },
    ],
  },
} as const

export const seoHeadHtml = `<!-- seo:generated -->
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${seo.locale}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:image" content="${seoImage.url}" />
    <meta property="og:image:width" content="${seoImage.width}" />
    <meta property="og:image:height" content="${seoImage.height}" />
    <meta property="og:image:alt" content="${escapeHtml(seoImage.alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${seoImage.url}" />
    <meta name="twitter:image:alt" content="${escapeHtml(seoImage.alt)}" />
    <script type="application/ld+json" id="seo-jsonld">${JSON.stringify(seo.jsonLd).replaceAll("<", "\\u003c")}</script>`
