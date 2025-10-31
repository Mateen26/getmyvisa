import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/content';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = new URL(siteConfig.url);

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Investor Visa Facilitation',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: 'Immigration Consulting',
    url: `${siteConfig.url}/investor-visa`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tourist Visa Processing',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: 'Visa Application Assistance',
    url: `${siteConfig.url}/tourist-visa`,
  },
];

export const metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Dubai investor and tourist visa consultants helping you secure residency, launch companies, and travel with confidence. Fast approvals, legal compliance, and personal guidance.',
  keywords: [
    'Dubai visa',
    'Investor visa UAE',
    'Tourist visa Dubai',
    'Business setup Dubai',
    'Cipher Global LLC',
  ],
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      'Launch your Dubai investor visa or secure a fast tourist visa with Cipher Global LLC. UAE-registered consultants delivering compliant, rapid approvals.',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      'Launch your Dubai investor visa or secure a fast tourist visa with Cipher Global LLC. UAE-registered consultants delivering compliant, rapid approvals.',
  },
  alternates: {
    canonical: '/',
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
};

const analyticsSnippet = process.env.NEXT_PUBLIC_ANALYTICS_SNIPPET;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {analyticsSnippet ? (
          <script
            id="analytics-snippet"
            dangerouslySetInnerHTML={{ __html: analyticsSnippet }}
          />
        ) : (
          <meta
            name="analytics-placeholder"
            content="Add GA/Meta script via NEXT_PUBLIC_ANALYTICS_SNIPPET"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup, null, 2) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-slate-900`}>
        <Header />
        <main className="min-h-screen bg-neutral-50 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
