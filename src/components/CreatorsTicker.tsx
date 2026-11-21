'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { row1Items, row2Items } from '../data/creators';
import { TickerItem } from '../types';

export const CreatorsTicker: React.FC = () => {
  // Seamless loop duplicates
  const row1Marquee = [...row1Items, ...row1Items];
  const row2Marquee = [...row2Items, ...row2Items];

  const renderCard = (item: TickerItem, key: string) => {
    if (item.type === 'creator') {
      const { name, publication, imageSrc } = item.data;
      return (
        <div
          key={key}
          className="relative mx-2 h-[300px] w-[220px] flex-shrink-0 overflow-hidden rounded-xl md:mx-3 md:h-[425px] md:w-[308px]"
        >
          <Image
            src={imageSrc}
            alt={name}
            width={400}
            height={520}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <h3 className="font-bold text-xl text-white">{name}</h3>
            <p className="text-base md:text-lg font-medium mt-1 text-[#9898D2]">{publication}</p>
          </div>
        </div>
      );
    }

    // Stat card item
    const { stat, description, logoSrc, logoAlt, caseStudyUrl } = item.data;
    return (
      <Link
        key={key}
        href={caseStudyUrl}
        className="flex mx-2 h-[300px] w-[220px] flex-shrink-0 overflow-hidden rounded-xl md:mx-3 md:h-[425px] md:w-[308px] flex-col justify-between bg-[#0D0B28] px-4 py-5 transition-colors hover:bg-[#141230] md:px-6 md:py-8 border border-white/5"
      >
        <div className="flex h-10 w-full shrink-0 items-start overflow-hidden md:h-[60px]">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={202}
            height={32}
            className="h-8 w-auto max-w-full object-contain object-left"
          />
        </div>

        <div className="flex w-full min-w-0 flex-col">
          <p className="clash-grotesk-font-family uppercase font-bold text-4xl leading-10 text-[#B3B8F0] md:text-[64px] md:leading-[68px]">
            {stat}
          </p>
          <p className="text-sm font-bold leading-5 text-[#B3B8F0] md:text-base md:leading-6 max-w-[215px]">
            {description}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <section className="bg-cyber-ink">
      <div className="py-10 sm:py-12 md:py-16">
        <div className="flex flex-col gap-10 lg:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center px-5 md:px-8 xl:px-32">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-medium text-accent-pink">Customers</p>
                <h2 className="clash-grotesk-font-family uppercase font-bold text-4xl md:text-5xl max-w-[750px] text-white">
                  Trusted by names you know.
                </h2>
              </div>
              <p className="text-lg md:text-xl font-medium max-w-[770px] text-white">
                From solo writers to globally recognized names, beehiiv helps creators, journalists,
                entertainers, athletes, and more reach millions of people every day.
              </p>
            </div>

            {/* 3D CTA Button */}
            <a
              href="https://app.beehiiv.com/signup"
              target="_blank"
              rel="noreferrer"
              className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px]"
            >
              <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-[6px] text-base lg:text-lg font-bold leading-6 py-2 px-6 inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 flex h-full w-full items-center justify-center text-center">
                Sign up for free
              </div>
              <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
              <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
            </a>
          </div>

          {/* Dual Marquee Tickers with edge gradient mask */}
          <div
            className="flex flex-col gap-4 overflow-hidden md:gap-7"
            style={{
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
              maskImage:
                'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            {/* Ticker Row 1 - scrolling left */}
            <div className="ticker h-[300px] md:h-[425px] overflow-hidden">
              <div className="ticker-image-container flex items-stretch animate-ticker-left">
                {row1Marquee.map((item, idx) => renderCard(item, `r1-${idx}`))}
              </div>
            </div>

            {/* Ticker Row 2 - scrolling right */}
            <div className="ticker h-[300px] md:h-[425px] overflow-hidden">
              <div className="ticker-image-container flex items-stretch animate-ticker-right">
                {row2Marquee.map((item, idx) => renderCard(item, `r2-${idx}`))}
              </div>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="mx-auto flex max-w-screen-2xl justify-center px-4 md:px-8">
            <Link
              href="/case-studies"
              className="text-base md:text-lg font-medium inline-flex items-center gap-1.5 text-white transition-colors hover:text-accent-pink"
            >
              See all customer stories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
