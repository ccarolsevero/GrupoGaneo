export const site = {
  name: "Grupo Ganéo",
  legalName: "Ganéo Projetos e Piscicultura",
  tagline: "Soluções aquáticas desde 1987",
  phone: "(19) 97166-6616",
  phoneHref: "tel:+5519971666616",
  whatsapp: "5519971666616",
  whatsappHref: "https://wa.me/5519971666616",
  email: "contato@grupoganeo.com.br",
  address: "Sítio Estância Maria, Rural, Santa Cruz da Conceição/SP, 13625-000",
  instagram: "https://www.instagram.com/ganeoprojetos/",
  facebook: "https://www.facebook.com/ganeoprojetos",
  youtube: "https://www.youtube.com/channel/UCWlfmpUjEvmSOdvC0IegqDw",
  founded: 1987,
} as const;

export const photos = {
  hero: "/media/fotos/lago-aereo.jpg",
  lagoAereo: "/media/fotos/lago-aereo.jpg",
  lago: "/media/fotos/lago-01.jpg",
  lagoArvore: "/media/fotos/lago-02.jpg",
  lagoPraia: "/media/fotos/lago-praia.jpg",
  casaLago: "/media/fotos/casa-lago.jpg",
  criadouro: "/media/fotos/criadouro-aereo.jpg",
  tanques: "/media/fotos/tanques-rede.jpg",
  projeto1: "/media/fotos/projeto-01.jpg",
  projeto2: "/media/fotos/projeto-02.jpg",
  projeto3: "/media/fotos/projeto-03.jpg",
  projeto4: "/media/fotos/projeto-04.jpg",
  projeto5: "/media/fotos/projeto-05.jpg",
  projeto6: "/media/fotos/projeto-06.jpg",
  projeto7: "/media/fotos/projeto-07.jpg",
  projeto8: "/media/fotos/projeto-08.jpg",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/servicos/piscicultura",
    label: "Serviços",
    children: [
      { href: "/lagos", label: "Construção de Lagos" },
      { href: "/servicos/piscicultura", label: "Piscicultura" },
      { href: "/servicos/terraplenagem", label: "Terraplenagem" },
      { href: "/servicos/engenharia", label: "Engenharia" },
      { href: "/servicos/projetos", label: "Projetos" },
      { href: "/servicos/consultoria", label: "Consultoria" },
    ],
  },
  { href: "/especies", label: "Espécies" },
  { href: "/contato", label: "Contato" },
] as const;

export const services = [
  {
    href: "/lagos",
    title: "Construção de Lagos",
    description:
      "Lagos de lazer, ornamentais e comerciais, do projeto à soltura dos peixes.",
    image: photos.lagoPraia,
  },
  {
    href: "/servicos/piscicultura",
    title: "Piscicultura",
    description:
      "Alevinos, juvenis e adultos produzidos em laboratório próprio, com manejo especializado.",
    image: photos.tanques,
  },
  {
    href: "/servicos/terraplenagem",
    title: "Terraplenagem",
    description:
      "Movimentação de solo segura para lagos, tanques e barramentos.",
    image: photos.criadouro,
  },
  {
    href: "/servicos/engenharia",
    title: "Engenharia",
    description:
      "Análises e recursos técnicos para o êxito da sua criação ou lago de lazer.",
    image: photos.lagoAereo,
  },
  {
    href: "/servicos/projetos",
    title: "Projetos",
    description:
      "Projetos sob medida para piscicultura, lazer e ambientes ornamentais.",
    image: photos.casaLago,
  },
  {
    href: "/servicos/consultoria",
    title: "Consultoria",
    description:
      "Assessoria técnica, legalização e correção de problemas em tanques e lagos.",
    image: photos.lagoArvore,
  },
] as const;
