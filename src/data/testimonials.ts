export interface TestimonialSlide {
  id: string;
  quote: string;
  author: string;
  role: string;
  storyUrl: string;
  avatar?: string | null;
}

export const featuredTestimonials: TestimonialSlide[] = [
  {
    id: "chris-koerner",
    quote: "When someone is reading your newsletter, that's all they're doing. They're not multitasking. That focused attention is rare and powerful.",
    author: "Chris Koerner",
    role: "Founder, Koerner Office",
    storyUrl: "/case-studies/koerner-office",
    avatar: null,
  },
  {
    id: "matt-gross",
    quote: "The move to beehiiv has allowed us to put so much more control back in the hands of the writers and editors. In our previous system, everything was technical, therefore locked down and static.",
    author: "Matt Gross",
    role: "VP, Digital Initiatives, Archetype (TechCrunch)",
    storyUrl: "/case-studies/techcrunch",
    avatar: "/images/matt.png",
  },
  {
    id: "kat-norton",
    quote: "beehiiv has made it possible for me to grow my brand and provide tons of valuable tips and tricks to my community in a beautiful aesthetically pleasing and simple way.",
    author: "Kat Norton",
    role: "Ms. Excel",
    storyUrl: "/case-studies",
    avatar: null,
  },
];
