import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  type?: string;
  budget?: string;
  message?: string;
  consent?: boolean;
};

function validate(input: unknown): { ok: true; data: Required<Omit<ContactPayload, "budget">> & { budget: string } } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Payload invalide" };
  }
  const { name, email, type, budget, message, consent } = input as ContactPayload;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return { ok: false, error: "Nom requis" };
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Email invalide" };
  }
  if (!type || typeof type !== "string") {
    return { ok: false, error: "Type de projet requis" };
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return { ok: false, error: "Message trop court" };
  }
  if (consent !== true) {
    return { ok: false, error: "Consentement requis" };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      type: type.trim(),
      budget: (budget ?? "Non précisé").toString(),
      message: message.trim(),
      consent: true,
    },
  };
}

function escape(value: string): string {
  return value.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[c] ?? c;
  });
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const parsed = validate(json);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY missing");
    return NextResponse.json(
      { error: "Service d'envoi indisponible" },
      { status: 503 }
    );
  }

  const { name, email, type, budget, message } = parsed.data;
  const subject = `Nouveau projet — ${escape(name)} (${escape(type)})`;
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; color: #0b0d12;">
      <h2 style="font-size: 20px; margin: 0 0 16px;">Nouveau brief Indysigner</h2>
      <table style="width:100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding:6px 0; color:#7a7f88;">Nom</td><td style="padding:6px 0;"><strong>${escape(name)}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f88;">Email</td><td style="padding:6px 0;"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f88;">Type</td><td style="padding:6px 0;">${escape(type)}</td></tr>
        <tr><td style="padding:6px 0; color:#7a7f88;">Budget</td><td style="padding:6px 0;">${escape(budget)}</td></tr>
      </table>
      <h3 style="font-size:14px; margin:24px 0 8px; color:#1e4d72;">Message</h3>
      <div style="white-space:pre-wrap; line-height:1.55; font-size:14px; padding:16px; background:#faf8f3; border:1px solid #e4dfd4; border-radius:12px;">${escape(message)}</div>
      <p style="margin-top:24px; font-size:12px; color:#7a7f88;">
        Consentement CGV + politique de confidentialité accepté.
      </p>
    </div>
  `;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "Indysigner <noreply@indysigner.fr>",
      to: "contact@indysigner.fr",
      replyTo: email,
      subject,
      html,
    });

    if (result.error) {
      console.error("[contact] resend error", result.error);
      return NextResponse.json(
        { error: "Impossible d'envoyer le message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] exception", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
