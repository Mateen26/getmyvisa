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
            <p className="font-semibold text-slate-900 mb-2">Disclaimer:</p>
            <p>
              MyVisaToday.com is a service platform operated under Cipher Global LLC, a licensed consultancy based in Dubai, UAE. All visa-related information provided on this website is intended for general guidance and informational purposes only. Cipher Global LLC and MyVisaToday.com do not represent or affiliate with any government authority and are not responsible for any changes in immigration laws, fees, or approval decisions made by official entities.
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

