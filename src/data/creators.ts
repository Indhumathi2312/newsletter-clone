import { TickerItem } from '../types';

export const row1Items: TickerItem[] = [
  {
    type: 'creator',
    data: {
      id: 'jay-shetty',
      name: 'Jay Shetty',
      publication: 'The Daily Wisdom',
      imageSrc: '/images/jay.png',
    },
  },
  {
    type: 'stat',
    data: {
      id: 'stat-rally',
      stat: '3X',
      description: 'Higher conversion rate from newsletter readers',
      logoSrc: '/images/image_1.jpg',
      logoAlt: 'Rally',
      caseStudyUrl: '/case-studies/rallyrd',
    },
  },
  {
    type: 'creator',
    data: {
      id: 'robin-arzon',
      name: 'Robin Arzón',
      publication: 'Swagger Society',
      imageSrc: '/images/robin-2.png',
    },
  },
  {
    type: 'stat',
    data: {
      id: 'stat-time',
      stat: '2M+',
      description: 'subscribers migrated, zero downtime',
      logoSrc: '/images/image.webp',
      logoAlt: 'TIME',
      caseStudyUrl: '/case-studies/time',
    },
  },
  {
    type: 'creator',
    data: {
      id: 'arnold',
      name: 'Arnold Schwarzenegger',
      publication: "Arnold's Pump Club",
      imageSrc: '/images/arnold.png',
    },
  },
  {
    type: 'stat',
    data: {
      id: 'stat-resume-worded',
      stat: '50–60%',
      description: 'open rates and strong CTR on active segments',
      logoSrc: '/images/image_1.webp',
      logoAlt: 'Resume Worded',
      caseStudyUrl: '/case-studies/resume-worded',
    },
  },
  {
    type: 'creator',
    data: {
      id: 'corporate-natalie',
      name: 'Corporate Natalie',
      publication: "Working Girl's Guide",
      imageSrc: '/images/natalie.png',
    },
  },
  {
    type: 'stat',
    data: {
      id: 'stat-blockworks',
      stat: '7',
      description: 'daily newsletters operated by dedicated teams',
      logoSrc: '/images/Kqvm5zUJCSBbwlz1_blockworks.svg',
      logoAlt: 'Blockworks',
      caseStudyUrl: '/case-studies/blockworks',
    },
  },
];

export const row2Items: TickerItem[] = [
  {
    type: 'stat',
    data: {
      id: 'stat-boston-globe',
      stat: '60%',
      description: "open rate on The Boston Globe Media's B-Side newsletter",
      logoSrc: '/images/_7en1eRB-FzJ39tV_boston-globe.svg',
      logoAlt: 'The Boston Globe',
      caseStudyUrl: '/case-studies/b-side',
    },
  },
  {
    type: 'creator',
    data: {
      id: 'kat-norton',
      name: 'Kat Norton',
      publication: 'Miss Excel',
      imageSrc: '/images/kat.png',
    },
  },
  {
    type: 'stat',
    data: {
      id: 'stat-jws',
      stat: '75%',
      description: 'growth in newsletter readership in 1 year',
      logoSrc: '/images/4aSpN-1OOpjV52J1_jws.svg',
      logoAlt: "Just Women's Sports",
      caseStudyUrl: '/case-studies/just-women-sports',
    },
  },
  {
    type: 'creator',
    data: {
      id: 'victoria-christie',
      name: 'Victoria Christie',
      publication: 'Girlboss',
      imageSrc: '/images/victoria.png',
    },
  },
  {
    type: 'stat',
    data: {
      id: 'stat-la-mag',
      stat: '$32K',
      description: 'saved per year by switching to beehiiv',
      logoSrc: '/images/TjsfNOPugaSJg7S8_LA-MAG.svg',
      logoAlt: 'Los Angeles Magazine',
      caseStudyUrl: '/case-studies/los-angeles-magazine',
    },
  },
  {
    type: 'creator',
    data: {
      id: 'colin-samir',
      name: 'Colin & Samir',
      publication: 'The Publish Press',
      imageSrc: '/images/colin-samir-2.png',
    },
  },
];

// For backward compatibility
export const tickerItems: TickerItem[] = [...row1Items, ...row2Items];
