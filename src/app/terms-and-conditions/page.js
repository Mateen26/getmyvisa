import {termsText } from '@/lib/content';

export const metadata = {
  title: 'Terms & Conditions | Cipher Global LLC',
  description:
    'Review the terms and conditions for engaging Cipher Global LLC for Dubai visa, residency, and business setup services.',
};

export default function TermsPage() {
  return (
    <div className="bg-neutral-50">
      <section className="bg-[#0b1f40] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h1 className="text-4xl font-semibold md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#b3d9ff]">
            Please read these terms carefully before engaging Cipher Global LLC.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <article className="space-y-6 rounded-3xl border border-[#cfe2ff] bg-white p-8 text-sm leading-relaxed text-slate-700">
          {termsText.split('\n\n').map((block) => {
            const lines = block.split('\n');
            // Check if the first line is a section heading (starts with a number like "1. Acceptance of Terms")
            const firstLineIsHeading = /^\d+\.\s+[A-Z]/.test(lines[0]);
            
            if (firstLineIsHeading) {
              return (
                <div key={block}>
                  <h2 className="text-lg font-bold text-slate-900 mt-8 first:mt-0 mb-3">
                    {lines[0]}
                  </h2>
                  {lines.slice(1).length > 0 && (
                    <p className="text-slate-700">
                      {lines.slice(1).map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < lines.slice(1).length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              );
            }
            
            return (
              <p key={block} className="text-slate-700">
                {lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            );
          })}
          {/* <p className="mt-8 text-xs uppercase tracking-wide text-[#4a7abf]">{siteConfig.locationTagline}</p> */}
        </article>
      </section>
    </div>
  );
}

