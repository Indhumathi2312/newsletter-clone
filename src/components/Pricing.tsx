'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  subscriberTiers,
  annualPrices,
  monthlyPrices,
  averageAdSavings,
  allPlansInclude,
  pricingCards,
  tooltipDetails,
  PricingCardPlan,
} from '../data/pricing';

export const Pricing: React.FC = () => {
  const [sliderStep, setSliderStep] = useState<number>(0);
  const [billingPeriod, setBillingPeriod] = useState<'yearly' | 'monthly'>('yearly');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const subscriberCount = subscriberTiers[sliderStep] ?? 1000;
  const maxStep = subscriberTiers.length - 1;
  const progressPercent = (sliderStep / maxStep) * 100;
  const currentAdSavings = averageAdSavings[sliderStep];

  // Helper to format subscriber display count
  const formatSubscribers = (step: number) => {
    if (step >= maxStep) return '250,000+';
    return subscriberTiers[step].toLocaleString('en-US');
  };

  // Helper to get card price and billing note
  const getCardPriceInfo = (planId: 'free' | 'lite' | 'pro' | 'enterprise') => {
    if (planId === 'enterprise') {
      return {
        price: 'Custom',
        period: '',
        note: '',
        isAvailable: true,
      };
    }

    const priceList = billingPeriod === 'yearly' ? annualPrices[planId] : monthlyPrices[planId];
    const priceVal = priceList[sliderStep];

    if (planId === 'free') {
      if (priceVal === null) {
        return {
          price: 'Unavailable',
          period: '',
          note: '',
          isAvailable: false,
        };
      }
      return {
        price: '$0',
        period: '',
        note: 'Free forever',
        isAvailable: true,
      };
    }

    if (priceVal === null) {
      return {
        price: 'Contact sales',
        period: '',
        note: '',
        isAvailable: false,
      };
    }

    return {
      price: `$${priceVal}`,
      period: '/mo',
      note: billingPeriod === 'yearly' ? 'Yearly billing' : 'Monthly billing',
      isAvailable: true,
    };
  };

  // Tooltip toggle handler
  const handleTooltipClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTooltip((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-cyber-ink relative z-20">
      <div className="px-5 md:px-8 xl:px-32 py-10 sm:py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-16">
            {/* 1. Header Area */}
            <div className="flex flex-col gap-6 items-center text-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-semibold tracking-wider uppercase text-accent-pink">
                    Pricing
                  </p>
                  <h2 className="clash-grotesk-font-family uppercase font-bold text-4xl md:text-5xl text-white">
                    build your way.
                  </h2>
                </div>
                <p className="text-lg md:text-xl font-medium text-white max-w-2xl">
                  Create the best content of your career with the plan that works for you.
                </p>
              </div>

              {/* 3D CTA Button */}
              <a
                href="https://app.beehiiv.com/signup"
                target="_blank"
                rel="noreferrer"
                className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px]"
              >
                <div className="text-white bg-[#100e22] border border-[#ffffff33] rounded-[6px] text-base lg:text-lg font-bold leading-6 py-2 px-6 inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 flex h-full w-full items-center justify-center text-center">
                  Find the best plan for you
                </div>
                <div className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
                <div className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
              </a>
            </div>

            {/* 2. "All plans include" Pill Bar */}
            <div className="flex w-full flex-col items-start gap-6 lg:items-center">
              <div className="flex w-full flex-col items-start gap-5 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
                <p className="text-[18px] font-bold leading-[26px] text-ghost">
                  All plans include
                </p>

                {/* Mobile list */}
                <div className="flex flex-col items-start gap-3 lg:hidden">
                  <div className="flex items-center gap-3">
                    {allPlansInclude.slice(0, 3).map((item) => (
                      <div key={item.label} className="flex items-center gap-1.5">
                        <PillIcon icon={item.icon} />
                        <p className="text-xs font-medium leading-4 text-ghost">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {allPlansInclude.slice(3).map((item) => (
                      <div key={item.label} className="flex items-center gap-1.5">
                        <PillIcon icon={item.icon} />
                        <p className="text-xs font-medium leading-4 text-ghost">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop pill badges */}
                <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-2">
                  {allPlansInclude.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-center gap-1.5 rounded-md border border-[#302D4C] bg-[#141230]/40 px-3 py-1.5"
                    >
                      <PillIcon icon={item.icon} />
                      <p className="text-xs font-medium leading-4 text-ghost">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Interactive Subscriber Range Slider Bar & Billing Switch */}
            <div className="flex w-full flex-col mt-4">
              <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
                {/* Left: Dynamic Pricing For Count */}
                <div className="flex items-end gap-1.5 whitespace-nowrap text-left shrink-0">
                  <p className="text-base leading-6 text-ghost">Pricing for</p>
                  <p className="text-2xl font-bold leading-7 tabular-nums text-[#ff5ec4]">
                    {formatSubscribers(sliderStep)}
                  </p>
                  <p className="text-base leading-6 text-ghost">subscribers</p>
                </div>

                {/* Center: Interactive Range Slider */}
                <div className="relative flex h-7 w-full min-w-0 items-center lg:max-w-xl lg:flex-1">
                  {/* Progress track gradient */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 h-1.5 rounded-full"
                    style={{
                      background: `linear-gradient(to right, #ff5ec4 ${progressPercent}%, rgba(146, 153, 230, 0.3) ${progressPercent}%)`,
                    }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={maxStep}
                    step={1}
                    value={sliderStep}
                    onChange={(e) => setSliderStep(parseInt(e.target.value, 10))}
                    className="eid43-pricing-slider z-10 w-full"
                    aria-label="Subscribers"
                  />
                </div>

                {/* Right: Billing Cycle Toggle (Yearly vs Monthly) */}
                <div
                  aria-label="Billing period"
                  role="group"
                  className="flex w-fit shrink-0 items-center gap-2 self-start rounded-full border border-[#302D4C] bg-[#141230] p-1 lg:self-center"
                >
                  <button
                    type="button"
                    aria-pressed={billingPeriod === 'yearly'}
                    onClick={() => setBillingPeriod('yearly')}
                    className={`text-sm font-medium rounded-full px-4 py-1.5 transition-all duration-150 ${
                      billingPeriod === 'yearly'
                        ? 'bg-white text-cyber-ink shadow-sm'
                        : 'text-ghost hover:text-white'
                    }`}
                  >
                    Yearly (and save)
                  </button>
                  <button
                    type="button"
                    aria-pressed={billingPeriod === 'monthly'}
                    onClick={() => setBillingPeriod('monthly')}
                    className={`text-sm font-medium rounded-full px-4 py-1.5 transition-all duration-150 ${
                      billingPeriod === 'monthly'
                        ? 'bg-white text-cyber-ink shadow-sm'
                        : 'text-ghost hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>
            </div>

            {/* 4. The 4 Dynamic Pricing Cards Grid */}
            <div
              onClick={() => setActiveTooltip(null)}
              className="mt-7 flex flex-col gap-4 lg:mt-12 lg:grid lg:grid-cols-4 lg:items-stretch"
            >
              {pricingCards.map((plan) => {
                const priceInfo = getCardPriceInfo(plan.id);
                const isPro = plan.id === 'pro';

                return (
                  <article
                    key={plan.id}
                    className={`flex h-full w-full flex-col gap-6 overflow-visible rounded-xl bg-white px-5 pb-6 pt-6 transition-all duration-200 lg:min-w-0 ${
                      isPro
                        ? 'shadow-[inset_0_0_0_2px_#ff5ec4,inset_0_0_0_4px_#060419]'
                        : 'border border-gray-100 shadow-lg'
                    }`}
                  >
                    {/* Top Tier Info */}
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-xl md:text-2xl leading-7 text-cyber-ink">
                            {plan.name}
                          </h3>
                          {plan.badge && (
                            <span className="rounded-full bg-cyber-ink px-2.5 pb-1 pt-0.5 text-xs font-semibold leading-4 text-white">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-cyber-ink-400 min-h-[40px] leading-snug">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price Display */}
                      <div className="flex flex-col gap-0.5 text-cyber-ink">
                        <div className="flex min-h-12 items-baseline gap-1.5">
                          <p className="font-bold text-4xl lg:text-5xl leading-none tracking-tight">
                            {priceInfo.price}
                          </p>
                          {priceInfo.period && (
                            <p className="text-lg font-medium leading-6 text-cyber-ink-400">
                              {priceInfo.period}
                            </p>
                          )}
                        </div>
                        <p className="min-h-4 text-xs font-medium leading-4 text-cyber-ink-400">
                          {priceInfo.note}
                        </p>
                      </div>

                      {/* Action Button & Note */}
                      <div className="flex flex-col gap-1.5">
                        {plan.id === 'free' ? (
                          <a
                            href={priceInfo.isAvailable ? 'https://app.beehiiv.com/signup' : '#'}
                            className={`flex cursor-pointer justify-center items-center gap-2 rounded-[6px] text-base font-bold py-2.5 px-6 whitespace-nowrap w-full border transition-all ${
                              priceInfo.isAvailable
                                ? 'text-[#3843D0] border-[#3843D0] bg-white hover:bg-[#3843D0]/10'
                                : 'text-gray-400 border-gray-200 bg-gray-50 pointer-events-none'
                            }`}
                          >
                            {priceInfo.isAvailable ? plan.ctaLabel : 'Unavailable'}
                          </a>
                        ) : plan.id === 'enterprise' ? (
                          <button
                            type="button"
                            onClick={() => {
                              window.location.href = 'mailto:enterprise@beehiiv.com';
                            }}
                            className="flex cursor-pointer justify-center items-center gap-2 text-white bg-[#060419] rounded-[6px] text-base font-bold py-2.5 px-6 whitespace-nowrap w-full border border-[#060419] hover:bg-[#1a1738] transition-colors"
                          >
                            {plan.ctaLabel}
                          </button>
                        ) : (
                          <a
                            href="https://app.beehiiv.com/signup"
                            target="_blank"
                            rel="noreferrer"
                            className={`flex cursor-pointer justify-center items-center gap-2 text-white rounded-[6px] text-base font-bold py-2.5 px-6 whitespace-nowrap w-full border transition-colors ${
                              priceInfo.isAvailable
                                ? 'bg-[#2F39BA] border-[#2F39BA] hover:bg-[#252ea0]'
                                : 'bg-[#060419] border-[#060419] hover:bg-[#1a1738]'
                            }`}
                          >
                            {priceInfo.isAvailable ? plan.ctaLabel : 'Contact sales'}
                          </a>
                        )}

                        <p className="text-center text-xs font-medium leading-4 text-cyber-ink-300">
                          {priceInfo.isAvailable ? plan.ctaNote : ''}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200" />

                    {/* Features List */}
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-bold leading-5 text-cyber-ink">
                        {plan.featureTitle}
                      </p>

                      <ul className="flex flex-col gap-2 pt-1">
                        {plan.features.map((feat, fIdx) => {
                          const showAdAvg =
                            feat.label === 'Ad monetization' &&
                            currentAdSavings !== null &&
                            currentAdSavings > 0;

                          return (
                            <li key={fIdx} className="relative flex items-center gap-2">
                              <p className="text-sm font-medium text-cyber-ink-400">
                                {feat.label}
                              </p>

                              {/* Badges */}
                              {feat.badge && (
                                <span className="rounded-full bg-[#EBF0FF] px-2 pb-0.5 pt-0.5 text-[11px] font-semibold leading-4 text-[#2F39BA]">
                                  {feat.badge}
                                </span>
                              )}

                              {showAdAvg && (
                                <span className="rounded-full bg-[#EBF0FF] px-2 pb-0.5 pt-0.5 text-[11px] font-semibold leading-4 text-[#2F39BA]">
                                  Avg. ${currentAdSavings.toLocaleString('en-US')}/mo
                                </span>
                              )}

                              {/* Partner Logos */}
                              {feat.logos === 'mcp' && (
                                <span className="inline-flex items-center gap-1.5 ml-0.5">
                                  <Image
                                    src="/images/claude.svg"
                                    alt="Claude"
                                    width={14}
                                    height={14}
                                    className="shrink-0"
                                  />
                                  <Image
                                    src="/images/chatgpt.svg"
                                    alt="ChatGPT"
                                    width={14}
                                    height={14}
                                    className="shrink-0"
                                  />
                                  <Image
                                    src="/images/gemini.svg"
                                    alt="Gemini"
                                    width={14}
                                    height={14}
                                    className="shrink-0"
                                  />
                                </span>
                              )}

                              {feat.logos === 'enterprise' && (
                                <span className="inline-flex items-center gap-1.5 ml-0.5">
                                  <Image
                                    src="/images/wordpress.svg"
                                    alt="WordPress"
                                    width={14}
                                    height={14}
                                    className="shrink-0"
                                  />
                                </span>
                              )}

                              {/* Tooltip Info Icon */}
                              {feat.infoId && tooltipDetails[feat.infoId] && (
                                <div className="relative inline-flex items-center">
                                  <button
                                    type="button"
                                    aria-label={`${feat.label} details`}
                                    onClick={(e) => handleTooltipClick(feat.infoId!, e)}
                                    className="inline-flex size-4 shrink-0 cursor-pointer items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
                                  >
                                    <svg
                                      fill="#6B7280"
                                      height="14"
                                      width="14"
                                      viewBox="0 0 256 256"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />
                                    </svg>
                                  </button>

                                  {/* Tooltip Popover */}
                                  {activeTooltip === feat.infoId && (
                                    <div
                                      onClick={(e) => e.stopPropagation()}
                                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 rounded-lg bg-[#060419] border border-[#302D4C] p-3 text-xs leading-relaxed text-white shadow-2xl"
                                    >
                                      <p>{tooltipDetails[feat.infoId]}</p>
                                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-[#060419] border-b border-r border-[#302D4C]" />
                                    </div>
                                  )}
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
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

// Reusable SVG Pill Icon component
const PillIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'Envelope':
      return (
        <svg fill="#DDDCE8" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
        </svg>
      );
    case 'Website':
      return (
        <svg fill="#DDDCE8" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" />
        </svg>
      );
    case 'Podcast':
      return (
        <svg fill="#DDDCE8" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
        </svg>
      );
    case 'Community':
      return (
        <svg fill="#DDDCE8" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z" />
        </svg>
      );
    case 'Cube':
    default:
      return (
        <svg fill="#DDDCE8" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" />
        </svg>
      );
  }
};
