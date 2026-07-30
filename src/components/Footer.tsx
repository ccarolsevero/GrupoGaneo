import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Image
          src="/logo-ganeo-white.png"
          alt={site.name}
          width={180}
          height={60}
          className="h-10 w-auto object-contain"
        />

        <div className="flex flex-col gap-2 text-sm text-white/75 sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={site.phoneHref}
              className="font-semibold text-white transition hover:text-cyan"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition hover:text-cyan"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs text-white/50">{site.address}</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-3 text-center text-xs text-white/40 lg:px-8">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
