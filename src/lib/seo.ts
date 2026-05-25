import { site } from "./site"

export const seo = {
  title: site.title,
  description: site.description,
  url: site.siteUrl,
  locale: "pt_BR",
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
        jobTitle: "Desenvolvedor web",
        description: site.description,
        sameAs: site.social.map((s) => s.href),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.siteUrl}/#service`,
        name: `${site.name} — Desenvolvimento web`,
        url: site.siteUrl,
        description: site.description,
        areaServed: "BR",
        provider: { "@id": `${site.siteUrl}/#person` },
        serviceType: [
          "Desenvolvimento de sites",
          "Sistemas web",
          "Automação WhatsApp",
          "SEO e posicionamento digital",
        ],
      },
    ],
  },
} as const
