import { siteConfig } from '@/lib/content';

const routes = [
  '',
  'investor-visa',
  'tourist-visa',
  'about',
  'refund-policy',
  'terms-and-conditions',
  'contact',
];

export default function sitemap() {
  const lastModified = new Date().toISOString();
  return routes.map((path) => ({
    url: `${siteConfig.url}/${path}`.replace(/\/+$/, '/'),
    lastModified,
  }));
}

