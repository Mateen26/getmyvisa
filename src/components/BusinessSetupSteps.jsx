'use client';

import Image from 'next/image';
import { siteConfig } from '@/lib/content';

export default function BusinessSetupSteps({ steps, targetId = 'lead-form' }) {
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    console.warn('BusinessSetupSteps: steps is missing or empty', steps);
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-[#0b1f40]">Steps to Set Up a Business in the UAE Free Zones</h2>
        <p className="text-sm text-slate-600">Content loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-[#0b1f40]">Steps to Set Up a Business in the UAE Free Zones</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group flex flex-col rounded-2xl border border-[#cfe2ff] bg-white shadow-sm transition-all hover:shadow-lg"
            data-animate="fade-up"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl flex-shrink-0">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#0b1f40] mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-grow">{step.description}</p>
              <a
                href={`#${targetId}`}
                className="inline-block w-full rounded-lg bg-[#0074ff] px-4 py-2.5 text-center text-sm font-semibold !text-white transition-all hover:bg-[#006ae6] hover:shadow-md mt-auto"
              >
                Book A Free Consultation
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

