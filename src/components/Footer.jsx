import Link from 'next/link';
import {
  complianceDisclaimer,
  navigationLinks,
  siteConfig,
} from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-4 max-w-xs text-sm text-red-100">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-red-100">{siteConfig.locationTagline}</p>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-100">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition text-yellow-400! hover:text-yellow-300" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-100">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="transition hover:text-yellow-300 text-yellow-400! " href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="transition hover:text-yellow-300 text-yellow-400! " href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a className="transition hover:text-yellow-300 text-yellow-400! " href={siteConfig.whatsappHref}>
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li className="text-red-100">Hours: {siteConfig.hours}</li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-100">
              Compliance
            </p>
            <p className="mt-4 text-sm text-red-100">{complianceDisclaimer}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-red-700 pt-6 text-sm text-red-100">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

