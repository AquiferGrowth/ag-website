export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect non-www to www (301 permanent)
    if (url.hostname === 'aquifergrowth.com') {
      url.hostname = 'www.aquifergrowth.com';
      return Response.redirect(url.toString(), 301);
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  }
}
