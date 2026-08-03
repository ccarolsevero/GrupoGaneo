import type { Metadata } from "next";
import Image from "next/image";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Construção de Lagos",
  description:
    "Construção de lagos de lazer, ornamentais e comerciais. Projeto, terraplenagem, engenharia e peixes. Grupo Ganéo desde 1987.",
  keywords: [
    "construção de lagos",
    "lago ornamental",
    "lago de lazer",
    "tanque de peixes",
    "terraplenagem para lago",
    "Grupo Ganéo",
  ],
};

const steps = [
  {
    title: "Visita e diagnóstico",
    text: "Avaliamos o terreno, o uso desejado e as condições técnicas do local.",
  },
  {
    title: "Projeto e legalização",
    text: "Desenhamos o lago e orientamos a documentação exigida.",
  },
  {
    title: "Terraplenagem e obra",
    text: "Executamos a movimentação de solo e a construção com segurança.",
  },
  {
    title: "Povoamento e entrega",
    text: "Soltura de peixes, manejo e acompanhamento para o lago ficar pronto.",
  },
];

const types = [
  {
    title: "Lagos de lazer",
    text: "Para sítios e residências, com beleza, tranquilidade e área de convivência.",
    image: photos.lagoPraia,
  },
  {
    title: "Lagos ornamentais",
    text: "Composição estética com peixes ornamentais e paisagismo aquático.",
    image: photos.casaLago,
  },
  {
    title: "Lagos comerciais",
    text: "Estruturas para piscicultura e produção com foco em resultado.",
    image: photos.tanques,
  },
];

const faqs = [
  {
    q: "Vocês atendem só em São Paulo?",
    a: "Não. Atendemos projetos em todo o Brasil, com base em Santa Cruz da Conceição/SP.",
  },
  {
    q: "O orçamento inclui peixes?",
    a: "Podemos incluir alevinos, juvenis ou adultos do nosso laboratório, conforme o projeto.",
  },
  {
    q: "Fazem a parte legal do lago?",
    a: "Sim. Orientamos e apoiamos a documentação necessária para o tanque ou lago.",
  },
];

const gallery = [
  photos.lago,
  photos.lagoArvore,
  photos.lagoPraia,
  photos.casaLago,
  photos.criadouro,
  photos.lagoAereo,
];

export default function LagosPage() {
  return (
    <>
      <section className="relative min-h-svh overflow-hidden">
        <Image
          src={photos.lagoPraia}
          alt="Construção de lago Grupo Ganéo"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep/92 via-navy/78 to-navy/40" />

        <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 pb-16 pt-28 lg:px-8">
          <p className="animate-rise text-xs font-bold uppercase tracking-[0.2em] text-cyan">
            Construção de lagos
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            Construção de lagos com projeto, obra e peixes
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-lg text-white/85">
            Do terreno à água pronta: engenharia, terraplenagem e piscicultura
            em uma só empresa, desde {site.founded}.
          </p>
          <div className="animate-rise-delay-3 mt-8">
            <a
              href={`${site.whatsappHref}?text=${encodeURIComponent("Olá! Quero falar com um especialista sobre construção de lago.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-7 py-3.5 text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden
              >
                <path d="M20.5 3.5A11.9 11.9 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.4Zm-8.43 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Fale com um Especialista
            </a>
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            "Projeto técnico sob medida",
            "Terraplenagem segura",
            "Peixes e manejo especializado",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-line bg-white px-6 py-7"
            >
              <div className="mb-4 h-2 w-10 rounded-full bg-cyan" />
              <p className="font-display text-xl font-semibold text-navy">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Tipos de projeto
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Qual lago você quer construir?
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {types.map((type) => (
              <article
                key={type.title}
                className="overflow-hidden rounded-2xl bg-mist"
              >
                <Image
                  src={type.image}
                  alt={type.title}
                  width={700}
                  height={420}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {type.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Portfólio
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            Obras reais do Grupo Ganéo
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Projeto Grupo Ganéo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="water-mesh ripple px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
            Como funciona
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white md:text-5xl">
            Do primeiro contato à entrega do lago
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="glass rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold text-cyan">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              Tudo para decidir com segurança
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-line bg-white px-5 py-4"
                >
                  <summary className="cursor-pointer list-none font-display text-lg font-semibold text-navy">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h3 className="font-display text-2xl font-semibold">
              Fale com um especialista
            </h3>
            <p className="mt-3 text-white/75">
              Atendimento rápido pelo WhatsApp para orçamentos de construção de
              lagos.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 block font-display text-2xl font-semibold text-cyan"
            >
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-white/60">{site.address}</p>
            <a
              href={`${site.whatsappHref}?text=${encodeURIComponent("Olá! Quero orçamento para construção de lago.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 px-6 py-3.5 text-sm"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
