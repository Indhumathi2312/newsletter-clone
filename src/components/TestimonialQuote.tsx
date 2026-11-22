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
    <section className="bg-cyber-ink relative z-20 py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="px-5 md:px-8 xl:px-32 mx-auto max-w-screen-xl">
        <div className="relative flex flex-col items-center gap-10">
          
          {/* Plain Open Showcase: No container box/border/card styling */}
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            {/* Seamless Sliding Track */}
            <div
              className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {featuredTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full min-w-full shrink-0 flex flex-col items-center justify-center px-4 py-4 md:py-8"
                >
                  <div className="mx-auto flex w-full max-w-[800px] flex-col items-center text-center gap-6">
                    {/* Quote Text */}
                    <p className="text-xl sm:text-2xl md:text-[30px] font-medium leading-relaxed md:leading-[1.4] text-white tracking-tight max-w-3xl min-h-[96px] flex items-center justify-center !border-0 !border-none !p-0 !m-0">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Author Profile */}
                    <div className="mt-2 flex flex-col items-center gap-3">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        width={56}
                        height={56}
                        className="size-[56px] shrink-0 rounded-full border border-white/20 object-cover shadow-lg"
                      />
                      <div className="flex flex-col items-center">
                        <p className="text-center text-lg md:text-xl font-bold leading-6 text-white">
                          {item.author}
                        </p>
                        <p className="text-sm md:text-base font-medium text-center text-[#9898D2]">
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

          {/* Navigation Controls: Left Arrow + 10 Dots + Right Arrow */}
          <div className="relative z-10 flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#FF5EC4] hover:bg-[#FF5EC4]/10 active:scale-95 cursor-pointer shadow-lg"
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

            {/* Active Dot Indicators */}
            <div className="flex items-center gap-2 px-2 flex-wrap justify-center max-w-[280px]">
              {featuredTestimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1} of ${length}`}
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
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#FF5EC4] hover:bg-[#FF5EC4]/10 active:scale-95 cursor-pointer shadow-lg"
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
    </section>
  );
};
