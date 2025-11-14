import Script from 'next/script';
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
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

const analyticsSnippet = process.env.NEXT_PUBLIC_ANALYTICS_SNIPPET;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const googleAdsAdditionalIds = process.env.NEXT_PUBLIC_GOOGLE_ADS_ADDITIONAL_IDS
  ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ADDITIONAL_IDS.split(',')
      .map((value) => value.trim())
      .filter(Boolean)
  : [];
const googleAdsConfigIds = [googleAdsId, ...googleAdsAdditionalIds].filter(Boolean);
const googleAdsLoaderId = googleAdsConfigIds[0];
const googleAdsConfigScript = googleAdsConfigIds
  .map((id) => `gtag('config', '${id}');`)
  .join('\n');

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
        
        {/* Google Ads Tag */}
        {googleAdsLoaderId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsLoaderId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-ads"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  ${googleAdsConfigScript}
                `,
              }}
            />
          </>
        )}
        
        {/* Tawk.to Chat */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6908edc2b7d5511951f2e8a7/1j95e1gr9';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();
          `,
          }}
        />
      </body>
    </html>
  );
}
