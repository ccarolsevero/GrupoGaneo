import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos para piscicultura, lagos de lazer, ornamentais residenciais e fins comerciais. Grupo Ganéo.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Soluções em projetos"
      title="Projetos sob medida para lagos, tanques e piscicultura"
      description="Do esboço à orientação técnica completa, desenvolvemos projetos para lazer, ornamentação residencial ou produção comercial."
      heroImage={photos.casaLago}
      aboutTitle="Seu sonho com orientação técnica"
      aboutText={[
        "Independente do tamanho do seu sonho ou da dificuldade do terreno, a Ganéo Projetos está pronta para prestar assistência técnica e consultoria em ambientes aquáticos.",
        "Apresentamos projetos com as orientações necessárias, seja na montagem de uma piscicultura, um lago para lazer, um espaço ornamental para a residência ou uma estrutura com fins comerciais.",
        "Se você já tem um lago, tanque ou criatório e enfrenta problemas, também pode contar com consultoria personalizada na busca da melhor solução.",
      ]}
      aboutImage={photos.lagoPraia}
      featuresTitle="Tipos de projeto que desenvolvemos"
      features={[
        {
          title: "Lagos de lazer",
          text: "Projetos pensados para convivência, paisagem e qualidade de vida no sítio ou residência.",
        },
        {
          title: "Lagos ornamentais",
          text: "Composições estéticas com peixes, vegetação e harmonia visual para o ambiente.",
        },
        {
          title: "Piscicultura comercial",
          text: "Estruturas voltadas à produção, com lógica operacional e eficiência.",
        },
        {
          title: "Adequação de projetos existentes",
          text: "Revisão de lagos e tanques que precisam de correção, ampliação ou melhoria.",
        },
        {
          title: "Orientação completa",
          text: "Diretrizes técnicas que apoiam terraplenagem, engenharia e povoamento.",
        },
        {
          title: "Acompanhamento sob medida",
          text: "Atendimento personalizado conforme o tamanho e a complexidade do projeto.",
        },
      ]}
      stepsTitle="Como nasce um projeto Ganéo"
      steps={[
        {
          title: "Briefing",
          text: "Entendemos o uso desejado, o estilo e as condições do local.",
        },
        {
          title: "Concepção",
          text: "Desenhamos a proposta técnica e visual do lago ou estrutura aquática.",
        },
        {
          title: "Detalhamento",
          text: "Organizamos orientações para execução, segurança e próximos passos.",
        },
        {
          title: "Apoio à obra",
          text: "Seguimos disponíveis para tirar dúvidas e ajustar decisões durante a construção.",
        },
      ]}
      gallery={[
        photos.casaLago,
        photos.lagoPraia,
        photos.lagoArvore,
        photos.projeto7,
        photos.projeto8,
        photos.lago,
      ]}
      ctaTitle="Quer transformar sua ideia em projeto?"
      ctaDescription="Fale conosco e receba uma proposta alinhada ao seu terreno, ao seu orçamento e ao resultado que você deseja."
      whatsappMessage="Olá! Quero solicitar um projeto de lago ou piscicultura."
    />
  );
}
