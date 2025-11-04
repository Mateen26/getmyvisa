'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SplitSelector from '@/components/SplitSelector';
import LeadForm from '@/components/LeadForm';
import BenefitsGrid from '@/components/BenefitsGrid';
import PreApprovalCard from '@/components/PreApprovalCard';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import CTASticky from '@/components/CTASticky';
import { siteConfig } from '@/lib/content';

export default function HomeSwitcher({
  options,
  trustBadges,
  investorContent,
  touristContent,
  socialProofCards,
}) {
  const [activeVisa, setActiveVisa] = useState(options[0]?.id ?? 'investor');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const animatedElements = document.querySelectorAll('[data-animate]');
    if (!animatedElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeVisa]);

  const isInvestor = activeVisa === 'investor';

  return (
    <>
      {/* New Full-Width Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dubai_background.jpg"
            alt="Dubai Skyline"
            fill
            priority
            className="object-cover "
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f66]/80 via-[#0a4fd0]/75 to-[#9dd0ff]/65" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center rounded-full border border-[#8fc3ff]/40 bg-[#0074ff]/15 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {siteConfig.tagline}
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Transform Your Dream Into Reality
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-[#e1efff] md:text-2xl">
              From idea to reality: Dubai visa and business setup simplified with Cipher Global expertise. Choose your path—we handle the rest.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#visa-selector"
                className="rounded-full bg-[#0074ff] px-8 py-4 text-base font-semibold text-white! shadow-xl transition-all hover:bg-[#006ae6] hover:scale-105 hover:shadow-2xl"
              >
                Get Started →
              </a>
              <a
                href={siteConfig.phoneHref}
                className="rounded-full bg-[#006ae6] px-8 py-4 text-base font-semibold text-white! shadow-xl transition-all hover:bg-[#005bcc] hover:scale-105 hover:shadow-2xl"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Visa Selector Section (Moved from original hero) */}
      <section id="visa-selector" className="relative overflow-hidden bg-[#0074ff] text-white">
        <div className="absolute inset-0 opacity-40" aria-hidden>
          <div className="h-full w-full bg-gradient-to-b from-[#0047cc] via-[#0074ff] to-[#6fb7ff]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8" data-animate="fade-right">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium">
              Building Your Bridge to Dubai
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Start Your Visa in Dubai?
            </h1>
            <p className="max-w-xl text-lg text-[#e7f2ff]">Pick your path. We’ll handle the rest.</p>
            <SplitSelector options={options} active={activeVisa} onChange={setActiveVisa} />
            <div className="flex flex-wrap gap-3">
              <a
                href="#lead-form"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! shadow-md transition hover:bg-[#e6f1ff]"
              >
                Apply Now
              </a>
              <a
                href={siteConfig.phoneHref}
                className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#005bcc]"
              >
                Call
              </a>
              <a
                href={siteConfig.whatsappHref}
                className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition hover:bg-[#20be5a]"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div id="lead-form" data-animate="fade-left">
            <LeadForm key={activeVisa} defaultVisaType={activeVisa} />
          </div>
        </div>
      </section>

      <section id="white-content-start" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#0b1f40] md:justify-between">
            {trustBadges.map((badge, index) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-full border border-[#cfe2ff] bg-[#f0f6ff] px-4 py-2"
                data-animate="fade-up"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="h-2 w-2 rounded-full bg-[#0074ff]" aria-hidden />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          {isInvestor ? (
            <InvestorView content={investorContent} />
          ) : (
            <TouristView content={touristContent} />
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2" data-animate="fade-right">
              <h2 className="text-3xl font-semibold text-[#0b1f40]">Over 1,000+ clients successfully assisted.</h2>
            <p className="mt-4 text-sm text-slate-600">
                Real entrepreneurs, families, and frequent flyers who trust Cipher Global LLC for UAE residency and travel.
              </p>
            </div>
            <div className="grid flex-1 gap-4 md:grid-cols-2">
              {socialProofCards.map((card, index) => (
                <div
                  key={card.initials}
                  className="rounded-2xl border border-[#cfe2ff] bg-[#f4f9ff] p-5 text-sm text-[#0b1f40]"
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white">
                      {card.initials}
                    </div>
                    <div>
                      <p className="font-semibold">{card.city}</p>
                      <p className="text-xs text-[#94c5ff]">Cipher Client</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">“{card.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0074ff] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-20 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2" data-animate="fade-right">
            <p className="text-sm uppercase tracking-wide text-white/80">Speed to lead</p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to Start? Contact Our Dubai Visa Team Today.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end" data-animate="fade-left">
            <a 
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! transition-all hover:bg-[#e6f1ff] hover:scale-105 hover:shadow-xl" 
              href="#lead-form"
            >
              Apply Now
            </a>
            <a className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#005bcc] hover:scale-105" href={siteConfig.phoneHref}>
              Call
            </a>
            <a className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition-all hover:bg-[#20be5a] hover:scale-105" href={siteConfig.whatsappHref}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          {/* <div className="rounded-2xl border border-[#cfe2ff] bg-[#f0f6ff] p-6 text-sm text-[#0b1f40]" data-animate="fade-up">
            {complianceDisclaimer}
          </div> */}
        </div>
      </section>

      <CTASticky />
    </>
  );
}

function InvestorView({ content }) {
  return (
    <div className="space-y-16">
      <div className="space-y-6" data-animate="fade-up">
        <h2 className="text-3xl font-semibold text-[#0b1f40]">Why Choose a Dubai Investor Visa?</h2>
        <BenefitsGrid items={content.advantages} columns={2} />
      </div>

      <div data-animate="fade-up">
        <h3 className="text-xl font-semibold text-[#0b1f40]">Pre-Approval Advantages</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.preApprovalAdvantages.map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-[#cfe2ff] bg-white p-4 text-sm text-slate-700 shadow-sm"
              data-animate="fade-up"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div data-animate="fade-up">
        <PreApprovalCard
          title="Pre-Approval — Required Now"
          description="Secure your investor visa faster with these essentials."
          documents={content.preApprovalChecklist}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-animate="fade-right">
          <h3 className="text-xl font-semibold text-[#0b1f40]">Requirements</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {content.requirements.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3"
                data-animate="fade-up"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div data-animate="fade-left">
          <h3 className="text-xl font-semibold text-[#0b1f40]">Process Timeline</h3>
          <div className="mt-4 rounded-2xl border border-[#cfe2ff] bg-white p-6 shadow-sm">
            <Timeline steps={content.timeline} />
          </div>
        </div>
      </div>

      <div data-animate="fade-up">
        <h3 className="text-xl font-semibold text-[#0b1f40]">What Investors Love</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.suggestedCopy.map((line, index) => (
            <div
              key={line}
              className="rounded-xl border border-[#cfe2ff] bg-white p-4 text-sm text-slate-700 shadow-sm"
              data-animate="fade-up"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      <div data-animate="fade-up">
        <h3 className="text-2xl font-semibold text-[#0b1f40]">Investor Visa FAQ</h3>
        <div className="mt-6">
          <FAQ items={content.faq} />
        </div>
      </div>

      <div className="rounded-3xl border border-[#8fc3ff]/30 bg-[#0074ff] p-8 text-white shadow-2xl" data-animate="fade-up">
        <h3 className="text-2xl font-semibold">Investor CTA</h3>
        <p className="mt-2 text-sm text-[#d4e7ff]">
          Launch your investor visa today. Secure residency, set up your company, and open UAE banking with Cipher Global experts.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! transition-all hover:bg-[#e6f1ff] hover:scale-105 hover:shadow-xl" href="#lead-form">
            Apply Now
          </a>
          <a className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#005bcc] hover:scale-105" href={siteConfig.phoneHref}>
            Call
          </a>
          <a className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition-all hover:bg-[#20be5a] hover:scale-105" href={siteConfig.whatsappHref}>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function TouristView({ content }) {
  return (
    <div className="space-y-16">
      <div className="space-y-6" data-animate="fade-up">
        <h2 className="text-3xl font-semibold text-[#0b1f40]">Dubai Tourist Visas — Choose Your Stay</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.durations.map((duration, index) => (
            <div
              key={duration.title}
              className="rounded-2xl border border-[#cfe2ff] bg-white p-5 shadow-sm"
              data-animate="fade-up"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <p className="text-lg font-semibold text-[#0b1f40]">{duration.title}</p>
              <p className="mt-2 text-sm text-slate-600">{duration.description}</p>
              <a className="mt-4 inline-flex items-center text-sm font-semibold text-[#0074ff] hover:text-[#005bcc]" href="#lead-form">
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-animate="fade-right">
          <h3 className="text-xl font-semibold text-[#0b1f40]">Requirements</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {content.requirements.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3"
                data-animate="fade-up"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Approvals typically land within 24–48 hours, subject to UAE immigration rules at the time of application.
          </p>
        </div>
        <div data-animate="fade-left">
          <h3 className="text-xl font-semibold text-[#0b1f40]">Timeline</h3>
          <div className="mt-4 rounded-2xl border border-[#cfe2ff] bg-white p-6 shadow-sm">
            <Timeline steps={content.timeline} />
          </div>
        </div>
      </div>

      <div data-animate="fade-up">
        <h3 className="text-2xl font-semibold text-[#0b1f40]">Tourist Visa FAQ</h3>
        <div className="mt-6">
          <FAQ items={content.faq} />
        </div>
      </div>

      <div className="rounded-3xl border border-[#8fc3ff]/30 bg-[#0074ff] p-8 text-white shadow-2xl" data-animate="fade-up">
        <h3 className="text-2xl font-semibold">Tourist CTA</h3>
        <p className="mt-2 text-sm text-[#d4e7ff]">
          Planning a visit to Dubai? Secure your tourist visa quickly with consultants who understand every airline and immigration checklist.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1f40]! transition-all hover:bg-[#e6f1ff] hover:scale-105 hover:shadow-xl" href="#lead-form">
            Apply Now
          </a>
          <a className="rounded-full bg-[#006ae6] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#005bcc] hover:scale-105" href={siteConfig.phoneHref}>
            Call
          </a>
          <a className="rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#0b1f40] shadow-md transition-all hover:bg-[#20be5a] hover:scale-105" href={siteConfig.whatsappHref}>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

