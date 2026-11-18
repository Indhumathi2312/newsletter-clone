import React from 'react';
import { platformStats } from '../data/stats';

export const Stats: React.FC = () => {
  return (
    <section className="bg-cyber-ink py-16 md:py-24 border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-4 items-center text-center">
            <h2 className="clash-grotesk-font-family uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              THE NUMBERS TELL THE STORY.
            </h2>
            <p className="text-secondary text-base md:text-lg max-w-lg">
              Proven results from the creators and brands building real, lasting media businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platformStats.map((stat) => (
              <article
                key={stat.id}
                className="flex flex-col justify-between gap-6 rounded-xl border border-subtle bg-surface-1 px-6 py-8 md:gap-12 transition-all hover:border-accent-pink/50 shadow-lg"
              >
                <p className="clash-grotesk-font-family uppercase font-bold text-4xl sm:text-5xl md:text-6xl text-accent-pink leading-none">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base font-semibold text-white/90 leading-snug">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
