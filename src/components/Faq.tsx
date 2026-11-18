'use client';

import React, { useState } from 'react';
import { faqList } from '../data/faq';

export const Faq: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqList[0].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-cyber-ink py-16 md:py-24 border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Support Info */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <h2 className="clash-grotesk-font-family uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              HAVE A QUESTION?
            </h2>
            <p className="text-base md:text-lg text-secondary">
              Can&apos;t find what you&apos;re looking for? Reach out to our 24/7 dedicated creator support team.
            </p>
            <div className="mt-4">
              <a
                href="https://support.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-accent-pink hover:underline inline-flex items-center gap-1.5"
              >
                Visit Help Center &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-subtle">
            {faqList.map((item) => {
              const isOpen = openIds.includes(item.id);

              return (
                <div key={item.id} className="py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between text-left gap-4 py-2 text-lg md:text-xl font-bold text-white transition-colors hover:text-accent-pink"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-subtle bg-surface-1 text-sm font-bold transition-transform duration-200 ${
                        isOpen ? 'rotate-45 text-accent-pink border-accent-pink' : 'text-secondary'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-base md:text-lg font-normal text-secondary leading-relaxed transition-all">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
