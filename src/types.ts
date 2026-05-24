export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  commonIssues: string[];
  howItWorks: string[];
  documentsNeeded: string[];
  iconName: string; // Key of lucide-react icons
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  priceText: string;
  priceValue: number;
  features: string[];
  category: string;
  turnaroundTime: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  category: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'about' | 'pricing' | 'calls' | 'docs' | 'lawyers' | 'all';
}

export interface LawyerItem {
  id: string;
  name: string;
  yearsOfExperience: number;
  rating: number;
  languages: string[];
  specialties: string[];
  location: string;
  successRate: string;
  consultationsCount: number;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  excerpt: string;
  author: string;
  content: string[];
}
