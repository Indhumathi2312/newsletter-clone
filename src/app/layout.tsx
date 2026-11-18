import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beehiiv.com'),
  title: 'Newsletter Platform: Create Newsletters and Websites - beehiiv',
  description:
    'beehiiv is the newsletter platform built for creators, publishers, and businesses. Grow, publish, and monetize your audience in one place.',
  icons: {
    icon: 'https://beehiiv-marketing-images.s3.amazonaws.com/Redesign2023/favicon.png',
  },
  openGraph: {
    title: 'Newsletter Platform: Create Newsletters and Websites - beehiiv',
    description:
      'beehiiv is the newsletter platform built for creators, publishers, and businesses. Grow, publish, and monetize your audience in one place.',
    url: 'https://www.beehiiv.com',
    siteName: 'beehiiv',
    images: [
      {
        url: '/images/og-beehiiv.png',
        width: 1200,
        height: 630,
        alt: 'beehiiv banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us" className="lH6urq_variable VGukua_variable _2jf5nG_variable">
      <head>
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/0yte-az-hudde.css" />
        <link rel="stylesheet" href="/css/1nmaevl4o76cj.css" />
        <link rel="stylesheet" href="/css/0d0o7jsyfnp7c.css" />
        <link rel="stylesheet" href="/css/30ggd9rnjcwfp.css" />
        <link rel="stylesheet" href="/css/2h6qp-3btl14-.css" />
      </head>
      <body className="bg-cyber-ink text-white antialiased selection:bg-accent-pink selection:text-cyber-ink">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
