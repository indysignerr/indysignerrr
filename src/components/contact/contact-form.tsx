"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString() ?? "",
      email: data.get("email")?.toString() ?? "",
      type: data.get("type")?.toString() ?? "",
      budget: data.get("budget")?.toString() ?? "",
      message: data.get("message")?.toString() ?? "",
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: "Erreur réseau" }));
        throw new Error(body.error ?? "Erreur inconnue");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ocean-blue/20 bg-sky-mist p-8">
        <p className="font-display text-2xl text-ink">Message reçu.</p>
        <p className="mt-3 text-ink-soft">
          Je réponds sous 24h en semaine. On va pouvoir cadrer ton projet
          ensemble et te livrer une maquette rapidement.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="ghost"
          className="mt-6"
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field label="Nom complet" htmlFor="name" required>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jean Dupont"
          className={fieldClass}
        />
      </Field>

      <Field label="Email" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jean@exemple.fr"
          className={fieldClass}
        />
      </Field>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Type de projet" htmlFor="type" required>
          <select id="type" name="type" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choisir
            </option>
            <option value="Site Vitrine">Site Vitrine</option>
            <option value="Site Sur-Mesure">Site Sur-Mesure</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Autre">Autre</option>
          </select>
        </Field>
        <Field label="Budget estimé" htmlFor="budget">
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="">À discuter</option>
            <option value="< 500€">&lt; 500€</option>
            <option value="500-1000€">500 – 1000€</option>
            <option value="> 1000€">&gt; 1000€</option>
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Décris ton projet, tes objectifs, ton délai..."
          className={cn(fieldClass, "min-h-[140px] resize-y")}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-ocean-blue"
        />
        <span>
          J'ai lu et j'accepte les{" "}
          <Link
            href="/cgv"
            className="text-ocean-blue underline-offset-2 hover:underline"
          >
            CGV
          </Link>{" "}
          et la{" "}
          <Link
            href="/politique-confidentialite"
            className="text-ocean-blue underline-offset-2 hover:underline"
          >
            politique de confidentialité
          </Link>{" "}
          d'Indysigner.
        </span>
      </label>

      {status === "error" && errorMsg && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer
          </>
        )}
      </Button>
    </form>
  );
}

const fieldClass =
  "block w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted transition-colors focus:border-ocean-blue focus:outline-none focus:ring-2 focus:ring-ocean-blue/20";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-ocean-blue">*</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
