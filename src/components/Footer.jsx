import Link from 'next/link';
import {
  // complianceDisclaimer,
  navigationLinks,
  siteConfig,
} from '@/lib/content';
import Image from 'next/image';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
          <Image
              src="/CIPHERGLOBALLOGOsecond.png"
              alt={`${siteConfig.name} logo`}
              width={160}
              height={38}
              className=" transition duration-700 ease-in-out"
              priority
            />
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              {siteConfig.tagline}
            </p>
            {/* <p className="mt-4 text-sm text-slate-600">{siteConfig.locationTagline}</p> */}
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition text-black hover:text-[#0074ff]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="transition text-black hover:text-[#0074ff]" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="transition text-black hover:text-[#0074ff]" href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a className="transition text-black hover:text-[#0074ff]" href={siteConfig.whatsapp1Href}>
                  WhatsApp: {siteConfig.whatsapp1}
                </a>
              </li>
              <li>
                <a className="transition text-black hover:text-[#0074ff]" href={siteConfig.whatsapp2Href}>
                  WhatsApp: {siteConfig.whatsapp2}
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b3d9ff]">
              Compliance
            </p>
            <p className="mt-4 text-sm text-[#b3d9ff]">{complianceDisclaimer}</p>
          </div> */}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-600">
          <div className="mb-6 text-xs leading-relaxed">
            <p className="text-center">
              MyVisaToday.com is a private consulting platform operated by Cipher Global L.L.C-FZ, a licensed business consultancy based in Dubai, UAE. All information provided on this website, including content related to residency or investment pathways, is intended solely for general guidance and educational purposes. Cipher Global L.L.C-FZ and MyVisaToday.com do not issue visas, government documents, or act on behalf of any government authority. All approvals, decisions, and fees are determined solely by the respective government authorities.
            </p>
          </div>
          <div className="text-center">
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            <p>Licensed in Dubai, UAE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

