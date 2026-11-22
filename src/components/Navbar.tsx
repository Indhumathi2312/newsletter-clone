'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './ui/Logo';
import { navLinks } from '../data/navigation';

const productHighlights = [
  {
    title: 'Newsletters',
    description: 'Own your subscriber list',
    href: '/newsletter-platform',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Podcasts',
    description: 'Turn listeners into subscribers',
    href: '/features/podcasts',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Digital Products',
    description: 'Sell guides, courses, and more',
    href: '/digital-products',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'Bring your audience together',
    href: '/community',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const productCategories = [
  {
    category: 'PUBLISH',
    links: [
      { label: 'Editor', href: '/newsletter-platform' },
      { label: 'Customization', href: '/website-builder' },
      { label: 'beehiiv AI', href: '/features/ai' },
      { label: 'Automations', href: '/features/automations' },
      { label: 'Polls', href: '/features/polls' },
    ],
  },
  {
    category: 'GROW',
    links: [
      { label: 'Recommendations', href: '/features/recommendations' },
      { label: 'Subscribe Forms', href: '/features/subscribe-forms' },
      { label: 'Pop-ups', href: '/features/pop-ups' },
      { label: 'Referral Program', href: '/features/referrals' },
      { label: 'Magic Links', href: '/features/magic-links' },
    ],
  },
  {
    category: 'EARN',
    links: [
      { label: 'Ad Network', href: '/i-want-to/advertise' },
      { label: 'Podcast Ads', href: '/features/podcast-ads' },
      { label: 'Paid Subscriptions', href: '/monetize' },
      { label: 'Recommendations', href: '/features/recommendations' },
      { label: 'Digital Products', href: '/digital-products' },
      { label: 'Direct Sponsorships', href: '/features/sponsorships' },
    ],
  },
  {
    category: 'ANALYZE',
    links: [
      { label: 'Analytics', href: '/features/analytics' },
      { label: 'A/B Testing', href: '/features/ab-testing' },
      { label: 'Segmentation', href: '/features/segmentation' },
      { label: 'Surveys', href: '/features/surveys' },
      { label: 'Verified Clicks', href: '/features/verified-clicks' },
    ],
  },
  {
    category: 'CONNECT',
    links: [
      { label: 'API', href: '/api' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Send API', href: '/send-api' },
      { label: 'MCP', href: '/mcp' },
    ],
  },
];

const solutionsPublishers = [
  {
    title: 'Creators & Publishers',
    description: 'Publisher of a newsletter, podcast, or digital product',
    href: '/publish',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Newsletter Business',
    description: 'Established audiences (75k+ subscribers)',
    href: '/newsletter-business',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Media Companies',
    description: 'Editorial brands and newsrooms with a content portfolio',
    href: '/media-companies',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Marketing Teams',
    description: 'Marketers nurturing an audience to drive pipeline or revenue',
    href: '/marketing-teams',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

const solutionsAdvertisers = [
  {
    title: 'Advertise with us',
    description: 'Promote your brand to our audience',
    href: '/i-want-to/advertise',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Become an affiliate partner',
    description: 'Earn up to 60% commission on every sale',
    href: '/partners/affiliates',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Become a creator partner',
    description: 'Explore sponsorships and collaborations',
    href: '/partners/creators',
    icon: (
      <svg className="w-5 h-5 text-[#FF5EC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

const featuredStories = [
  {
    title: 'TIME',
    description: "TIME's Shift From ESP Headache...",
    logo: '/images/time-2.png',
    href: '/case-studies/time',
  },
  {
    title: 'Morning Brew',
    description: 'How the beehiiv Ad Network dro...',
    logo: '/images/morning-brew-2.png',
    href: '/case-studies/morning-brew',
  },
  {
    title: 'Status News',
    description: "Oliver Darcy's Transformation Fr...",
    logo: '/images/status-2.png',
    href: '/case-studies/status-news',
  },
];

const resourcesLearn = [
  { label: 'Blog', href: 'https://blog.beehiiv.com' },
  { label: 'Help Center', href: 'https://support.beehiiv.com' },
  { label: 'Migration Guide', href: '/migration' },
  { label: 'Changelog', href: '/changelog' },
];

const resourcesCompare = [
  { label: 'vs. Substack', href: '/compare/substack' },
  { label: 'vs. Kit', href: '/compare/kit' },
  { label: 'vs. Mailchimp', href: '/compare/mailchimp' },
  { label: 'All comparisons', href: '/compare' },
];

const resourcesConnect = [
  { label: 'Live Events', href: '/events' },
  { label: 'beehiiv Experts', href: '/experts' },
  { label: 'Customer Stories', href: '/case-studies' },
  { label: 'Creator Spotlight', href: '/creator-spotlight' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  return (
    <header
      ref={navRef}
      onMouseLeave={() => setActiveDropdown(null)}
      className="sticky top-0 z-50 w-full bg-[#060419]"
    >
      {/* Desktop Navigation */}
      <nav
        data-ref="desktop-nav"
        className="relative z-50 hidden w-full border-b border-[#201E3D] bg-[#060419] lg:block"
      >
        <div className="mx-auto flex h-[76px] max-w-screen-xl flex-row items-center justify-between px-6 xl:px-12">
          {/* Left section: Logo & Nav Links */}
          <div className="flex items-center gap-8 xl:gap-10">
            <Logo className="h-[28px] w-auto fill-white" />

            <div className="flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((item) => {
                const isMegaMenu = item.label === 'Product' || item.label === 'Solutions' || item.label === 'Resources';
                const isActive = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  >
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`flex items-center gap-1 rounded-lg px-3.5 py-1.5 text-[15px] font-semibold leading-5 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#141230] text-white border border-[#2B274F] shadow-sm'
                            : 'text-white/80 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                        aria-expanded={isActive}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="rounded-lg px-3.5 py-1.5 text-[15px] font-semibold leading-5 text-white/80 transition-colors duration-200 hover:text-white hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Standard Non-Mega Dropdowns (e.g. Resources) */}
                    {!isMegaMenu && item.children && isActive && (
                      <div className="absolute left-0 top-full pt-2 w-80 z-50">
                        <div className="rounded-xl border border-[#201E3D] bg-[#0D0B28] p-3 shadow-2xl backdrop-blur-xl">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
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
                );
              })}
            </div>
          </div>

          {/* Right section: Log in, Get a demo, Sign up for free */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://app.beehiiv.com/login"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3.5 py-2 text-[15px] font-semibold leading-5 text-white/90 transition-colors duration-200 hover:text-white"
            >
              Log in
            </a>

            <a
              href="/demo/form"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-[14px] font-semibold leading-5 text-white transition-colors duration-200 hover:bg-white/10"
            >
              Get a demo
            </a>

            <a
              href="https://app.beehiiv.com/signup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-5 py-2 text-[14px] font-bold leading-5 text-[#060419] transition-all duration-200 hover:bg-white/90 shadow-sm"
            >
              Sign up for free
            </a>
          </div>
        </div>

        {/* 1. PRODUCT FULL-WIDTH MEGA MENU (When Product is open) */}
        {activeDropdown === 'Product' && (
          <div className="absolute left-0 top-full w-full border-b border-[#201E3D] bg-[#0D0B28] shadow-2xl z-50">
            <div className="mx-auto max-w-screen-xl px-6 xl:px-12 py-8">
              
              {/* Row 1: 4 Key Product Highlights with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productHighlights.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="group flex items-start gap-4 rounded-xl p-2.5 transition-colors hover:bg-white/5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#2B274F] bg-[#141230] shadow-sm transition-colors group-hover:border-accent-pink/40">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[15px] font-bold leading-5 text-white group-hover:text-accent-pink transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[13px] font-medium leading-4 text-[#9898D2]">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Horizontal Divider Line */}
              <div className="my-8 border-b border-[#201E3D]" />

              {/* Row 2: 5 Categorized Feature Columns (PUBLISH, GROW, EARN, ANALYZE, CONNECT) */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {productCategories.map((cat) => (
                  <div key={cat.category} className="flex flex-col">
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                      {cat.category}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {cat.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="text-[14px] font-medium text-white transition-colors hover:text-accent-pink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* 2. SOLUTIONS FULL-WIDTH MEGA MENU (When Solutions is open - 3 Equal Balanced Columns) */}
        {activeDropdown === 'Solutions' && (
          <div className="absolute left-0 top-full w-full border-b border-[#201E3D] bg-[#0D0B28] shadow-2xl z-50">
            <div className="mx-auto max-w-screen-xl px-6 xl:px-12 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
                
                {/* Column 1: FOR PUBLISHERS (4 items) */}
                <div className="flex flex-col">
                  <p className="mb-5 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                    FOR PUBLISHERS
                  </p>
                  <div className="flex flex-col gap-3">
                    {solutionsPublishers.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-white/5"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#2B274F] bg-[#141230] shadow-sm transition-colors group-hover:border-accent-pink/40">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-[15px] font-bold leading-5 text-white group-hover:text-accent-pink transition-colors">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-[13px] font-medium leading-snug text-[#9898D2]">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: FOR ADVERTISERS & PARTNERS (3 items) */}
                <div className="flex flex-col">
                  <p className="mb-5 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                    FOR ADVERTISERS & PARTNERS
                  </p>
                  <div className="flex flex-col gap-3">
                    {solutionsAdvertisers.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-white/5"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#2B274F] bg-[#141230] shadow-sm transition-colors group-hover:border-accent-pink/40">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-[15px] font-bold leading-5 text-white group-hover:text-accent-pink transition-colors">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-[13px] font-medium leading-snug text-[#9898D2]">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: FEATURED STORIES (3 authentic logo cards + link) */}
                <div className="flex flex-col">
                  <p className="mb-5 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                    FEATURED STORIES
                  </p>
                  <div className="flex flex-col gap-3">
                    {featuredStories.map((story) => (
                      <Link
                        key={story.title}
                        href={story.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center gap-3.5 rounded-xl border border-[#232049] bg-[#141230] p-2.5 transition-colors hover:bg-[#1A173D] hover:border-[#353066]"
                      >
                        <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={story.logo}
                            alt={story.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h5 className="text-[14px] font-bold text-white group-hover:text-accent-pink transition-colors truncate">
                            {story.title}
                          </h5>
                          <p className="text-[12px] text-[#9898D2] truncate">
                            {story.description}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <Link
                      href="/case-studies"
                      onClick={() => setActiveDropdown(null)}
                      className="mt-2 text-[13px] font-semibold text-[#9898D2] hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>See all customer stories</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 3. RESOURCES FULL-WIDTH MEGA MENU (When Resources is open - 3 Left Columns + Featured Card) */}
        {activeDropdown === 'Resources' && (
          <div className="absolute left-0 top-full w-full border-b border-[#201E3D] bg-[#0D0B28] shadow-2xl z-50">
            <div className="mx-auto max-w-screen-xl px-6 xl:px-12 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* 3 Category Columns on the Left (col-span-7) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {/* LEARN */}
                  <div className="flex flex-col">
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                      LEARN
                    </p>
                    <ul className="flex flex-col gap-3">
                      {resourcesLearn.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="text-[15px] font-medium text-white transition-colors hover:text-accent-pink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COMPARE */}
                  <div className="flex flex-col">
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                      COMPARE
                    </p>
                    <ul className="flex flex-col gap-3">
                      {resourcesCompare.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="text-[15px] font-medium text-white transition-colors hover:text-accent-pink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CONNECT */}
                  <div className="flex flex-col">
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#6F6F8A]">
                      CONNECT
                    </p>
                    <ul className="flex flex-col gap-3">
                      {resourcesConnect.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="text-[15px] font-medium text-white transition-colors hover:text-accent-pink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Prominent Featured Card on the Right (col-span-5) */}
                <div className="lg:col-span-5">
                  <a
                    href="https://www.beehiiv.com/state-of-newsletters"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="block rounded-2xl border border-[#FF5EC4] bg-[#0E0C2B] p-6 transition-all hover:bg-[#141235] group"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-[#FF5EC4] mb-3">
                      FEATURED
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg xl:text-xl font-extrabold uppercase text-white tracking-tight leading-tight">
                        THE STATE OF NEWSLETTERS
                        <br />
                        2026
                      </h4>
                      <div className="size-11 rounded-lg bg-[#141230] border border-[#2B274F] flex items-center justify-center text-[#FF5EC4] shrink-0 group-hover:scale-105 group-hover:border-[#FF5EC4]/50 transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-[#9898D2] leading-relaxed">
                      The latest data, trends and innovations shaping the newsletter industry.
                    </p>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay when any dropdown is open */}
      {activeDropdown && (
        <div
          aria-hidden="true"
          onClick={() => setActiveDropdown(null)}
          className="fixed inset-0 top-[76px] z-30 bg-black/50 backdrop-blur-[2px] transition-opacity hidden lg:block"
        />
      )}

      {/* Mobile Navigation */}
      <nav className="sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-[#201E3D] bg-[#060419] px-5 md:px-8 lg:hidden">
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
          <div className="absolute left-0 top-full w-full border-b border-[#201E3D] bg-[#060419] p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <div key={item.label} className="flex flex-col">
                  {item.label === 'Product' ? (
                    <div>
                      <div className="text-[14px] font-bold text-white mb-3">Product</div>
                      
                      {/* Top Highlights */}
                      <div className="grid grid-cols-1 gap-2 mb-4 pl-2">
                        {productHighlights.map((feat) => (
                          <Link
                            key={feat.title}
                            href={feat.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-1.5 text-sm font-semibold text-white hover:text-accent-pink"
                          >
                            <span className="size-6 shrink-0">{feat.icon}</span>
                            <span>{feat.title}</span>
                          </Link>
                        ))}
                      </div>

                      {/* Categories */}
                      <div className="ml-2 flex flex-col gap-4 border-l border-[#201E3D] pl-3">
                        {productCategories.map((cat) => (
                          <div key={cat.category} className="flex flex-col gap-1.5">
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                              {cat.category}
                            </span>
                            {cat.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[13px] text-[#9898D2] hover:text-white"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : item.label === 'Solutions' ? (
                    <div>
                      <div className="text-[14px] font-bold text-white mb-3">Solutions</div>
                      
                      {/* For Publishers */}
                      <div className="flex flex-col gap-1.5 mb-3 pl-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          For Publishers
                        </span>
                        {solutionsPublishers.map((pub) => (
                          <Link
                            key={pub.title}
                            href={pub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white py-1"
                          >
                            {pub.title}
                          </Link>
                        ))}
                      </div>

                      {/* For Advertisers */}
                      <div className="flex flex-col gap-1.5 mb-3 pl-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          For Advertisers & Partners
                        </span>
                        {solutionsAdvertisers.map((adv) => (
                          <Link
                            key={adv.title}
                            href={adv.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white py-1"
                          >
                            {adv.title}
                          </Link>
                        ))}
                      </div>

                      {/* Featured Stories */}
                      <div className="flex flex-col gap-1.5 pl-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          Featured Stories
                        </span>
                        {featuredStories.map((st) => (
                          <Link
                            key={st.title}
                            href={st.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white py-1"
                          >
                            {st.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.label === 'Resources' ? (
                    <div>
                      <div className="text-[14px] font-bold text-white mb-3">Resources</div>
                      
                      {/* Learn */}
                      <div className="flex flex-col gap-1.5 mb-3 pl-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          Learn
                        </span>
                        {resourcesLearn.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white py-1"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>

                      {/* Compare */}
                      <div className="flex flex-col gap-1.5 mb-3 pl-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          Compare
                        </span>
                        {resourcesCompare.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white py-1"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>

                      {/* Connect */}
                      <div className="flex flex-col gap-1.5 mb-3 pl-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          Connect
                        </span>
                        {resourcesConnect.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] text-[#9898D2] hover:text-white py-1"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>

                      {/* Featured */}
                      <div className="pl-2 mt-2">
                        <a
                          href="https://www.beehiiv.com/state-of-newsletters"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-xl border border-[#FF5EC4]/60 bg-[#0E0C2B] p-3"
                        >
                          <span className="text-[10px] font-bold uppercase text-[#FF5EC4]">Featured</span>
                          <p className="text-xs font-bold text-white mt-1">THE STATE OF NEWSLETTERS 2026 ↗</p>
                        </a>
                      </div>
                    </div>
                  ) : item.children ? (
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
    </header>
  );
};
