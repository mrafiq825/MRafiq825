export type SocialLink = {
  label: string;
  href: string;
};

export type Site = {
  name: string;
  greeting: string;
  role: string;
  intro: string;
  location: string;
  email: string;
  availability: string;
  cvUrl: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  skills: string[];
  stats: Array<{ label: string; value: string }>;
};
