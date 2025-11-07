import ContactBlock from '@/components/ContactBlock';
import { aboutCopy } from '@/lib/content';

export const metadata = {
  title: 'About Cipher Global LLC',
  description:
    'Cipher Global LLC is a UAE-registered consultancy guiding investors and travelers through Dubai visas, residency, and business setup.',
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-50">
      <section className="bg-[#0b1f40] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h1 className="text-4xl font-semibold md:text-5xl">About Cipher Global LLC</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#b3d9ff]">
            Building your bridge to Dubai with transparent visa, residency, and business setup support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-6 text-sm leading-relaxed text-slate-700">
            {aboutCopy.split('\n\n').map((block) => {
              const lines = block.split('\n');
              // Check if this is a heading (short line, no bullet points, not the first paragraph)
              const isHeading = lines.length === 1 && lines[0].length < 50 && !lines[0].startsWith('•') && !lines[0].startsWith('Cipher Global LLC is');
              
              if (isHeading) {
                return (
                  <h2 key={block} className="text-lg font-bold text-slate-900 mt-8 first:mt-0">
                    {lines[0]}
                  </h2>
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
          </article>
          <aside className="space-y-6">
            <ContactBlock />
            <div className="rounded-2xl border border-[#cfe2ff] bg-white p-6 text-sm text-slate-600">
              <p className="font-semibold text-[#0b1f40]">Why work with us?</p>
              <p className="mt-2">
                Cipher Global LLC is a UAE-registered consultancy delivering compliant investor and tourist visa support, business setup advisory, and hands-on documentation assistance.
              </p>
              {/* <p className="mt-2 text-xs uppercase tracking-wide text-[#4a7abf]">{siteConfig.locationTagline}</p> */}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

