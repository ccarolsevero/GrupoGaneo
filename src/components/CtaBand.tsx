import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  description,
  primaryHref = site.whatsappHref,
  primaryLabel = "Falar no WhatsApp",
  secondaryHref = "/contato",
  secondaryLabel = "Página de contato",
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="water-mesh ripple px-5 py-16 lg:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base leading-relaxed text-white/80">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={primaryHref}
              target={primaryHref.startsWith("http") ? "_blank" : undefined}
              rel={
                primaryHref.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rounded-full bg-cyan px-6 py-3.5 text-sm font-bold text-navy-deep transition hover:bg-cyan-soft"
            >
              {primaryLabel}
            </a>
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
