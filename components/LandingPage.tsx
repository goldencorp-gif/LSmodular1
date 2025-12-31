
import React from 'react';
import { PageVariant, LandingPageContent } from '../types';
import { PAGE_CONTENT } from '../constants';
import { LeadForm } from './LeadForm';

interface LandingPageProps {
  variant: PageVariant;
  onNotify: (msg: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ variant, onNotify }) => {
  const content: LandingPageContent = PAGE_CONTENT[variant];

  const scrollToInquiry = () => {
    const el = document.getElementById('inquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPartners = () => {
     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920`} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded">
              Le Sector Modular
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToInquiry}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all text-center uppercase tracking-widest text-sm shadow-lg shadow-blue-600/30"
              >
                {content.hero.cta}
              </button>
              <button 
                onClick={scrollToInquiry}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white font-bold rounded-lg transition-all text-center uppercase tracking-widest text-sm"
              >
                Direct Contact
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold italic text-xl text-white">S</div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Integrated Delivery</h3>
                    <p className="text-xs text-slate-400">Design to Installation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <span>Efficiency Rate</span>
                    <span className="text-blue-400">85% Higher</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature Highlight for Homeowners with Plans */}
        {variant === PageVariant.HOMEOWNERS && (
          <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10 py-6 px-4 hidden lg:block">
             <div className="max-w-7xl mx-auto flex justify-center gap-16">
                <div className="flex items-center gap-4 text-white opacity-80 hover:opacity-100 transition-opacity cursor-default">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><i className="fa-solid fa-file-pdf"></i></div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest">Plan Upload</p>
                     <p className="text-xs">PDF / DWG Accepted</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 text-white opacity-80 hover:opacity-100 transition-opacity cursor-default">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><i className="fa-solid fa-clock"></i></div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest">Turnaround</p>
                     <p className="text-xs">24hr Feasibility Check</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 text-white opacity-80 hover:opacity-100 transition-opacity cursor-default">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><i className="fa-solid fa-ruler-combined"></i></div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest">Included</p>
                     <p className="text-xs">Setback Analysis</p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{content.problem.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "{content.problem.content}"
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight">{content.solution.title}</h2>
              <ul className="space-y-6">
                {content.solution.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 shadow-sm border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="text-lg font-medium text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg mt-8 object-cover h-64 lg:h-80" alt="Modular Construction" />
              <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg object-cover h-64 lg:h-80" alt="Design Integrity" />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Workflow Section */}
      {content.howItWorks && (
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight">Our Workflow</h2>
            <div className="grid md:grid-cols-5 gap-8">
              {content.howItWorks.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-black shadow-xl relative z-10">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-slate-800 uppercase tracking-widest text-[10px] mb-2">Phase {i+1}</h3>
                  <p className="text-sm text-slate-600 font-semibold px-4">{step}</p>
                  {i < (content.howItWorks?.length ?? 0) - 1 && (
                    <div className="hidden md:block absolute top-8 left-[70%] w-full h-[2px] bg-slate-200 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ideal Projects Grid */}
      {content.idealProjects && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-4xl font-bold mb-12 text-center tracking-tight text-white">Ideal Projects</h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.idealProjects.map((project, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                        <i className="fa-solid fa-building-circle-check text-2xl text-blue-400 mb-4"></i>
                        <h3 className="font-bold text-xl text-white leading-tight">{project}</h3>
                      </div>
                    ))}
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -mr-48 -mt-48"></div>
             </div>
          </div>
        </section>
      )}

      {/* Conversion Section */}
      <section id="inquire" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter">Ready to build smarter?</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-md leading-relaxed">
                {variant === PageVariant.HOMEOWNERS 
                  ? "Submit your drawings for a technical feasibility review and preliminary quote."
                  : variant === PageVariant.DEVELOPERS
                  ? "Book a professional consultation to assess feasibility and delivery strategy."
                  : "Let's discuss how your designs can be delivered modularly without compromise."}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center group cursor-default">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Design-led approach</h4>
                    <p className="text-xs text-slate-500 font-medium">Optimizing without sacrificing intent</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center group cursor-default">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Integrated delivery model</h4>
                    <p className="text-xs text-slate-500 font-medium">Seamless coordination across all phases</p>
                  </div>
                </div>
              </div>

              {/* Partner Referral Card */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                 <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                   <i className="fa-solid fa-circle-question text-blue-600"></i>
                   Considering modular but hit a roadblock?
                 </h4>
                 <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                   If you are facing challenges with land acquisition or finance, our delivery model might be ahead of your current stage. Speak with our partners to solve your pre-construction problems.
                 </p>
                 <button 
                  onClick={scrollToPartners}
                  className="text-xs font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-200 hover:border-blue-600 transition-all pb-1"
                 >
                   Connect with Partners
                 </button>
              </div>
            </div>
            
            <LeadForm variant={variant} />
          </div>
        </div>
      </section>
    </div>
  );
};
