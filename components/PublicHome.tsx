
import React from 'react';
import { PageVariant, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface PublicHomeProps {
  onSelectVariant: (v: PageVariant) => void;
  language: Language;
}

export const PublicHome: React.FC<PublicHomeProps> = ({ onSelectVariant, language }) => {
  const t = TRANSLATIONS[language].home;
  const te = TRANSLATIONS[language].ecosystem;
  const tp = TRANSLATIONS[language].process;

  return (
    <div className="bg-slate-50">
      {/* Cinematic Hero */}
      <section className="relative h-[95vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40" 
            alt="Le Sector Architecture" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-left-8 duration-1000">
              {t.heroTitle.split('.').map((chunk: string, i: number) => (
                <span key={i} className={i === 1 ? "text-blue-500 block mt-4" : ""}>{chunk}{i === 0 ? '.' : ''}</span>
              ))}
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed animate-in fade-in duration-1000 delay-300">
              {t.heroSub}
            </p>
            <div className="flex flex-wrap gap-6 animate-in fade-in duration-1000 delay-500">
              <button 
                onClick={() => onSelectVariant(PageVariant.HOW_IT_WORKS)}
                className="px-10 py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-xs rounded shadow-2xl hover:bg-blue-600 hover:text-white transition-all"
              >
                {t.ctaStart}
              </button>
              <button 
                onClick={() => onSelectVariant(PageVariant.CONTACT)}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded hover:bg-white/20 transition-all"
              >
                {t.ctaSpeak}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Points / Trust Bar */}
      <section className="bg-blue-600 py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
                <div className="flex flex-col gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 transition-colors">
                        <i className="fa-solid fa-file-shield"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Regulated Warranty</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">Full standard building warranty protection (7 years), exactly like regulated traditional construction.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 transition-colors">
                        <i className="fa-solid fa-person-digging"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">No Site Delays</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">Never have labour stages on site. Factory manufacturing eliminates rain delays and trade gaps.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 transition-colors">
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Fixed Price Contract</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">Stay Fixed Price. We lock in the cost before manufacturing begins, providing total financial certainty.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-white group-hover:text-blue-600 transition-colors">
                        <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">No Cost Rises</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">Never face material cost raises. We procure materials upfront to protect you from inflation.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Who We Are (Positioning) */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-12">{t.whoTitle}</h2>
          <p className="text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
            {t.whoMain}
          </p>
          <div className="mt-16 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-8">
            <p>{t.whoSub1}</p>
            <p>{t.whoSub2}</p>
          </div>
        </div>
      </section>

      {/* Ecosystem Integration (CoreBase) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest mb-8 rounded">
                {te.tag}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter">{te.title}</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                {te.desc}
              </p>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                 <p className="text-slate-300 italic">
                   "{te.quote}"
                 </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] text-center">
                  <h4 className="text-3xl font-black text-blue-500 mb-2">Le Sector</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{te.leSectorSubtitle}</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] text-center mt-12">
                  <h4 className="text-3xl font-black text-slate-300 mb-2">CoreBase</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{te.coreBaseSubtitle}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (Process) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{tp.tag}</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{tp.title}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {tp.steps.map((step: any, idx: number) => (
              <div key={idx} className="group">
                <div className="text-5xl font-black text-slate-200 group-hover:text-blue-500/10 transition-colors mb-6">{step.num}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">{tp.finalCta}</h2>
          <button 
            onClick={() => onSelectVariant(PageVariant.CONTACT)}
            className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded hover:bg-blue-600 transition-all shadow-xl"
          >
            {tp.bookBtn}
          </button>
        </div>
      </section>
    </div>
  );
};
