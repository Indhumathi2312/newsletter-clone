'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tickerItems } from '../data/creators';

export const CreatorsTicker: React.FC = () => {
  return (
    <section className="bg-cyber-ink py-16 md:py-24 overflow-hidden border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32 mb-10 text-center">
        <h2 className="clash-grotesk-font-family uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
          Trusted by names you know.
        </h2>
        <p className="text-secondary text-base md:text-lg max-w-xl mx-auto">
          Over 100,000+ newsletters, creators, and media companies rely on beehiiv to fuel their audience growth.
        </p>
      </div>

      {/* Horizontal Scroll / Ticker Container */}
      <div className="relative w-full overflow-x-auto pb-6 no-scrollbar">
        <div className="flex w-max items-center gap-4 px-6 md:gap-6 md:px-12">
          {tickerItems.map((item, index) => {
            if (item.type === 'creator') {
              const { name, publication, imageSrc } = item.data;
              return (
                <div
                  key={`${item.data.id}-${index}`}
                  className="relative h-[320px] w-[230px] md:h-[400px] md:w-[280px] shrink-0 overflow-hidden rounded-2xl border border-subtle bg-surface-1 transition-transform hover:-translate-y-1 shadow-lg"
                >
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={400}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold text-white">{name}</h3>
                    <p className="text-sm md:text-base font-medium text-tertiary mt-0.5">
                      {publication}
                    </p>
                  </div>
                </div>
              );
            }

            // Stat card item
            const { stat, description, logoSrc, logoAlt, caseStudyUrl } = item.data;
            return (
              <Link
                key={`${item.data.id}-${index}`}
                href={caseStudyUrl}
                className="flex h-[320px] w-[230px] md:h-[400px] md:w-[280px] shrink-0 flex-col justify-between rounded-2xl border border-subtle bg-surface-1 p-6 md:p-8 transition-all hover:bg-surface-2 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex h-12 w-full items-start overflow-hidden">
                  <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={160}
                    height={40}
                    className="h-8 w-auto max-w-full object-contain object-left brightness-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="clash-grotesk-font-family font-bold text-4xl md:text-5xl lg:text-6xl text-accent-pink leading-none">
                    {stat}
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-secondary leading-snug">
                    {description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/case-studies"
          className="text-base font-bold text-white transition-colors hover:text-accent-pink inline-flex items-center gap-2"
        >
          See all customer stories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};
