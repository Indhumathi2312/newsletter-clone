import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-cyber-ink py-16 md:py-24 border-t border-subtle">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        <div className="relative overflow-hidden rounded-2xl bg-surface-1 border border-accent-blue shadow-2xl">
          {/* Background Gradient Image */}
          <Image
            src="/images/gradient.png"
            alt="Gradient"
            width={1934}
            height={819}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
              <h2 className="clash-grotesk-font-family uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                WHAT ARE YOU WAITING FOR?
              </h2>

              <p className="text-base sm:text-lg text-ethereal-white max-w-xl">
                Join over 100,000+ top creators, writers, and publishers turning their audience into a thriving business.
              </p>

              <div className="mt-4 flex w-full justify-center">
                <Button href="https://app.beehiiv.com/signup" variant="primary" size="lg">
                  Get started free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
