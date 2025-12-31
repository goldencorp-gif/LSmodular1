
import React, { useState } from 'react';

export const DesignStudio: React.FC = () => {
  const [layout, setLayout] = useState<'linear' | 'l-shape' | 'stacked'>('linear');
  const [cladding, setCladding] = useState<'timber' | 'monument' | 'concrete'>('timber');
  const [roof, setRoof] = useState<'flat' | 'pitched'>('flat');
  const [windows, setWindows] = useState<'panoramic' | 'punched'>('panoramic');
  const [deck, setDeck] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');

  // Approximate Base Pricing
  const getPrice = () => {
    let base = 280000; // Linear Base
    if (layout === 'l-shape') base = 420000;
    if (layout === 'stacked') base = 550000;
    
    // Additions
    if (cladding === 'timber') base += 25000; // Premium
    if (cladding === 'monument') base += 15000; // Metal
    // Concrete is standard for this calc logic
    
    if (roof === 'pitched') base += 35000;
    if (deck) base += 12000;
    if (windows === 'panoramic') base += 18500;

    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(base);
  };

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50 min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Gadgets</h2>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Design Studio 2.0</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Configure your modular archetype. Toggle environment settings and explore architectural finishes in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start h-full lg:h-[750px]">
            
            {/* Controls Panel */}
            <div className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200 h-full overflow-y-auto custom-scrollbar flex flex-col">
              <div className="flex-grow space-y-10">
                
                {/* 1. Layout Topology */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-600">1</span>
                    Archetype
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'linear', label: 'Linear', icon: 'fa-minus' },
                      { id: 'l-shape', label: 'L-Shape', icon: 'fa-l' },
                      { id: 'stacked', label: 'Stacked', icon: 'fa-layer-group' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setLayout(opt.id as any)}
                        className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                          layout === opt.id 
                          ? 'bg-slate-900 border-slate-900 text-white shadow-lg scale-105' 
                          : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                        }`}
                      >
                        <i className={`fa-solid ${opt.icon} text-lg`}></i>
                        <span className="text-[9px] font-black uppercase tracking-widest">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Cladding */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-600">2</span>
                    Materiality
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: 'timber', label: 'Charred Timber', desc: 'Vertical Grain, Natural', color: 'bg-[#5D4037]' },
                      { id: 'monument', label: 'Monument Metal', desc: 'Matte Finish, Seam', color: 'bg-[#2C3E50]' },
                      { id: 'concrete', label: 'Precast Concrete', desc: 'Industrial, Textured', color: 'bg-[#95A5A6]' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setCladding(opt.id as any)}
                        className={`w-full p-3 rounded-xl border flex items-center gap-4 transition-all ${
                          cladding === opt.id ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg shadow-sm ${opt.color}`}></div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">{opt.label}</div>
                          <div className="text-[10px] text-slate-500">{opt.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Details */}
                <div>
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-600">3</span>
                    Architectural Details
                  </h3>
                  <div className="space-y-3">
                     <div className="flex gap-3">
                       <button 
                        onClick={() => setRoof('flat')}
                        className={`flex-1 py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all ${roof === 'flat' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200'}`}
                       >
                          Flat Roof
                       </button>
                       <button 
                        onClick={() => setRoof('pitched')}
                        className={`flex-1 py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all ${roof === 'pitched' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200'}`}
                       >
                          Pitched
                       </button>
                     </div>
                     
                     <div className="flex gap-3">
                       <button 
                        onClick={() => setWindows('panoramic')}
                        className={`flex-1 py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all ${windows === 'panoramic' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200'}`}
                       >
                          Panoramic
                       </button>
                       <button 
                        onClick={() => setWindows('punched')}
                        className={`flex-1 py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all ${windows === 'punched' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200'}`}
                       >
                          Standard
                       </button>
                     </div>

                     <button 
                      onClick={() => setDeck(!deck)}
                      className={`w-full py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${deck ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}
                     >
                        <i className={`fa-solid ${deck ? 'fa-check' : 'fa-plus'}`}></i> External Decking
                     </button>
                  </div>
                </div>
              </div>

              {/* Price Footer */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Build Cost</span>
                  <span className="text-2xl font-black text-slate-900">{getPrice()}</span>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-slate-900/20 hover:bg-blue-600 transition-all">
                  Save Configuration
                </button>
              </div>
            </div>

            {/* Visualizer Canvas */}
            <div className={`lg:col-span-8 rounded-[2.5rem] relative overflow-hidden h-[500px] lg:h-full flex items-center justify-center shadow-2xl transition-colors duration-1000 ${timeOfDay === 'day' ? 'bg-sky-200' : 'bg-[#0f172a]'}`}>
               
               {/* Environment Context */}
               <div className={`absolute inset-0 transition-opacity duration-1000 ${timeOfDay === 'day' ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-white opacity-60"></div>
                 {/* Sun */}
                 <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-100 rounded-full blur-xl opacity-80"></div>
               </div>

               <div className={`absolute inset-0 transition-opacity duration-1000 ${timeOfDay === 'day' ? 'opacity-0' : 'opacity-100'}`}>
                  {/* Stars */}
                  <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-40 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="absolute top-40 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
                  {/* Moon */}
                  <div className="absolute top-12 left-12 w-16 h-16 bg-slate-100 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]"></div>
               </div>

               {/* Ground Plane */}
               <div className={`absolute bottom-0 w-full h-1/3 transition-colors duration-1000 ${timeOfDay === 'day' ? 'bg-[#e5e7eb]' : 'bg-[#1e293b]'}`}></div>
               
               {/* SVG ENGINE */}
               <svg viewBox="0 0 800 600" className="w-full h-full max-w-4xl drop-shadow-2xl transition-all duration-700 relative z-10" style={{ transform: 'scale(0.85) translateY(5%)' }}>
                  <defs>
                    <pattern id="timberPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(90)">
                      <line x1="0" y1="0" x2="0" y2="20" stroke="#3E2723" strokeWidth="0.5" opacity="0.3" />
                      <line x1="10" y1="0" x2="10" y2="20" stroke="#3E2723" strokeWidth="0.5" opacity="0.1" />
                    </pattern>
                    <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2C3E50" />
                      <stop offset="20%" stopColor="#34495E" />
                      <stop offset="50%" stopColor="#2C3E50" />
                      <stop offset="80%" stopColor="#34495E" />
                      <stop offset="100%" stopColor="#2C3E50" />
                    </linearGradient>
                    <linearGradient id="glassDay" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#E0F7FA" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#81D4FA" stopOpacity="0.6"/>
                    </linearGradient>
                    <radialGradient id="glassNight" cx="50%" cy="50%" r="50%">
                       <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.9" />
                       <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Dynamic Render Group based on Layout */}
                  <g transform="translate(100, 300)"> 
                    
                    {/* Shadow Base */}
                    <ellipse cx={layout === 'linear' ? 300 : 150} cy="140" rx={layout === 'linear' ? 350 : 200} ry="20" fill="#000" opacity={timeOfDay === 'day' ? 0.1 : 0.3} filter="url(#glow)" />

                    {/* --- MODULE RENDERING --- */}
                    
                    {/* Base Module Color Logic */}
                    {(() => {
                        const getFill = () => {
                            if (cladding === 'timber') return '#5D4037';
                            if (cladding === 'monument') return 'url(#metalGradient)';
                            return '#95A5A6';
                        }
                        const getStroke = () => {
                            if (timeOfDay === 'night') return 'rgba(255,255,255,0.05)';
                            return 'rgba(0,0,0,0.1)';
                        }
                        const getWindowFill = () => {
                            return timeOfDay === 'day' ? 'url(#glassDay)' : 'url(#glassNight)';
                        }
                        const getWindowFilter = () => {
                             return timeOfDay === 'night' ? 'url(#glow)' : '';
                        }

                        return (
                          <>
                            {/* Main Body */}
                            <rect 
                              x="0" y="0" width="300" height="120" 
                              fill={getFill()}
                              stroke={getStroke()} strokeWidth="1"
                            />
                            {cladding === 'timber' && <rect x="0" y="0" width="300" height="120" fill="url(#timberPattern)" opacity="0.4" />}
                            
                            {/* Windows Logic */}
                            {windows === 'panoramic' ? (
                                <>
                                  <rect x="10" y="10" width="130" height="100" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="2" />
                                  <rect x="150" y="10" width="140" height="100" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="2" />
                                </>
                            ) : (
                                <>
                                  <rect x="30" y="20" width="80" height="60" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="4" />
                                  <rect x="190" y="20" width="80" height="60" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="4" />
                                </>
                            )}

                            {/* LINEAR EXTENSION */}
                            {layout === 'linear' && (
                               <g transform="translate(300, 0)">
                                  <rect 
                                    x="0" y="0" width="300" height="120" 
                                    fill={getFill()}
                                  />
                                  {cladding === 'timber' && <rect x="0" y="0" width="300" height="120" fill="url(#timberPattern)" opacity="0.4" />}
                                  {/* Sliding Door */}
                                  <rect x="20" y="10" width="260" height="100" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="2" />
                                  <line x1="150" y1="10" x2="150" y2="110" stroke="#333" strokeWidth="3" />
                               </g>
                            )}

                             {/* L-SHAPE EXTENSION */}
                             {layout === 'l-shape' && (
                                <g transform="translate(250, 20)"> 
                                   <path 
                                     d="M0,100 L180,100 L180,-30 L0,-30 Z" 
                                     fill={cladding === 'timber' ? '#4E342E' : cladding === 'monument' ? '#1F2E3C' : '#7F8C8D'}
                                   />
                                   {/* L-Shape Window */}
                                   <rect x="40" y="-10" width="100" height="90" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth={windows === 'panoramic' ? 1 : 4} />
                                </g>
                            )}

                            {/* STACKED EXTENSION */}
                            {layout === 'stacked' && (
                                <g transform="translate(20, -120)">
                                   <rect 
                                    x="0" y="0" width="300" height="120" 
                                    fill={getFill()}
                                  />
                                  {cladding === 'timber' && <rect x="0" y="0" width="300" height="120" fill="url(#timberPattern)" opacity="0.4" />}
                                  
                                  {/* Upper Window */}
                                  {windows === 'panoramic' ? (
                                      <rect x="20" y="10" width="260" height="100" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="2" />
                                  ) : (
                                      <>
                                        <rect x="30" y="30" width="60" height="60" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="4" />
                                        <rect x="120" y="30" width="60" height="60" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="4" />
                                        <rect x="210" y="30" width="60" height="60" fill={getWindowFill()} filter={getWindowFilter()} stroke="#333" strokeWidth="4" />
                                      </>
                                  )}
                                </g>
                            )}

                            {/* ROOF SYSTEM */}
                            {roof === 'flat' ? (
                                <g>
                                   <rect x="-5" y="-5" width={layout === 'linear' ? 610 : 310} height="8" fill="#1e293b" />
                                   {layout === 'stacked' && <rect x="15" y="-125" width="310" height="8" fill="#1e293b" />}
                                   {layout === 'linear' && <rect x="295" y="-5" width="10" height="125" fill="#1e293b" opacity="0.1" />} 
                                </g>
                            ) : (
                                <g>
                                   <path 
                                     d={`M-15,0 L${layout === 'linear' ? 300 : 150},-90 L${layout === 'linear' ? 615 : 315},0 Z`} 
                                     fill="#1e293b" 
                                   />
                                   {layout === 'stacked' && (
                                      <path d="M5,-120 L170,-190 L335,-120 Z" fill="#1e293b" />
                                   )}
                                </g>
                            )}

                             {/* DECK SYSTEM */}
                            {deck && (
                               <g transform="translate(-20, 120)">
                                  {/* Deck Surface */}
                                  <path d={`M0,0 L${layout === 'linear' ? 640 : 340},0 L${layout === 'linear' ? 620 : 320},30 L20,30 Z`} fill="#8D6E63" />
                                  {/* Deck Boards */}
                                  {[0,5,10,15,20,25].map(y => (
                                    <line key={y} x1="10" y1={y} x2={layout === 'linear' ? 630 : 330} y2={y} stroke="#6D4C41" strokeWidth="1" />
                                  ))}
                                  {/* Posts */}
                                  <rect x="20" y="30" width="5" height="40" fill="#5D4037" />
                                  <rect x={layout === 'linear' ? 615 : 315} y="30" width="5" height="40" fill="#5D4037" />
                                  <rect x={layout === 'linear' ? 320 : 170} y="30" width="5" height="40" fill="#5D4037" />
                               </g>
                            )}
                          </>
                        );
                    })()}

                  </g>
               </svg>

               {/* View Controls Overlay */}
               <div className="absolute top-8 right-8 flex flex-col gap-3">
                  <button 
                    onClick={() => setTimeOfDay('day')}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${timeOfDay === 'day' ? 'bg-white text-yellow-500 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    <i className="fa-solid fa-sun"></i>
                  </button>
                  <button 
                    onClick={() => setTimeOfDay('night')}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${timeOfDay === 'night' ? 'bg-indigo-900 text-yellow-300 shadow-lg border border-white/20' : 'bg-white/20 text-slate-600 hover:bg-white/40'}`}
                  >
                    <i className="fa-solid fa-moon"></i>
                  </button>
               </div>

               <div className="absolute bottom-8 left-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                    <span className={`font-black uppercase text-[10px] tracking-widest ${timeOfDay === 'day' ? 'text-slate-900' : 'text-white'}`}>
                      {layout} • {cladding} • {windows}
                    </span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
