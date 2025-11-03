import Link from 'next/link';
import {
  complianceDisclaimer,
  navigationLinks,
  siteConfig,
} from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1f40] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-4 max-w-xs text-sm text-[#b3d9ff]">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-[#b3d9ff]">{siteConfig.locationTagline}</p>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b3d9ff]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition text-[#71b3ff] hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b3d9ff]">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="transition text-[#71b3ff] hover:text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="transition text-[#71b3ff] hover:text-white" href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a className="transition text-[#71b3ff] hover:text-white" href={siteConfig.whatsappHref}>
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li className="text-[#b3d9ff]">Hours: {siteConfig.hours}</li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b3d9ff]">
              Compliance
            </p>
            <p className="mt-4 text-sm text-[#b3d9ff]">{complianceDisclaimer}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1c3766] pt-6 text-sm text-[#b3d9ff]">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

