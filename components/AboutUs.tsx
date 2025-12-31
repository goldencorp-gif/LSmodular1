
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface AboutUsProps {
  language: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50">
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-12">{t.tag}</h2>
          <h1 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.9]">
            {t.title}
          </h1>
          <div className="text-xl text-slate-600 leading-relaxed space-y-8">
            <p>{t.sub1}</p>
            <p>{t.sub2}</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-slate-900 p-16 rounded-[3rem] text-white">
            <h2 className="text-3xl font-black mb-8">{t.roleTitle}</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              {t.roleSub}
            </p>
            <ul className="space-y-8">
              {t.roles.map((item: any, i: number) => (
                <li key={i} className="flex gap-6">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl" alt="Architecture" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full border-8 border-slate-50 flex items-center justify-center text-center p-4">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{t.integrity}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
