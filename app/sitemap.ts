import type { MetadataRoute } from 'next';

const baseUrl = 'https://ai-alp.com';

const routes = ['/', '/contact', '/privacy-policy', '/terms', '/press', '/en', '/en/press'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' || path === '/en' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : path === '/en' ? 0.9 : 0.6,
  }));
}
