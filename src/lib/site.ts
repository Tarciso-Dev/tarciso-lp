// Nome público sugerido pelo Labu; o Tarciso decide. Trocar só aqui.
const name = "Tarciso Junior"

const whatsappNumber = "5534992345156"

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

const defaultWhatsappMessage =
  "Olá, quero saber mais sobre sites e atendimento no WhatsApp."

export function formatBrl(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replaceAll("\u00A0", " ")
}

export function formatFromPrice(setup: number, monthly: number) {
  return `a partir de ${formatBrl(setup)} + ${formatBrl(monthly)}/mês`
}

export const caseKindLabel = {
  cliente: "Cliente",
  modelo: "Modelo de demonstração",
  produto: "Produto próprio",
} as const

export const site = {
  name,
  title: `${name} | Sites e atendimento no WhatsApp para comércio em Uberaba-MG`,
  description: `${name}: sites e atendimento no WhatsApp para o comércio de Uberaba-MG. Página, QR no balcão e agenda.`,
  tagline: "Sites e atendimento no WhatsApp para o comércio local",
  siteUrl: "https://tarciso.dev",
  privacyPolicyUrl: "https://tarciso.dev/politica-privacidade",
  whatsapp: {
    number: whatsappNumber,
    label: "Falar no WhatsApp",
    defaultMessage: defaultWhatsappMessage,
    href: whatsappHref(defaultWhatsappMessage),
  },
  contact: {
    phone: "+5534992345156",
    phoneLabel: "Ligar",
    email: "contato@tarciso.dev",
    emailLabel: "E-mail",
    scheduleLabel: "Agendar conversa",
    scheduleUrl: "https://calcom.tarciso.dev/agenda/30min",
  },
  hero: {
    badge: "Desenvolvedor web em Uberaba",
    headline: "Seu negócio na internet, sem depender do algoritmo",
    subheadline:
      "Ajudo comerciantes de Uberaba-MG a ter site próprio, presença no Google e atendimento no WhatsApp.",
  },
  about: {
    title: "Para quem é este trabalho",
    intro: `Sou o ${name}, desenvolvedor web. Trabalho com comerciantes, prestadores de serviço e pequenos negócios de Uberaba-MG que querem um site próprio e um atendimento no WhatsApp que não dependa só das redes sociais.`,
    paragraphs: [
      "Muitos comerciantes investem tempo em posts e stories, mas não têm um site próprio nem um fluxo claro de atendimento. Quando o alcance cai ou a plataforma muda as regras, o movimento do balcão sente. Meu trabalho é montar uma base digital estável: site, ferramentas sob medida e mensagens automáticas no WhatsApp enquanto você cuida da loja.",
      "Desenvolvo páginas, sistemas web, painéis e integrações para organizar o dia a dia. Cada projeto começa pelo atendimento de hoje: quem é o cliente e quais perguntas se repetem. A tecnologia entra onde alivia a operação.",
      "No posicionamento, organizo site e conteúdo para quem pesquisa no Google o que você vende, com foco na cidade e na região. O ponto não é volume de posts: é ter um endereço seu na internet e um caminho claro até a conversa.",
      "No WhatsApp, monto boas-vindas, respostas frequentes e encaminhamento para que as mensagens não fiquem paradas enquanto você atende. O objetivo é o mesmo em todas as frentes: presença própria e menos mensagens perdidas.",
    ],
    highlights: [
      "Sites e landing pages rápidos e responsivos",
      "Sistemas e painéis feitos para o seu fluxo de trabalho",
      "Estrutura para aparecer nas buscas do comércio local",
      "Fluxos de atendimento no WhatsApp",
    ],
    closing:
      "Se você quer um parceiro técnico que fala a língua do comerciante — e entrega código de verdade — chame no WhatsApp ou agende uma conversa.",
  },
  servicesSection: {
    title: "O que o seu negócio pode ter na internet",
  },
  services: [
    {
      title: "Sites, sistemas e aplicativos",
      description:
        "Desenvolvimento web sob medida: landing pages, painéis, lojas e ferramentas que o seu negócio precisa.",
      icon: "globe" as const,
    },
    {
      title: "Posicionamento na internet",
      description:
        "Site e conteúdo organizados para quem pesquisa no Google o que você vende, com foco no comércio local.",
      icon: "compass" as const,
    },
    {
      title: "Automação no WhatsApp",
      description:
        "Fluxos de atendimento, respostas rápidas e qualificação de pedidos — menos trabalho manual, menos mensagens perdidas.",
      icon: "message" as const,
    },
  ],
  casesSection: {
    title: "Sites no ar",
    intro:
      "Clientes, modelos de demonstração e produto próprio. O selo de cada card deixa claro o que é o quê. Modelo de demonstração não é cliente.",
  },
  cases: [
    {
      id: "ts-hair-science",
      title: "TS Hair Science",
      kind: "cliente" as const,
      url: "https://ts.tarciso.dev/",
      summary:
        "Site do salão em Uberaba com agendamento pelo WhatsApp por serviço.",
      image: "/cases/ts-hair-science.webp",
      imageMobile: "/cases/ts-hair-science-mobile.webp",
      imageWidth: 1280,
      imageHeight: 800,
      imageMobileWidth: 390,
      imageMobileHeight: 844,
      // Cliente real: só publicar depois da autorização do cliente (Tarciso confirma).
      published: false,
    },
    {
      id: "barbearia",
      title: "Barbearia (modelo)",
      kind: "modelo" as const,
      url: "https://barbearia.tarciso.dev/",
      summary:
        "Modelo para barbearia: tabela de preços, combos e agendamento pelo WhatsApp.",
      image: "/cases/barbearia.webp",
      imageMobile: "/cases/barbearia-mobile.webp",
      imageWidth: 1280,
      imageHeight: 800,
      imageMobileWidth: 390,
      imageMobileHeight: 844,
      published: true,
    },
    {
      id: "marido-de-aluguel",
      title: "Marido de Aluguel (modelo)",
      kind: "modelo" as const,
      url: "https://maridodealuguel.tarciso.dev/",
      summary:
        "Modelo para prestador de serviço: serviços por categoria e orçamento pelo WhatsApp.",
      image: "/cases/marido-de-aluguel.webp",
      imageMobile: "/cases/marido-de-aluguel-mobile.webp",
      imageWidth: 1280,
      imageHeight: 800,
      imageMobileWidth: 390,
      imageMobileHeight: 844,
      published: true,
    },
    {
      id: "loja-3d",
      title: "3D para TCG",
      kind: "produto" as const,
      url: "https://3d.tarciso.dev/pt-BR",
      summary:
        "Loja própria de impressão 3D para jogadores de TCG, em 3 idiomas.",
      image: "/cases/loja-3d.webp",
      imageMobile: "/cases/loja-3d-mobile.webp",
      imageWidth: 1280,
      imageHeight: 800,
      imageMobileWidth: 390,
      imageMobileHeight: 844,
      published: true,
    },
  ],
  offersSection: {
    title: "Ofertas para o comércio local",
    intro:
      "Dois caminhos, com valor a partir de. O escopo fecha na conversa, sem pacote surpresa.",
    conditions: "50% para começar, 50% na entrega.",
  },
  // Valores sugeridos, validar com o Tarciso antes de publicar
  pricing: {
    presenca: { setup: 1500, monthly: 120 },
    atendimento: { setup: 2500, monthly: 350 },
  },
  offers: [
    {
      id: "presenca" as const,
      title: "Presença digital",
      summary:
        "Site de uma página, QR code para o balcão com arte e ajuste do perfil no Google (Google Meu Negócio).",
      message:
        "Olá, quero saber mais sobre a oferta Presença digital (site, QR code e Google).",
    },
    {
      id: "atendimento" as const,
      title: "Atendimento no WhatsApp",
      summary:
        "Central de atendimento para várias pessoas no mesmo WhatsApp, mensagens automáticas, agenda online e site.",
      message:
        "Olá, quero saber mais sobre a oferta Atendimento no WhatsApp.",
    },
  ],
  problem: {
    sectionTitle: "Como ajudo seu negócio",
    title: "O problema",
    items: [
      "Cliente só te acha pelo Instagram — e o alcance cai do nada",
      "Sem site, você não aparece quando alguém pesquisa no Google",
      "WhatsApp lotado, mesmas perguntas o dia inteiro",
    ],
  },
  solution: {
    title: "A solução",
    items: [
      "Site e presença própria, sob seu controle",
      "Conteúdo organizado para quem busca o que você vende",
      "Automação que responde, organiza e encaminha",
    ],
  },
  cta: {
    title: "Vamos ver o que o seu balcão precisa?",
    description:
      "Conte sobre o seu negócio. O WhatsApp é o caminho mais rápido. Se preferir, agende uma conversa de 30 minutos.",
  },
  social: [
    {
      id: "linkedin" as const,
      label: `LinkedIn — ${name}`,
      href: "https://www.linkedin.com/in/tarcisojun/",
    },
    {
      id: "github" as const,
      label: "GitHub — tarcisodev",
      href: "https://github.com/tarcisodev/",
    },
    {
      id: "instagram" as const,
      label: "Instagram — @tarciso.dev",
      href: "https://www.instagram.com/tarciso.dev/",
    },
  ],
  footer: {
    // Tarciso confirma.
    location: "Uberaba - MG e região",
  },
} as const

export const mainNav = [
  { href: "#cases", label: "Cases" },
  { href: "#ofertas", label: "Ofertas" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-ajudo", label: "Como ajudo" },
  { href: "#contato", label: "Contato", primary: true },
] as const
