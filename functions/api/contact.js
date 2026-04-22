/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Réceptionne le formulaire de contact du site et envoie un email via
 * l'API HTTP de Resend (pas la librairie npm — compatible edge runtime).
 *
 * Variable d'env requise :
 *   RESEND_API_KEY
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parsing JSON
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "JSON invalide" }, 400);
  }

  // Validation
  const v = validate(payload);
  if (!v.ok) return json({ error: v.error }, 400);
  const { name, email, type, delay, message } = v.data;

  // Clé API
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY non configuré");
    return json({ error: "Service d'envoi indisponible" }, 503);
  }

  // Envoi via Resend HTTP API
  const subject = `Nouveau brief — ${escapeHtml(name)} (${escapeHtml(type)})`;
  const html = buildEmailHtml({ name, email, type, delay, message });

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Indysigner <noreply@indysigner.fr>",
        to: ["contact@indysigner.fr"],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("[contact] Resend error", res.status, errBody);
      return json({ error: "Impossible d'envoyer le message" }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("[contact] exception", err);
    return json({ error: "Erreur serveur" }, 500);
  }
}

// Rejette les méthodes autres que POST
export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
  }
  return onRequestPost(context);
}

/* ============================================
   Validation
   ============================================ */

function validate(input) {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Payload invalide" };
  }
  const { name, email, type, delay, message, consent } = input;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return { ok: false, error: "Nom requis" };
  }
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return { ok: false, error: "Email invalide" };
  }
  if (!type || typeof type !== "string") {
    return { ok: false, error: "Offre visée requise" };
  }
  if (
    !message ||
    typeof message !== "string" ||
    message.trim().length < 10
  ) {
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
      delay: (delay ?? "Non précisé").toString().trim(),
      message: message.trim(),
    },
  };
}

/* ============================================
   Utilitaires
   ============================================ */

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => {
    const m = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return m[c] || c;
  });
}

function buildEmailHtml({ name, email, type, delay, message }) {
  return `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; color: #0b0d12;">
      <h2 style="font-size: 20px; margin: 0 0 16px;">Nouveau brief Indysigner</h2>
      <table style="width:100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding:6px 0; color:#7a7f88;">Nom</td><td style="padding:6px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f88;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f88;">Offre</td><td style="padding:6px 0;">${escapeHtml(type)}</td></tr>
        <tr><td style="padding:6px 0; color:#7a7f88;">Délai</td><td style="padding:6px 0;">${escapeHtml(delay)}</td></tr>
      </table>
      <h3 style="font-size:14px; margin:24px 0 8px; color:#1e4d72;">Message</h3>
      <div style="white-space:pre-wrap; line-height:1.55; font-size:14px; padding:16px; background:#faf8f3; border:1px solid #e4dfd4; border-radius:12px;">${escapeHtml(message)}</div>
      <p style="margin-top:24px; font-size:12px; color:#7a7f88;">
        Consentement CGV + politique de confidentialité accepté.
      </p>
    </div>
  `;
}
