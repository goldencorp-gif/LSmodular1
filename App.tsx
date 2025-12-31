
import React, { useState, useEffect } from 'react';
import { PageVariant, Language, SiteSettings } from './types';
import { Navigation } from './components/Navigation';
import { AdsDashboard } from './components/AdsDashboard';
import { LandingPage } from './components/LandingPage';
import { PublicHome } from './components/PublicHome';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Calculator } from './components/Calculator';
import { SiteMeasurer } from './components/SiteMeasurer';
import { DesignStudio } from './components/DesignStudio';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageVariant | 'dashboard'>(PageVariant.HOME);
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [notification, setNotification] = useState<string | null>(null);
  
  // Settings for Logos
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    logoUrl: '/logo.svg', // Default vector logo
    footerLogoUrl: undefined // Will fallback to logoUrl if not set in JSON
  });

  useEffect(() => {
    // Attempt to load custom settings from site-settings.json
    fetch('/site-settings.json')
      .then(res => {
        if (res.ok) return res.json();
        return null;
      })
      .then(data => {
        if (data) {
          setSiteSettings(prev => ({ 
            ...prev, 
            ...data,
            // Ensure we handle the case where footerLogoUrl might be in JSON but empty
            footerLogoUrl: data.footerLogoUrl || undefined 
          }));
        }
      })
      .catch(() => {
        // Silent failure: file likely doesn't exist, use defaults
      });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const variantParam = params.get('v');
    const langParam = params.get('lang');
    
    if (variantParam === 'homeowners') setCurrentView(PageVariant.HOMEOWNERS);
    if (variantParam === 'developers') setCurrentView(PageVariant.DEVELOPERS);
    if (variantParam === 'architects') setCurrentView(PageVariant.ARCHITECTS);
    if (variantParam === 'calculator') setCurrentView(PageVariant.CALCULATOR);
    if (variantParam === 'measurer') setCurrentView(PageVariant.MEASURER);
    if (variantParam === 'design-studio') setCurrentView(PageVariant.DESIGN_STUDIO);

    if (langParam === 'zh') setLanguage(Language.ZH);
    if (langParam === 'vi') setLanguage(Language.VI);
    if (langParam === 'hi') setLanguage(Language.HI);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const renderContent = () => {
    if (currentView === 'dashboard') {
      return <AdsDashboard onSelectVariant={setCurrentView} />;
    }
    
    switch (currentView) {
      case PageVariant.HOME: return <PublicHome onSelectVariant={setCurrentView} language={language} />;
      case PageVariant.ABOUT: return <AboutUs language={language} />;
      case PageVariant.SERVICES: return <Services language={language} />;
      case PageVariant.HOW_IT_WORKS: return <HowItWorks language={language} />;
      case PageVariant.FAQ: return <FAQ language={language} />;
      case PageVariant.CONTACT: return <Contact language={language} />;
      case PageVariant.CALCULATOR: return <Calculator />;
      case PageVariant.MEASURER: return <SiteMeasurer />;
      case PageVariant.DESIGN_STUDIO: return <DesignStudio />;
      
      case PageVariant.HOMEOWNERS:
      case PageVariant.DEVELOPERS:
      case PageVariant.ARCHITECTS:
        return (
          <LandingPage 
            variant={currentView as PageVariant} 
            onNotify={showNotification}
          />
        );
      
      default: return <PublicHome onSelectVariant={setCurrentView} language={language} />;
    }
  };

  // Helper to handle variant changes from footer which expects PageVariant only
  const handleVariantChange = (variant: PageVariant) => {
    setCurrentView(variant);
  };

  // Logic to determine which logo to use for the footer
  const activeFooterLogo = siteSettings.footerLogoUrl && siteSettings.footerLogoUrl.trim() !== "" 
    ? siteSettings.footerLogoUrl 
    : siteSettings.logoUrl;

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-slate-50 flex flex-col">
      <Navigation 
        currentVariant={currentView} 
        setVariant={setCurrentView} 
        language={language}
        setLanguage={setLanguage}
        logoUrl={siteSettings.logoUrl}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {currentView !== 'dashboard' && (
        <Footer 
          language={language} 
          setVariant={handleVariantChange} 
          logoUrl={activeFooterLogo}
        />
      )}

      {notification && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
            <i className="fa-solid fa-circle-info text-blue-400"></i>
            <span className="text-sm font-medium">{notification}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
