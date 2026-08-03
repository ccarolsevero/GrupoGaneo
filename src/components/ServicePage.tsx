import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

type Feature = { title: string; text: string };
type Step = { title: string; text: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  aboutTitle: string;
  aboutText: string[];
  aboutImage: string;
  featuresTitle: string;
  features: Feature[];
  stepsTitle: string;
  steps: Step[];
  gallery: string[];
  ctaTitle: string;
  ctaDescription: string;
  whatsappMessage: string;
};

export function ServicePage({
  eyebrow,
  title,
  description,
  heroImage,
  aboutTitle,
  aboutText,
  aboutImage,
  featuresTitle,
  features,
  stepsTitle,
  steps,
  gallery,
  ctaTitle,
  ctaDescription,
  whatsappMessage,
}: Props) {
  const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <section className="relative min-h-svh overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep/92 via-navy/75 to-navy/35" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep/55 via-transparent to-navy-deep/30" />

        <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 pb-14 pt-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="animate-rise inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan backdrop-blur-sm">
              {eyebrow}
            </p>
            <h1 className="animate-rise-delay-1 mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {description}
            </p>
            <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-7 py-3.5 text-sm"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M20.5 3.5A11.9 11.9 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.4Zm-8.43 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Fale com um Especialista
              </a>
              <Link
                href="/contato"
                className="rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Página de contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Sobre o serviço
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              {aboutTitle}
            </h2>
            {aboutText.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={aboutImage}
              alt={aboutTitle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Diferenciais
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy md:text-4xl">
            {featuresTitle}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(6,26,54,0.05)]"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-cyan" />
                <h3 className="font-display text-xl font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="water-mesh ripple px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
            Como funciona
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white md:text-4xl">
            {stepsTitle}
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
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
            Nosso trabalho
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            Projetos e estruturas reais
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`${title} Grupo Ganéo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={ctaTitle} description={ctaDescription} />
    </>
  );
}
