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
          <a className="transition hover:text-[#0074ff]" href={siteConfig.whatsappHref}>
            WhatsApp: {siteConfig.whatsapp}
          </a>
        </li>
      </ul>
      <p className="mt-4 text-xs uppercase tracking-wide text-[#4a7abf]">{siteConfig.hours}</p>
    </div>
  );
}

