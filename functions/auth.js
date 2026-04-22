/**
 * Cloudflare Pages Function — /auth
 *
 * Démarre le flux OAuth GitHub pour Decap CMS.
 * Décap appelle cette URL avec ?provider=github&scope=repo
 * On redirige vers GitHub qui renvoie ensuite vers /callback.
 *
 * Variables d'environnement requises (Cloudflare Pages → Settings → Environment variables) :
 *   GITHUB_CLIENT_ID
 */
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response(
      "GITHUB_CLIENT_ID not configured in Cloudflare Pages env vars.",
      { status: 500 }
    );
  }

  // Scope par défaut : accès complet aux repos pour commit via Decap
  const scope = url.searchParams.get("scope") || "repo,user";

  // State CSRF aléatoire (stocké en cookie pour validation au callback)
  const state = crypto.randomUUID();
  const redirectUri = `${url.origin}/callback`;

  const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
  githubAuthUrl.searchParams.set("client_id", clientId);
  githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
  githubAuthUrl.searchParams.set("scope", scope);
  githubAuthUrl.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubAuthUrl.toString(),
      "Set-Cookie": `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
