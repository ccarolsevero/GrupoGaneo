import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dicas de pesca, alimentação, alevinos e cuidados com peixes no blog do Grupo Ganéo.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="water-mesh ripple flex min-h-[55vh] items-center px-5 pb-16 pt-32 lg:px-8">
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              Conteúdo e dicas
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-white md:text-6xl">
              Blog
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Orientações práticas sobre pesca, alimentação, alevinos e saúde
              dos peixes para quem cuida de lagos e criatórios.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_12px_40px_rgba(6,26,54,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(6,26,54,0.12)]"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                    {post.dateLabel}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold text-navy transition group-hover:text-blue">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-bold text-blue">
                    Saiba mais
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Tem dúvidas sobre o seu lago ou plantel?"
        description="Nossa equipe ajuda com orientação técnica e as melhores práticas para o seu projeto."
        primaryHref={site.whatsappHref}
        primaryLabel="Falar com um especialista"
      />
    </>
  );
}
