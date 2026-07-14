export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceMetric = {
  label: string;
  value: string;
};

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  techStack: string[];
  benefits: string[];
  metrics: ServiceMetric[];
  faqs: ServiceFAQ[];
};
