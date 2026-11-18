'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    // Enable the hero fade-blur animation after component mounts
    setAnimationActive(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-cyber-ink bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/grid 1.png")' }}
    >
      <div className="px-5 py-10 sm:py-16 md:px-8 md:py-24 xl:px-32">
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid min-w-0 grid-cols-1 items-center gap-8 [@media(min-width:890px)]:grid-cols-2">
            {/* Left Column: Heading, Subtitle, Ratings, and 3D CTA Buttons */}
            <div className="relative z-10 flex flex-col items-start text-white lg:text-left">
              <h1 className="clash-grotesk-font-family mb-2 text-[42px] font-bold uppercase leading-[44px] sm:text-5xl lg:mb-4 [@media(min-width:1086px)]:text-6xl [@media(min-width:1535px)]:text-7xl">
                NEWSLETTERS.
                <br />
                PODCASTS.
                <br />
                COMMUNITY.
                <br />
                <span
                  style={{
                    background: 'linear-gradient(to right, #FFDCFF, #FF5EC4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  ONE PLATFORM.
                </span>
              </h1>

              <p className="mb-0 max-w-lg text-xl font-medium text-ethereal-white">
                The all-in-one platform helping the world&apos;s best newsletters publish, grow and earn. Start in seconds
              </p>

              {/* Rating & Social Proof */}
              <div className="mt-4">
                <div className="flex justify-center bg-transparent lg:justify-start">
                  <div className="flex shrink-0 items-center gap-2">
                    <div className="flex items-center">
                      <div className="star-ratings flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="star-container middle relative inline-block pr-px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none">
                              <path
                                fill="#FCD34D"
                                d="m6.594 9.711 3.029 1.863a.465.465 0 0 0 .693-.508l-.824-3.475 2.696-2.326a.468.468 0 0 0-.265-.818L8.385 4.16 7.022.86a.463.463 0 0 0-.857 0l-1.363 3.3-3.538.287A.468.468 0 0 0 1 5.268l2.696 2.325-.824 3.473a.465.465 0 0 0 .693.508l3.03-1.863Z"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-normal">
                      <div className="flex -space-x-1">
                        <Image
                          alt="user avatar Jessica"
                          width={40}
                          height={40}
                          className="relative z-30 inline-block h-5 w-5 rounded-full border-2 border-[#0B0D2A] object-cover"
                          src="/images/jessica.jpg"
                        />
                        <Image
                          alt="user avatar Kaitarford"
                          width={40}
                          height={40}
                          className="relative z-20 inline-block h-5 w-5 rounded-full border-2 border-[#0B0D2A] object-cover"
                          src="/images/kaitarford.jpg"
                        />
                        <Image
                          alt="user avatar Shaan Puri"
                          width={40}
                          height={40}
                          className="relative z-10 inline-block h-5 w-5 rounded-full border-2 border-[#0B0D2A] object-cover"
                          src="/images/shaan.jpg"
                        />
                      </div>
                      <div className="shrink-0 text-sm sm:text-base">
                        <span className="my-auto font-bold"> 4.9/5 </span>
                        <span className="my-auto">
                          from <span className="font-bold">28,479</span> customers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iconic 3D Layered CTA Buttons */}
              <div className="mt-6 flex w-full flex-col gap-4 [@media(min-width:890px)]:flex-row [@media(min-width:890px)]:gap-3">
                {/* Sign up with Google */}
                <a
                  href="https://app.beehiiv.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px]"
                >
                  <div className="custom-box-shadow-text relative z-10 inline-flex h-full w-full items-center justify-center gap-3 whitespace-nowrap rounded-[6px] border border-[#2F39BA] bg-[#2F39BA] px-3 py-2 text-center text-base font-bold leading-6 text-white lg:text-lg">
                    <span className="flex shrink-0 items-center justify-center rounded-sm bg-white p-1.5 md:p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 1000"
                        className="h-3 w-3 md:h-4 md:w-4"
                      >
                        <path
                          d="M975.28 510.79c0-35.14-3.15-68.92-9.01-101.36H499.59V601.1h266.67c-11.49 61.94-46.39 114.42-98.87 149.55v124.33h160.14c93.7-86.26 147.75-213.3 147.75-364.2Z"
                          fill="#557ebf"
                        />
                        <path
                          d="M499.6 995.03c133.79 0 245.95-44.37 327.93-120.05L667.39 750.65c-44.37 29.73-101.13 47.3-167.79 47.3-129.06 0-238.29-87.16-277.26-204.28H56.79v128.38c81.54 161.94 249.11 272.98 442.8 272.98Z"
                          fill="#36a852"
                        />
                        <path
                          d="M222.34 593.67c-9.91-29.73-15.54-61.49-15.54-94.15s5.63-64.42 15.54-94.15V276.99H56.79c-33.55 66.9-52.7 142.58-52.7 222.54s19.15 155.63 52.7 222.53l165.54-128.38Z"
                          fill="#f9bc15"
                        />
                        <path
                          d="M499.6 201.1c72.75 0 138.06 25 189.42 74.1l142.12-142.12C745.32 53.12 633.15 4.02 499.6 4.02 305.9 4.02 138.33 115.06 56.8 277l165.54 128.38C261.31 288.26 370.54 201.1 499.6 201.1Z"
                          fill="#e94435"
                        />
                      </svg>
                    </span>
                    <span>Sign up with Google</span>
                  </div>
                  <div className="custom-box-shadow-2 absolute inset-px rounded-[6px] border border-[#0B0D2A] bg-[#F092DD]"></div>
                  <div className="custom-box-shadow-1 absolute inset-px rounded-[6px] border border-[#0B0D2A] bg-[#FFC8EB]"></div>
                </a>

                {/* Sign up with email */}
                <a
                  href="https://app.beehiiv.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px]"
                >
                  <div className="custom-box-shadow-text relative z-10 inline-flex min-h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-[#FCFCFD] bg-[#131125] px-6 py-2 text-center text-base font-bold leading-6 text-white lg:text-lg">
                    Sign up with email
                  </div>
                  <div className="custom-box-shadow-2 absolute inset-px rounded-[6px] border border-[#0B0D2A] bg-[#F092DD]"></div>
                  <div className="custom-box-shadow-1 absolute inset-px rounded-[6px] border border-[#0B0D2A] bg-[#FFC8EB]"></div>
                </a>
              </div>

              <p className="mt-4 text-sm text-[#9898D2]">
                Get started for free. No credit card required.
              </p>
            </div>

            {/* Right Column: Hero Visual with Glow & Crossfade Frames */}
            <div className="relative flex min-h-[240px] w-full items-center justify-center overflow-visible sm:min-h-[320px] lg:min-h-[420px]">
              <Image
                draggable={false}
                alt="Bg gradient 2"
                width={1000}
                height={1080}
                className="pointer-events-none absolute inset-0 h-full w-full object-contain object-right blur-3xl [@media(min-width:890px)_and_(max-width:1512px)]:scale-110 [@media(min-width:1512px)]:scale-125"
                src="/images/bg-gradient-2.png"
                priority
              />

              <div
                className={`${
                  animationActive ? 'hero-fade-blur--active' : ''
                } relative z-10 flex aspect-[4/3] w-full items-center justify-center`}
                aria-hidden="true"
              >
                <div className="hero-fade-blur__frame hero-fade-blur__frame--newsletter absolute inset-0 flex items-center justify-center opacity-100">
                  <Image
                    draggable={false}
                    alt="Hero newsletter"
                    width={1400}
                    height={1050}
                    className="block h-auto w-full [@media(min-width:890px)_and_(max-width:1512px)]:scale-110 [@media(min-width:1512px)]:scale-125"
                    src="/images/hero-newsletter.png"
                    priority
                  />
                </div>
                <div className="hero-fade-blur__frame hero-fade-blur__frame--products absolute inset-0 flex items-center justify-center opacity-0 invisible translate-y-6 blur-sm">
                  <Image
                    draggable={false}
                    alt="Hero products"
                    loading="eager"
                    width={1400}
                    height={1050}
                    className="block h-auto w-full [@media(min-width:890px)_and_(max-width:1512px)]:scale-110 [@media(min-width:1512px)]:scale-125"
                    src="/images/hero-products.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
