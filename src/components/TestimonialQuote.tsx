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
    <section className="bg-cyber-ink relative z-20 py-10 sm:py-16 md:py-24 overflow-hidden">
      <div className="px-5 md:px-8 xl:px-32 mx-auto max-w-screen-xl">
        <div className="relative flex flex-col items-center gap-8">
          
          {/* Main Carousel Wrapper with Side Arrows on Desktop */}
          <div className="relative w-full flex items-center justify-center">
            
            {/* Desktop Left Floating Arrow Button */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="hidden lg:flex absolute -left-5 xl:-left-7 z-30 size-12 items-center justify-center rounded-full border border-white/20 bg-[#060419]/90 text-white backdrop-blur-sm transition-all hover:border-[#FF5EC4] hover:bg-[#FF5EC4]/10 hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
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

            {/* Seamless Main Testimonial Card Frame (Zero Gaps, Zero Lines) */}
            <div
              className="relative isolate w-full overflow-hidden rounded-2xl border border-[#302D4C] shadow-2xl"
              style={{
                backgroundColor: '#0D0B28',
                backgroundImage:
                  'linear-gradient(-11.046deg, rgba(78, 78, 108, 0) 66.952%, rgba(152, 152, 210, 0.04) 99.472%)',
              }}
            >
              {/* Pink Ellipse Blur SVG Glow in Background */}
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
                  <g filter="url(#quote-frame-ellipse-blur)" opacity="0.35">
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

              {/* Noise Texture Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-80 mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 296 296' width='296' height='296' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: '296px 296px',
                }}
              />

              {/* Seamless Sliding Track Container: 100% width per slide, zero gap, no subpixel line leaks */}
              <div
                className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {featuredTestimonials.map((item) => (
                  <div
                    key={item.id}
                    className="w-full min-w-full shrink-0 flex flex-col items-center justify-center px-6 py-12 md:px-16 md:py-20"
                  >
                    <div className="relative z-10 mx-auto flex w-full max-w-[755px] flex-col items-center text-center gap-6">
                      {/* Quote Text */}
                      <blockquote className="text-lg sm:text-xl md:text-[28px] font-medium leading-relaxed md:leading-[1.3] text-white tracking-tight max-w-2xl min-h-[96px] flex items-center justify-center">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>

                      {/* Author Profile */}
                      <div className="mt-2 flex flex-col items-center gap-3">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          width={52}
                          height={52}
                          className="size-[52px] shrink-0 rounded-full border-2 border-[#302D4C] object-cover shadow-lg"
                        />
                        <div className="flex flex-col items-center">
                          <p className="text-center text-base md:text-lg font-bold leading-6 text-white">
                            {item.author}
                          </p>
                          <p className="text-sm md:text-base font-medium text-center text-gray-400">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Read the story CTA Button */}
                      <a
                        href={item.storyUrl}
                        className="flex cursor-pointer justify-center items-center gap-2 bg-transparent text-white border border-white hover:text-[#060419] hover:bg-white rounded-full text-base font-bold py-2.5 px-6 max-w-fit whitespace-nowrap transition-colors duration-200 mt-2 shadow-md"
                      >
                        <span>Read the story</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Floating Arrow Button */}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="hidden lg:flex absolute -right-5 xl:-right-7 z-30 size-12 items-center justify-center rounded-full border border-white/20 bg-[#060419]/90 text-white backdrop-blur-sm transition-all hover:border-[#FF5EC4] hover:bg-[#FF5EC4]/10 hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
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

          {/* Bottom Navigation Controls: Left Arrow + Dot Indicators + Right Arrow */}
          <div className="relative z-10 flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95 cursor-pointer shadow-lg"
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="currentColor"
                height="1em"
                width="1em"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
              </svg>
            </button>

            {/* Active Dot Indicators */}
            <div className="flex items-center gap-2 px-2">
              {featuredTestimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex
                      ? 'w-7 bg-[#FF5EC4]'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95 cursor-pointer shadow-lg"
            >
              <svg
                aria-hidden="true"
                className="size-5"
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
    </section>
  );
};
