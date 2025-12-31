
import React, { useState, useEffect } from 'react';

export const SiteMeasurer: React.FC = () => {
  const [width, setWidth] = useState(15);
  const [depth, setDepth] = useState(30);
  const [setbackFront, setSetbackFront] = useState(6);
  const [setbackRear, setSetbackRear] = useState(3);
  const [setbackSide, setSetbackSide] = useState(1.5);
  const [hasCraneAccess, setHasCraneAccess] = useState(true);

  // Derived state
  const buildableWidth = Math.max(0, width - (setbackSide * 2));
  const buildableDepth = Math.max(0, depth - setbackFront - setbackRear);
  const buildableArea = Math.round(buildableWidth * buildableDepth);
  const landArea = Math.round(width * depth);
  const coverage = Math.round((buildableArea / landArea) * 100);

  // Module Logic (Standard Module ~4.2m width)
  const isTooNarrow = buildableWidth < 4.5;
  const isTight = buildableWidth >= 4.5 && buildableWidth < 6;

  return (
    <div className="pt-32 lg:pt-36 bg-slate-50 min-h-screen">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Gadgets</h2>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Site Feasibility Measurer</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Modular homes require specific setbacks for crane access and module placement. 
              Visualize your "Safe Build Zone" below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Panel */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm"><i className="fa-solid fa-ruler-combined"></i></span>
                  Land Dimensions
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Width (Frontage)</label>
                      <span className="text-sm font-bold text-slate-900">{width}m</span>
                    </div>
                    <input 
                      type="range" min="8" max="40" step="0.5" 
                      value={width} onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Depth</label>
                      <span className="text-sm font-bold text-slate-900">{depth}m</span>
                    </div>
                    <input 
                      type="range" min="15" max="80" step="1" 
                      value={depth} onChange={(e) => setDepth(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm"><i className="fa-solid fa-vector-square"></i></span>
                  Setbacks (Council)
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Front Setback</label>
                      <span className="text-sm font-bold text-slate-900">{setbackFront}m</span>
                    </div>
                    <input 
                      type="range" min="0" max="15" step="0.5" 
                      value={setbackFront} onChange={(e) => setSetbackFront(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-400"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Side Setbacks (Each)</label>
                      <span className="text-sm font-bold text-slate-900">{setbackSide}m</span>
                    </div>
                    <input 
                      type="range" min="0" max="5" step="0.1" 
                      value={setbackSide} onChange={(e) => setSetbackSide(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-400"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rear Setback</label>
                      <span className="text-sm font-bold text-slate-900">{setbackRear}m</span>
                    </div>
                    <input 
                      type="range" min="0" max="15" step="0.5" 
                      value={setbackRear} onChange={(e) => setSetbackRear(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-400"
                    />
                  </div>
                </div>
              </div>

               <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Crane Access Clear?</span>
                  <button 
                    onClick={() => setHasCraneAccess(!hasCraneAccess)}
                    className={`w-12 h-7 rounded-full transition-colors relative ${hasCraneAccess ? 'bg-green-500' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${hasCraneAccess ? 'left-6' : 'left-1'}`}></div>
                  </button>
               </div>
            </div>

            {/* Visualizer & Stats */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* The Blueprint */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
                
                {/* SVG Visualizer */}
                <div className="relative w-full h-[400px] flex items-center justify-center">
                  <div 
                    className="relative border-4 border-slate-600 bg-slate-800 transition-all duration-500 flex flex-col justify-between"
                    style={{
                      aspectRatio: `${width} / ${depth}`,
                      height: width > depth ? 'auto' : '80%',
                      width: width > depth ? '80%' : 'auto',
                      maxHeight: '100%',
                      maxWidth: '100%'
                    }}
                  >
                    {/* Land Labels */}
                    <div className="absolute -top-8 w-full text-center text-xs font-bold text-slate-500 uppercase tracking-wider">{width}m Frontage</div>
                    <div className="absolute -left-8 h-full flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider -rotate-90 origin-center">{depth}m Depth</div>

                    {/* Setbacks Visuals (Margins) */}
                    <div 
                      className="flex-grow w-full relative"
                      style={{
                        paddingTop: `${(setbackRear / depth) * 100}%`,
                        paddingBottom: `${(setbackFront / depth) * 100}%`,
                        paddingLeft: `${(setbackSide / width) * 100}%`,
                        paddingRight: `${(setbackSide / width) * 100}%`
                      }}
                    >
                      {/* Safe Build Zone */}
                      <div className={`w-full h-full border-2 border-dashed ${isTooNarrow ? 'border-red-500 bg-red-500/10' : 'border-green-500 bg-green-500/10'} rounded flex items-center justify-center relative transition-all duration-500`}>
                        <div className="text-center">
                          <span className={`block text-xl lg:text-3xl font-black ${isTooNarrow ? 'text-red-400' : 'text-white'}`}>
                            {buildableWidth.toFixed(1)}m x {buildableDepth.toFixed(1)}m
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Buildable Envelope</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Street Indicator */}
                    <div className="absolute -bottom-16 w-full text-center">
                      <div className="h-0.5 bg-slate-700 w-full mb-2"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Street / Access</span>
                    </div>
                  </div>
                </div>

                {/* Crane Access Warning */}
                {!hasCraneAccess && (
                  <div className="absolute top-8 right-8 bg-orange-500/20 text-orange-400 border border-orange-500/50 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide animate-pulse">
                    <i className="fa-solid fa-triangle-exclamation mr-2"></i> No Crane Access
                  </div>
                )}
              </div>

              {/* Data & Warnings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                       <i className="fa-solid fa-calculator"></i>
                     </div>
                     <h4 className="font-bold text-slate-900">Envelope Data</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Land Area</p>
                      <p className="text-xl font-black text-slate-900">{landArea}m²</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Buildable Area</p>
                      <p className="text-xl font-black text-blue-600">{buildableArea}m²</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Site Coverage</p>
                      <p className="text-xl font-black text-slate-900">{coverage}%</p>
                    </div>
                  </div>
                </div>

                <div className={`p-8 rounded-[2rem] border ${isTooNarrow ? 'bg-red-50 border-red-200' : isTight ? 'bg-orange-50 border-orange-200' : 'bg-green-50 border-green-200'}`}>
                   <div className="flex items-center gap-4 mb-4">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${isTooNarrow ? 'bg-red-200 text-red-700' : isTight ? 'bg-orange-200 text-orange-700' : 'bg-green-200 text-green-700'}`}>
                       <i className={`fa-solid ${isTooNarrow ? 'fa-xmark' : isTight ? 'fa-exclamation' : 'fa-check'}`}></i>
                     </div>
                     <h4 className={`font-bold ${isTooNarrow ? 'text-red-900' : isTight ? 'text-orange-900' : 'text-green-900'}`}>Modular Feasibility</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${isTooNarrow ? 'text-red-800' : isTight ? 'text-orange-800' : 'text-green-800'}`}>
                    {isTooNarrow 
                      ? "Width Warning: The buildable width is likely too narrow for standard modules (< 4.5m). Custom engineering required." 
                      : isTight
                      ? "Tight Fit: Module width is feasible but crane access and side-loading might be complex."
                      : "Excellent: Ample width for standard modular trucking and cranage."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
