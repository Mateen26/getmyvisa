import BenefitsGrid from '@/components/BenefitsGrid';
import ContactBlock from '@/components/ContactBlock';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Timeline from '@/components/Timeline';
import {
  investorAdvantages,
  investorFaq,
  investorSuggestedCopy,
  investorTimeline,
  siteConfig,
} from '@/lib/content';

export const metadata = {
  title: 'Investor Visa Setup in Dubai',
  description:
    'Secure your Dubai investor visa with Cipher Global LLC. Company formation, Emirates ID, family sponsorship, and banking support handled end-to-end.',
};

export default function InvestorVisaPage() {
  return (
    <div className="bg-neutral-50">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f66]/80 via-[#0074ff]/80 to-[#6fb7ff]/70" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Investor Residency</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Start Your Business. Live Legally in Dubai.
            </h1>
            <p className="text-lg text-[#d4e7ff]">
              Cipher Global LLC handles everything—from company formation and licensing to Emirates ID and family sponsorship.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! hover:bg-[#e6f1ff]" href="#investor-lead">
                Apply Now
              </a>
              <a className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#005bcc]" href={siteConfig.phoneHref}>
                Call
              </a>
              <a className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition hover:bg-[#20be5a]" href={siteConfig.whatsapp1Href}>
                WhatsApp
              </a>
            </div>
          </div>
          <div id="investor-lead" className="lg:translate-y-8">
            <LeadForm defaultVisaType="investor" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#0b1f40]">Why Dubai Investors Work with Cipher Global</h2>
            <BenefitsGrid items={investorAdvantages} columns={2} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0b1f40]">Process Timeline</h3>
            <div className="mt-4 rounded-2xl border border-[#cfe2ff] bg-white p-6 shadow-sm">
              <Timeline steps={investorTimeline} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0b1f40]">Custom Packages for Every Investor</h3>
            <p className="mt-3 text-sm text-slate-600">
              Mainland LLCs, media licenses, tech startups, retail, and more. We tailor pre-approvals and visa quantities based on your investment size and staffing plan.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {investorSuggestedCopy.map((line) => (
                <div key={line} className="rounded-xl border border-[#cfe2ff] bg-white p-4 text-sm text-slate-700 shadow-sm">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#0b1f40]">Investor Visa FAQ</h3>
            <div className="mt-6">
              <FAQ items={investorFaq} />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[#8fc3ff]/30 bg-[#0074ff] p-8 text-white">
              <h3 className="text-2xl font-semibold">Ready to establish your UAE presence?</h3>
              <p className="mt-3 text-sm text-[#d4e7ff]">
                From pre-approval to Emirates ID, Cipher Global LLC delivers an end-to-end investor visa experience built for speed and compliance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! hover:bg-[#e6f1ff]" href="#investor-lead">
                  Apply Now
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

