
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface CalculatorProps {
  language: Language;
}

export const Calculator: React.FC<CalculatorProps> = ({ language }) => {
  const [size, setSize] = useState<number>(180);
  const [finish, setFinish] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [site, setSite] = useState<'flat' | 'sloped' | 'complex'>('flat');
  const [zone, setZone] = useState<'metro' | 'inner' | 'coastal' | 'regional'>('metro');
  
  // State for the breakdown
  const [breakdown, setBreakdown] = useState({
    moduleCost: 0,
    siteCost: 0,
    logisticsCost: 0,
    total: 0,
    perSqm: 0
  });

  const t = TRANSLATIONS[language].footer;

  // Australian Market Rates 2024/25 (AUD)
  const rates = {
    standard: 3800,
    premium: 5200, 
    luxury: 7500   
  };

  // Site cost multipliers (Groundworks, Cranes, Foundations)
  const siteMultipliers = {
    flat: 0.15,
    sloped: 0.35,
    complex: 0.55
  };

  // Location/Zone Loadings (Transport, Travel, Traffic Control, Marine Grade)
  const zoneLoadings = {
    metro: { factor: 0, label: 'Metro Melbourne', desc: 'Standard transport zone' },
    inner: { factor: 0.15, label: 'Inner City', desc: 'Tight access, traffic control, permits' },
    coastal: { factor: 0.08, label: 'Coastal / Peninsula', desc: 'Marine grade protection + transport' },
    regional: { factor: 0.20, label: 'Regional Vic', desc: 'Long-haul transport + crew travel' }
  };

  useEffect(() => {
    calculate();
  }, [size, finish, site, zone]);

  const calculate = () => {
    const baseModuleCost = size * rates[finish];
    
    // Site works are a percentage of the build (foundations etc)
    const estimatedSiteCost = baseModuleCost * siteMultipliers[site];
    
    // Logistics is a loading on top of the base cost based on location difficulty
    const estimatedLogistics = baseModuleCost * zoneLoadings[zone].factor;

    const total = baseModuleCost + estimatedSiteCost + estimatedLogistics;

    setBreakdown({
      moduleCost: baseModuleCost,
      siteCost: estimatedSiteCost,
      logisticsCost: estimatedLogistics,
      total: total,
      perSqm: Math.round(total / size)
    });
  };

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50 min-h-screen">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.col1}</h2>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Project Feasibility Estimator</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Modular construction shifts cost from "unpredictable site labor" to "fixed factory production". 
              Use this tool to understand the balance.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Panel */}
            <div className="lg:col-span-5 bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-200 space-y-10">
              
              {/* Size Input */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Floor Area</label>
                  <span className="text-2xl font-black text-slate-900">{size} m²</span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="600" 
                  step="10" 
                  value={size} 
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>Tiny Home (60)</span>
                  <span>Estate (600)</span>
                </div>
              </div>

              {/* Specification Level */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Specification Level</label>
                <div className="space-y-3">
                  {[
                    { id: 'standard', label: 'Standard', price: '$3,800/m²', desc: 'Volume spec, vinyl/laminate, standard ceilings.' },
                    { id: 'premium', label: 'Premium', price: '$5,200/m²', desc: 'Architectural joinery, stone, engineered timber.' },
                    { id: 'luxury', label: 'Luxury', price: '$7,500/m²', desc: 'Bespoke design, automation, complex cladding.' }
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setFinish(lvl.id as any)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
                        finish === lvl.id 
                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg' 
                        : 'bg-white border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold uppercase tracking-wider text-xs">{lvl.label}</span>
                        <span className={`text-xs font-bold ${finish === lvl.id ? 'text-blue-400' : 'text-slate-400'}`}>{lvl.price}</span>
                      </div>
                      <p className={`text-xs ${finish === lvl.id ? 'text-slate-400' : 'text-slate-500'}`}>{lvl.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Zone (New) */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Project Zone & Access</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(zoneLoadings).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setZone(key as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        zone === key
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold uppercase tracking-wider text-[10px] mb-1">{data.label}</div>
                      <div className={`text-[9px] leading-tight ${zone === key ? 'text-blue-100' : 'text-slate-400'}`}>{data.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Site Conditions */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Slope & Topography</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'flat', label: 'Flat', icon: 'fa-minus' },
                    { id: 'sloped', label: 'Sloped', icon: 'fa-chart-area' },
                    { id: 'complex', label: 'Complex', icon: 'fa-mountain' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSite(s.id as any)}
                      className={`py-4 px-2 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        site === s.id 
                        ? 'bg-slate-900 border-slate-900 text-white shadow-md transform scale-105' 
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <i className={`fa-solid ${s.icon}`}></i>
                      <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Main Total Card */}
              <div className="bg-slate-900 text-white p-10 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total Estimated Budget</p>
                      <div className="text-5xl lg:text-7xl font-black tracking-tighter text-white">
                        {formatMoney(breakdown.total)}
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">Blended Rate</p>
                       <p className="text-2xl font-bold">{formatMoney(breakdown.perSqm)} / m²</p>
                    </div>
                  </div>

                  {/* Breakdown Bars */}
                  <div className="space-y-6">
                    {/* Module Cost Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                        <span>Le Sector (Module & Manufacture)</span>
                        <span>{formatMoney(breakdown.moduleCost)}</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500"
                          style={{ width: `${(breakdown.moduleCost / breakdown.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Site Cost Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                         <span className="flex items-center gap-2">
                           CoreBase (Foundations & Site Works)
                           {site !== 'flat' && <span className="bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded text-[8px]">COMPLEXITY ADDED</span>}
                         </span>
                         <span className="text-slate-300">{formatMoney(breakdown.siteCost)}</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-500"
                          style={{ width: `${(breakdown.siteCost / breakdown.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Logistics / Zone Loading */}
                    {breakdown.logisticsCost > 0 && (
                      <div className="animate-in fade-in slide-in-from-left-4">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                           <span className="flex items-center gap-2">
                             Logistics & Zone Loading
                             <span className="bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded text-[8px]">{zoneLoadings[zone].label.toUpperCase()}</span>
                           </span>
                           <span className="text-slate-300">{formatMoney(breakdown.logisticsCost)}</span>
                        </div>
                        <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-500"
                            style={{ width: `${(breakdown.logisticsCost / breakdown.total) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 italic">
                          Includes: {zone === 'regional' ? 'Crew travel, accommodation, long-haul transport.' : zone === 'inner' ? 'Traffic management, tight access cranes.' : 'Marine grade materials, transport.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative BG */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              </div>

              {/* Disclaimer Card */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-circle-info"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Market Data Source (2025)</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Figures based on Australian market rates. "Zone Loading" covers transport, access difficulty, and travel allowances.
                    </p>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                      <li><strong>Includes:</strong> GST, Manufacturing, Standard Transport, Cranage, Screw Piles.</li>
                      <li><strong>Excludes:</strong> Council Infrastructure Levies (varies by street), Planning Permits, Consultant Fees (~10%).</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
