import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { photos, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-svh overflow-hidden">
        <Image
          src={photos.hero}
          alt="Lago construído pelo Grupo Ganéo"
          fill
          priority
          className="object-cover object-[center_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep/90 via-navy/65 to-navy/20" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep/60 via-transparent to-navy-deep/35" />
        <div className="ripple absolute inset-0" />

        <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 pb-12 pt-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="animate-rise inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan backdrop-blur-sm">
              Soluções aquáticas desde {site.founded}
            </p>
            <h1 className="animate-rise-delay-1 mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-7xl">
              Transformamos terrenos em projetos que ganham vida
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Construção de lagos, piscicultura e projetos aquáticos com
              engenharia, terraplenagem e consultoria completa.
            </p>
            <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/lagos"
                className="rounded-full bg-cyan px-7 py-3.5 text-sm font-bold text-navy-deep shadow-[0_10px_30px_rgba(46,182,232,0.25)] transition hover:bg-cyan-soft"
              >
                Conheça nossos lagos
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Fale com nossa equipe
              </a>
            </div>
          </div>

          <div className="animate-rise-delay-3 absolute bottom-7 left-5 hidden items-center gap-8 text-white/70 sm:flex lg:left-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">
              Engenharia
            </p>
            <span className="h-1 w-1 rounded-full bg-cyan" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">
              Terraplenagem
            </p>
            <span className="h-1 w-1 rounded-full bg-cyan" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">
              Piscicultura
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Sobre nós
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
              Soluções aquáticas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A Ganéo Projetos reúne infraestrutura, consultoria especializada e
              engenharia para transformar o seu sonho em um lago ou
              piscicultura completa, com documentação, segurança de solo e
              peixes de qualidade.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Atuamos em todo o Brasil com terraplenagem, projetos, legalização
              e manejo executado por equipe especializada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="font-display text-4xl font-semibold text-cyan">
                {new Date().getFullYear() - site.founded}+
              </p>
              <p className="mt-2 text-sm text-white/75">Anos de experiência</p>
            </div>
            <div className="rounded-2xl bg-mist p-6">
              <p className="font-display text-4xl font-semibold text-navy">BR</p>
              <p className="mt-2 text-sm text-muted">Atendimento nacional</p>
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <Image
                src={photos.casaLago}
                alt="Projeto aquático Ganéo"
                width={900}
                height={420}
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Nossos serviços
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy md:text-5xl">
            Veja nossas soluções
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Piscicultura, terraplenagem, engenharia, projetos e construção de
            lagos. Clique para conhecer.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={560}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] bg-navy-deep lg:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image
              src={photos.lagoPraia}
              alt="Construção de lago Grupo Ganéo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              Construção | lago
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
              Projetos que ganham vida
            </h2>
            <p className="mt-4 text-white/75">
              Do projeto à soltura das espécies. Conheça obras reais de lagos de lazer,
              ornamentais e comerciais.
            </p>
            <Link
              href="/lagos"
              className="mt-8 inline-flex w-fit rounded-full bg-cyan px-6 py-3 text-sm font-bold text-navy-deep"
            >
              Quero um lago assim
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Pronto para começar seu projeto?"
        description="Fale com nossa equipe e receba orientação técnica do primeiro esboço à entrega."
      />
    </>
  );
}
