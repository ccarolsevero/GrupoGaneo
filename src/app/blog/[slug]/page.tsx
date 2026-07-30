import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { blogPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[58vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep/92 via-navy/78 to-navy/40" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-4xl flex-col justify-end px-5 pb-14 pt-28 lg:px-8">
          <Link
            href="/blog"
            className="mb-4 w-fit text-xs font-bold uppercase tracking-[0.16em] text-cyan"
          >
            Voltar ao blog
          </Link>
          <p className="text-sm font-semibold text-white/70">{post.dateLabel}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="bg-foam px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-mist px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Continue lendo
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-2xl border border-line bg-white p-5 transition hover:border-cyan"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-blue">
                    {item.dateLabel}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Quer aplicar essas dicas no seu projeto?"
        description="Fale com a equipe Ganéo e receba orientação personalizada."
        primaryHref={site.whatsappHref}
        primaryLabel="Falar no WhatsApp"
      />
    </>
  );
}
