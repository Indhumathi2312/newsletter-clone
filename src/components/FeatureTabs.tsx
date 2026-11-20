'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { platformFeatures } from '../data/features';

interface CardConfig {
  id: string;
  flex: number;
  title: string;
  desc: string;
  meshSrc: string;
  shotSrc: string;
  shotAlt: string;
  shotStyle: React.CSSProperties;
}

const cardConfigs: CardConfig[] = [
  {
    id: 'newsletters',
    flex: 2,
    title: 'Newsletters',
    desc: 'Beautiful templates, a custom editor, and analytics built in.',
    meshSrc: '/images/newsletters.webp',
    shotSrc: '/images/newsletter.png',
    shotAlt: 'Newsletter editor with the Turn into menu open',
    shotStyle: {
      ['--pcs-t-m' as any]: 'translate(calc(0.5rem - 0.55rem), calc(8.5% - 0rem)) scale(0.9)',
      ['--pcs-o-m' as any]: 'top center',
      ['--pcs-fit-m' as any]: 'contain',
      ['--pcs-pos-m' as any]: 'top',
      ['--pcs-t-d' as any]: 'translate(calc(5.5rem - 1.15rem), calc(0.5% - 0rem)) scale(0.96)',
      ['--pcs-o-d' as any]: 'top center',
      ['--pcs-fit-d' as any]: 'contain',
      ['--pcs-pos-d' as any]: 'top',
    },
  },
  {
    id: 'podcasts',
    flex: 1,
    title: 'Podcasts',
    desc: 'Host, grow, and monetize your show.',
    meshSrc: '/images/podcasts.webp',
    shotSrc: '/images/podcast.png',
    shotAlt: 'Podcast episode player and analytics',
    shotStyle: {
      ['--pcs-t-m' as any]: 'translate(calc(-1.15rem - -1.7rem), calc(7% - 0rem)) scale(0.93)',
      ['--pcs-o-m' as any]: 'top center',
      ['--pcs-fit-m' as any]: 'contain',
      ['--pcs-pos-m' as any]: 'top',
      ['--pcs-t-d' as any]: 'translate(calc(-4rem - -13.9rem), calc(39.5% - 0rem)) scale(1.64)',
      ['--pcs-o-d' as any]: 'center',
      ['--pcs-fit-d' as any]: 'contain',
      ['--pcs-pos-d' as any]: 'center',
    },
  },
  {
    id: 'digital-products',
    flex: 1,
    title: 'Digital Products',
    desc: 'Versatile offerings. 0% Commissions.',
    meshSrc: '/images/digital-products.webp',
    shotSrc: '/images/digital-products-2.png',
    shotAlt: 'Digital products dashboard',
    shotStyle: {
      ['--pcs-t-m' as any]: 'translate(calc(0.1rem - 0rem), calc(0% - 0rem)) scale(0.93)',
      ['--pcs-o-m' as any]: 'top center',
      ['--pcs-fit-m' as any]: 'contain',
      ['--pcs-pos-m' as any]: 'top',
      ['--pcs-t-d' as any]: 'translate(calc(-0.05rem - -12.5rem), calc(-16.5% - 0rem)) scale(1.81)',
      ['--pcs-o-d' as any]: 'top center',
      ['--pcs-fit-d' as any]: 'contain',
      ['--pcs-pos-d' as any]: 'top',
    },
  },
  {
    id: 'monetization',
    flex: 2,
    title: 'Monetization',
    desc: 'Earn with the ad Network, paid subscriptions, sponsorships and more.',
    meshSrc: '/images/monetization.webp',
    shotSrc: '/images/monetization.png',
    shotAlt: 'Monetization and revenue metrics',
    shotStyle: {
      ['--pcs-t-m' as any]: 'translate(calc(0rem - -1.1rem), calc(0% - 0rem)) scale(1)',
      ['--pcs-o-m' as any]: 'top center',
      ['--pcs-fit-m' as any]: 'contain',
      ['--pcs-pos-m' as any]: 'top',
      ['--pcs-t-d' as any]: 'translate(calc(-2.7rem - -17.85rem), calc(34.5% - -0.7rem)) scale(1.45)',
      ['--pcs-o-d' as any]: 'bottom center',
      ['--pcs-fit-d' as any]: 'contain',
      ['--pcs-pos-d' as any]: 'bottom',
    },
  },
  {
    id: 'community',
    flex: 2,
    title: 'Community',
    desc: 'Engage your audience with integrated channels and spaces.',
    meshSrc: '/images/newsletters.webp',
    shotSrc: '/images/community.png',
    shotAlt: 'Community channels and posts',
    shotStyle: {
      ['--pcs-t-m' as any]: 'translate(calc(-2.55rem - -12.7rem), calc(0% - -0.85rem)) scale(2.07)',
      ['--pcs-o-m' as any]: 'top center',
      ['--pcs-fit-m' as any]: 'contain',
      ['--pcs-pos-m' as any]: 'top',
      ['--pcs-t-d' as any]: 'translate(calc(-2.95rem - -20rem), calc(-1.5% - 0rem)) scale(1.57)',
      ['--pcs-o-d' as any]: 'top center',
      ['--pcs-fit-d' as any]: 'contain',
      ['--pcs-pos-d' as any]: 'top',
    },
  },
  {
    id: 'websites',
    flex: 1,
    title: 'Websites',
    desc: 'Build on-brand pages without a line of code.',
    meshSrc: '/images/websites.webp',
    shotSrc: '/images/websites.png',
    shotAlt: 'Website builder interface',
    shotStyle: {
      ['--pcs-t-m' as any]: 'translate(calc(-3.2rem - -6.5rem), calc(13.5% - 0rem)) scale(1.33)',
      ['--pcs-o-m' as any]: 'top center',
      ['--pcs-fit-m' as any]: 'contain',
      ['--pcs-pos-m' as any]: 'top',
      ['--pcs-t-d' as any]: 'translate(calc(11.2rem - 0.35rem), calc(-31.5% - -12.3rem)) scale(1.63)',
      ['--pcs-o-d' as any]: 'center',
      ['--pcs-fit-d' as any]: 'contain',
      ['--pcs-pos-d' as any]: 'center',
    },
  },
];

