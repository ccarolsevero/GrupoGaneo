"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type ContactFormProps = {
  interest?: string;
  compact?: boolean;
};

export function ContactForm({
  interest = "Orçamento geral",
  compact = false,
}: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "");
    const telefone = String(data.get("telefone") || "");
    const email = String(data.get("email") || "");
    const mensagem = String(data.get("mensagem") || "");

    const text = [
      `Olá, Grupo Ganéo!`,
      `Interesse: ${interest}`,
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      email ? `E-mail: ${email}` : "",
      mensagem ? `Mensagem: ${mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-4 ${compact ? "" : "rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(6,26,54,0.12)]"}`}
    >
      {!compact && (
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            Orçamento
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-navy">
            Solicite uma proposta
          </h3>
        </div>
      )}

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Nome</span>
          <input
            required
            name="nome"
            className="w-full rounded-xl border border-line bg-foam px-4 py-3 text-sm outline-none ring-cyan/40 transition focus:ring-2"
            placeholder="Seu nome"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            Telefone / WhatsApp
          </span>
          <input
            required
            name="telefone"
            className="w-full rounded-xl border border-line bg-foam px-4 py-3 text-sm outline-none ring-cyan/40 transition focus:ring-2"
            placeholder="(19) 90000-0000"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">E-mail</span>
        <input
          type="email"
          name="email"
          className="w-full rounded-xl border border-line bg-foam px-4 py-3 text-sm outline-none ring-cyan/40 transition focus:ring-2"
          placeholder="seu@email.com"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">
          Mensagem
        </span>
        <textarea
          name="mensagem"
          rows={compact ? 3 : 4}
          className="w-full resize-none rounded-xl border border-line bg-foam px-4 py-3 text-sm outline-none ring-cyan/40 transition focus:ring-2"
          placeholder="Conte um pouco sobre o projeto do seu lago..."
          defaultValue=""
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-navy px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue"
      >
        {sent ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
      </button>
    </form>
  );
}
