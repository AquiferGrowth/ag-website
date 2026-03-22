/**
 * Cloudflare Worker for Decap CMS GitHub OAuth Proxy
 */

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Initial auth request: redirect to GitHub
    if (url.pathname === '/auth') {
      const authUrl = new URL(GITHUB_AUTH_URL);
      authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set('scope', 'repo,user');
      authUrl.searchParams.set('redirect_uri', `${url.origin}/callback`);
      return Response.redirect(authUrl.toString(), 302);
    }

    // Callback from GitHub: exchange code for token
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('No code provided', { status: 400 });
      }

      const response = await fetch(GITHUB_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const data = await response.json();

      if (data.error) {
        return new Response(JSON.stringify(data), { status: 400, headers: { 'Content-Type': 'application/json' } });
      }

      // Format for Decap CMS: postMessage to opener
      const script = `
        <script>
          const receiveMessage = (message) => {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({
                token: data.access_token,
                provider: 'github'
              })}',
              message.origin
            );
            window.removeEventListener('message', receiveMessage, false);
          }
          window.addEventListener('message', receiveMessage, false);
          window.opener.postMessage('authorizing:github', '*');
        </script>
      `;

      return new Response(script, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
