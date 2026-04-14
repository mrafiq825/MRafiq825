export type Project = {
  id: string;
  title: string;
  status: string;
  summary: string;
  tech: string[];
  imageAlt: string;
  liveUrl: string;
  detailsUrl?: string;
  featured?: boolean;
};
