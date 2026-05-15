export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'aquifergrowth.com') {
    url.hostname = 'www.aquifergrowth.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
