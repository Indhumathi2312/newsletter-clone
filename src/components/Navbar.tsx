'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './ui/Logo';
import { navLinks } from '../data/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Navigation matching the exact reference image */}
      <nav
        data-ref="desktop-nav"
        className="sticky top-0 z-50 hidden w-full border-b border-[#201E3D] bg-[#060419] lg:block"
      >
        <div className="mx-auto flex h-[100px] max-w-screen-xl flex-row items-center justify-between px-6 xl:px-12">
          {/* Left section: Logo & Nav Links */}
          <div className="flex items-center gap-8 xl:gap-10">
            <Logo className="h-[28px] w-auto fill-white" />

            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      type="button"
                      className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-semibold leading-5 transition-colors duration-200 ${
                        activeDropdown === item.label
                          ? 'bg-white/10 text-white'
                          : 'text-[#9898D2] hover:bg-white/10 hover:text-white'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-md px-3.5 py-2 text-[15px] font-semibold leading-5 transition-colors duration-200 text-[#9898D2] hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-1.5 w-80">
                      <div className="rounded-xl border border-[#201E3D] bg-[#0D0B28] p-3 shadow-2xl backdrop-blur-xl">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="group flex flex-col rounded-lg p-2.5 transition-colors hover:bg-white/10"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[14px] font-bold text-white group-hover:text-accent-pink">
                                {subItem.label}
                              </span>
                              {subItem.badge && (
                                <span className="rounded-full bg-accent-pink/20 px-2 py-0.5 text-[10px] font-bold text-accent-pink">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            {subItem.description && (
                              <span className="text-xs text-[#9898D2] mt-0.5 leading-snug">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right section: Log in, Get a demo, Sign up for free */}
          <div className="flex items-center gap-4">
            <a
              href="https://app.beehiiv.com/login"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3.5 py-2 text-[15px] font-semibold leading-5 text-white/90 transition-colors duration-200 hover:text-white hover:bg-white/10"
            >
              Log in
            </a>

            <a
              href="/demo/form"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#2C2758] bg-transparent px-4.5 py-2 text-[15px] font-semibold leading-5 text-white transition-colors duration-200 hover:bg-white/10"
            >
              Get a demo
            </a>

            <a
              href="https://app.beehiiv.com/signup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5.5 py-2 text-[15px] font-bold leading-5 text-[#060419] transition-all duration-200 hover:bg-white/90 shadow-sm"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="sticky top-0 z-50 flex h-[80px] items-center justify-between border-b border-[#201E3D] bg-[#060419] px-5 md:px-8 lg:hidden">
        <Logo className="h-[25px] w-auto fill-white" />

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white hover:text-accent-pink focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>

        {mobileMenuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-[#201E3D] bg-[#060419] p-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <div key={item.label} className="flex flex-col">
                  {item.children ? (
                    <div>
                      <div className="text-[14px] font-bold text-white mb-2">{item.label}</div>
                      <div className="ml-3 flex flex-col gap-2 border-l border-[#201E3D] pl-3">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[14px] font-bold text-white hover:text-accent-pink"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-[#201E3D]">
                <a
                  href="https://app.beehiiv.com/login"
                  className="text-center text-[14px] font-bold text-white py-2"
                >
                  Log in
                </a>
                <a
                  href="/demo/form"
                  className="flex h-10 items-center justify-center rounded-md border border-[#2C2758] bg-transparent text-[14px] font-semibold text-white"
                >
                  Get a demo
                </a>
                <a
                  href="https://app.beehiiv.com/signup"
                  className="flex h-10 items-center justify-center rounded-md bg-white text-[14px] font-bold text-[#060419]"
                >
                  Sign up for free
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
