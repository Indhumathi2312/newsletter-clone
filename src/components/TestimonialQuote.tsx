'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { featuredTestimonials } from '../data/testimonials';

export const TestimonialQuote: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = featuredTestimonials[currentIndex];

  return (
    <section className="bg-cyber-ink py-16 md:py-24 border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        <div
          className="relative isolate overflow-hidden rounded-2xl border border-cyber-ink-400 px-6 py-12 md:px-16 md:py-20 shadow-2xl"
          style={{
            backgroundColor: '#0D0B28',
            backgroundImage:
              'linear-gradient(-11deg, rgba(78, 78, 108, 0) 65%, rgba(152, 152, 210, 0.05) 100%)',
          }}
        >
          {/* Background pink glow effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-accent-pink/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="clash-grotesk-font-family text-5xl md:text-7xl font-bold text-accent-pink leading-none mb-4 select-none">
              &ldquo;
            </span>

            <blockquote className="clash-grotesk-font-family text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-8 min-h-[90px]">
              {current.quote}
            </blockquote>

            <div className="flex flex-col items-center gap-1 mb-8">
              <span className="text-base md:text-lg font-bold text-white">
                {current.author}
              </span>
              <span className="text-sm text-secondary">
                {current.role}, <span className="text-white font-medium">{current.company}</span>
              </span>
              <Link
                href={current.storyUrl}
                className="mt-2 text-xs font-bold text-accent-pink hover:underline uppercase tracking-wider"
              >
                Read customer story &rarr;
              </Link>
            </div>

            {/* Testimonial Nav dots */}
            <div className="flex items-center gap-2">
              {featuredTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-accent-pink'
                      : 'w-2.5 bg-subtle hover:bg-white/40'
                  }`}
                  aria-label={`View quote from ${item.author}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
