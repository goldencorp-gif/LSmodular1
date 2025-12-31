
import { PageVariant, AdGroup, LandingPageContent } from './types';

export const SYSTEM_VERSION = '1.1';

// Populate all PageVariant keys to satisfy Record<PageVariant, AdGroup>
export const ADS_STRUCTURE: Record<PageVariant, AdGroup> = {
  [PageVariant.HOME]: {
    name: "General: Le Sector Modular",
    intent: "General interest in high-end modular construction.",
    keywords: ["modular construction", "prefab homes", "modern prefab", "luxury modular homes"],
    headlines: ["Le Sector: Design-Led Modular", "The Future of Housing", "Architectural Modular Delivery"],
    descriptions: ["High-design modular homes delivered with precision.", "Precision manufactured, architecturally inspired."],
    extensions: ["Homeowners", "Investors", "Architects", "Contact Us"],
    targeting: {
      location: "Australia Nationwide",
      demographics: "25-65+",
      interests: "Architecture, Sustainable Construction, Real Estate"
    }
  },
  [PageVariant.ABOUT]: {
    name: "About: Le Sector",
    intent: "Brand awareness and company background.",
    keywords: ["le sector modular", "modular builder history", "about modular construction"],
    headlines: ["About Le Sector Modular", "Our Modular Philosophy", "The Team Behind Le Sector"],
    descriptions: ["Learn about our journey in design-led modular delivery.", "Discover the people and process behind our success."],
    extensions: ["Services", "Contact Us", "FAQ"],
    targeting: {
      location: "Nationwide",
      demographics: "25-65+",
      interests: "Architecture, Business, Sustainability"
    }
  },
  [PageVariant.SERVICES]: {
    name: "Services: Modular Delivery",
    intent: "Specific interest in modular construction services.",
    keywords: ["modular construction services", "design optimization", "prefab installation"],
    headlines: ["Our Modular Services", "End-to-End Modular Delivery", "Expert Design Optimization"],
    descriptions: ["From feasibility to installation, we manage the modular lifecycle.", "Professional services for high-end modular builds."],
    extensions: ["Homeowners", "Developers", "Architects"],
    targeting: {
      location: "Nationwide",
      demographics: "25-65+",
      interests: "Real Estate Development, Construction"
    }
  },
  [PageVariant.HOW_IT_WORKS]: {
    name: "Process: The Journey",
    intent: "Education on the modular build process.",
    keywords: ["how modular works", "modular build process", "prefab timeline"],
    headlines: ["How Modular Works", "The Le Sector Process", "5 Steps to Your Modular Home"],
    descriptions: ["See how we transform plans into precision-built modules.", "A transparent look at our delivery methodology."],
    extensions: ["Contact Us", "FAQ", "Case Studies"],
    targeting: {
      location: "Nationwide",
      demographics: "25-65+",
      interests: "Architecture, DIY, Engineering"
    }
  },
  [PageVariant.FAQ]: {
    name: "FAQ: Common Questions",
    intent: "Information seeking and concern resolution.",
    keywords: ["modular home faq", "is modular cheaper", "modular construction questions"],
    headlines: ["Modular Construction FAQ", "Got Questions? We Have Answers", "Common Modular Queries"],
    descriptions: ["Everything you need to know about design-led modular delivery.", "Answering your questions on cost, speed, and quality."],
    extensions: ["About Us", "Contact Us"],
    targeting: {
      location: "Nationwide",
      demographics: "25-65+",
      interests: "Architecture, Sustainable Living"
    }
  },
  [PageVariant.CONTACT]: {
    name: "Contact: Reach Out",
    intent: "Direct inquiry and lead generation.",
    keywords: ["contact le sector", "modular builder melbourne", "request a consultation"],
    headlines: ["Contact Le Sector", "Speak with Our Team", "Start Your Project Today"],
    descriptions: ["Ready to build? Get in touch with our modular experts.", "Book a consultation to discuss your architectural plans."],
    extensions: ["About Us", "Services", "FAQ"],
    targeting: {
      location: "Melbourne & Victoria",
      demographics: "25-65+",
      interests: "Architecture, Home Improvement"
    }
  },
  [PageVariant.CALCULATOR]: {
    name: "Tool: Cost Calculator",
    intent: "High-intent users looking for price estimates.",
    keywords: ["modular home cost calculator", "prefab price estimator", "cost of modular homes"],
    headlines: ["Modular Cost Calculator", "Estimate Your Build Cost", "Instant Modular Quote"],
    descriptions: ["Get a preliminary cost estimate for your modular project in seconds.", "Transparent pricing for design-led modular homes."],
    extensions: ["Start Calculation", "Contact Us", "Homeowners"],
    targeting: {
      location: "Nationwide",
      demographics: "25-65+, Homeowners",
      interests: "Real Estate, Finance, Construction"
    }
  },
  [PageVariant.MEASURER]: {
    name: "Tool: Site Measurer",
    intent: "Users checking if their land is suitable for modular.",
    keywords: ["modular home setback calculator", "buildable area calculator", "modular crane access check"],
    headlines: ["Site Feasibility Checker", "Can You Build Modular?", "Check Your Setbacks"],
    descriptions: ["Visualize your block and check if a modular home fits within council setbacks.", "Instant buildable area calculation."],
    extensions: ["Check Feasibility", "Contact Us", "Homeowners"],
    targeting: {
      location: "Nationwide",
      demographics: "25-65+, Landowners",
      interests: "Real Estate, Land Surveying, Home Building"
    }
  },
  [PageVariant.DESIGN_STUDIO]: {
    name: "Tool: Design Studio",
    intent: "Engagement and visualization tool for potential clients.",
    keywords: ["design modular home online", "3d modular home configurator", "custom prefab design tool"],
    headlines: ["Le Sector Design Studio", "Configure Your Modular Home", "Visualize Your Dream Home"],
    descriptions: ["Experiment with layouts, cladding, and finishes in our interactive design studio.", "Create your custom modular concept today."],
    extensions: ["Start Designing", "Gallery", "Contact Us"],
    targeting: {
      location: "Nationwide",
      demographics: "25-55+, Design Enthusiasts",
      interests: "Architecture, Interior Design, Software"
    }
  },
  
  // --- CAMPAIGN 1: HOMEOWNERS (UPDATED) ---
  [PageVariant.HOMEOWNERS]: {
    name: "Campaign 1: Homeowners – 'Have Plans'",
    intent: "Capturing users searching for builders to execute existing architectural drawings.",
    keywords: [
      "build modular from own plans", 
      "custom modular builder melbourne", 
      "architectural modular construction", 
      "can i use my own plans for modular home"
    ],
    headlines: [
      "Have Plans? Build Modular.", 
      "Your Design. Delivered.", 
      "Bring Your Own Architect"
    ],
    descriptions: [
      "Don't compromise your vision. We translate your existing drawings into precision modules.", 
      "Upload your plans for a free technical feasibility review today."
    ],
    extensions: [
      "Upload Your Plans", 
      "Free Feasibility Check", 
      "How It Works", 
      "View Projects"
    ],
    targeting: {
      location: "Victoria (Metro + 100km)",
      demographics: "Age 35-65, Top 20% Income",
      interests: "Architecture, Renovation, Self-Build, Sustainability"
    }
  },
  
  [PageVariant.DEVELOPERS]: {
    name: "Campaign 2: Investors & Developers",
    intent: "Cost certainty, speed, and repeatability.",
    keywords: ["modular housing for investors", "modular development", "multi-unit modular construction"],
    headlines: ["Modular Housing for Developers", "Predictable Build Timelines", "Integrated Modular Delivery"],
    descriptions: ["Reduce construction risk with integrated modular delivery. Predictable costs.", "Modular housing for small-scale residential developments."],
    extensions: ["Feasibility Studies", "Delivery Timelines", "Investment Returns", "Contact Partnership Team"],
    targeting: {
      location: "Nationwide",
      demographics: "30-65+, Top 10% Household Income",
      interests: "Real Estate Development, Commercial Real Estate"
    }
  },
  [PageVariant.ARCHITECTS]: {
    name: "Campaign 3: Architects & Designers",
    intent: "Modular manufacturing partner for architectural vision.",
    keywords: ["modular housing partner", "architectural modular manufacturing", "design-led modular build"],
    headlines: ["Your Designs. Delivered Modularly.", "Modular Partner for Architects", "Design-First Modular Construction"],
    descriptions: ["Partner with Le Sector to deliver design-led housing without compromise.", "Respecting architectural intent from drawing to installation."],
    extensions: ["Technical Specs", "Sustainability Report", "Partner Program", "Case Studies"],
    targeting: {
      location: "Key Design Hubs (NYC, LDN, SYD)",
      demographics: "25-55+, Professionals",
      interests: "Architecture, Industrial Design, CAD software"
    }
  }
};

