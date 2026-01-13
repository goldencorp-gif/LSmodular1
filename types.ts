
export enum Language {
  EN = 'en',
  ZH = 'zh', // Mandarin
  VI = 'vi', // Vietnamese
  HI = 'hi'  // Hindi
}

export enum PageVariant {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  HOW_IT_WORKS = 'how-it-works',
  FAQ = 'faq',
  CONTACT = 'contact',
  HOMEOWNERS = 'homeowners',
  DEVELOPERS = 'developers',
  ARCHITECTS = 'architects',
  CALCULATOR = 'calculator',
  MEASURER = 'measurer',
  DESIGN_STUDIO = 'design-studio'
}

export interface SiteSettings {
  logoUrl?: string;
  footerLogoUrl?: string;
  googleAnalyticsId?: string;
}

export interface LandingPageContent {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  problem: {
    title: string;
    content: string;
  };
  solution: {
    title: string;
    benefits: string[];
  };
  howItWorks?: string[];
  whyModular?: string[];
  idealProjects?: string[];
}

export interface AdGroup {
  name: string;
  intent: string;
  keywords: string[];
  headlines: string[];
  descriptions: string[];
  extensions: string[];
  targeting: {
    location: string;
    demographics: string;
    interests: string;
  };
}

export interface AICampaignResult {
  headlines: string[];
  descriptions: string[];
  keywords: string[];
  extensions: string[];
  targeting: {
    location: string;
    demographics: string;
    interests: string;
  };
  strategy: string;
}
