
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const t = TRANSLATIONS[language].faq;

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50 min-h-screen">
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-12 text-center">{t.tag}</h2>
          <h1 className="text-5xl font-black text-slate-900 mb-20 tracking-tighter text-center">{t.title}</h1>
          
          <div className="space-y-6">
            {t.items.map((f: any, i: number) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{f.q}</h3>
                <p className="text-slate-500 leading-relaxed italic">"{f.a}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
