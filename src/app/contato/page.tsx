import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Grupo Ganéo para orçamentos de lagos, piscicultura, terraplenagem, engenharia e consultoria.",
};

const topics = [
  "Construção de lagos",
  "Piscicultura e espécies",
  "Terraplenagem",
  "Engenharia e projetos",
  "Consultoria e legalização",
];

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={photos.lagoAereo}
            alt="Contato Grupo Ganéo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
            Preencha seus dados
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-white md:text-6xl">
            Contato
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Conte para nossa equipe o que você precisa. Atendemos projetos de
            lazer, ornamentais e comerciais em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-navy p-8 text-white">
              <h2 className="font-display text-2xl font-semibold">
                Fale com o Grupo Ganéo
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Atendimento rápido por WhatsApp, telefone ou formulário. Nossa
                equipe ajuda desde o primeiro contato até a entrega do projeto.
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">
                    WhatsApp / Telefone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block font-display text-2xl font-semibold text-white hover:text-cyan"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block font-semibold text-white hover:text-cyan"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">
                    Endereço
                  </p>
                  <p className="mt-1 max-w-sm leading-relaxed text-white/80">
                    {site.address}
                  </p>
                </li>
              </ul>

              <a
                href={`${site.whatsappHref}?text=${encodeURIComponent("Olá! Gostaria de falar com o Grupo Ganéo.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1ebe57]"
              >
                Abrir WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-white p-8">
              <h3 className="font-display text-xl font-semibold text-navy">
                Podemos ajudar com
              </h3>
              <ul className="mt-5 space-y-3">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-2 w-2 rounded-full bg-cyan" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm interest="Contato pelo site" />
        </div>
      </section>
    </>
  );
}
