
import React, { useState, useEffect } from 'react';
import { ADS_STRUCTURE, SYSTEM_VERSION } from '../constants';
import { PageVariant } from '../types';
import { CampaignLab } from './CampaignLab';

interface AdsDashboardProps {
  onSelectVariant: (v: PageVariant) => void;
}

export const AdsDashboard: React.FC<AdsDashboardProps> = ({ onSelectVariant }) => {
  // Password Persistence: Load from local storage or default to 'admin'
  const [storedPassword, setStoredPassword] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ls_ads_pwd') || 'admin';
    }
    return 'admin';
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // Change Password State
  const [isChangePwdOpen, setIsChangePwdOpen] = useState(false);
  const [pwdForm, setPwdForm] = useState({ current: '', new: '', confirm: '' });
  const [pwdMsg, setPwdMsg] = useState<{ type: 'error' | 'success' | null, text: string }>({ type: null, text: '' });

  // Version Control State
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const [activeTab, setActiveTab] = useState<'campaigns' | 'deployment' | 'lab' | 'guide'>('campaigns');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === storedPassword) {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setShowPassword(false);
    setActiveTab('campaigns');
  };

  const handleSaveVersion = () => {
    setSaveStatus('saving');
    // Simulate API call / Local storage save
    setTimeout(() => {
      localStorage.setItem('ls_ads_version_1', JSON.stringify(ADS_STRUCTURE));
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }, 800);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPwdMsg({ type: null, text: '' });

    if (pwdForm.current !== storedPassword) {
      setPwdMsg({ type: 'error', text: 'Current password incorrect' });
      return;
    }
    if (pwdForm.new.length < 4) {
      setPwdMsg({ type: 'error', text: 'New password must be at least 4 characters' });
      return;
    }
    if (pwdForm.new !== pwdForm.confirm) {
      setPwdMsg({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    setStoredPassword(pwdForm.new);
    localStorage.setItem('ls_ads_pwd', pwdForm.new);
    setPwdMsg({ type: 'success', text: 'Password changed successfully!' });
    
    setTimeout(() => {
      setIsChangePwdOpen(false);
      setPwdForm({ current: '', new: '', confirm: '' });
      setPwdMsg({ type: null, text: '' });
    }, 1500);
  };

  const checklistItems = [
    { title: "Domain & SSL", desc: "Connect a custom domain (e.g., lesector.com) with HTTPS enabled.", icon: "fa-solid fa-globe" },
    { title: "Form Backend", desc: "Connect LeadForm to Formspree or a database to actually receive emails.", icon: "fa-solid fa-database" },
    { title: "GTM / Conversion Tracking", desc: "Install Google Tag Manager to track Ad conversion events.", icon: "fa-solid fa-tag" },
    { title: "Vite Build Optmization", desc: "Move from CDN to a local build system for 0.5s load times.", icon: "fa-solid fa-rocket" }
  ];

  // Helper for Theme Colors to ensure Tailwind picks them up
  const getTheme = (variant: string) => {
    if (variant === PageVariant.HOMEOWNERS) {
      return {
        gradient: 'from-blue-50',
        iconColor: 'text-blue-600',
        iconBg: 'group-hover:bg-blue-600',
        border: 'border-blue-100',
        faintText: 'text-blue-600/5',
        titleHover: 'group-hover:text-blue-600'
      };
    }
    if (variant === PageVariant.DEVELOPERS) {
      return {
        gradient: 'from-indigo-50',
        iconColor: 'text-indigo-600',
        iconBg: 'group-hover:bg-indigo-600',
        border: 'border-indigo-100',
        faintText: 'text-indigo-600/5',
        titleHover: 'group-hover:text-indigo-600'
      };
    }
    return {
      gradient: 'from-slate-50',
      iconColor: 'text-slate-600',
      iconBg: 'group-hover:bg-slate-600',
      border: 'border-slate-100',
      faintText: 'text-slate-600/5',
      titleHover: 'group-hover:text-slate-600'
    };
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center pt-20 px-4">
        <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-10 lg:p-12 text-center animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-900/20">
            <i className="fa-solid fa-shield-halved text-3xl"></i>
          </div>
          
          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Restricted Access</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            This hub contains live campaign controls and sensitive strategy data. Please authenticate.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setLoginError(false); }}
                className={`w-full px-6 py-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-center font-bold tracking-widest placeholder:font-normal placeholder:tracking-normal text-slate-900 pr-12 ${loginError ? 'border-red-300 focus:ring-red-200 bg-red-50' : 'border-slate-200'}`}
                placeholder="Enter Passcode"
                autoFocus
              />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>

              {loginError && (
                <div className="absolute inset-y-0 right-12 flex items-center text-red-500 animate-pulse pointer-events-none">
                  <i className="fa-solid fa-circle-exclamation"></i>
                </div>
              )}
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all transform active:scale-[0.98]"
            >
              Unlock Dashboard
            </button>
          </form>
          
          <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Le Sector Internal System v{SYSTEM_VERSION}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-36 lg:pt-44 pb-20 relative">

      {/* Change Password Modal */}
      {isChangePwdOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-8 animate-in zoom-in-95 duration-200">
             <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-900">Change Password</h3>
               <button onClick={() => setIsChangePwdOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                 <i className="fa-solid fa-xmark text-slate-500"></i>
               </button>
             </div>
             
             <form onSubmit={handleChangePassword} className="space-y-4">
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Password</label>
                 <input 
                   type="password" 
                   value={pwdForm.current}
                   onChange={(e) => setPwdForm({...pwdForm, current: e.target.value})}
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                 />
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">New Password</label>
                 <input 
                   type="password" 
                   value={pwdForm.new}
                   onChange={(e) => setPwdForm({...pwdForm, new: e.target.value})}
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                 />
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Confirm New</label>
                 <input 
                   type="password" 
                   value={pwdForm.confirm}
                   onChange={(e) => setPwdForm({...pwdForm, confirm: e.target.value})}
                   className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                 />
               </div>
               
               {pwdMsg.text && (
                 <div className={`p-3 rounded-xl text-xs font-bold text-center ${pwdMsg.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                   {pwdMsg.text}
                 </div>
               )}

               <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                 Update Password
               </button>
             </form>
          </div>
        </div>
      )}

      <header className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="text-center lg:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
              <i className="fa-solid fa-layer-group"></i>
              Management Interface
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest">
              v{SYSTEM_VERSION}
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Le Sector <span className="text-blue-600">Control</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Manage live campaigns, run AI strategy simulations, or follow the guide to get live on Google.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-3 self-center lg:self-end w-full lg:w-auto">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl overflow-x-auto max-w-full">
            {[
              { id: 'campaigns', label: 'Campaigns' },
              { id: 'lab', label: 'Strategy Lab', icon: 'fa-solid fa-sparkles' },
              { id: 'guide', label: 'Ads Setup Guide', icon: 'fa-solid fa-circle-info' },
              { id: 'deployment', label: 'Go Live', icon: 'fa-solid fa-rocket' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {tab.icon && <i className={`${tab.icon} mr-2 ${activeTab === tab.id ? 'text-blue-500' : ''}`}></i>}
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSaveVersion}
              disabled={saveStatus !== 'idle'}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2 px-2 ${saveStatus === 'saved' ? 'text-green-500' : 'text-blue-600 hover:text-blue-800'}`}
            >
              {saveStatus === 'idle' && <><i className="fa-solid fa-floppy-disk"></i> Save Version {SYSTEM_VERSION}</>}
              {saveStatus === 'saving' && <><i className="fa-solid fa-spinner animate-spin"></i> Saving...</>}
              {saveStatus === 'saved' && <><i className="fa-solid fa-check"></i> Version {SYSTEM_VERSION} Saved</>}
            </button>
            <div className="w-px h-3 bg-slate-200"></div>
            <button 
              onClick={() => setIsChangePwdOpen(true)}
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 px-2"
            >
              <i className="fa-solid fa-key"></i>
              Change Password
            </button>
            <div className="w-px h-3 bg-slate-200"></div>
            <button 
              onClick={handleLogout}
              className="text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors flex items-center gap-2 px-2"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Log Out
            </button>
          </div>
        </div>
      </header>

      {activeTab === 'campaigns' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {Object.entries(ADS_STRUCTURE).map(([key, group]) => {
            const theme = getTheme(key);
            const icon = key === PageVariant.HOMEOWNERS ? 'fa-solid fa-house-chimney-window' : key === PageVariant.DEVELOPERS ? 'fa-solid fa-city' : 'fa-solid fa-compass-drafting';
            
            return (
              <div 
                key={key} 
                className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2"
              >
                <div className={`p-8 bg-gradient-to-br ${theme.gradient} to-white border-b border-slate-100 relative overflow-hidden`}>
                  <div className={`absolute -right-4 -top-4 text-8xl ${theme.faintText} group-hover:scale-110 transition-transform duration-500`}>
                    <i className={icon}></i>
                  </div>
                  <div className={`w-14 h-14 bg-white shadow-md ${theme.border} rounded-2xl flex items-center justify-center text-2xl ${theme.iconColor} mb-6 ${theme.iconBg} group-hover:text-white transition-all duration-300`}>
                    <i className={icon}></i>
                  </div>
                  <div className="flex justify-between items-start">
                    <h2 className={`text-2xl font-black text-slate-900 mb-2 tracking-tight ${theme.titleHover} transition-colors leading-none`}>
                        {group.name.split(':')[1] || group.name}
                    </h2>
                  </div>
                  <div className="flex gap-2 mt-2">
                     <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[9px] font-bold uppercase">Enabled</span>
                     <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[9px] font-bold uppercase">Search</span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow space-y-8">
                  {/* Mock Ad Preview */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 group-hover:bg-white transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="px-1.5 py-0.5 border border-slate-400 text-[9px] font-bold text-slate-500 rounded leading-none uppercase">Ad</div>
                      <div className="text-[10px] text-slate-500 truncate">www.lesector.com/modular</div>
                    </div>
                    <h3 className="text-lg font-bold text-blue-700 mb-1 leading-tight">
                      {group.headlines[0]}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                      {group.descriptions[0]}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/50">
                      {group.extensions.slice(0, 4).map((ext, idx) => (
                        <div key={idx} className="text-[10px] text-blue-700 font-bold hover:underline cursor-pointer">
                          {ext}
                        </div>
                      ))}
                    </div>

                    {/* KEYWORDS SECTION (VISUALIZED) */}
                    <div className="mt-6 pt-4 border-t border-slate-200 border-dashed">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Keywords (Phrase)</p>
                        <i className="fa-solid fa-magnifying-glass text-slate-300 text-[10px]"></i>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {group.keywords.map((kw, k) => (
                          <span key={k} className="px-2 py-1 bg-white text-slate-600 text-[10px] rounded border border-slate-200 font-mono">
                            "{kw}"
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Targeting Specs */}
                  <div className="bg-slate-900 rounded-2xl p-5 text-white/90">
                     <div className="flex justify-between items-center mb-3">
                        <h4 className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Ad Strength</h4>
                        <div className="flex gap-0.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500/30"></div>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <i className="fa-solid fa-location-dot text-[10px] mt-1 text-slate-500"></i>
                          <p className="text-xs font-medium">{group.targeting.location}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <i className="fa-solid fa-users text-[10px] mt-1 text-slate-500"></i>
                          <p className="text-xs font-medium">{group.targeting.demographics}</p>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50/50 border-t border-slate-100">
                  <button
                    onClick={() => onSelectVariant(key as PageVariant)}
                    className="w-full py-4 px-6 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-all flex items-center justify-center gap-3"
                  >
                    View Landing Page
                    <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'lab' && (
        <div className="mb-20">
          <CampaignLab />
        </div>
      )}

      {activeTab === 'guide' && (
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl">
            <div className="p-10 lg:p-16">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">How to Launch on Google Ads</h2>
              
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-black">1</div>
                  <h3 className="text-xl font-bold">Campaign Creation</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Log into <a href="https://ads.google.com" target="_blank" className="text-blue-600 font-bold underline">Google Ads</a>. Create a new campaign with the objective <strong>"Leads"</strong> and campaign type <strong>"Search"</strong>.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-black">2</div>
                  <h3 className="text-xl font-bold">Ad Group Setup</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Create 3 Ad Groups to match our variants. Use the <strong>Keywords</strong> provided in each campaign card above to target the right people.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-black">3</div>
                  <h3 className="text-xl font-bold">Paste Assets</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Copy the <strong>Headlines</strong> and <strong>Descriptions</strong> from our AI Strategy Lab. Use the Final URL: <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-mono">lesector.com?v=homeowners</code>
                  </p>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ready for bulk import?</h4>
                    <p className="text-slate-400 text-sm">Download your current structure in a format ready for Google Ads Editor.</p>
                  </div>
                  <button 
                    onClick={() => alert("CSV Generation in progress...")}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap"
                  >
                    Export Ads CSV (Editor Format)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'deployment' && (
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Deployment Checklist</h3>
              <div className="space-y-6">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Hosting Recommendation</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    For high-performance React applications like Le Sector, we recommend Vercel. It offers global edge delivery, ensuring your landing pages load instantly for ad traffic.
                  </p>
                  <button 
                    onClick={() => window.open('https://vercel.com', '_blank')}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-600/30"
                  >
                    Explore Vercel
                  </button>
                </div>
                <i className="fa-solid fa-server absolute -right-10 -bottom-10 text-[12rem] text-white/5 rotate-12"></i>
              </div>

              <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white">
                <h3 className="text-2xl font-black mb-4 tracking-tight text-white">Conversion Tracking</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Don't waste ad spend. You must implement event tracking on the 'Success' state of your lead form to tell Google which ads are actually generating money.
                </p>
                <div className="bg-white/10 p-4 rounded-xl font-mono text-xs overflow-x-auto">
                  gtag('event', 'generate_lead', &#123; 'value': 1.0, 'currency': 'USD' &#125;);
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistence Strategy Footer */}
      <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 rounded">
              Performance Logic
            </div>
            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter">Real-World Scaling</h2>
            <div className="space-y-6">
              {[
                { title: 'Dynamic Personalization', desc: 'Use UTM parameters to automatically swap variants based on the Ad ID.' },
                { title: 'A/B Testing', desc: 'Deploy two versions of the Homeowner page to test different hero headlines.' },
                { title: 'Retargeting Flow', desc: 'Show specialized ads to people who visited the Architect page but didn\'t submit.' }
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">{rule.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 transform rotate-1 hover:rotate-0 transition-all duration-700">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-bold">Estimated Scale</h3>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-black tracking-widest uppercase">Target: 200 Leads/Mo</div>
                </div>
                <div className="space-y-6">
                  <div className="h-4 w-full bg-white/5 rounded-full relative overflow-hidden">
                    <div className="h-full bg-blue-500 w-[78%] shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
                      <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Ad Budget</p>
                      <p className="text-2xl font-black">$5,000</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
                      <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">ROI Est</p>
                      <p className="text-2xl font-black">12.5x</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
