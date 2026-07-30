import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consultoria",
  description:
    "Consultoria técnica e legalização para tanques e lagos. Correção de problemas, adequação ambiental e documentação. Grupo Ganéo.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Consultoria e legalização"
      title="Consultoria técnica para o seu lago ou criatório"
      description="Assessoria especializada para correção de problemas, adequação do ambiente, tratamento de doenças e documentação do projeto."
      heroImage={photos.lagoArvore}
      aboutTitle="Tranquilidade técnica e legal para o seu projeto"
      aboutText={[
        "Prestamos assessoria técnica para correção de problemas com tanques e lagos, além de soluções para adequação do ambiente de forma ideal, como em situações de baixas temperaturas.",
        "Também oferecemos suporte para tratamento de doenças, reduzindo perdas no plantel, e orientação para que a documentação do tanque ou lago esteja dentro das especificações exigidas.",
        "Com a consultoria Ganéo, você encontra em uma só empresa a segurança de quem entende de água, peixe, solo e projeto.",
      ]}
      aboutImage={photos.lago}
      featuresTitle="Quando a consultoria faz sentido"
      features={[
        {
          title: "Problemas no lago ou tanque",
          text: "Diagnóstico e orientação para corrigir falhas de estrutura, água ou manejo.",
        },
        {
          title: "Adequação ambiental",
          text: "Ajustes para melhorar o ambiente de criação e a estabilidade do sistema.",
        },
        {
          title: "Saúde do plantel",
          text: "Suporte para prevenção e tratamento de doenças, evitando perdas.",
        },
        {
          title: "Legalização",
          text: "Orientação para documentação e conformidade do projeto aquático.",
        },
        {
          title: "Melhoria de desempenho",
          text: "Recomendações práticas para otimizar a operação do seu criatório.",
        },
        {
          title: "Acompanhamento especializado",
          text: "Atendimento personalizado conforme a realidade e a urgência do seu caso.",
        },
      ]}
      stepsTitle="Como funciona a consultoria"
      steps={[
        {
          title: "Conversa inicial",
          text: "Entendemos o histórico do lago, os sintomas e o resultado esperado.",
        },
        {
          title: "Diagnóstico",
          text: "Avaliamos causas técnicas, ambientais e operacionais do problema.",
        },
        {
          title: "Plano de ação",
          text: "Indicamos correções, adequações e próximos passos com clareza.",
        },
        {
          title: "Acompanhamento",
          text: "Seguimos próximos para ajustar a solução e proteger o seu investimento.",
        },
      ]}
      gallery={[
        photos.lagoArvore,
        photos.lago,
        photos.tanques,
        photos.projeto2,
        photos.projeto3,
        photos.casaLago,
      ]}
      ctaTitle="Precisa de consultoria para o seu lago?"
      ctaDescription="Fale com um especialista Ganéo e receba orientação para corrigir problemas, legalizar ou melhorar o seu projeto."
      whatsappMessage="Olá! Quero agendar uma consultoria técnica para meu lago ou tanque."
    />
  );
}
