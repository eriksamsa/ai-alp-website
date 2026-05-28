import type { MetadataRoute } from 'next';

const baseUrl = 'https://ai-alp.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/privacy-policy', '/terms', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