export const FeatureTabs: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCard((current) => (current === id ? null : id));
  };

  const row1Cards = [cardConfigs[0], cardConfigs[1]]; // Newsletters (flex 2), Podcasts (flex 1)
  const row2Cards = [cardConfigs[2], cardConfigs[3]]; // Digital Products (flex 1), Monetization (flex 2)
  const row3Cards = [cardConfigs[4], cardConfigs[5]]; // Community (flex 2), Websites (flex 1)

  const renderCard = (card: CardConfig, isMobile: boolean = false) => {
    const isFlipped = flippedCard === card.id;
    const featureData = platformFeatures.find((f) => f.id === card.id);

    return (
      <div
        key={card.id}
        className={`product-card-flip-tile relative min-h-0 min-w-0 overflow-hidden rounded-xl border border-subtle bg-[#0D0B28] transition-all duration-300 ${
          isMobile ? 'h-[440px] w-full' : ''
        }`}
        data-card-id={card.id}
        data-flex={card.flex}
        style={{
          flexGrow: isMobile ? undefined : card.flex,
        }}
      >
        {/* Background Mesh */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0D0B28]">
          <Image
            alt={card.title}
            src={card.meshSrc}
            fill
            className="object-cover opacity-80"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        {/* 1. RESTING FRONT VIEW */}
        <div
          className={`product-card-flip-resting absolute inset-0 flex min-h-0 w-full flex-col overflow-hidden rounded-xl bg-transparent text-left transition-opacity duration-300 ${
            isFlipped ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
          }`}
        >
          {/* Card Header Content */}
          <div className="relative z-10 flex shrink-0 items-start justify-between gap-4 p-5 sm:p-6">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <h3 className="text-xl font-bold text-white md:text-2xl">{card.title}</h3>
              <p className="line-clamp-2 text-sm font-medium text-secondary md:text-base">
                {card.desc}
              </p>
              <a
                href="https://app.beehiiv.com/signup"
                target="_blank"
                rel="noreferrer"
                className="group relative z-10 mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-pink hover:underline md:text-base"
              >
                Get started free
                <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="h-4 w-4"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Expand (+) Button */}
            <button
              type="button"
              onClick={() => toggleFlip(card.id)}
              aria-label={`Show ${card.title} details`}
              className="relative z-20 flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-[#FF5EC4] transition-transform duration-300 ease-out hover:scale-105 hover:bg-white/10 sm:size-11"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="size-5 sm:size-6"
              >
                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
              </svg>
            </button>
          </div>

          {/* Screenshot Illustration */}
          <div className="relative mt-auto w-full flex-1 overflow-hidden">
            <div className="product-card-shot w-full" style={card.shotStyle}>
              <Image
                alt={card.shotAlt}
                src={card.shotSrc}
                width={1400}
                height={1050}
                className="product-card-shot-img relative h-auto w-full"
                priority={card.id === 'newsletters'}
              />
            </div>
          </div>
        </div>

        {/* 2. EXPANDED / FLIPPED PANEL VIEW */}
        <div
          className={`product-card-flip-panel absolute inset-0 z-20 flex h-full w-full flex-col overflow-y-auto rounded-xl bg-[#0D0B28]/95 p-5 backdrop-blur-xl transition-opacity duration-300 sm:p-6 ${
            isFlipped ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {/* Top header with Close (x) Button */}
          <div className="flex shrink-0 items-center justify-between border-b border-subtle pb-4">
            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">{card.title}</h3>
              <p className="text-xs text-secondary sm:text-sm">{card.desc}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFlip(card.id)}
              aria-label={`Close ${card.title} details`}
              className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-[#FF5EC4] transition-all hover:bg-white/10 sm:size-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="size-5 sm:size-6"
              >
                <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.51a12,12,0,0,1,17,17L145,128Z" />
              </svg>
            </button>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid flex-1 grid-cols-1 gap-3 py-4 sm:grid-cols-2 lg:gap-4">
            {featureData?.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 rounded-lg border border-subtle/50 bg-surface-2/60 p-3 sm:p-3.5"
              >
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent-pink" />
                  <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                </div>
                <p className="text-xs leading-relaxed text-[#9898D2] sm:text-xs">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom link */}
          <div className="mt-auto border-t border-subtle pt-3">
            <Link
              href={`/${card.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-pink hover:underline"
            >
              Explore {card.title} &rarr;
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-cyber-ink">
      <div className="px-5 py-10 sm:py-16 md:px-8 md:py-24 xl:px-32">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-10 lg:gap-16">
            {/* Section Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-accent-pink">Product</p>
                <h2 className="clash-grotesk-font-family max-w-[569px] text-4xl font-bold uppercase text-white md:text-5xl">
                  Everything you need to turn attention into growth.
                </h2>
              </div>

              <div className="flex w-full max-w-[557px] flex-col items-start gap-6">
                <p className="text-lg font-medium text-white md:text-xl">
                  Publish your best work, grow your audience, unlock new revenue, and understand
                  what&apos;s working. beehiiv brings it all together, no digital duct tape
                  required.
                </p>

                {/* Iconic 3D Layered CTA Button */}
                <a
                  href="https://app.beehiiv.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px]"
                >
                  <div className="custom-box-shadow-text relative z-10 inline-flex h-full w-full items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-[#2F39BA] bg-[#2F39BA] px-6 py-2 text-center text-base font-bold leading-6 text-white lg:text-lg">
                    Sign up for free
                  </div>
                  <div className="custom-box-shadow-2 absolute inset-px rounded-[6px] border border-[#0B0D2A] bg-[#F092DD]" />
                  <div className="custom-box-shadow-1 absolute inset-px rounded-[6px] border border-[#0B0D2A] bg-[#FFC8EB]" />
                </a>
              </div>
            </div>

            {/* Desktop Bento Grid */}
            <div
              className="hidden flex-col gap-4 md:flex md:gap-6"
              style={{ ['--pcs-row-max-h' as any]: '38rem' }}
            >
              {/* Row 1: Newsletters (2), Podcasts (1) */}
              <div className="flex h-[var(--pcs-row-max-h)] max-h-[var(--pcs-row-max-h)] shrink-0 flex-row items-stretch gap-6">
                {row1Cards.map((c) => renderCard(c))}
              </div>

              {/* Row 2: Digital Products (1), Monetization (2) */}
              <div className="flex h-[var(--pcs-row-max-h)] max-h-[var(--pcs-row-max-h)] shrink-0 flex-row items-stretch gap-6">
                {row2Cards.map((c) => renderCard(c))}
              </div>

              {/* Row 3: Community (2), Websites (1) */}
              <div className="flex h-[var(--pcs-row-max-h)] max-h-[var(--pcs-row-max-h)] shrink-0 flex-row items-stretch gap-6">
                {row3Cards.map((c) => renderCard(c))}
              </div>
            </div>

            {/* Mobile View: Vertical Cards Stack */}
            <div className="flex flex-col gap-4 md:hidden">
              {cardConfigs.map((c) => renderCard(c, true))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
