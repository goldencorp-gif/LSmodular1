
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
  const [locationInput, setLocationInput] = useState('');
  
  // State for the breakdown
  const [breakdown, setBreakdown] = useState({
    moduleCost: 0,
    siteCost: 0,
    logisticsCost: 0,
    total: 0,
    perSqm: 0
  });

  const t = TRANSLATIONS[language].footer;

  // 1. MODULE MANUFACTURE RATES (Per m²)
  // This is the only cost that changes based on "Specification Level"
  const moduleRates = {
    standard: 2200,
    premium: 3800, 
    luxury: 5900   
  };

  // 2. COREBASE SITE RATES (Per m² Base Rate)
  // Base rate covers: Screw piles, trenching, connection to mains.
  // Updated to $450/m2 to be more realistic for standard flat sites.
  const siteBaseRatePerSqm = 450; 

  // Multipliers for Topography difficulty
  const siteDifficultyFactors = {
    flat: 1.0,      // Standard Piling ($450/m2)
    sloped: 1.6,    // Deeper piles, some retaining ($720/m2)
    complex: 2.8    // Engineering heavy, significant earthworks ($1260/m2)
  };

  // 3. LOGISTICS & ACCESS RATES (Per m²)
  // Covers: Cranes, Transport Trucks, Traffic Management, Crew Travel Allowance.
  // NOT Council Levies (CIL) or Planning Permit fees.
  const zoneRatesPerSqm = {
    metro: 0,       // Standard inclusion
    inner: 450,     // Tight access cranes, traffic control, road closures
    coastal: 250,   // Marine grade protection + travel allowance
    regional: 350   // Long haul transport + crew accommodation
  };

  const zoneLabels = {
    metro: { label: 'Metro Melbourne', desc: 'Standard Access' },
    inner: { label: 'Inner City', desc: 'Tight Access / Traffic Control' },
    coastal: { label: 'Coastal / Peninsula', desc: 'Marine Grade / Travel' },
    regional: { label: 'Regional Vic', desc: 'Long Haul / Crew Allowance' }
  };

  useEffect(() => {
    calculate();
  }, [size, finish, site, zone]);

  const calculate = () => {
    // 1. The House (Changes with Finish)
    const baseModuleCost = size * moduleRates[finish];
    
    // 2. The Ground (Independent of Finish)
    const estimatedSiteCost = (size * siteBaseRatePerSqm) * siteDifficultyFactors[site];
    
    // 3. The Logistics (Independent of Finish)
    const estimatedLogistics = size * zoneRatesPerSqm[zone];

    const total = baseModuleCost + estimatedSiteCost + estimatedLogistics;

    setBreakdown({
      moduleCost: baseModuleCost,
      siteCost: estimatedSiteCost,
      logisticsCost: estimatedLogistics,
      total: total,
      perSqm: Math.round(total / size)
    });
  };

  const handleLocationCheck = () => {
    const input = locationInput.toLowerCase().trim();
    if (!input) return;

    let detected = false;

    // 1. Postcode Logic (Victoria)
    const postcodeMatch = input.match(/\b(3\d{3})\b/);
    if (postcodeMatch) {
      const p = parseInt(postcodeMatch[1], 10);
      
      // Inner City: CBD + Immediate surrounds
      if ((p >= 3000 && p <= 3051) || (p >= 3205 && p <= 3207)) {
        setZone('inner');
        detected = true;
      }
      // Coastal: Mornington Peninsula / Surf Coast
      else if ((p >= 3910 && p <= 3999) || (p >= 3220 && p <= 3230) || (p >= 3926 && p <= 3944)) {
        setZone('coastal');
        detected = true;
      }
      // Metro: Greater Melbourne standard zones
      else if ((p >= 3000 && p <= 3204) || (p >= 3800 && p <= 3810)) {
        setZone('metro');
        detected = true;
      }
      // Regional: Remainder of VIC
      else if (p >= 3211 && p <= 3999) {
        setZone('regional');
        detected = true;
      }
    }

    // 2. Suburb Keyword Logic (Fallback)
    if (!detected) {
      const innerSuburbs = ['melbourne', 'southbank', 'docklands', 'carlton', 'fitzroy', 'collingwood', 'richmond', 'south yarra', 'prahran', 'st kilda', 'albert park'];
      const coastalSuburbs = ['sorrento', 'portsea', 'rye', 'rosebud', 'dromana', 'mornington', 'torquay', 'anglesea', 'lorne', 'ocean grove', 'barwon heads', 'flinders', 'red hill'];
      const regionalSuburbs = ['geelong', 'ballarat', 'bendigo', 'shepparton', 'traralgon', 'warrnambool', 'mildura', 'echuca', 'daylesford'];

      if (innerSuburbs.some(s => input.includes(s))) { setZone('inner'); detected = true; }
      else if (coastalSuburbs.some(s => input.includes(s))) { setZone('coastal'); detected = true; }
      else if (regionalSuburbs.some(s => input.includes(s))) { setZone('regional'); detected = true; }
    }
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
                    { id: 'standard', label: 'Standard', price: '$2,200/m²', desc: 'Volume spec, vinyl/laminate, standard ceilings.' },
                    { id: 'premium', label: 'Premium', price: '$3,800/m²', desc: 'Architectural joinery, stone, engineered timber.' },
                    { id: 'luxury', label: 'Luxury', price: '$5,900/m²', desc: 'Bespoke design, automation, complex cladding.' }
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
                <div className="mb-4 flex gap-2">
                  <input 
                    type="text" 
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    placeholder="Suburb or Postcode"
                    onKeyDown={(e) => e.key === 'Enter' && handleLocationCheck()}
                    className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300 text-sm font-bold text-slate-900"
                  />
                  <button 
                    onClick={handleLocationCheck}
                    className="px-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10"
                  >
                    Check
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(zoneLabels).map(([key, data]) => (
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
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-500"
                          style={{ width: `${(breakdown.siteCost / breakdown.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-[9px] text-slate-500 italic">
                        <span>Calculated based on floor area ({size}m²) and site difficulty ({site}).</span>
                        <span className="text-slate-400 font-bold bg-white/10 px-2 py-0.5 rounded">~{formatMoney(siteBaseRatePerSqm * siteDifficultyFactors[site])}/m²</span>
                      </div>
                    </div>

                    {/* Logistics / Zone Loading */}
                    {breakdown.logisticsCost > 0 && (
                      <div className="animate-in fade-in slide-in-from-left-4">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                           <span className="flex items-center gap-2">
                             Logistics & Zone Loading
                             <span className="bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded text-[8px]">{zoneLabels[zone].label.toUpperCase()}</span>
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
                          Includes: {zoneLabels[zone].desc}. Calculated at a fixed rate per m².
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
                    <h4 className="font-bold text-slate-900 mb-2">About these figures</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Costs are separated to ensure transparency. "Luxury" finishes only increase the Module cost, not the foundations or transport.
                    </p>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                      <li><strong>Includes:</strong> GST, Manufacturing, Standard Transport, Cranage, Screw Piles/Footings.</li>
                      <li><strong>Excludes:</strong> Council Infrastructure Levies (CIL), Developer Contributions, Planning Permit Fees.</li>
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
