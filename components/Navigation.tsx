
import React, { useState, useEffect } from 'react';
import { PageVariant, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface NavigationProps {
  currentVariant: PageVariant | 'dashboard';
  setVariant: (variant: PageVariant | 'dashboard') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  logoUrl?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ currentVariant, setVariant, language, setLanguage, logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const t = TRANSLATIONS[language].nav;

  // Reset image error state if the logo URL changes (e.g., after loading site-settings.json)
  useEffect(() => {
    setImgError(false);
  }, [logoUrl]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('admin') === 'true') {
      setShowAdmin(true);
    }
  }, []);

  const navLinks = [
    { label: t.home, variant: PageVariant.HOME },
    { label: t.about, variant: PageVariant.ABOUT },
    { label: t.services, variant: PageVariant.SERVICES },
    { label: t.howItWorks, variant: PageVariant.HOW_IT_WORKS },
    { label: t.faq, variant: PageVariant.FAQ },
    { label: t.contact, variant: PageVariant.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[5rem]">
          <div className="flex items-center cursor-pointer group" onClick={() => setVariant(PageVariant.HOME)}>
            {logoUrl && !imgError ? (
              <img 
                src={logoUrl} 
                alt="Le Sector" 
                className="h-24 lg:h-28 w-auto object-contain" 
                onError={() => setImgError(true)} 
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                  Le <span className="text-blue-600">Sector</span>
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 mt-1">Modular Delivery</span>
              </div>
            )}
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.variant}
                onClick={() => setVariant(link.variant)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  currentVariant === link.variant ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="h-6 w-px bg-slate-200 mx-2" />

            {/* Language Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {[
                { id: Language.EN, label: 'EN' },
                { id: Language.ZH, label: '中' },
                { id: Language.VI, label: 'VN' },
                { id: Language.HI, label: 'हि' }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={`px-3 py-1.5 rounded text-[9px] font-black transition-all ${
                    language === lang.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {showAdmin && (
              <button
                onClick={() => setVariant('dashboard')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                  currentVariant === 'dashboard' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-lock text-[8px]"></i>
                {t.hub}
              </button>
            )}
          </div>
          
          <div className="lg:hidden flex items-center gap-4">
             <div className="flex bg-slate-100 p-1 rounded-lg">
              <button onClick={() => setLanguage(Language.EN)} className={`px-2 py-1 text-[9px] font-bold rounded ${language === Language.EN ? 'bg-white' : ''}`}>EN</button>
              <button onClick={() => setLanguage(Language.HI)} className={`px-2 py-1 text-[9px] font-bold rounded ${language === Language.HI ? 'bg-white' : ''}`}>हि</button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.variant}
              onClick={() => { setVariant(link.variant); setIsOpen(false); }}
              className="block w-full text-left text-[11px] font-black uppercase tracking-widest text-slate-600"
            >
              {link.label}
            </button>
          ))}
          {showAdmin && (
            <button
                onClick={() => { setVariant('dashboard'); setIsOpen(false); }}
                className="block w-full text-left text-[11px] font-black uppercase tracking-widest text-blue-600"
            >
                Ads Control Lab
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