// Populate all PageVariant keys to satisfy Record<PageVariant, LandingPageContent>
export const PAGE_CONTENT: Record<PageVariant, LandingPageContent> = {
  [PageVariant.HOME]: {
    hero: {
      headline: "Design-Led Modular Delivery.",
      subheadline: "Le Sector bridges the gap between architectural vision and high-speed precision manufacturing.",
      cta: "Start Your Journey"
    },
    problem: {
      title: "Construction Reimagined",
      content: "Traditional builds are slow and fragmented. We offer an integrated, design-first alternative."
    },
    solution: {
      title: "Our Core Pillars",
      benefits: [
        "Design Integrity",
        "Speed of Delivery",
        "Cost Certainty",
        "Sustainability"
      ]
    }
  },
  [PageVariant.ABOUT]: {
    hero: {
      headline: "Our Modular Story.",
      subheadline: "Learn why Le Sector is the preferred delivery partner for design-led modular housing.",
      cta: "Discover More"
    },
    problem: {
      title: "The Problem We Solve",
      content: "Construction is often a compromise between speed and quality. We aim to eliminate that trade-off."
    },
    solution: {
      title: "The Le Sector Difference",
      benefits: [
        "Architectural Focus",
        "Operational Excellence",
        "Deep Industry Expertise"
      ]
    }
  },
  [PageVariant.SERVICES]: {
    hero: {
      headline: "Comprehensive Modular Services.",
      subheadline: "From feasibility to installation, we provide a seamless path for your modular project.",
      cta: "View Services"
    },
    problem: {
      title: "Navigating Complexity",
      content: "Modular construction requires precise coordination between design and site works."
    },
    solution: {
      title: "Our Expertise",
      benefits: [
        "Technical Feasibility",
        "Modular Optimization",
        "Site Coordination"
      ]
    }
  },
  [PageVariant.HOW_IT_WORKS]: {
    hero: {
      headline: "The Path to Precise Delivery.",
      subheadline: "A transparent, structured approach to modular construction.",
      cta: "See the Process"
    },
    problem: {
      title: "Process Clarity",
      content: "Understanding the modular journey is key to project success."
    },
    solution: {
      title: "Our 5-Phase Model",
      benefits: [
        "Review & Feasibility",
        "Design Optimization",
        "Manufacturing",
        "Site Readiness",
        "Installation"
      ]
    }
  },
  [PageVariant.FAQ]: {
    hero: {
      headline: "Questions & Answers.",
      subheadline: "Clarity on modular construction, delivery timelines, and design integrity.",
      cta: "Read FAQs"
    },
    problem: {
      title: "Informed Decisions",
      content: "We provide the information you need to move forward with confidence."
    },
    solution: {
      title: "Key Insights",
      benefits: [
        "Cost Transparency",
        "Quality Standards",
        "Timeline Certainty"
      ]
    }
  },
  [PageVariant.CONTACT]: {
    hero: {
      headline: "Get in Touch.",
      subheadline: "Ready to discuss your modular project? Our team is here to help.",
      cta: "Contact Us"
    },
    problem: {
      title: "Start the Conversation",
      content: "The first step to a successful modular build is a clear brief and feasibility review."
    },
    solution: {
      title: "Reach Our Team",
      benefits: [
        "Project Consultations",
        "Technical Support",
        "General Inquiries"
      ]
    }
  },
  [PageVariant.CALCULATOR]: {
    hero: {
      headline: "Estimate Your Build.",
      subheadline: "Get a preliminary cost range for your modular project in seconds.",
      cta: "Start Calculating"
    },
    problem: {
      title: "Cost Uncertainty",
      content: "Budgeting for construction is often a guessing game. Our tool brings clarity early in the process."
    },
    solution: {
      title: "Calculator Features",
      benefits: [
        "Real-time Estimates",
        "Module Configuration",
        "Site Conditions Factor"
      ]
    }
  },
  [PageVariant.MEASURER]: {
    hero: {
      headline: "Site Feasibility Check.",
      subheadline: "Visualize your land and calculate buildable area based on setbacks and modular constraints.",
      cta: "Check Feasibility"
    },
    problem: {
      title: "Will It Fit?",
      content: "Modular homes require specific setbacks and cranage access. Check if your land is suitable before you start."
    },
    solution: {
      title: "Measurer Features",
      benefits: [
        "Visual Setback Calculator",
        "Buildable Area Output",
        "Module Width Feasibility"
      ]
    }
  },
  [PageVariant.DESIGN_STUDIO]: {
    hero: {
      headline: "Configure Your Vision.",
      subheadline: "Explore modular forms, materials, and layouts in our interactive design studio.",
      cta: "Start Designing"
    },
    problem: {
      title: "Visualize Before You Build",
      content: "See how different modular configurations and finishes look before you commit to detailed design."
    },
    solution: {
      title: "Studio Features",
      benefits: [
        "Interactive Configurator",
        "Material Selection",
        "Instant Visualization"
      ]
    }
  },
  [PageVariant.HOMEOWNERS]: {
    hero: {
      headline: "Have Plans? Build Modular.",
      subheadline: "We are the delivery partner for homeowners who have their own designs. We translate your PDF/DWG files into precision-built modular homes.",
      cta: "Upload Plans for Review"
    },
    problem: {
      title: "The 'Kit Home' Problem",
      content: "Most modular builders force you into their standard catalogue. Traditional builders are slow and expensive. You have a vision—you just need a better way to build it."
    },
    solution: {
      title: "Your Design, Modular Method",
      benefits: [
        "We build from YOUR architectural plans",
        "Free feasibility check (PDF/DWG)",
        "Precision factory manufacturing",
        "30-50% faster than onsite construction"
      ]
    },
    idealProjects: [
      "Custom Architectural Homes",
      "Complex Rear Extensions",
      "Knockdown Rebuilds",
      "Holiday Homes / 2nd Dwellings"
    ],
    howItWorks: [
      "Upload Plans (PDF/DWG)",
      "Feasibility Check (24h)",
      "Modular Optimization",
      "Manufacture & Groundworks",
      "Install & Handover"
    ]
  },
  [PageVariant.DEVELOPERS]: {
    hero: {
      headline: "Modular Housing Built for Certainty",
      subheadline: "Design-led modular delivery for investors and small-scale developers seeking predictable timelines and reduced construction risk.",
      cta: "Discuss Your Project"
    },
    problem: {
      title: "The Delivery Partner You Need",
      content: "Le Sector is not a modular factory—we are a delivery partner. We coordinate design, manufacture, site readiness, and installation to provide end-to-end accountability."
    },
    solution: {
      title: "Why Modular for Development",
      benefits: [
        "Shorter construction programs",
        "Reduced site disruption",
        "Consistent quality",
        "Better cash-flow forecasting"
      ]
    },
    idealProjects: [
      "Townhouses",
      "Dual occupancies",
      "Small residential developments",
      "Repetitive modular builds"
    ]
  },
  [PageVariant.ARCHITECTS]: {
    hero: {
      headline: "Your Designs. Delivered Modularly.",
      subheadline: "Partner with Le Sector to deliver design-led modular housing without compromising architectural intent.",
      cta: "Partner With Us"
    },
    problem: {
      title: "Design First",
      content: "We work alongside architects and designers to ensure drawings are optimised for modular construction while preserving design integrity."
    },
    solution: {
      title: "Why Partner With Le Sector",
      benefits: [
        "Respect for design intent",
        "Buildability expertise",
        "Faster delivery for clients",
        "Reduced construction risk"
      ]
    }
  }
};
