import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/lagos", label: "Construção de Lagos" },
  { href: "/servicos/piscicultura", label: "Piscicultura" },
  { href: "/servicos/terraplenagem", label: "Terraplenagem" },
  { href: "/servicos/engenharia", label: "Engenharia" },
  { href: "/servicos/projetos", label: "Projetos" },
  { href: "/servicos/consultoria", label: "Consultoria" },
  { href: "/especies", label: "Espécies" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex">
            <Image
              src="/logo-ganeo-white.png"
              alt={site.name}
              width={220}
              height={72}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            Atuando desde {site.founded} com soluções em piscicultura,
            terraplenagem, engenharia e construção de lagos em todo o Brasil.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-cyan-soft">
            Navegação
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-cyan-soft">
            Contato
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-cyan">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cyan">
                {site.email}
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">{site.address}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:border-cyan hover:text-cyan"
            >
              Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:border-cyan hover:text-cyan"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-5 text-center text-xs text-white/50 lg:px-8">
        Copyright © {new Date().getFullYear()} {site.name}. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
