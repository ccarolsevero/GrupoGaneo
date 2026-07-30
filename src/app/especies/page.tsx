import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { especiesAguaDoce, especiesOrnamentais } from "@/lib/especies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Espécies de peixes",
  description:
    "Conheça as espécies de peixes de água doce e ornamentais do Grupo Ganéo. Genética de qualidade para o mercado brasileiro.",
};

function SpeciesGrid({
  items,
}: {
  items: readonly { name: string; image: string }[];
}) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((especie) => (
        <article
          key={especie.name}
          className="group overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_rgba(6,26,54,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,26,54,0.12)]"
        >
          <div className="relative aspect-[3/2] overflow-hidden bg-mist">
            <Image
              src={especie.image}
              alt={especie.name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            />
          </div>
          <div className="px-4 py-4">
            <h3 className="font-display text-base font-semibold uppercase tracking-wide text-navy">
              {especie.name}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function EspeciesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="water-mesh ripple flex min-h-[55vh] items-center px-5 pb-16 pt-32 lg:px-8">
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              Conheça nossas
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-white md:text-6xl">
              Espécies de peixes
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Estamos há anos no ramo melhorando cada vez mais nossas genéticas
              e fornecendo peixes de alta qualidade para o mercado brasileiro.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Água doce
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            Peixes de água doce
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Espécies selecionadas para criação comercial, povoamento de lagos e
            projetos de piscicultura.
          </p>
          <SpeciesGrid items={especiesAguaDoce} />
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Variedade
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            Peixes ornamentais
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Os peixes ornamentais são peixes de aquário, bonitos e bem
            coloridos. São espécies que ornam o ambiente, tornando-o mais
            harmônico, bonito e aconchegante.
          </p>
          <SpeciesGrid items={especiesOrnamentais} />
        </div>
      </section>

      <CtaBand
        title="Encontre as espécies ideais para o seu projeto"
        description="Nossa equipe ajuda você a escolher os peixes mais adequados para o seu lago, aquário ou criação."
        primaryHref={site.whatsappHref}
        primaryLabel="Falar com um especialista"
        secondaryHref="/contato"
        secondaryLabel="Página de contato"
      />
    </>
  );
}
