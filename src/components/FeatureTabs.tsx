'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { productCards, ProductCardData } from '../data/productFeatures';

export const FeatureTabs: React.FC = () => {
  // Each of the 3 rows tracks which container is expanded: 'left' | 'right' | null (balanced 50/50)
  const [rowExpandedState, setRowExpandedState] = useState<{ [rowIdx: number]: 'left' | 'right' | null }>({
    0: null, // Row 1: Newsletters & Podcasts
    1: null, // Row 2: Digital Products & Monetization
    2: null, // Row 3: Community & Websites
  });

  // Mobile: tracks which card IDs are expanded vertically
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);

  // Toggle expansion for a container in a specific row
  const handleToggle = (rowIdx: number, side: 'left' | 'right') => {
    setRowExpandedState((prev) => {
      const currentState = prev[rowIdx];
      if (currentState === side) {
        // Clicking X or active card restores to balanced equal-width (null)
        return { ...prev, [rowIdx]: null };
      }
      // Expand the selected side, smoothly shrinking the opposite side
      return { ...prev, [rowIdx]: side };
    });
  };

  const handleMobileToggle = (cardId: string) => {
    setMobileExpandedId((current) => (current === cardId ? null : cardId));
  };

  const rows: [ProductCardData, ProductCardData][] = [
    [productCards[0], productCards[1]], // Newsletters & Podcasts
    [productCards[2], productCards[3]], // Digital Products & Monetization
    [productCards[4], productCards[5]], // Community & Websites
  ];

  return (
    <section className="bg-cyber-ink">
      <div className="px-5 md:px-8 xl:px-32 py-10 sm:py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-10 lg:gap-16">
            {/* Section Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold tracking-wider uppercase text-accent-pink">
                  Product
                </p>
                <h2 className="clash-grotesk-font-family uppercase font-bold text-4xl md:text-5xl max-w-[569px] text-white tracking-tight">
                  Everything you need to turn attention into growth.
                </h2>
              </div>

              <div className="flex w-full max-w-[557px] flex-col items-start gap-6">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                  Publish your best work, grow your audience, unlock revenue, and understand
                  what&apos;s working. beehiiv brings it all together, no digital duct tape required.
                </p>

                {/* 3D Stacked CTA Button */}
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

            {/* Desktop Bento Rows: 3 horizontal pairs, 2 containers each with smooth expand/shrink */}
            <div className="hidden flex-col gap-6 md:flex">
              {rows.map(([leftCard, rightCard], rowIdx) => {
                const state = rowExpandedState[rowIdx];
                const isLeftExpanded = state === 'left';
                const isRightExpanded = state === 'right';
                const isBalanced = state === null;

                // Width proportions:
                // Balanced: 50% / 50%
                // Left expanded: ~68% Left / ~32% Right
                // Right expanded: ~32% Left / ~68% Right
                const leftFlex = isLeftExpanded ? '68 1 0%' : isRightExpanded ? '32 1 0%' : '50 1 0%';
                const rightFlex = isRightExpanded ? '68 1 0%' : isLeftExpanded ? '32 1 0%' : '50 1 0%';

                return (
                  <div
                    key={rowIdx}
                    className="flex min-h-[38rem] h-[38rem] w-full flex-row items-stretch gap-6"
                  >
                    {/* LEFT CONTAINER */}
                    <div
                      className={`product-bento-container relative min-h-0 min-w-0 overflow-hidden rounded-2xl border bg-gradient-to-b from-[#141038] to-[#0A0822] shadow-xl transition-all duration-600 ease-in-out ${
                        isLeftExpanded
                          ? 'border-white/20 ring-1 ring-[#FF5EC4]/20'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      style={{ flex: leftFlex }}
                    >
                      {/* Mesh Background */}
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
                        <Image
                          alt=""
                          src={leftCard.meshSrc}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>

                      {/* Card Content Area */}
                      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-7 overflow-hidden">
                        {/* Top Header Row */}
                        <div className="flex shrink-0 items-start justify-between gap-4">
                          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                            <h3 className="font-bold text-2xl lg:text-3xl text-white tracking-tight">
                              {leftCard.title}
                            </h3>
                            <p
                              className={`text-sm lg:text-base font-medium text-[#9898D2] leading-snug ${
                                isRightExpanded ? 'line-clamp-2' : ''
                              }`}
                            >
                              {leftCard.desc}
                            </p>
                            <a
                              href="https://app.beehiiv.com/signup"
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex w-fit items-center gap-1.5 text-sm lg:text-base font-semibold text-accent-pink hover:underline pt-1"
                            >
                              Get started free
                              <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1">
                                &rarr;
                              </span>
                            </a>
                          </div>

                          {/* Right Controls: Start building CTA (if expanded) + Plus/X Button */}
                          <div className="flex items-center gap-3 shrink-0">
                            {isLeftExpanded && (
                              <a
                                href="https://app.beehiiv.com/signup"
                                target="_blank"
                                rel="noreferrer"
                                className="custom-box-shadow-button relative hidden sm:inline-flex cursor-pointer justify-center"
                              >
                                <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-lg text-xs lg:text-sm font-bold py-2 px-4 inline-flex justify-center items-center gap-1.5 whitespace-nowrap custom-box-shadow-text relative z-10">
                                  Start building for free
                                </div>
                                <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-lg" />
                                <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-lg" />
                              </a>
                            )}

                            {/* Plus / X Toggle Button */}
                            <button
                              type="button"
                              onClick={() => handleToggle(rowIdx, 'left')}
                              aria-label={isLeftExpanded ? `Close ${leftCard.title} details` : `Expand ${leftCard.title} details`}
                              className="relative flex size-10 lg:size-11 shrink-0 items-center justify-center rounded-xl bg-[#201B4B] text-[#FF5EC4] shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#2B2465] cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                                className={`transition-transform duration-500 ease-in-out ${
                                  isLeftExpanded ? 'rotate-45' : 'rotate-0'
                                }`}
                              >
                                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Body Content: 6 Feature Boxes when Expanded, Dashboard Preview Image when Normal/Collapsed */}
                        {isLeftExpanded ? (
                          <div className="product-expanded-content flex flex-col justify-center flex-1 min-h-0 pt-4 pb-2">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 w-full">
                              {leftCard.features.map((feat, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col items-start gap-2.5 rounded-xl bg-[#18143F]/90 border border-white/5 p-4 transition-all duration-300 hover:bg-[#201B52] hover:border-white/10"
                                >
                                  <div
                                    dangerouslySetInnerHTML={{ __html: feat.svg }}
                                    className="size-6 shrink-0 text-[#C4B5FD]"
                                  />
                                  <div className="flex flex-col gap-1 min-w-0">
                                    <h4 className="text-sm font-bold text-white tracking-tight">{feat.title}</h4>
                                    <p className="text-xs font-normal leading-relaxed text-[#A5A5D6] line-clamp-3">
                                      {feat.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Lower Preview Image */
                          <div
                            onClick={() => isRightExpanded && handleToggle(rowIdx, 'left')}
                            className={`relative w-full flex-1 min-h-0 overflow-hidden flex items-end justify-center pt-2 ${
                              isRightExpanded ? 'cursor-pointer' : ''
                            }`}
                          >
                            <div
                              className="product-card-shot relative w-full h-full transition-transform duration-600 ease-in-out"
                              style={leftCard.shotStyle as React.CSSProperties}
                            >
                              <Image
                                alt={leftCard.shotAlt}
                                src={leftCard.shotSrc}
                                width={leftCard.shotWidth}
                                height={leftCard.shotHeight}
                                className="product-card-shot-img relative h-auto w-full max-h-full object-contain object-top drop-shadow-2xl"
                                priority={leftCard.id === 'newsletters'}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* RIGHT CONTAINER */}
                    <div
                      className={`product-bento-container relative min-h-0 min-w-0 overflow-hidden rounded-2xl border bg-gradient-to-b from-[#141038] to-[#0A0822] shadow-xl transition-all duration-600 ease-in-out ${
                        isRightExpanded
                          ? 'border-white/20 ring-1 ring-[#FF5EC4]/20'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      style={{ flex: rightFlex }}
                    >
                      {/* Mesh Background */}
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
                        <Image
                          alt=""
                          src={rightCard.meshSrc}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>

                      {/* Card Content Area */}
                      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-7 overflow-hidden">
                        {/* Top Header Row */}
                        <div className="flex shrink-0 items-start justify-between gap-4">
                          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                            <h3 className="font-bold text-2xl lg:text-3xl text-white tracking-tight">
                              {rightCard.title}
                            </h3>
                            <p
                              className={`text-sm lg:text-base font-medium text-[#9898D2] leading-snug ${
                                isLeftExpanded ? 'line-clamp-2' : ''
                              }`}
                            >
                              {rightCard.desc}
                            </p>
                            <a
                              href="https://app.beehiiv.com/signup"
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex w-fit items-center gap-1.5 text-sm lg:text-base font-semibold text-accent-pink hover:underline pt-1"
                            >
                              Get started free
                              <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1">
                                &rarr;
                              </span>
                            </a>
                          </div>

                          {/* Right Controls: Start building CTA (if expanded) + Plus/X Button */}
                          <div className="flex items-center gap-3 shrink-0">
                            {isRightExpanded && (
                              <a
                                href="https://app.beehiiv.com/signup"
                                target="_blank"
                                rel="noreferrer"
                                className="custom-box-shadow-button relative hidden sm:inline-flex cursor-pointer justify-center"
                              >
                                <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-lg text-xs lg:text-sm font-bold py-2 px-4 inline-flex justify-center items-center gap-1.5 whitespace-nowrap custom-box-shadow-text relative z-10">
                                  Start building for free
                                </div>
                                <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-lg" />
                                <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-lg" />
                              </a>
                            )}

                            {/* Plus / X Toggle Button */}
                            <button
                              type="button"
                              onClick={() => handleToggle(rowIdx, 'right')}
                              aria-label={isRightExpanded ? `Close ${rightCard.title} details` : `Expand ${rightCard.title} details`}
                              className="relative flex size-10 lg:size-11 shrink-0 items-center justify-center rounded-xl bg-[#201B4B] text-[#FF5EC4] shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#2B2465] cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                                className={`transition-transform duration-500 ease-in-out ${
                                  isRightExpanded ? 'rotate-45' : 'rotate-0'
                                }`}
                              >
                                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Body Content: 6 Feature Boxes when Expanded, Dashboard Preview Image when Normal/Collapsed */}
                        {isRightExpanded ? (
                          <div className="product-expanded-content flex flex-col justify-center flex-1 min-h-0 pt-4 pb-2">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 w-full">
                              {rightCard.features.map((feat, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col items-start gap-2.5 rounded-xl bg-[#18143F]/90 border border-white/5 p-4 transition-all duration-300 hover:bg-[#201B52] hover:border-white/10"
                                >
                                  <div
                                    dangerouslySetInnerHTML={{ __html: feat.svg }}
                                    className="size-6 shrink-0 text-[#C4B5FD]"
                                  />
                                  <div className="flex flex-col gap-1 min-w-0">
                                    <h4 className="text-sm font-bold text-white tracking-tight">{feat.title}</h4>
                                    <p className="text-xs font-normal leading-relaxed text-[#A5A5D6] line-clamp-3">
                                      {feat.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Lower Preview Image */
                          <div
                            onClick={() => isLeftExpanded && handleToggle(rowIdx, 'right')}
                            className={`relative w-full flex-1 min-h-0 overflow-hidden flex items-end justify-center pt-2 ${
                              isLeftExpanded ? 'cursor-pointer' : ''
                            }`}
                          >
                            <div
                              className="product-card-shot relative w-full h-full transition-transform duration-600 ease-in-out"
                              style={rightCard.shotStyle as React.CSSProperties}
                            >
                              <Image
                                alt={rightCard.shotAlt}
                                src={rightCard.shotSrc}
                                width={rightCard.shotWidth}
                                height={rightCard.shotHeight}
                                className="product-card-shot-img relative h-auto w-full max-h-full object-contain object-top drop-shadow-2xl"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View: Vertical Cards Stack with vertical expand */}
            <div className="flex flex-col gap-5 md:hidden">
              {productCards.map((card) => {
                const isExpanded = mobileExpandedId === card.id;

                return (
                  <article
                    key={card.id}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#141038] to-[#0A0822] shadow-lg transition-all duration-500"
                  >
                    {/* Mesh Background */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
                      <Image
                        alt=""
                        src={card.meshSrc}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>

                    <div className="relative z-10 flex flex-col p-5">
                      {/* Mobile Header Row */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-1 flex-col gap-1">
                          <h3 className="font-bold text-xl text-white tracking-tight">{card.title}</h3>
                          <p className="text-sm font-medium text-[#9898D2] leading-snug">{card.desc}</p>
                          <a
                            href="https://app.beehiiv.com/signup"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-pink pt-1"
                          >
                            Get started free &rarr;
                          </a>
                        </div>

                        {/* Plus / X Button */}
                        <button
                          type="button"
                          onClick={() => handleMobileToggle(card.id)}
                          aria-label={isExpanded ? `Close ${card.title}` : `Expand ${card.title}`}
                          className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#201B4B] text-[#FF5EC4] shadow-md transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            className={`transition-transform duration-500 ease-in-out ${
                              isExpanded ? 'rotate-45' : 'rotate-0'
                            }`}
                          >
                            <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                          </svg>
                        </button>
                      </div>

                      {/* Mobile Body Content */}
                      {isExpanded ? (
                        <div className="product-expanded-content flex flex-col gap-4 pt-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {card.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col items-start gap-2 rounded-xl bg-[#18143F]/90 border border-white/5 p-3.5"
                              >
                                <div
                                  dangerouslySetInnerHTML={{ __html: feat.svg }}
                                  className="size-5 shrink-0 text-[#C4B5FD]"
                                />
                                <div className="flex flex-col gap-0.5">
                                  <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                                  <p className="text-xs text-[#A5A5D6] leading-relaxed">{feat.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <a
                            href="https://app.beehiiv.com/signup"
                            target="_blank"
                            rel="noreferrer"
                            className="custom-box-shadow-button relative flex cursor-pointer justify-center w-full mt-2"
                          >
                            <div className="text-white bg-[#2F39BA] border-[#2F39BA] border rounded-lg text-sm font-bold py-2.5 px-4 inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 w-full text-center">
                              Start building for free
                            </div>
                            <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-lg" />
                            <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-lg" />
                          </a>
                        </div>
                      ) : (
                        <div className="relative w-full h-[240px] overflow-hidden flex items-end justify-center pt-3 mt-2">
                          <div
                            className="product-card-shot w-full h-full"
                            style={card.shotStyle as React.CSSProperties}
                          >
                            <Image
                              alt={card.shotAlt}
                              src={card.shotSrc}
                              width={card.shotWidth}
                              height={card.shotHeight}
                              className="product-card-shot-img relative h-auto w-full object-contain object-top"
                            />
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
