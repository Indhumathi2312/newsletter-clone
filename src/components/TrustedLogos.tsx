import React from 'react';
import Image from 'next/image';

export const TrustedLogos: React.FC = () => {
  const logos = [
    { src: '/images/_7en1eRB-FzJ39tV_boston-globe.svg', alt: 'The Boston Globe' },
    { src: '/images/Kqvm5zUJCSBbwlz1_blockworks.svg', alt: 'Blockworks' },
    { src: '/images/4aSpN-1OOpjV52J1_jws.svg', alt: "Just Women's Sports" },
    { src: '/images/TjsfNOPugaSJg7S8_LA-MAG.svg', alt: 'Los Angeles Magazine' },
  ];

  // Repeat for continuous seamless marquee loop
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-cyber-ink py-6 overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[1.12px] mb-6 text-center text-white/90">
          TRUSTED BY THE WORLD&apos;S TOP PUBLISHERS, CREATORS, AND BRANDS
        </p>

        <div className="trusted-newsletters-container relative mx-auto w-full min-w-0 max-w-screen-xl overflow-hidden py-2">
          {/* Subtle gradient fades on edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-cyber-ink to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-cyber-ink to-transparent" />

          <div className="trusted-newsletters-track flex w-max items-center gap-12 md:gap-20">
            {marqueeLogos.map((logo, idx) => (
              <div key={idx} className="flex h-10 shrink-0 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={40}
                  className="h-7 w-auto object-contain brightness-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
