import React from 'react';
import { Hero } from '../components/Hero';
import { TrustedLogos } from '../components/TrustedLogos';
import { FeatureTabs } from '../components/FeatureTabs';
import { CreatorsTicker } from '../components/CreatorsTicker';
import { Pricing } from '../components/Pricing';
import { TestimonialQuote } from '../components/TestimonialQuote';
import { Stats } from '../components/Stats';
import { Integrations } from '../components/Integrations';
import { Faq } from '../components/Faq';
import { CtaBanner } from '../components/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted By World Top Publishers Logos */}
      <TrustedLogos />

      {/* 3. Platform Capabilities - Interactive Feature Tabs */}
      <FeatureTabs />

      {/* 4. Creator Testimonials & Publisher Case Studies Ticker */}
      <CreatorsTicker />

      {/* 5. Pricing Plans - Interactive Tier Slider & Cards */}
      <Pricing />

      {/* 6. Featured Quote Showcase */}
      <TestimonialQuote />

      {/* 7. Numbers Tell The Story - Metrics & Stats */}
      <Stats />

      {/* 8. Powerful Integrations */}
      <Integrations />

      {/* 9. Frequently Asked Questions Accordion */}
      <Faq />

      {/* 10. Bottom Call to Action Banner */}
      <CtaBanner />
    </>
  );
}
