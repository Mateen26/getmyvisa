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
      <div className="rounded-2xl border border-red-200 bg-white/95 p-4 shadow-xl backdrop-blur">
        <p className="text-sm font-semibold text-red-900">
          Ready to Start? Contact Our Dubai Visa Team Today.
        </p>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={handleScroll}
            className="flex-1 rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-black shadow-md transition hover:bg-yellow-400"
          >
            Apply Now
          </button>
          <a
            href={siteConfig.whatsappHref}
            className="flex-1 rounded-full border border-red-200 px-4 py-2 text-center text-sm font-semibold text-red-900 transition hover:border-red-300 hover:bg-red-50"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

