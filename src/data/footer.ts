import { FooterColumn } from '../types';

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Newsletters", href: "/newsletter-platform" },
      { label: "Podcasts", href: "/podcasts" },
      { label: "Digital Products", href: "/digital-products" },
      { label: "Monetization", href: "/monetize" },
      { label: "Community", href: "/community" },
      { label: "Websites", href: "/website-builder" },
      { label: "Ad Network", href: "/i-want-to/advertise" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Creators & Publishers", href: "/publish" },
      { label: "Newsletter Businesses", href: "/newsletter-business" },
      { label: "Media Companies", href: "/media-companies" },
      { label: "Marketing Teams", href: "/marketing-teams" },
      { label: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter Courses", href: "/courses" },
      { label: "Guides & Playbooks", href: "/resources" },
      { label: "Changelog", href: "/changelog" },
      { label: "Knowledge Base", href: "https://support.beehiiv.com", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "https://beehiiv.bamboohr.com/careers", external: true },
      { label: "beehiiv for Advertisers", href: "/i-want-to/advertise" },
      { label: "Become a Partner", href: "/partners" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@beehiiv", external: true },
      { label: "Twitter / X", href: "https://www.x.com/beehiiv/", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/beehiiv", external: true },
      { label: "Instagram", href: "https://www.instagram.com/beehiiv/", external: true },
      { label: "Facebook", href: "https://www.facebook.com/trybeehiiv/", external: true },
    ],
  },
];
