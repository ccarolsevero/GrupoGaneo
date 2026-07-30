import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engenharia",
  description:
    "Engenharia para projetos de lagos, tanques e piscicultura com análises técnicas, segurança e conformidade. Grupo Ganéo.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Soluções em engenharia"
      title="Engenharia para projetos aquáticos com segurança e resultado"
      description="Recursos técnicos, análises e acompanhamento para que o seu lago ou criação de peixes seja viável, seguro e bem executado."
      heroImage={photos.lagoAereo}
      aboutTitle="Técnica a serviço do seu projeto"
      aboutText={[
        "Nossa engenharia disponibiliza os melhores recursos e análises para que você alcance êxito na criação de peixes ou na construção do seu lago. Do estudo do terreno às decisões de execução, cada etapa é pensada para reduzir risco e aumentar a qualidade da obra.",
        "Trabalhamos com visão integrada: solo, água, estrutura, uso previsto e documentação necessária. Assim, o projeto deixa de ser apenas uma ideia e vira uma solução técnica completa.",
        "Seja para lazer, ornamental ou produção comercial, a engenharia Ganéo organiza o caminho entre o sonho e a entrega.",
      ]}
      aboutImage={photos.casaLago}
      featuresTitle="O que a engenharia Ganéo entrega"
      features={[
        {
          title: "Análise técnica do local",
          text: "Avaliação das condições do terreno, do entorno e das possibilidades reais do projeto.",
        },
        {
          title: "Dimensionamento correto",
          text: "Definição de profundidades, volumes e estruturas adequadas ao uso desejado.",
        },
        {
          title: "Segurança estrutural",
          text: "Atenção a taludes, contenções, drenagens e pontos críticos da obra.",
        },
        {
          title: "Integração com a obra",
          text: "A engenharia caminha junto com terraplenagem, projetos e execução.",
        },
        {
          title: "Orientação normativa",
          text: "Suporte para que o lago ou tanque avance dentro das exigências técnicas e legais.",
        },
        {
          title: "Foco em resultado",
          text: "Projetos pensados para funcionar no dia a dia, com manutenção e operação mais simples.",
        },
      ]}
      stepsTitle="Do estudo técnico à execução"
      steps={[
        {
          title: "Diagnóstico",
          text: "Levantamos informações do terreno, do objetivo e das restrições do projeto.",
        },
        {
          title: "Estudo e diretrizes",
          text: "Definimos critérios técnicos para forma, profundidade, estrutura e segurança.",
        },
        {
          title: "Acompanhamento",
          text: "Orientamos as decisões de obra para manter a qualidade do projeto.",
        },
        {
          title: "Validação final",
          text: "Conferimos se a execução está alinhada ao planejamento técnico.",
        },
      ]}
      gallery={[
        photos.lagoAereo,
        photos.casaLago,
        photos.lagoPraia,
        photos.projeto3,
        photos.projeto6,
        photos.criadouro,
      ]}
      ctaTitle="Quer engenharia no seu projeto aquático?"
      ctaDescription="Converse com nossa equipe e receba orientação técnica para construir com mais segurança e previsibilidade."
      whatsappMessage="Olá! Quero falar com a engenharia sobre um projeto de lago."
    />
  );
}
