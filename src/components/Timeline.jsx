'use client';

import { useEffect, useRef, useState } from 'react';

export default function Timeline({ steps }) {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const baseDelay = 0.6;

  return (
    <div ref={containerRef} className="relative">
      {/* Mobile / small screens - stacked timeline with subtle animation */}
      <ol className="relative ml-3 border-l border-[#cfe2ff] pl-6 md:hidden">
        {steps.map((step, index) => {
          const stepDelay = baseDelay + index * 0.6;

          return (
            <li key={step.title} className="relative mb-8 last:mb-0">
              <div
                className={`absolute -left-[15px] flex h-7 w-7 items-center justify-center rounded-full bg-[#0074ff] text-sm font-semibold text-white shadow-md transition-transform duration-500 ease-out ${
                  hasAnimated ? 'scale-100' : 'scale-0'
                }`}
                style={{ transitionDelay: `${stepDelay}s` }}
                aria-hidden
              >
                {index + 1}
              </div>
              <div
                className={`pl-8 transition-all duration-500 ease-out ${
                  hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: `${stepDelay + 0.2}s` }}
              >
                <h4 className="text-base font-semibold text-[#0b1f40]">{step.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Desktop / larger screens - horizontal animated timeline */}
      <div className="hidden md:flex md:flex-col">
        <div className="relative h-12">
          <div
            className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-[#dbe9ff]"
            aria-hidden
          />
          <div
            className={`absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 origin-left rounded-full bg-[#0074ff] transition-transform duration-700 ease-out ${
              hasAnimated ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '0s' }}
            aria-hidden
          />

          {steps.map((_, index) => {
            if (index === steps.length - 1) return null;
            const stepDelay = baseDelay + index * 0.6;

            return (
              <div
                key={`static-arrow-${index}`}
                className="pointer-events-none absolute top-1/2 z-10 hidden text-[#0074ff] opacity-0 transition-opacity duration-400 ease-out md:flex"
                style={{
                  left: `${((index + 1) / steps.length) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                  transitionDelay: `${stepDelay + 0.25}s`,
                  opacity: hasAnimated ? 1 : 0,
                }}
                aria-hidden
              >
                <svg viewBox="0 0 96 20" className="h-5 w-20">
                  <path d="M4 10H70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M70 10L56 3V17L70 10Z" fill="currentColor" />
                </svg>
              </div>
            );
          })}

          <div
            className="absolute top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#0074ff] bg-white text-[#0074ff] shadow-md md:flex"
            style={{
              left: hasAnimated ? 'calc(100% - 2.5rem)' : '1.5rem',
              opacity: hasAnimated ? 1 : 0,
              transition: 'left 0.7s ease-out 0.35s, opacity 0.3s ease-out 0.2s',
            }}
            aria-hidden
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4">
              <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <ol className="relative mt-8 flex items-start justify-between">
          {steps.map((step, index) => {
            const stepDelay = baseDelay + index * 0.6;

            return (
              <li key={step.title} className="relative flex flex-1 flex-col items-center text-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#0074ff] text-base font-semibold text-white shadow-lg transition-transform duration-500 ease-out ${
                    hasAnimated ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ transitionDelay: `${stepDelay}s` }}
                  aria-hidden
                >
                  {index + 1}
                </div>
                <div
                  className={`mt-6 max-w-[240px] transition-all duration-500 ease-out md:mt-8 ${
                    hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  }`}
                  style={{ transitionDelay: `${stepDelay + 0.2}s` }}
                >
                  <h4 className="text-base font-semibold text-[#0b1f40]">{step.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

