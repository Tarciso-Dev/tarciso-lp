import { site } from "./site"

export const privacyPolicy = {
  path: "/politica-privacidade",
  url: "https://tarciso.dev/politica-privacidade",
  title: "Política de Privacidade e Termos de Processamento de Dados",
  lastUpdated: "23 de maio de 2026",
  metaDescription:
    "Política de Privacidade do Tarciso Dev — TARCISO HELI FERREIRA JUNIOR LTDA. Conformidade com LGPD e políticas da Meta.",
} as const

export type PrivacySection =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "steps"; items: string[] }

export type PrivacyBlock = {
  id: string
  title: string
  content: PrivacySection[]
}

export const privacyPolicySections: PrivacyBlock[] = [
  {
    id: "definicoes",
    title: "1. Definições Importantes",
    content: [
      {
        type: "list",
        items: [
          "Aplicativo: Plataforma de software denominada Tarciso Dev, acessível através do domínio principal https://tarciso.dev.",
          "Operador/Controlador: TARCISO HELI FERREIRA JUNIOR LTDA - 49.764.068/0001-36, responsável pelo desenvolvimento, manutenção e governança do aplicativo.",
          "Plataforma Externa: Ecossistema da Meta Platforms, Inc., englobando especificamente os serviços do Facebook Messenger e da Instagram Graph API.",
          "Titular dos Dados: Qualquer pessoa física cujos dados pessoais sejam processados através das integrações de mensageria conectadas.",
        ],
      },
    ],
  },
  {
    id: "escopo",
    title: "2. Escopo da Coleta de Dados e Integração com as APIs da Meta",
    content: [
      {
        type: "paragraph",
        text: "O Tarciso Dev opera de maneira integrada com a infraestrutura técnica da Meta para fornecer serviços de centralização de mensageria comercial.",
      },
      {
        type: "paragraph",
        text: "A coleta e o processamento de dados ocorrem estritamente após a autorização explícita e consciente do usuário através do fluxo oficial de autenticação protocolar segura (Login/OAuth da Meta).",
      },
      {
        type: "paragraph",
        text: "Os dados coletados por meio das APIs da Meta incluem, mas não se limitam a:",
      },
      {
        type: "list",
        items: [
          "Identificadores Únicos de Rede Social: ID de Usuário de Escopo de Página (Page-Scoped ID - PSID) e ID de Usuário do Instagram (Instagram-Scoped ID - IGID).",
          "Dados Públicos de Perfil: Nome público, sobrenome, foto de perfil e idioma de preferência (conforme disponibilizado pelas permissões nativas da Meta).",
          "Conteúdo de Mensageria: Conteúdo textual, mídias (imagens, vídeos, áudios), documentos anexos e metadados de mensagens diretas (DMs) enviadas por terceiros às páginas do Facebook e contas comerciais do Instagram que foram voluntariamente conectadas ao aplicativo.",
        ],
      },
    ],
  },
  {
    id: "finalidade",
    title: "3. Finalidade do Tratamento de Dados",
    content: [
      {
        type: "paragraph",
        text: "O tratamento dos dados pessoais coletados possui finalidade única, legítima e específica:",
      },
      {
        type: "list",
        items: [
          "Centralização e Atendimento ao Cliente (CRM): Permitir que o proprietário da conta gerencie, organize, distribua e responda eficientemente às interações de suporte, vendas e atendimento ao cliente recebidas originalmente no Facebook Messenger e Instagram Direct.",
        ],
      },
      {
        type: "subheading",
        text: "3.1 Cláusula de Não-Compartilhamento e Restrição Comercial",
      },
      {
        type: "paragraph",
        text: "Em total observância às políticas de dados da Meta e ao princípio da finalidade da LGPD, o Tarciso Dev:",
      },
      {
        type: "list",
        items: [
          "NÃO comercializa, vende, aluga ou compartilha dados pessoais de usuários com terceiros.",
          "NÃO utiliza o conteúdo das mensagens ou perfis para fins publicitários, direcionamento de anúncios, campanhas de marketing direcionadas ou ferramentas de retargeting.",
          "NÃO realiza práticas de enriquecimento de perfil (data scraping ou cruzamento ilícito de dados) a partir das informações trafegadas pelas APIs da Meta.",
        ],
      },
    ],
  },
  {
    id: "armazenamento",
    title: "4. Armazenamento, Segurança e Retenção dos Dados",
    content: [
      {
        type: "paragraph",
        text: "A segurança da informação é prioridade na nossa arquitetura de software. Todos os dados coletados e armazenados pelo Tarciso Dev são tratados sob rigorosos padrões técnicos de confidencialidade:",
      },
      {
        type: "list",
        items: [
          "Infraestrutura Segura: Os dados são hospedados e processados em um ambiente de nuvem isolado, utilizando tecnologia de orquestração de containers e servidores altamente protegidos contra acessos não autorizados.",
          "Período de Retenção: Os dados das mensagens são retidos e mantidos sob custódia apenas pelo período estritamente necessário para o cumprimento das finalidades de atendimento e suporte comercial delineadas nesta política, ou até que haja uma solicitação explícita de exclusão por parte do cliente ou do titular dos dados.",
        ],
      },
    ],
  },
  {
    id: "direitos",
    title: "5. Direitos do Titular dos Dados (LGPD)",
    content: [
      {
        type: "paragraph",
        text: "Em conformidade com o artigo 18 da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o titular dos dados possui o direito de obter do Controlador, a qualquer momento e mediante requisição formal:",
      },
      {
        type: "list",
        items: [
          "Confirmação da existência de tratamento de seus dados.",
          "Acesso aos dados armazenados pelo aplicativo.",
          "Correção de dados incompletos, inexatos ou desatualizados.",
          "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.",
          "Revogação do consentimento previamente concedido para o processamento de dados.",
        ],
      },
    ],
  },
  {
    id: "exclusao",
    title: "6. Instruções para Exclusão de Dados de Usuários (User Data Deletion Requests)",
    content: [
      {
        type: "paragraph",
        text: "Alinhado de forma estrita com os critérios de conformidade da Meta Platforms, Inc., o Tarciso Dev fornece um canal automatizado e transparente para que qualquer usuário solicite a exclusão definitiva de seus dados e revogue o acesso do aplicativo às suas informações de perfil.",
      },
      {
        type: "paragraph",
        text: "Para iniciar o processo de exclusão de dados de usuário (User Data Deletion Request), escolha uma das vias oficiais abaixo:",
      },
      {
        type: "subheading",
        text: "Via Canal de Suporte (E-mail)",
      },
      {
        type: "steps",
        items: [
          "Envie uma requisição formal para o e-mail oficial de conformidade: contato@tarciso.dev.",
          'No assunto da mensagem, informe: "Solicitação de Exclusão de Dados de Usuário - Meta/LGPD".',
          "No corpo do e-mail, informe o nome da sua página ou conta e o ID do seu aplicativo.",
          "O nosso time de engenharia de dados processará a requisição e removerá permanentemente todos os registros associados ao seu perfil em até 1.825 dias, enviando uma confirmação jurídica de encerramento.",
        ],
      },
      {
        type: "subheading",
        text: "Via Desvinculação Nativa da Meta",
      },
      {
        type: "paragraph",
        text: "O usuário também pode interromper a coleta de dados de forma autônoma e imediata diretamente pelo painel do Facebook/Instagram:",
      },
      {
        type: "steps",
        items: [
          "Acesse as Configurações e Privacidade de sua conta pessoal/comercial no Facebook.",
          "Navegue até a seção Aplicativos e Sites.",
          "Localize o aplicativo Tarciso Dev e clique em Remover.",
          "Esta ação revoga imediatamente os tokens de acesso gerados por OAuth e notifica o nosso servidor para interromper o fluxo de mensageria em tempo real.",
        ],
      },
    ],
  },
  {
    id: "alteracoes",
    title: "7. Alterações nesta Política de Privacidade",
    content: [
      {
        type: "paragraph",
        text: "Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento para refletir mudanças em nosso aplicativo, evolução nas regulamentações da LGPD ou updates nas diretrizes de desenvolvedores da Meta.",
      },
      {
        type: "paragraph",
        text: "Qualquer alteração material será informada em destaque no nosso site principal ou enviada diretamente aos usuários cadastrados.",
      },
    ],
  },
  {
    id: "contato",
    title: "8. Contato e Encarregado de Proteção de Dados (DPO)",
    content: [
      {
        type: "paragraph",
        text: "Para esclarecer dúvidas, exercer seus direitos como titular de dados ou submeter solicitações referentes a esta política, entre em contato direto com o nosso responsável pela privacidade:",
      },
      {
        type: "list",
        items: [
          `Responsável/Encarregado pelo Tratamento de Dados: ${site.name}`,
          "E-mail de Contato: contato@tarciso.dev",
          "Endereço Web: https://tarciso.dev",
        ],
      },
    ],
  },
]
