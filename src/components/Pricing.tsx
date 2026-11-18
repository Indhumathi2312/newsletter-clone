'use client';

import React, { useState } from 'react';
import { pricingPlans } from '../data/pricing';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <section className="relative bg-cyber-ink py-16 md:py-24 border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="clash-grotesk-font-family uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            build your way.
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-lg mb-8">
            Simple, transparent pricing built for creators at any scale. No surprise fees.
          </p>

          {/* Billing Switch */}
          <div className="inline-flex items-center gap-3 rounded-full border border-subtle bg-surface-1 p-1.5">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-5 py-2 text-xs md:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-accent-blue text-white shadow-md'
                  : 'text-secondary hover:text-white'
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs md:text-sm font-bold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-accent-blue text-white shadow-md'
                  : 'text-secondary hover:text-white'
              }`}
            >
              <span>Annual billing</span>
              <span className="rounded-full bg-accent-pink px-2 py-0.5 text-[10px] font-extrabold uppercase text-cyber-ink">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            const note = billingCycle === 'yearly' ? plan.billingNoteYearly : plan.billingNoteMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-200 ${
                  plan.isPopular
                    ? 'border-accent-pink bg-surface-1 shadow-2xl shadow-pink-900/20 lg:-translate-y-2'
                    : 'border-subtle bg-surface-1/90 hover:border-accent-blue/50'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent-pink px-3.5 py-1 text-xs font-black uppercase text-cyber-ink">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="clash-grotesk-font-family text-2xl font-bold uppercase text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-secondary min-h-[40px] mb-6">
                    {plan.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-subtle">
                    <div className="flex items-baseline gap-1">
                      <span className="clash-grotesk-font-family text-4xl lg:text-5xl font-black text-white">
                        {price}
                      </span>
                      {price !== 'Custom' && price !== '$0' && (
                        <span className="text-secondary text-sm font-medium">/mo</span>
                      )}
                    </div>
                    <span className="text-xs text-secondary">{note}</span>
                  </div>

                  <div className="mb-8">
                    <Button
                      href={plan.ctaHref}
                      variant={plan.isPopular ? 'primary' : 'outline'}
                      size="sm"
                      className="w-full text-center"
                    >
                      {plan.ctaText}
                    </Button>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-ghost">
                      What&apos;s included
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 shrink-0 text-accent-pink mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
