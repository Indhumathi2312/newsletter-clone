'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './ui/Logo';
import { footerColumns } from '../data/footer';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-subtle bg-cyber-ink text-white pt-16 pb-12">
      <div className="mx-auto max-w-screen-xl px-5 md:px-8 xl:px-32">
        {/* Main Footer Section: Brand & Newsletter on Left, Product & Solution Columns on Right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 pb-16">
          
          {/* Left Column: Logo, Description & Newsletter Subscribe */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-6">
            <div className="flex flex-col gap-3">
              <Logo className="h-7 w-auto fill-white" />
              <p className="text-sm text-secondary max-w-sm leading-relaxed">
                The newsletter platform built for creators, publishers, and businesses.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2 max-w-sm w-full">
              <p className="text-sm font-bold text-white">
                Get beehiiv updates delivered to your inbox.
              </p>
              {subscribed ? (
                <div className="rounded-lg bg-surface-2 p-3 text-xs font-bold text-accent-pink">
                  Thanks for subscribing! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-md border border-subtle bg-surface-1 px-4 py-2.5 text-sm text-white placeholder-ghost focus:border-accent-pink focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-md bg-[#2F39BA] px-5 py-2.5 text-sm font-bold text-white hover:bg-opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Links Grid (Product, Solutions, Resources, Company, Connect) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-ghost">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-secondary transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-secondary transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Legal Links & Beehive Icon Bar (Above Copyright) */}
        <div className="flex flex-col gap-6 pt-10 pb-6 border-t border-subtle md:flex-row md:items-center md:justify-between text-xs md:text-sm text-secondary">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/california-privacy" className="hover:text-white transition-colors">
              California Privacy
            </Link>
            <Link href="/acceptable-use" className="hover:text-white transition-colors">
              Acceptable Use
            </Link>
            <Link href="/privacy-choices" className="hover:text-white transition-colors">
              Your Privacy Choices
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link href="/report-abuse" className="hover:text-white transition-colors">
              Report Abuse
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>

          <div className="shrink-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 326 309"
              className="h-6 w-auto fill-white"
              aria-label="beehiiv icon"
            >
              <path d="M283.19 145.14H42.6c-6.13 0-11.14-5.04-11.14-11.21v-17.09c0-19.33 15.59-35.02 34.81-35.02h192.97c19.21 0 34.81 15.69 34.81 35.02v17.09c.28 6.16-4.73 11.21-10.86 11.21ZM232.51 63.32H93.28c-6.13 0-11.42-5.04-11.42-11.49C81.87 23.26 104.98 0 133.38 0h59.03c28.4 0 51.51 23.26 51.51 51.84 0 6.44-5.01 11.49-11.42 11.49ZM294.33 163.63H31.47C14.21 163.63 0 177.92 0 195.29s14.2 31.66 31.47 31.66h93.28c3.34-17.93 18.93-31.66 37.87-31.66s34.81 13.73 38.15 31.66h93.28c17.26 0 31.47-14.29 31.47-31.66s-13.92-31.66-31.19-31.66ZM282.91 245.45h-81.59v63.32h61.26c17.26 0 31.47-14.29 31.47-31.66v-20.17c.28-6.16-4.73-11.49-11.14-11.49ZM42.6 245.45c-6.13 0-11.42 5.04-11.42 11.49v20.17c0 17.37 14.2 31.66 31.47 31.66h61.26v-63.32H42.6Z" />
            </svg>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="flex flex-col gap-4 pt-6 border-t border-subtle/50 md:flex-row md:items-center md:justify-between text-xs text-ghost">
          <p>© {new Date().getFullYear()} beehiiv, Inc. All rights reserved.</p>

          <a
            href="https://status.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            All systems operational
          </a>
        </div>
      </div>
    </footer>
  );
};
