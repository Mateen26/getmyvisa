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

const smtpReady = Boolean(
  process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.LEADS_TO,
);

export default function TouristVisaPage() {
  return (
    <div className="bg-neutral-50">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-red-900/75" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-red-200">Tourist Visas</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Fast, Reliable Tourist Visas for Dubai
            </h1>
            <p className="text-lg text-red-100">
              Choose 14, 30, 60, or 90-day stays. We manage airline-ready documentation, immigration submissions, and quick WhatsApp updates.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-400" href="#tourist-lead">
                Apply Now
              </a>
              <a className="rounded-full border border-yellow-400/60 px-6 py-3 text-sm font-semibold text-yellow-400! hover:border-yellow-400 hover:bg-yellow-400/10" href={siteConfig.phoneHref}>
                Call
              </a>
              <a className="rounded-full border border-yellow-400/60 px-6 py-3 text-sm font-semibold text-yellow-400! hover:border-yellow-400 hover:bg-yellow-400/10" href={siteConfig.whatsappHref}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="space-y-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-red-900">Duration Options</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {touristDurations.map((duration) => (
                  <div key={duration.title} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                    <p className="text-lg font-semibold text-red-900">{duration.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{duration.description}</p>
                    <a className="mt-4 inline-flex items-center text-sm font-semibold text-red-900 hover:text-red-700" href="#tourist-lead">
                      Apply Now →
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div id="tourist-lead" className="self-start">
              <LeadForm defaultVisaType="tourist" smtpReady={smtpReady} />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-xl font-semibold text-red-900">Requirements</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {touristRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-black">
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
              <h3 className="text-xl font-semibold text-red-900">Timeline</h3>
              <div className="mt-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
                <Timeline steps={touristTimeline} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-900">Tourist Visa FAQ</h3>
            <div className="mt-6">
              <FAQ items={touristFaq} />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-red-100 bg-red-900 p-8 text-white">
              <h3 className="text-2xl font-semibold">Need a visa for your next trip?</h3>
              <p className="mt-3 text-sm text-red-100">
                Cipher Global LLC guides you through every step—documents, payments, airline requirements, and extension options.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-400" href="#tourist-lead">
                  Apply Now
                </a>
                <a className="rounded-full border border-yellow-400/60 px-6 py-3 text-sm font-semibold text-yellow-400! hover:border-yellow-400 hover:bg-yellow-400/10" href={siteConfig.phoneHref}>
                  Call
                </a>
                <a className="rounded-full border border-yellow-400/60 px-6 py-3 text-sm font-semibold text-yellow-400! hover:border-yellow-400 hover:bg-yellow-400/10" href={siteConfig.whatsappHref}>
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

