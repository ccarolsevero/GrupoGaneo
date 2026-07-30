import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoganeo.com.br"),
  title: {
    default: `${site.name} | Lagos, Piscicultura e Projetos`,
    template: `%s | ${site.name}`,
  },
  description:
    "Grupo Ganéo oferece construção de lagos, piscicultura, terraplenagem, engenharia e consultoria desde 1987. Atendimento em todo o Brasil.",
  openGraph: {
    title: site.name,
    description:
      "Soluções aquáticas desde 1987: lagos, piscicultura, terraplenagem e projetos.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo-ganeo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
