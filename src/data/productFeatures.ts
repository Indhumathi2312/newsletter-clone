export interface FeatureItem {
  title: string;
  desc: string;
  svg: string;
}

export interface ProductCardData {
  id: string;
  colSpan: number;
  title: string;
  desc: string;
  panelTitle: string;
  panelDesc: string;
  meshSrc: string;
  shotSrc: string;
  shotAlt: string;
  shotWidth: number;
  shotHeight: number;
  shotStyle: Record<string, string>;
  features: FeatureItem[];
}

export const productCards: ProductCardData[] = [
  {
    id: 'newsletters',
    colSpan: 2,
    title: 'Newsletters',
    desc: 'Beautiful templates, a custom editor, and analytics built in.',
    panelTitle: 'Newsletters',
    panelDesc: "Whether you're starting out or scaling up, our newsletter tools can help you grow and earn more.",
    meshSrc: '/images/newsletters.webp',
    shotSrc: '/images/newsletter.png',
    shotAlt: 'Newsletter editor with the Turn into menu open',
    shotWidth: 2697,
    shotHeight: 2091,
    shotStyle: {
      '--pcs-t-m': 'translate(calc(0.5rem - 0.55rem), calc(8.5% - 0rem)) scale(0.9)',
      '--pcs-o-m': 'top center',
      '--pcs-fit-m': 'contain',
      '--pcs-pos-m': 'top',
      '--pcs-t-d': 'translate(calc(5.5rem - 1.15rem), calc(0.5% - 0rem)) scale(0.96)',
      '--pcs-o-d': 'top center',
      '--pcs-fit-d': 'contain',
      '--pcs-pos-d': 'top',
    },
    features: [
      {
        title: 'Create',
        desc: "Write and design newsletters that match your brand with a fast editor, beautiful templates, and AI that's actually helpful.",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.32,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z"></path></svg>',
      },
      {
        title: 'Grow',
        desc: 'Referrals, recommendations, SEO, automations, and analytics built right in.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>',
      },
      {
        title: 'Monetize',
        desc: 'Paid subscriptions, sponsorships, digital products, and the largest newsletter ad network in the world.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>',
      },
      {
        title: 'Automate',
        desc: 'Create journeys, segment subscribers, and personalize your content, all without writing a single line of code.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>',
      },
      {
        title: 'Integrate',
        desc: 'Connect with the tools you already use and keep your workflow moving.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>',
      },
      {
        title: 'Measure',
        desc: "Keep track of what's working with analytics that help you make better decisions.",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>',
      },
    ],
  },
  {
    id: 'podcasts',
    colSpan: 1,
    title: 'Podcasts',
    desc: 'Host, grow, and monetize your show.',
    panelTitle: 'Podcasts',
    panelDesc: 'Publish your show, grow your audience everywhere, and connect your show to the rest of your business with just a few clicks.',
    meshSrc: '/images/podcasts.webp',
    shotSrc: '/images/podcast.png',
    shotAlt: 'Podcast shows dashboard and teaser creator',
    shotWidth: 2160,
    shotHeight: 1500,
    shotStyle: {
      '--pcs-t-m': 'translate(calc(-1.15rem - -1.7rem), calc(7% - 0rem)) scale(0.93)',
      '--pcs-o-m': 'top center',
      '--pcs-fit-m': 'contain',
      '--pcs-pos-m': 'top',
      '--pcs-t-d': 'translate(calc(-4rem - -13.9rem), calc(39.5% - 0rem)) scale(1.64)',
      '--pcs-o-d': 'center',
      '--pcs-fit-d': 'contain',
      '--pcs-pos-d': 'center',
    },
    features: [
      {
        title: 'Distribute everywhere',
        desc: 'Publish once and automatically send episodes to Spotify, Apple Podcasts, Overcast, and more.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,120a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z"></path></svg>',
      },
      {
        title: 'Built for growth',
        desc: 'Every episode creates new opportunities to reach, engage, and grow your audience.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>',
      },
      {
        title: 'Real-time reporting',
        desc: 'Monitor performance as it happens and understand how listeners engage across listening platforms.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>',
      },
      {
        title: 'Website connection',
        desc: 'Every episode gets a dedicated landing page complete with transcripts, playlists, SEO optimization, and more.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,80a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,80Z"></path></svg>',
      },
      {
        title: 'Newsletter connection',
        desc: 'Embed episodes directly into newsletters, welcome flows, and automations to drive more engagement.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM208,192H48V64H208V192Zm-24-96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Z"></path></svg>',
      },
      {
        title: 'Audience connection',
        desc: 'See subscribers, listeners, readers, and members in one place instead of across multiple platforms.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.37a8,8,0,0,1-11.07-2.33,79.83,79.83,0,0,0-53.38-36.87,8,8,0,0,1,3.08-15.7,95.8,95.8,0,0,1,63.7,43.83A8,8,0,0,1,250.14,206.37ZM168,144a43.91,43.91,0,0,1-13.88-2.24,8,8,0,0,1,5-15.2,28,28,0,1,0-23.75-23.75,8,8,0,0,1-15.2,5.06A44,44,0,1,1,168,144Z"></path></svg>',
      },
    ],
  },
  {
    id: 'digital-products',
    colSpan: 1,
    title: 'Digital Products',
    desc: 'Versatile offerings. 0% Commissions.',
    panelTitle: 'Digital Products',
    panelDesc: 'Sell your expertise directly to your audience. From webinars and strategy sessions to guides and gated content, you can earn with 0% commission.',
    meshSrc: '/images/digital-products.webp',
    shotSrc: '/images/digital-products-2.png',
    shotAlt: 'Digital product type and access selectors',
    shotWidth: 2421,
    shotHeight: 1503,
    shotStyle: {
      '--pcs-t-m': 'translate(calc(0.1rem - 0rem), calc(0% - 0rem)) scale(0.93)',
      '--pcs-o-m': 'top center',
      '--pcs-fit-m': 'contain',
      '--pcs-pos-m': 'top',
      '--pcs-t-d': 'translate(calc(-0.05rem - -12.5rem), calc(-16.5% - 0rem)) scale(1.81)',
      '--pcs-o-d': 'top center',
      '--pcs-fit-d': 'contain',
      '--pcs-pos-d': 'top',
    },
    features: [
      {
        title: '0% commission forever',
        desc: 'Create and sell digital products once, automate delivery, and keep every dollar you earn.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>',
      },
      {
        title: 'Automate sales',
        desc: 'Upsell products, collect testimonials & reviews, and nurture customers on autopilot.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>',
      },
      {
        title: 'Show off your product',
        desc: 'Highlight details, previews, and value upfront with clear visuals and upgraded layouts.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,80a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,80Z"></path></svg>',
      },
      {
        title: 'Sell to everyone',
        desc: 'Accept international currencies and offer Apple Pay and Google Pay for fast, familiar checkout.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>',
      },
      {
        title: 'Sell anywhere',
        desc: 'Publish product pages to your website, plus drop embeds into your link-in-bio and emails.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>',
      },
      {
        title: 'Integrate reviews',
        desc: 'Showcase reviews directly on product pages to add social proof and boost confidence.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.94,15.94,0,0,0-29.44,0L90,81.17,30.61,86.32a16,16,0,0,0-9.05,27.83L66,152.54,53.86,210.63a16,16,0,0,0,23.84,17.34L128,198.49l50.3,29.48a16,16,0,0,0,23.84-17.34L190,152.54l44.44-38.39A16,16,0,0,0,239.2,97.29Z"></path></svg>',
      },
    ],
  },
  {
    id: 'monetization',
    colSpan: 2,
    title: 'Monetization',
    desc: 'Earn with the ad Network, paid subscriptions, sponsorships and more.',
    panelTitle: 'Monetization',
    panelDesc: "Whether you're building a newsletter, creator business, or brand, beehiiv helps you make more money without taking a cut of your earnings.",
    meshSrc: '/images/monetization.webp',
    shotSrc: '/images/monetization.png',
    shotAlt: 'Ad offers and paid subscriptions revenue dashboard',
    shotWidth: 2982,
    shotHeight: 2391,
    shotStyle: {
      '--pcs-t-m': 'translate(calc(0rem - -1.1rem), calc(0% - 0rem)) scale(1)',
      '--pcs-o-m': 'top center',
      '--pcs-fit-m': 'contain',
      '--pcs-pos-m': 'top',
      '--pcs-t-d': 'translate(calc(-2.7rem - -17.85rem), calc(34.5% - -0.7rem)) scale(1.45)',
      '--pcs-o-d': 'bottom center',
      '--pcs-fit-d': 'contain',
      '--pcs-pos-d': 'bottom',
    },
    features: [
      {
        title: 'Ad Network',
        desc: 'Seamlessly connect with high-quality advertisers through the beehiiv Ad Network.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,80a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,80Z"></path></svg>',
      },
      {
        title: 'Paid Subscriptions',
        desc: 'Monetize with Paid Subscriptions using custom tiers, paywalls, and offers.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>',
      },
      {
        title: 'Recommendations',
        desc: "Partner with publications you trust, pay to reach new readers, or earn by introducing your audience to newsletters they'll love.",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>',
      },
      {
        title: 'Digital Products',
        desc: 'Sell access to exclusive content, digital downloads, or coaching sessions.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>',
      },
      {
        title: 'Sponsorships',
        desc: 'Market, manage, and deploy newsletter sponsorships with one-click ad placement and built-in performance tracking.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>',
      },
      {
        title: 'Community',
        desc: 'Create premium spaces for paid subscribers, coaching clients, customers, or members.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.37a8,8,0,0,1-11.07-2.33,79.83,79.83,0,0,0-53.38-36.87,8,8,0,0,1,3.08-15.7,95.8,95.8,0,0,1,63.7,43.83A8,8,0,0,1,250.14,206.37ZM168,144a43.91,43.91,0,0,1-13.88-2.24,8,8,0,0,1,5-15.2,28,28,0,1,0-23.75-23.75,8,8,0,0,1-15.2,5.06A44,44,0,1,1,168,144Z"></path></svg>',
      },
    ],
  },
  {
    id: 'community',
    colSpan: 2,
    title: 'Community',
    desc: 'Engage your audience with integrated channels and spaces.',
    panelTitle: 'Community',
    panelDesc: 'Launch a fully branded community inside beehiiv. Create spaces, spark discussions, and turn engagement into revenue and retention.',
    meshSrc: '/images/newsletters.webp',
    shotSrc: '/images/community.png',
    shotAlt: 'Community feed with pinned posts and member stats',
    shotWidth: 3471,
    shotHeight: 3621,
    shotStyle: {
      '--pcs-t-m': 'translate(calc(-2.55rem - -12.7rem), calc(0% - -0.85rem)) scale(2.07)',
      '--pcs-o-m': 'top center',
      '--pcs-fit-m': 'contain',
      '--pcs-pos-m': 'top',
      '--pcs-t-d': 'translate(calc(-2.95rem - -20rem), calc(-1.5% - 0rem)) scale(1.57)',
      '--pcs-o-d': 'top center',
      '--pcs-fit-d': 'contain',
      '--pcs-pos-d': 'top',
    },
    features: [
      {
        title: 'A place to belong',
        desc: 'Create spaces where you can run discussions, share updates, and let members connect with each other.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.37a8,8,0,0,1-11.07-2.33,79.83,79.83,0,0,0-53.38-36.87,8,8,0,0,1,3.08-15.7,95.8,95.8,0,0,1,63.7,43.83A8,8,0,0,1,250.14,206.37ZM168,144a43.91,43.91,0,0,1-13.88-2.24,8,8,0,0,1,5-15.2,28,28,0,1,0-23.75-23.75,8,8,0,0,1-15.2,5.06A44,44,0,1,1,168,144Z"></path></svg>',
      },
      {
        title: 'One login',
        desc: 'No more stitching together newsletters, Facebook groups, Discord servers, and membership tools.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>',
      },
      {
        title: 'Reward loyal fans',
        desc: 'Offer exclusive spaces for paid subscribers like premium communities, member-only discussions, and VIP groups.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.94,15.94,0,0,0-29.44,0L90,81.17,30.61,86.32a16,16,0,0,0-9.05,27.83L66,152.54,53.86,210.63a16,16,0,0,0,23.84,17.34L128,198.49l50.3,29.48a16,16,0,0,0,23.84-17.34L190,152.54l44.44-38.39A16,16,0,0,0,239.2,97.29Z"></path></svg>',
      },
      {
        title: 'Moderate confidently',
        desc: 'Built-in moderation tools help you manage conversations so everything feels welcoming, safe, and on-brand.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,160H48V56H208V200Z"></path></svg>',
      },
      {
        title: 'Grow your audience',
        desc: 'Give subscribers a reason to come back between sends and deepen their connection to your content.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>',
      },
      {
        title: 'Track performance',
        desc: 'See what people care about, what discussions drive engagement, and what topics keep members coming back.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>',
      },
    ],
  },
  {
    id: 'websites',
    colSpan: 1,
    title: 'Websites',
    desc: 'Build on-brand pages without a line of code.',
    panelTitle: 'Websites',
    panelDesc: 'Create beautiful, AI-powered websites and on-brand landing pages that help you attract visitors and turn attention into revenue.',
    meshSrc: '/images/websites.webp',
    shotSrc: '/images/websites.png',
    shotAlt: 'Website builder with section sidebar and page preview',
    shotWidth: 2643,
    shotHeight: 1735,
    shotStyle: {
      '--pcs-t-m': 'translate(calc(-3.2rem - -6.5rem), calc(13.5% - 0rem)) scale(1.33)',
      '--pcs-o-m': 'top center',
      '--pcs-fit-m': 'contain',
      '--pcs-pos-m': 'top',
      '--pcs-t-d': 'translate(calc(11.2rem - 0.35rem), calc(-31.5% - -12.3rem)) scale(1.63)',
      '--pcs-o-d': 'center',
      '--pcs-fit-d': 'contain',
      '--pcs-pos-d': 'center',
    },
    features: [
      {
        title: 'Full customization',
        desc: 'Make every page your own with custom layouts, branding, images, and content.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,80a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,80Z"></path></svg>',
      },
      {
        title: 'AI powered',
        desc: 'Create landing pages, sales pages, websites, and more with a simple prompt.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.32,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z"></path></svg>',
      },
      {
        title: 'Built to convert',
        desc: 'Capture subscribers, collect leads, and drive action from every page.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>',
      },
      {
        title: 'No-code builder',
        desc: 'Go from idea to website without touching a line of code.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>',
      },
      {
        title: 'Personalization',
        desc: 'Use forms, segments, and automations to deliver the right content to the right people.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>',
      },
      {
        title: 'Comprehensive analytics',
        desc: 'See traffic sources, conversion metrics, subscriber attribution, and revenue insights.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="size-6 shrink-0 text-cosmic-lavender" aria-hidden="true"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>',
      },
    ],
  },
];
