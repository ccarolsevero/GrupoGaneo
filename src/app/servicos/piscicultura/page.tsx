import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Piscicultura",
  description:
    "Piscicultura completa com laboratório próprio, alevinos, juvenis, adultos, manejo, despesca e transporte. Grupo Ganéo desde 1987.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Soluções em piscicultura"
      title="Piscicultura com qualidade do laboratório à entrega"
      description="Criação de peixes de água doce em ambiente controlado, para uso comercial ou lazer, com manejo técnico em todas as etapas."
      heroImage={photos.tanques}
      aboutTitle="Mais de 30 anos cuidando do plantel"
      aboutText={[
        "A piscicultura consiste na criação de peixes, geralmente de água doce, em ambiente controlado. É um segmento que pode ser explorado tanto do ponto de vista comercial quanto para lazer.",
        "A Ganéo Piscicultura traz o conhecimento e a estrutura de uma empresa que já atua há décadas nessa área, com excelência de ponta a ponta da produção. Desde os alevinos reproduzidos em laboratório próprio até a compra e venda de peixes juvenis e adultos.",
        "A despesca, o manejo e o transporte são feitos de forma precisa e técnica, garantindo a qualidade dos peixes até a entrega no seu projeto.",
      ]}
      aboutImage={photos.criadouro}
      featuresTitle="O que oferecemos na piscicultura"
      features={[
        {
          title: "Laboratório próprio",
          text: "Reprodução de alevinos com genética selecionada e acompanhamento técnico desde o início.",
        },
        {
          title: "Alevinos, juvenis e adultos",
          text: "Comercialização completa para povoamento de lagos, tanques e projetos comerciais.",
        },
        {
          title: "Manejo especializado",
          text: "Equipe preparada para despesca, transporte e cuidados que preservam a qualidade do peixe.",
        },
        {
          title: "Uso comercial ou lazer",
          text: "Soluções para criatórios produtivos e também para lagos ornamentais e de convivência.",
        },
        {
          title: "Assessoria técnica",
          text: "Orientação para adequação do ambiente, prevenção de perdas e melhor desempenho do plantel.",
        },
        {
          title: "Entrega com segurança",
          text: "Transporte executado por equipe especializada para manter a qualidade até o destino.",
        },
      ]}
      stepsTitle="Do pedido à soltura no seu lago"
      steps={[
        {
          title: "Entendimento do projeto",
          text: "Avaliamos o objetivo, o tamanho do lago e as espécies mais adequadas.",
        },
        {
          title: "Seleção das espécies",
          text: "Indicamos peixes de água doce ou ornamentais conforme o uso desejado.",
        },
        {
          title: "Manejo e preparação",
          text: "Organizamos a despesca, o acondicionamento e o transporte com cuidado técnico.",
        },
        {
          title: "Entrega e orientação",
          text: "Realizamos a entrega e orientamos sobre o povoamento e os cuidados iniciais.",
        },
      ]}
      gallery={[
        photos.tanques,
        photos.criadouro,
        photos.lago,
        photos.projeto4,
        photos.projeto5,
        photos.lagoArvore,
      ]}
      ctaTitle="Quer povoar seu lago ou iniciar uma criação?"
      ctaDescription="Fale com nossa equipe e receba orientação sobre espécies, quantidades e o melhor caminho para o seu projeto."
      whatsappMessage="Olá! Quero falar sobre piscicultura e espécies de peixes."
    />
  );
}
