
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { AICampaignResult, Language } from '../types';

export const CampaignLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [targetLang, setTargetLang] = useState<Language>(Language.EN);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AICampaignResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const generateStrategy = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);

    try {
      // Direct access required for Vite build replacement
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key not found. Please ensure process.env.API_KEY is configured.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const langNames = {
        [Language.EN]: 'English',
        [Language.ZH]: 'Mandarin Chinese',
        [Language.VI]: 'Vietnamese',
        [Language.HI]: 'Hindi'
      };
      const langName = langNames[targetLang];
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Generate a professional Google Search Ad strategy for a modular construction company called 'Le Sector'. 
        The user's project is: ${prompt}. 
        CRITICAL: All generated ad copy (headlines, descriptions, extensions) must be in ${langName}.
        Return a JSON object with headlines, descriptions, keywords, sitelink extensions (4 items), detailed targeting (location, demographics, interests), and a strategy summary.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              headlines: { type: Type.ARRAY, items: { type: Type.STRING }, description: `3 headlines in ${langName}, max 30 chars each` },
              descriptions: { type: Type.ARRAY, items: { type: Type.STRING }, description: `2 descriptions in ${langName}, max 90 chars each` },
              keywords: { type: Type.ARRAY, items: { type: Type.STRING }, description: "5 highly relevant search keywords" },
              extensions: { type: Type.ARRAY, items: { type: Type.STRING }, description: `4 sitelink extension titles in ${langName}` },
              targeting: { 
                type: Type.OBJECT, 
                properties: {
                  location: { type: Type.STRING },
                  demographics: { type: Type.STRING },
                  interests: { type: Type.STRING }
                },
                required: ["location", "demographics", "interests"]
              },
              strategy: { type: Type.STRING, description: "One sentence marketing strategy" }
            },
            required: ["headlines", "descriptions", "keywords", "extensions", "targeting", "strategy"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to connect to Strategy Lab.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Input */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold">AI Strategy Lab</h3>
              <p className="text-xs text-slate-400 font-medium">Global Campaigns</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Ad Language</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
               {[
                 { id: Language.EN, label: 'English' },
                 { id: Language.ZH, label: 'Mandarin' },
                 { id: Language.VI, label: 'Viet' },
                 { id: Language.HI, label: 'Hindi' }
               ].map(lang => (
                 <button 
                  key={lang.id}
                  onClick={() => setTargetLang(lang.id)}
                  className={`py-3 rounded-xl border text-[9px] font-black uppercase tracking-widest transition-all ${targetLang === lang.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'}`}
                 >
                   {lang.label}
                 </button>
               ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Describe the project goal</label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 resize-none"
              placeholder="e.g. Luxury townhouses in Melbourne with sustainable features..."
            />
          </div>

          <button 
            onClick={generateStrategy}
            disabled={loading || !prompt.trim()}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-500 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
          >
            {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-bolt"></i>}
            Generate Strategy
          </button>
          
          {error && <div className="mt-4 p-4 bg-red-500/10 text-red-400 text-xs text-center rounded-xl">{error}</div>}
        </div>

        {/* Right: Output */}
        <div className="space-y-8">
          {result ? (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Ad Mockup ({targetLang.toUpperCase()})</h3>
                  <button onClick={() => copyToClipboard(result.headlines[0])} className="text-[9px] font-black text-blue-600 uppercase">Copy</button>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="text-[9px] text-slate-400 mb-1 uppercase font-bold">Ad · www.lesector.com.au</p>
                  <h3 className="text-xl font-bold text-blue-700 mb-1 leading-tight">{result.headlines[0]}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{result.descriptions[0]}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-slate-200/50">
                    {result.extensions.map((ext, i) => <span key={i} className="text-[10px] text-blue-700 font-bold">{ext}</span>)}
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl">
                <h3 className="text-xl font-black mb-4">Targeting Insights</h3>
                <p className="text-blue-100 text-sm italic mb-6">"{result.strategy}"</p>
                <div className="bg-white/10 p-4 rounded-xl text-xs space-y-2">
                  <p><span className="opacity-50">Audience:</span> {result.targeting.interests}</p>
                  <p><span className="opacity-50">Geo:</span> {result.targeting.location}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center text-slate-400">
              <i className="fa-solid fa-earth-asia text-3xl mb-6"></i>
              <p className="font-bold text-slate-900 mb-2">Multilingual Strategy Lab</p>
              <p className="text-sm leading-relaxed max-w-[200px]">Select a language and describe your project to see localized ads for global communities.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
