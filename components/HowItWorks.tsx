
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface HowItWorksProps {
  language: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ language }) => {
  const tp = TRANSLATIONS[language].process;
  const te = TRANSLATIONS[language].ecosystem;

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50">
      {/* Technical Hero */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full border-l border-b border-white/20 transform -skew-x-12 translate-x-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-8">{tp.tag}</h2>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight">
              {tp.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              We replace the fragmented nature of traditional building with a single, integrated delivery pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Construction Timeline */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative">
            {/* The Vertical Line */}
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-24 md:space-y-32">
              {tp.steps.map((step: any, idx: number) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Circle Marker */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-2 border-slate-900 rounded-full z-10 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center font-black text-slate-900">
                    {step.num}
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-[42%] ml-16 md:ml-0">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <div className="h-1 w-12 bg-blue-600 mb-6"></div>
                    <p className="text-slate-500 leading-relaxed text-lg">
                      {step.desc}
                    </p>
                    <div className="mt-8 flex gap-3">
                      <div className="px-3 py-1 bg-white border border-slate-200 rounded text-[9px] font-black uppercase tracking-widest text-slate-500">Phase Result</div>
                      <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] font-black uppercase tracking-widest text-blue-600">Verification</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parallel Workflow Visualization */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">The Parallel Advantage</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Traditional builds happen linearly. At Le Sector, construction happens simultaneously.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* Factory Side */}
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 block">Off-Site (Factory)</span>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Le Sector Modules</h3>
                <ul className="space-y-4 mb-8">
                   {['Climate-controlled production', 'Precision engineering (1mm tolerance)', 'Simultaneous multi-module assembly'].map((item, i) => (
                     <li key={i} className="flex gap-3 text-sm font-medium text-slate-600">
                       <i className="fa-solid fa-industry text-blue-500 mt-1"></i>
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
              <i className="fa-solid fa-cubes absolute -right-10 -bottom-10 text-[12rem] text-slate-200 group-hover:text-blue-100 transition-colors"></i>
            </div>

            {/* Site Side */}
            <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">On-Site (Property)</span>
                <h3 className="text-3xl font-black mb-6">CoreBase Groundworks</h3>
                <ul className="space-y-4 mb-8">
                   {['Excavation and drainage', 'Structural foundation setting', 'Service trenching and utility pre-lay'].map((item, i) => (
                     <li key={i} className="flex gap-3 text-sm font-medium text-slate-400">
                       <i className="fa-solid fa-person-digging text-blue-500 mt-1"></i>
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
              <i className="fa-solid fa-trowel-bricks absolute -right-10 -bottom-10 text-[12rem] text-white/5 group-hover:text-white/[0.08] transition-colors"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center text-white text-3xl mx-auto mb-12 shadow-2xl shadow-blue-600/30">
            <i className="fa-solid fa-map-pin"></i>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">Ready to start the delivery pathway?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded hover:bg-blue-600 transition-all shadow-xl">
              {tp.bookBtn}
            </button>
            <div className="flex flex-col items-center justify-center px-8">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Coordination</span>
               <span className="text-lg font-bold text-slate-900">0432 866 168</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
