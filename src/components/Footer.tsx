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
        {/* Top Footer Section: Logo & Newsletter Subscribe */}
        <div className="flex flex-col gap-8 pb-12 border-b border-subtle lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <Logo className="h-6 w-auto fill-white" />
            <p className="text-sm text-secondary max-w-sm">
              The newsletter platform built for creators, publishers, and businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-md w-full">
            <p className="text-sm font-bold text-white">
              Get beehiiv updates delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="rounded-lg bg-surface-2 p-3 text-xs font-bold text-accent-pink">
                Thanks for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
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
                  className="shrink-0 rounded-md bg-[#2F39BA] px-4 py-2.5 text-sm font-bold text-white hover:bg-opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-5">
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

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col gap-4 pt-8 border-t border-subtle md:flex-row md:items-center md:justify-between text-xs text-secondary">
          <p>© {new Date().getFullYear()} beehiiv, Inc. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
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
      </div>
    </footer>
  );
};
