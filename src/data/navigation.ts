import { NavItem } from '../types';

export const bannerData = {
  text: "Big news: We just launched beehiiv Podcasts & Digital Products!",
  ctaText: "Learn more",
  ctaHref: "/newsletter-platform",
};

export const navLinks: NavItem[] = [
  {
    label: "Product",
    href: "/newsletter-platform",
    children: [
      {
        label: "Newsletters",
        href: "/newsletter-platform",
        description: "Own your subscriber list and publish at scale",
      },
      {
        label: "Podcasts",
        href: "/features/podcasts",
        description: "Host, distribute, and monetize audio shows",
        badge: "New",
      },
      {
        label: "Digital Products",
        href: "/digital-products",
        description: "Sell courses and downloads with 0% commission",
        badge: "New",
      },
      {
        label: "Monetization",
        href: "/monetize",
        description: "Ad network, paid subscriptions, and sponsorships",
      },
      {
        label: "Community",
        href: "/community",
        description: "Engage fans and members under one login",
      },
      {
        label: "Websites",
        href: "/website-builder",
        description: "Custom, SEO-optimized web publication with zero code",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Creators & Publishers",
        href: "/publish",
        description: "Build, grow, and monetize your personal media brand",
      },
      {
        label: "Newsletter Businesses",
        href: "/newsletter-business",
        description: "Operate a full-scale media publication and grow revenue",
      },
      {
        label: "Media Companies",
        href: "/media-companies",
        description: "Multi-publication scale with enterprise infrastructure",
      },
      {
        label: "Marketing Teams",
        href: "/marketing-teams",
        description: "Turn audiences into loyal paying customers",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "How top creators scale with beehiiv",
      },
      {
        label: "Blog",
        href: "https://blog.beehiiv.com",
        description: "Best practices, tips, and industry trends",
      },
      {
        label: "Migration Guide",
        href: "/migration",
        description: "Switch from Substack, Kit, or Mailchimp in minutes",
      },
      {
        label: "Help Center",
        href: "https://support.beehiiv.com",
        description: "Documentation and 24/7 dedicated support",
      },
      {
        label: "Changelog",
        href: "/changelog",
        description: "Latest platform updates and releases",
      },
    ],
  },
  {
    label: "Enterprise",
    href: "/enterprise",
  },
  {
    label: "Ad Network",
    href: "/i-want-to/advertise",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];
