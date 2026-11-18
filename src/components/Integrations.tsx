import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export const Integrations: React.FC = () => {
  return (
    <section className="bg-cyber-ink py-16 md:py-24 border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        <div className="flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-3 lg:max-w-xl">
              <h2 className="clash-grotesk-font-family uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-white">
                POWERFUL INTEGRATIONS.
              </h2>
              <p className="text-base md:text-lg font-medium text-secondary">
                Seamless integrations with analytics, e-commerce, and automation platforms including Zapier, Shopify, Stripe, Slack, and more.
              </p>
            </div>

            <Button href="https://app.beehiiv.com/signup" variant="primary" size="md">
              Get started free
            </Button>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl border border-subtle bg-surface-1 p-4 md:p-8 shadow-2xl">
            <Image
              src="/images/integrations.png"
              alt="beehiiv integrations including Zapier, Shopify, Stripe, Slack, and more"
              width={2400}
              height={480}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
