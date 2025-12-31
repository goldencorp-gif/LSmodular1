
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = TRANSLATIONS[language].services;

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-12">{t.tag}</h2>
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">{t.title}</h1>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                {t.desc}
              </p>
              <div className="space-y-4">
                {t.list.map((s: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <i className="fa-solid fa-check text-blue-600"></i>
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-16 rounded-[3rem] text-white self-start">
              <h2 className="text-3xl font-black mb-8">{t.groundTitle}</h2>
              <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-8">{t.groundTag}</p>
              <div className="space-y-8">
                {t.groundList.map((s: any, i: number) => (
                  <div key={i}>
                    <h4 className="font-bold text-white mb-2">{s.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
