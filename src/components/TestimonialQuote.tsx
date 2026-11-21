'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { featuredTestimonials } from '../data/testimonials';

export const TestimonialQuote: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = featuredTestimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  return (
    <section className="bg-cyber-ink relative z-20">
      <div className="px-5 md:px-8 xl:px-32 py-10 sm:py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-10 lg:gap-12">
            {/* 1. Main Interactive Testimonial Card Frame */}
            <div
              className="relative isolate flex items-center justify-center overflow-hidden rounded-xl border border-cyber-ink-400 px-5 py-10 md:px-16 md:py-20 shadow-2xl transition-all duration-500"
              style={{
                backgroundColor: '#0D0B28',
                backgroundImage:
                  'linear-gradient(-11.046deg, rgba(78, 78, 108, 0) 66.952%, rgba(152, 152, 210, 0.04) 99.472%)',
              }}
            >
              {/* Pink ellipse blur SVG in background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[1.64%] top-[42.94%] h-[137.17%] w-[97.28%] origin-center"
                style={{ transform: 'skewX(-4.49deg)' }}
              >
                <svg
                  className="size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1245.2 602.188"
                >
                  <g filter="url(#quote-frame-ellipse-blur)" opacity="0.3">
                    <ellipse
                      cx="622.6"
                      cy="301.094"
                      fill="#FF5EC4"
                      rx="372.6"
                      ry="51.0938"
                    />
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="602.188"
                      id="quote-frame-ellipse-blur"
                      width="1245.2"
                      x="0"
                      y="0"
                    >
                      <feGaussianBlur stdDeviation="125" />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Noise texture overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-80 mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 296 296' width='296' height='296' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: '296px 296px',
                }}
              />

              {/* Stacked Carousel Slides Container */}
              <div className="relative z-[1] mx-auto grid w-full max-w-[755px]">
                {featuredTestimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={item.id}
                      aria-hidden={!isActive}
                      className={`flex flex-col gap-6 items-center text-center col-start-1 row-start-1 h-full justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
                          : 'opacity-0 pointer-events-none translate-y-4 scale-[0.98]'
                      }`}
                    >
                      {/* Quote & Author Info */}
                      <div className="flex flex-col gap-4 items-center text-center">
                        <blockquote className="text-lg font-medium leading-7 text-center text-white md:text-[28px] md:leading-9 tracking-tight max-w-2xl min-h-[90px] flex items-center justify-center">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>

                        <div className="mt-4 flex flex-col items-center gap-3">
                          {item.avatar ? (
                            <Image
                              src={item.avatar}
                              alt={item.author}
                              width={48}
                              height={48}
                              className="size-12 shrink-0 rounded-full border border-[#302D4C] object-cover shadow-md"
                            />
                          ) : (
                            <div aria-hidden="true" className="size-12 shrink-0" />
                          )}
                          <div className="flex flex-col items-center">
                            <p className="text-center text-base font-bold leading-6 text-white">
                              {item.author}
                            </p>
                            <p className="text-base md:text-lg font-medium text-center text-gray-400">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Read the story CTA button */}
                      <a
                        href={item.storyUrl}
                        tabIndex={isActive ? 0 : -1}
                        className="flex cursor-pointer justify-center gap-[10px] bg-transparent text-white border border-white hover:text-[#060419] hover:bg-white rounded-full text-base lg:text-lg font-bold leading-6 py-2 px-6 inline-flex items-center max-w-fit whitespace-nowrap transition-colors duration-200 mt-2"
                      >
                        <span>Read the story</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Arrows Navigation (Left & Right round buttons) */}
            <div className="relative z-10 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="relative z-10 flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95 cursor-pointer shadow-lg"
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="relative z-10 flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95 cursor-pointer shadow-lg"
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
