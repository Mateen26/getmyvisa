import BenefitsGrid from '@/components/BenefitsGrid';
import ContactBlock from '@/components/ContactBlock';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import PreApprovalCard from '@/components/PreApprovalCard';
import Timeline from '@/components/Timeline';
import {
  investorAdvantages,
  investorFaq,
  investorPreApprovalAdvantages,
  investorPreApprovalChecklist,
  investorRequirements,
  investorSuggestedCopy,
  investorTimeline,
  siteConfig,
} from '@/lib/content';

export const metadata = {
  title: 'Investor Visa Setup in Dubai',
  description:
    'Secure your Dubai investor visa with Cipher Global LLC. Company formation, Emirates ID, family sponsorship, and banking support handled end-to-end.',
};

const smtpReady = Boolean(
  process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.LEADS_TO,
);

export default function InvestorVisaPage() {
  return (
    <div className="bg-neutral-50">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-red-900/80" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-red-200">Investor Residency</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Start Your Business. Live Legally in Dubai.
            </h1>
            <p className="text-lg text-red-100">
              Cipher Global LLC handles everything—from company formation and licensing to Emirates ID and family sponsorship.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-400" href="#investor-lead">
                Apply Now
              </a>
              <a className="rounded-full border border-yellow-400/60 px-6 py-3 text-sm font-semibold !text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10" href={siteConfig.phoneHref}>
                Call
              </a>
              <a className="rounded-full border border-yellow-400/60 px-6 py-3 text-sm font-semibold !text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10" href={siteConfig.whatsappHref}>
                WhatsApp
              </a>
            </div>
          </div>
          <div id="investor-lead" className="lg:translate-y-8">
            <LeadForm defaultVisaType="investor" smtpReady={smtpReady} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-red-900">Why Dubai Investors Work with Cipher Global</h2>
            <BenefitsGrid items={investorAdvantages} columns={2} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-900">Pre-Approval Advantages</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {investorPreApprovalAdvantages.map((item) => (
                <div key={item} className="rounded-xl border border-red-100 bg-white p-5 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <PreApprovalCard
            title="Pre-Approval — Required Now"
            description="Submit these documents today to fast-track your residency."
            documents={investorPreApprovalChecklist}
          />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-xl font-semibold text-red-900">Investor Requirements</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {investorRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-black">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-900">Process Timeline</h3>
              <div className="mt-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
                <Timeline steps={investorTimeline} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-900">Custom Packages for Every Investor</h3>
            <p className="mt-3 text-sm text-slate-600">
              Mainland LLCs, media licenses, tech startups, retail, and more. We tailor pre-approvals and visa quantities based on your investment size and staffing plan.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {investorSuggestedCopy.map((line) => (
                <div key={line} className="rounded-xl border border-red-100 bg-white p-4 text-sm text-slate-700 shadow-sm">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-900">Investor Visa FAQ</h3>
            <div className="mt-6">
              <FAQ items={investorFaq} />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-red-100 bg-red-900 p-8 text-white">
              <h3 className="text-2xl font-semibold">Ready to establish your UAE presence?</h3>
              <p className="mt-3 text-sm text-red-100">
                From pre-approval to Emirates ID, Cipher Global LLC delivers an end-to-end investor visa experience built for speed and compliance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-400" href="#investor-lead">
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

