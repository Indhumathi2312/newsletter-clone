'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { productCards, ProductCardData } from '../data/productFeatures';

export const FeatureTabs: React.FC = () => {
  // Each row tracks which container is currently large ('left' | 'right')
  const [rowActiveSide, setRowActiveSide] = useState<{ [rowIdx: number]: 'left' | 'right' }>({
    0: 'left',  // Row 1: Newsletters (left, flex 2) + Podcasts (right, flex 1)
    1: 'right', // Row 2: Digital Products (left, flex 1) + Monetization (right, flex 2)
    2: 'left',  // Row 3: Community (left, flex 2) + Websites (right, flex 1)
  });

  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleCardClick = (rowIdx: number, side: 'left' | 'right', cardId: string) => {
    // Left container click panna left large agi right small aagum,
    // Right container click panna right large agi left small aagum.
    setRowActiveSide((prev) => ({
      ...prev,
      [rowIdx]: side,
    }));

    // If the other container in the same row was flipped open, close its panel
    if (expandedCardId && expandedCardId !== cardId) {
      setExpandedCardId(null);
    }
  };

  const handlePlusClick = (rowIdx: number, side: 'left' | 'right', cardId: string) => {
    // Ensure this container is large
    setRowActiveSide((prev) => ({
      ...prev,
      [rowIdx]: side,
    }));
    // Toggle the flipped details view
    setExpandedCardId((current) => (current === cardId ? null : cardId));
  };

  const handleClose = () => {
    setExpandedCardId(null);
  };

  const rows: [ProductCardData, ProductCardData][] = [
    [productCards[0], productCards[1]], // Newsletters, Podcasts
    [productCards[2], productCards[3]], // Digital Products, Monetization
    [productCards[4], productCards[5]], // Community, Websites
  ];

  const renderCard = (
    card: ProductCardData,
    flexGrow: number,
    rowIdx: number,
    side: 'left' | 'right'
  ) => {
    const isExpanded = expandedCardId === card.id;
    const isSmall = flexGrow === 1;

    return (
      <div
        key={card.id}
        className={`product-card-flip-tile relative min-h-0 min-w-0 overflow-hidden rounded-xl border border-subtle bg-[#0D0B28] cursor-pointer transition-all duration-300 hover:border-white/20`}
        data-card-id={card.id}
        data-flex={flexGrow}
        style={{
          flexGrow,
          flexBasis: '0%',
        }}
      >
        {/* Background Mesh Image */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0D0B28]">
          <Image
            alt={card.title}
            src={card.meshSrc}
            fill
            className="object-fill"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        {/* 1. RESTING FRONT VIEW */}
        <div
          className={`product-card-flip-resting absolute inset-0 flex min-h-0 w-full flex-col overflow-hidden rounded-xl bg-transparent text-left transition-opacity duration-300 ${
            isExpanded ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          {/* Full-card clickable button to toggle active container and resize */}
          <button
            type="button"
            onClick={() => handleCardClick(rowIdx, side, card.id)}
            aria-label={`Select ${card.title}`}
            className="absolute inset-0 z-0 cursor-pointer"
            aria-hidden={isExpanded}
            tabIndex={isExpanded ? -1 : 0}
          />

          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="relative flex h-full min-h-0 w-full flex-col gap-4 overflow-hidden p-4 sm:gap-5 sm:p-5 lg:gap-6 lg:p-0">
              <div className="relative z-10 flex shrink-0 items-start justify-between gap-4 transition-opacity duration-150 ease-out lg:px-6 lg:pt-6 opacity-100">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="font-bold text-xl md:text-2xl text-white">{card.title}</h3>
                  <p className="text-base md:text-lg font-medium text-secondary">{card.desc}</p>
                  <a
                    href="https://app.beehiiv.com/signup"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base md:text-lg font-medium group pointer-events-auto relative z-10 inline-flex w-fit items-center gap-1.5 text-accent-pink hover:underline"
                  >
                    Get started free
                    <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none">
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
                    </span>
                  </a>
                </div>

                {/* Plus (+) Button to open full feature details */}
                <button
                  type="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlusClick(rowIdx, side, card.id);
                  }}
                  aria-label={`Show ${card.title} details`}
                  className="pointer-events-auto relative z-10 flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-flamingo transition-transform duration-300 ease-out hover:scale-105 sm:size-11"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="sm:size-7"
                  >
                    <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                  </svg>
                </button>
              </div>

              {/* Screenshot Illustration */}
              <div className="relative w-full">
                <div
                  className="product-card-shot w-full transition-transform duration-300"
                  style={card.shotStyle as React.CSSProperties}
                >
                  <Image
                    alt={card.shotAlt}
                    src={card.shotSrc}
                    width={card.shotWidth}
                    height={card.shotHeight}
                    className="product-card-shot-img relative h-auto w-full"
                    priority={card.id === 'newsletters'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. EXPANDED / FLIPPED PANEL VIEW */}
        <div
          className={`product-card-flip-panel absolute inset-0 z-20 flex h-full w-full flex-col overflow-y-auto rounded-xl bg-surface-2 p-4 sm:p-5 lg:h-full lg:overflow-hidden lg:p-6 transition-opacity duration-300 ${
            isExpanded ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={!isExpanded}
        >
          <div className="flex h-full min-h-0 flex-col gap-6">
            <div className="relative flex shrink-0 flex-col items-start justify-between sm:flex-row sm:items-center">
              <button
                type="button"
                tabIndex={isExpanded ? 0 : -1}
                onClick={handleClose}
                className="pointer-events-auto absolute right-0 top-0 flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-flamingo transition-opacity hover:opacity-90 sm:right-0 sm:top-0 sm:size-11"
                aria-label={`Close ${card.title} details`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="sm:size-7"
                >
                  <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
                </svg>
              </button>

              <div className="flex w-full flex-col gap-4 pr-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pr-16">
                <div className="flex w-full min-w-0 flex-col gap-1.5 max-w-[420px]">
                  <h3 className="text-2xl font-bold leading-7 text-white">{card.panelTitle}</h3>
                  <p className="text-base sm:text-lg font-medium leading-[26px] text-ghost">
                    {card.panelDesc}
                  </p>
                </div>

                <a
                  href="https://app.beehiiv.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px] shrink-0"
                >
                  <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-[6px] text-base lg:text-lg font-bold leading-6 py-2 px-6 inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 flex h-full w-full items-center justify-center text-center">
                    Sign up for free
                  </div>
                  <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                  <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                </a>
              </div>
            </div>

            {/* 6 Feature Tiles Grid */}
            <div className="grid flex-1 min-h-0 gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3">
              {card.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-3 sm:gap-4 rounded-xl bg-surface-3 p-3.5 sm:px-4 sm:py-5 lg:h-full lg:min-h-0"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: feat.svg }}
                    className="size-6 shrink-0 text-cosmic-lavender"
                  />
                  <div className="flex w-full flex-col gap-1 lg:min-h-0 lg:overflow-hidden">
                    <h4 className="text-sm font-bold leading-5 text-white">{feat.title}</h4>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-ghost line-clamp-3">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-cyber-ink">
      <div className="px-5 md:px-8 xl:px-32 py-10 sm:py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-10 lg:gap-16">
            {/* Section Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-accent-pink">Product</p>
                <h2 className="clash-grotesk-font-family uppercase font-bold text-4xl md:text-5xl max-w-[569px] text-white">
                  Everything you need to turn attention into growth.
                </h2>
              </div>

              <div className="flex w-full max-w-[557px] flex-col items-start gap-6">
                <p className="text-lg md:text-xl font-medium text-white">
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
                  <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-[6px] text-base lg:text-lg font-bold leading-6 py-2 px-6 inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 flex h-full w-full items-center justify-center text-center">
                    Sign up for free
                  </div>
                  <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                  <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                </a>
              </div>
            </div>

            {/* Desktop Bento Grid: 3 rows with dynamic width animation on click */}
            <div
              className="hidden flex-col gap-4 md:flex md:gap-6"
              style={{ ['--pcs-row-max-h' as any]: '38rem' }}
            >
              {rows.map(([cardA, cardB], rowIdx) => {
                // If left container is active in this row: Left is flex 2 (large), Right is flex 1 (small)
                // If right container is active in this row: Right is flex 2 (large), Left is flex 1 (small)
                const isLeftActive = rowActiveSide[rowIdx] === 'left';
                const flexA = isLeftActive ? 2 : 1;
                const flexB = isLeftActive ? 1 : 2;

                return (
                  <div
                    key={rowIdx}
                    className="flex h-[var(--pcs-row-max-h)] max-h-[var(--pcs-row-max-h)] shrink-0 flex-row items-stretch gap-6"
                  >
                    {renderCard(cardA, flexA, rowIdx, 'left')}
                    {renderCard(cardB, flexB, rowIdx, 'right')}
                  </div>
                );
              })}
            </div>

            {/* Mobile View: Vertical Cards Stack */}
            <div className="flex flex-col gap-4 md:hidden">
              {productCards.map((card) => {
                const isExpanded = expandedCardId === card.id;
                return (
                  <article
                    key={card.id}
                    className="relative isolate overflow-hidden rounded-xl border border-subtle bg-[#0D0B28]"
                  >
                    {!isExpanded && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[#0D0B28]"
                      >
                        <Image
                          alt={card.title}
                          src={card.meshSrc}
                          fill
                          className="object-fill"
                          sizes="100vw"
                        />
                      </div>
                    )}

                    <div className="relative flex flex-col">
                      {!isExpanded ? (
                        <div className="relative flex h-full min-h-0 w-full flex-col gap-4 overflow-hidden p-4 sm:gap-5 sm:p-5">
                          <div className="relative z-10 flex shrink-0 items-start justify-between gap-4">
                            <div className="flex min-w-0 flex-1 flex-col gap-2">
                              <h3 className="font-bold text-xl text-white">{card.title}</h3>
                              <p className="text-base font-medium text-secondary">{card.desc}</p>
                              <a
                                href="https://app.beehiiv.com/signup"
                                target="_blank"
                                rel="noreferrer"
                                className="text-base font-medium group pointer-events-auto relative z-10 inline-flex w-fit items-center gap-1.5 text-accent-pink"
                              >
                                Get started free &rarr;
                              </a>
                            </div>

                            <button
                              type="button"
                              onClick={() => setExpandedCardId(card.id)}
                              aria-label={`Show ${card.title} details`}
                              className="pointer-events-auto relative z-10 flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-flamingo sm:size-11"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                                className="sm:size-7"
                              >
                                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                              </svg>
                            </button>
                          </div>

                          <div className="relative w-full">
                            <div
                              className="product-card-shot w-full"
                              style={card.shotStyle as React.CSSProperties}
                            >
                              <Image
                                alt={card.shotAlt}
                                src={card.shotSrc}
                                width={card.shotWidth}
                                height={card.shotHeight}
                                className="product-card-shot-img relative h-auto w-full"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex h-full min-h-0 w-full flex-col overflow-clip bg-surface-2 p-4 pt-12 sm:p-5">
                          <button
                            type="button"
                            onClick={handleClose}
                            className="absolute right-4 top-4 z-20 flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-flamingo sm:size-11"
                            aria-label={`Close ${card.title} details`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                              className="sm:size-7"
                            >
                              <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
                            </svg>
                          </button>

                          <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1.5 pr-12">
                              <h3 className="text-xl font-bold text-white">{card.panelTitle}</h3>
                              <p className="text-sm font-medium text-ghost">{card.panelDesc}</p>
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              {card.features.map((feat, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col items-start gap-3 rounded-xl bg-surface-3 p-3.5"
                                >
                                  <div
                                    dangerouslySetInnerHTML={{ __html: feat.svg }}
                                    className="size-6 shrink-0 text-cosmic-lavender"
                                  />
                                  <div className="flex flex-col gap-1">
                                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                                    <p className="text-xs font-medium text-ghost">{feat.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <a
                              href="https://app.beehiiv.com/signup"
                              target="_blank"
                              rel="noreferrer"
                              className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px] w-full"
                            >
                              <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-[6px] text-base font-bold leading-6 py-2 px-6 inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 flex h-full w-full items-center justify-center text-center">
                                Sign up for free
                              </div>
                              <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                              <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
