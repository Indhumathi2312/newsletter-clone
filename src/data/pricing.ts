export interface PlanFeature {
  label: string;
  badge?: string;
  infoId?: string;
  logos?: 'mcp' | 'enterprise';
}

export interface PricingCardPlan {
  id: 'free' | 'lite' | 'pro' | 'enterprise';
  pricingKey: 'Launch' | 'Scale' | 'Max' | 'Enterprise';
  name: string;
  description: string;
  featureTitle: string;
  ctaLabel: string;
  ctaNote: string;
  ctaColorScheme: 'fusion-blue-border' | 'fusion-blue' | 'cyber-ink';
  badge?: string;
  highlight?: boolean;
  features: PlanFeature[];
}

export interface IncludedProductPill {
  icon: 'Envelope' | 'GlobeSimple' | 'Microphone' | 'UsersFour' | 'Cube';
  label: string;
}

// 11 slider steps (indices 0 to 10)
export const subscriberTiers = [
  1000, 2500, 5000, 10000, 25000, 50000, 75000, 100000, 150000, 200000, 250000,
];

// Annual pricing per month for each tier
export const annualPrices: Record<'free' | 'lite' | 'pro', (number | null)[]> = {
  free: [0, 0, null, null, null, null, null, null, null, null, null],
  lite: [49, 69, 95, 119, 169, 249, 329, 399, null, null, null],
  pro: [95, 129, 169, 199, 299, 399, 499, 599, 689, 779, 869],
};

// Monthly pricing per month for each tier
export const monthlyPrices: Record<'free' | 'lite' | 'pro', (number | null)[]> = {
  free: [0, 0, null, null, null, null, null, null, null, null, null],
  lite: [59, 79, 109, 139, 199, 299, 389, 469, null, null, null],
  pro: [109, 149, 199, 239, 349, 469, 589, 699, 799, 899, 999],
};

// Average monthly ad savings / revenue indicator per tier
export const averageAdSavings: (number | null)[] = [
  null, 39, 78, 128, 180, 255, 355, 400, 600, 620, 2300,
];

// "All plans include" pill badges
export const allPlansInclude: IncludedProductPill[] = [
  { icon: 'Envelope', label: 'Newsletter' },
  { icon: 'GlobeSimple', label: 'Website' },
  { icon: 'Microphone', label: 'Podcast' },
  { icon: 'UsersFour', label: 'Community' },
  { icon: 'Cube', label: 'Digital Products' },
];

// Feature info tooltip texts
export const tooltipDetails: Record<string, string> = {
  recommendationNetwork:
    'Grow by recommending other publications — and getting recommended in return.',
  beehiivMcp:
    'Connect beehiiv to AI tools like Claude and Cursor via Model Context Protocol.',
  pollsAndSurveys:
    'Run polls and surveys in your newsletter and on your website.',
  webhooks:
    'Send subscriber and event data to external tools in real time.',
  dynamicContent:
    'Show different content to different subscribers in the same send.',
  ssoSaml:
    'Single sign-on for your team via SAML.',
  dedicatedIps:
    'Send from dedicated IP addresses for deliverability control.',
  adNetwork:
    'Earn by running ads from the beehiiv ad network.',
};

export const pricingCards: PricingCardPlan[] = [
  {
    id: 'free',
    pricingKey: 'Launch',
    name: 'Free',
    description: 'The basics for creators just getting started.',
    featureTitle: 'What’s included...',
    ctaLabel: 'Start for free',
    ctaNote: 'Upgrade anytime',
    ctaColorScheme: 'fusion-blue-border',
    features: [
      { label: 'Unlimited email sends' },
      { label: 'Industry-leading deliverability' },
      { label: 'Email templates' },
      { label: 'Landing pages' },
      { label: 'Recommendation network', infoId: 'recommendationNetwork' },
      { label: 'API and integrations' },
    ],
  },
  {
    id: 'lite',
    pricingKey: 'Scale',
    name: 'Lite',
    description: 'For those ready to grow faster and start monetizing.',
    featureTitle: 'Everything in Free plan, plus:',
    ctaLabel: 'Try for free',
    ctaNote: 'No credit card required',
    ctaColorScheme: 'fusion-blue',
    features: [
      { label: 'Paid subscriptions', badge: '0% take rate' },
      { label: 'Ad monetization' },
      { label: 'Automations' },
      { label: 'beehiiv MCP', infoId: 'beehiivMcp', logos: 'mcp' },
      { label: 'Audience Polls', infoId: 'pollsAndSurveys' },
      { label: 'A/B Testing' },
    ],
  },
  {
    id: 'pro',
    pricingKey: 'Max',
    name: 'Pro',
    description: 'For creators and brands scaling content-led business.',
    featureTitle: 'Everything in Lite plan, plus:',
    ctaLabel: 'Try for free',
    ctaNote: 'No credit card required',
    ctaColorScheme: 'fusion-blue',
    badge: 'Most Popular',
    highlight: true,
    features: [
      { label: 'Remove beehiiv branding' },
      { label: 'Ad monetization' },
      { label: 'Webinars and coaching' },
      { label: 'Advanced analytics' },
      { label: 'AI Credits', badge: 'HIGH' },
      { label: 'Webhooks', infoId: 'webhooks' },
      { label: 'Dynamic Content', infoId: 'dynamicContent' },
      { label: '24/7 priority support' },
    ],
  },
  {
    id: 'enterprise',
    pricingKey: 'Enterprise',
    name: 'Enterprise',
    description: 'For those with advanced security, support, and infrastructure needs.',
    featureTitle: 'Everything in Pro plan, plus:',
    ctaLabel: 'Contact sales',
    ctaNote: 'VIP onboarding awaits',
    ctaColorScheme: 'cyber-ink',
    features: [
      { label: 'SSO / SAML', infoId: 'ssoSaml' },
      { label: 'Dedicated IPs', infoId: 'dedicatedIps' },
      { label: 'Customer success manager' },
      { label: 'Concierge onboarding' },
      { label: 'Workspace templates' },
      { label: 'Custom rate limits' },
      { label: 'Enterprise connections', logos: 'enterprise' },
    ],
  },
];
