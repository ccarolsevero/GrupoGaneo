import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:py-8 lg:px-8">
        <Image
          src="/logo-ganeo-white.png"
          alt={site.name}
          width={180}
          height={60}
          className="h-8 w-auto object-contain sm:h-10"
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Enviar e-mail"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-cyan hover:bg-cyan hover:text-navy-deep sm:h-10 sm:w-10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
              aria-hidden
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-cyan hover:bg-cyan hover:text-navy-deep sm:h-10 sm:w-10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
            </svg>
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#1ebe57] sm:h-10 sm:w-10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M20.5 3.5A11.9 11.9 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.33-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.4Zm-8.43 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-3 text-center text-xs text-white/40 lg:px-8">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
