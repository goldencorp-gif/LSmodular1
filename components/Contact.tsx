
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-12">{t.tag}</h2>
            <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">{t.title}</h1>
            <p className="text-lg text-slate-500 mb-16 leading-relaxed">
              {t.desc}
            </p>

            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.labels.phone}</h4>
                  <p className="text-2xl font-bold text-slate-900">0432 866 168</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.labels.email}</h4>
                  <p className="text-2xl font-bold text-slate-900">lesector.vic@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.labels.area}</h4>
                  <p className="text-2xl font-bold text-slate-900">Melbourne & Victoria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-12 lg:p-20 rounded-[3rem] text-white shadow-2xl">
             <h3 className="text-2xl font-black mb-8">{t.labels.formTitle}</h3>
             <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{t.labels.name}</label>
                  <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500 transition-colors" placeholder="Michael Chen" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{t.labels.brief}</label>
                  <textarea className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500 transition-colors h-32 resize-none" placeholder={t.labels.placeholder} />
                </div>
                <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  {t.labels.submit}
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};
