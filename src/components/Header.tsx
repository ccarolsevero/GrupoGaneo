"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const solid = scrolled || compact || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-line bg-foam/95 shadow-[0_8px_30px_rgba(6,26,54,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link
          href="/"
          className="relative z-10 shrink-0"
          aria-label={site.name}
        >
          <Image
            src={solid ? "/logo-ganeo.png" : "/logo-ganeo-white.png"}
            alt={site.name}
            width={220}
            height={72}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                    solid
                      ? "text-navy hover:bg-mist"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
                <div
                  className={`absolute left-0 top-full min-w-56 pt-2 transition ${
                    servicesOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-line bg-white py-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-ink hover:bg-mist hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  solid
                    ? "text-navy hover:bg-mist"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-cyan px-4 py-2.5 text-sm font-bold text-navy-deep transition hover:bg-cyan-soft sm:inline-flex"
          >
            Orçamento WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              solid
                ? "border-line text-navy"
                : "border-white/25 text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full rounded bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full rounded bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-foam px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="py-1">
                  <p className="px-2 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-2 py-2.5 text-base font-semibold text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2.5 text-base font-semibold text-navy"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-bold text-white"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
