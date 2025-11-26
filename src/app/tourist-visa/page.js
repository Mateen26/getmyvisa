import ContactBlock from '@/components/ContactBlock';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Timeline from '@/components/Timeline';
import {
  siteConfig,
  touristDurations,
  touristFaq,
  touristRequirements,
  touristTimeline,
} from '@/lib/content';

export const metadata = {
  title: 'Dubai Tourist Visa Experts',
  description:
    'Fast, reliable Dubai tourist visa processing for 14, 30, 60, and 90 day stays. Cipher Global LLC delivers approvals in as little as 24 hours.',
};

export default function TouristVisaPage() {
  return (
    <div className="bg-neutral-50">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f66]/80 via-[#0074ff]/80 to-[#6fb7ff]/70" aria-hidden />
        <div className="relative mx-auto max-w-[100rem] px-4 py-20 text-white">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Tourist Visas</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              UAE Travel & Entry Support
            </h1>
            <p className="text-lg text-[#d4e7ff]">
              Get clear guidance on UAE entry requirements with fast coordination, checklists, and document review for your travel plans.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! hover:bg-[#e6f1ff]" href="#tourist-lead">
                Get Support
              </a>
              <a className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#005bcc]" href={siteConfig.phoneHref}>
                Call
              </a>
              <a className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition hover:bg-[#20be5a]" href={siteConfig.whatsapp1Href}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[100rem] px-4 py-16">
        <div className="space-y-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#0b1f40]">UAE Travel & Entry Support — Choose Your Service</h2>
              <div className="flex flex-col gap-4">
                {touristDurations.map((duration) => (
                  <div key={duration.title} className="flex items-center justify-between rounded-2xl border border-[#cfe2ff] bg-white p-5 shadow-sm">
                    <p className="text-lg font-semibold text-[#0b1f40]">{duration.title}</p>
                    <a className="inline-flex items-center text-sm font-semibold text-[#0074ff]! hover:text-[#005bcc]" href="#tourist-lead">
                      Get Support →
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-slate-600">
                <strong className="text-slate-900">Disclaimer:</strong> Government fees are paid directly to the appropriate UAE authorities. Our fees cover consulting, coordination, and document preparation support.
              </p>
            </div>
            <div id="tourist-lead" className="self-start">
              <LeadForm defaultVisaType="tourist" />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0b1f40]">Requirements</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {touristRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Approval estimates are typically 24–48 hours, but can vary based on immigration queues and holiday schedules.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0b1f40]">Timeline</h3>
              <div className="mt-4 rounded-2xl border border-[#cfe2ff] bg-white p-6 shadow-sm">
                <Timeline steps={touristTimeline} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#0b1f40]">Tourist Visa FAQ</h3>
            <div className="mt-6">
              <FAQ items={touristFaq} />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[#8fc3ff]/30 bg-[#0074ff] p-8 text-white">
              <h3 className="text-2xl font-semibold">Planning a Trip to Dubai? We'll Guide You Through Every Step.</h3>
              <p className="mt-3 text-sm text-[#d4e7ff]">
                Clear guidance, structured support, and dedicated experts for your travel plans.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! hover:bg-[#e6f1ff]" href="#tourist-lead">
                  Get Support
                </a>
                <a className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#005bcc]" href={siteConfig.phoneHref}>
                  Call
                </a>
                <a className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition hover:bg-[#20be5a]" href={siteConfig.whatsapp1Href}>
                  WhatsApp
                </a>
              </div>
            </div>
            <ContactBlock className="self-stretch" />
          </div>
        </div>
      </section>
    </div>
  );
}

