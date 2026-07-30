import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terraplenagem",
  description:
    "Terraplenagem para lagos, tanques e barramentos com segurança de solo e precisão técnica. Grupo Ganéo.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Soluções em terraplenagem"
      title="Terraplenagem segura para lagos, tanques e barramentos"
      description="Movimentação de solo com planejamento técnico para que a estrutura do seu projeto aquático seja sólida, estável e durável."
      heroImage={photos.criadouro}
      aboutTitle="Base sólida antes da água chegar"
      aboutText={[
        "Prestamos serviços de terraplenagem para que você não seja surpreendido por problemas com o solo. Em projetos de lago, tanque ou barramento, a preparação do terreno é tão importante quanto o projeto hidráulico.",
        "Nossa equipe trabalha com análise do local, movimentação controlada e acabamento adequado para receber a água com segurança, evitando erosão, infiltração inadequada e riscos estruturais.",
        "Seja para um lago de lazer, um criatório comercial ou uma estrutura maior, a terraplenagem bem executada é o primeiro passo para um projeto que realmente funciona.",
      ]}
      aboutImage={photos.lagoAereo}
      featuresTitle="Por que a terraplenagem faz diferença"
      features={[
        {
          title: "Segurança do solo",
          text: "Reduz riscos de deslizamento, erosão e falhas estruturais no entorno do lago.",
        },
        {
          title: "Preparação para impermeabilização",
          text: "O terreno fica pronto para receber revestimentos, geomembranas e acabamentos.",
        },
        {
          title: "Nivelamento preciso",
          text: "Controles de cota e volume ajudam o lago a atingir a forma e a profundidade ideais.",
        },
        {
          title: "Barramentos e taludes",
          text: "Execução cuidadosa de áreas de contenção e estabilização do terreno.",
        },
        {
          title: "Integração com o projeto",
          text: "Trabalhamos alinhados à engenharia e ao desenho do lago ou tanque.",
        },
        {
          title: "Menos surpresas na obra",
          text: "Planejamento prévio evita retrabalho e custos extras durante a construção.",
        },
      ]}
      stepsTitle="Como conduzimos a terraplenagem"
      steps={[
        {
          title: "Análise do terreno",
          text: "Visitamos o local e avaliamos solo, topografia e condições de acesso.",
        },
        {
          title: "Planejamento da obra",
          text: "Definimos cortes, aterros, volumes e a sequência de execução.",
        },
        {
          title: "Movimentação de solo",
          text: "Executamos a terraplenagem com acompanhamento técnico e segurança.",
        },
        {
          title: "Acabamento estrutural",
          text: "Preparamos a base para a próxima etapa do lago ou tanque.",
        },
      ]}
      gallery={[
        photos.criadouro,
        photos.lagoAereo,
        photos.projeto1,
        photos.projeto2,
        photos.lagoPraia,
        photos.tanques,
      ]}
      ctaTitle="Precisa preparar o terreno do seu lago?"
      ctaDescription="Fale com a equipe Ganéo e receba orientação técnica para terraplenagem de lagos, tanques e barramentos."
      whatsappMessage="Olá! Quero orçamento de terraplenagem para lago ou tanque."
    />
  );
}
