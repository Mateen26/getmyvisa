'use client';

import { useState } from 'react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={faq.question} className="rounded-xl border border-red-100 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-red-900">{faq.question}</span>
              <span className="text-2xl text-yellow-500" aria-hidden>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-slate-600">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

