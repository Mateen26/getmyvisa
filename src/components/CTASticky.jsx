'use client';

import { siteConfig } from '@/lib/content';

export default function CTASticky({ targetId = 'lead-form' }) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <div className="rounded-2xl border border-[#dbe9ff] bg-white/95 p-4 shadow-xl backdrop-blur">
        <p className="text-sm font-semibold text-[#0b1f40]">
          Ready to Start? Contact Our Dubai Visa Team Today.
        </p>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={handleScroll}
            className="flex-1 rounded-full bg-[#0074ff] px-4 py-2 text-sm font-semibold text-white! shadow-md transition hover:bg-[#006ae6]"
          >
            Request Support
          </button>
          <a
            href={siteConfig.whatsapp1Href}
            className="flex-1 rounded-full border border-[#dbe9ff] px-4 py-2 text-center text-sm font-semibold text-[#0b1f40] transition hover:border-[#b3d9ff] hover:bg-[#f0f6ff]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

