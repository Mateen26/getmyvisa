import ContactBlock from '@/components/ContactBlock';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/lib/content';

export const metadata = {
  title: 'Contact Cipher Global LLC',
  description:
    'Contact Cipher Global LLC for Dubai investor and tourist visa support. Call, email, or WhatsApp our consultants.',
};

export default function ContactPage() {
  return (
    <div className="bg-neutral-50">
      <section className="bg-[#0b1f40] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h1 className="text-4xl font-semibold md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#b3d9ff]">
            Ready to plan your Dubai move or next trip? Reach the Cipher Global LLC visa team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#0b1f40]">Talk to a consultant</h2>
              <p className="mt-3 text-sm text-slate-600">
                Share your investor or tourist visa goals and our UAE-registered team will respond quickly.
              </p>
            </div>
            <LeadForm defaultVisaType="investor" />
          </div>
          <div className="space-y-8">
            <ContactBlock />
            <div className="rounded-2xl border border-[#cfe2ff] bg-white p-6 text-sm text-slate-600">
              <p className="font-semibold text-[#0b1f40]">Office Hours</p>
              <p className="mt-1">{siteConfig.hours}</p>
              <div className="mt-6">
                <p className="font-semibold text-[#0b1f40]">Our Promise</p>
                <p className="mt-1 text-sm">
                  Every enquiry is handled by a UAE-based consultant who understands investor and tourist visa regulations.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#cfe2ff] bg-white">
              <div className="h-64 w-full bg-[url('https://images.unsplash.com/photo-1502920917128-1aa500764b81?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" aria-hidden />
              <div className="p-4 text-xs text-slate-500">
                Map placeholder — swap with an embedded map once location is finalized.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

