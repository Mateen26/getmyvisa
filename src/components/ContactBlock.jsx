import { siteConfig } from '@/lib/content';

export default function ContactBlock({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-[#cfe2ff] bg-white p-6 shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold text-[#0b1f40]">Connect with us today.</h3>
      <p className="mt-2 text-sm text-slate-600">
        Say goodbye to visa uncertainty. Reach Cipher Global LLC to start your Dubai journey now.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-[#0b1f40]">
        <li>
          <a className="transition hover:text-[#0074ff]" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </li>
        <li>
          <a className="transition hover:text-[#0074ff]" href={siteConfig.phoneHref}>
            {siteConfig.phone}
          </a>
        </li>
        <li>
          <a className="transition hover:text-[#0074ff]" href={siteConfig.whatsapp1Href}>
            WhatsApp: {siteConfig.whatsapp1}
          </a>
        </li>
        <li>
          <a className="transition hover:text-[#0074ff]" href={siteConfig.whatsapp2Href}>
            WhatsApp: {siteConfig.whatsapp2}
          </a>
        </li>
      </ul>
    </div>
  );
}

