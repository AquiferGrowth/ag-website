import { getCollection } from 'astro:content';

export async function GET(context) {
  const site = context.site ?? 'https://aquifergrowth.com';
  const base = site.toString().replace(/\/$/, '');

  const posts = await getCollection('blog');
  const caseStudies = await getCollection('caseStudies');

  const staticPages = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/design-and-dev',
    '/supply-chain-operations',
    '/merchandising',
    '/finance-and-accounting',
    '/healthcare',
    '/field-services',
    '/ai-seo',
    '/team',
    '/case-studies',
    '/industries/ecommerce-and-retail',
    '/industries/retail',
  ];

  const blogUrls = posts.map(p => `/blog/${p.slug}/`);
  const caseUrls = caseStudies.map(p => `/case-study/${p.slug}/`);

  const allUrls = [...staticPages, ...blogUrls, ...caseUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${base}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
