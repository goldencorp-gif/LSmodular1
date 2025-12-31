
import React, { useState } from 'react';
import { PageVariant } from '../types';

interface LeadFormProps {
  variant: PageVariant;
}

export const LeadForm: React.FC<LeadFormProps> = ({ variant }) => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful submission logic without page reload
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-2xl border border-white/10 text-center transition-all duration-500 animate-in fade-in zoom-in slide-in-from-bottom-4">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-600/20">
          <i className="fa-solid fa-check text-3xl text-white"></i>
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">Request Received</h3>
        <p className="text-slate-400 mb-10 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. A specialist from our {variant === PageVariant.ARCHITECTS ? 'Architectural Partnership' : 'Project'} team will contact you within 24 hours.
        </p>
        
        <div className="pt-10 border-t border-white/10 text-left">
          <h4 className="text-xs font-black text-blue-500 uppercase tracking-[0.25em] mb-6">Contact Us Directly</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-5 group cursor-pointer" onClick={() => window.location.href = 'tel:+18005550199'}>
              <div className="w-12 h-12 bg-white/5 group-hover:bg-white/10 rounded-xl flex items-center justify-center text-blue-400 transition-colors border border-white/5">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Direct Line</p>
                <p className="text-lg font-bold text-white tracking-tight">+1 (800) LE-SECTOR</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 group cursor-pointer" onClick={() => window.location.href = 'mailto:hello@lesector.com'}>
              <div className="w-12 h-12 bg-white/5 group-hover:bg-white/10 rounded-xl flex items-center justify-center text-blue-400 transition-colors border border-white/5">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Partnership Email</p>
                <p className="text-lg font-bold text-white tracking-tight">hello@lesector.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-12 text-xs font-bold text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors"
        >
          Return to Form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6 italic tracking-tight">
        {variant === PageVariant.HOMEOWNERS ? 'Start Your Modular Build' : 
         variant === PageVariant.DEVELOPERS ? 'Modular Development Strategy' : 
         'Architectural Partnership'}
      </h3>
      
      {variant === PageVariant.HOMEOWNERS && (
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4 flex items-start gap-3">
              <i className="fa-solid fa-file-circle-check text-blue-600 mt-0.5"></i>
              <div>
                  <p className="text-[10px] font-bold text-blue-800 uppercase tracking-wide">Free Feasibility Review</p>
                  <p className="text-xs text-blue-600 leading-tight">Upload your plans and we'll check modular compatibility within 24h.</p>
              </div>
          </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
          <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300" placeholder="e.g. Jane Smith" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</label>
            <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</label>
            <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300" placeholder="+1 (555) 000-0000" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Project Type</label>
          <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-600">
            <option value="">Select an option</option>
            <option value="single">Single Residential</option>
            <option value="multi">Multi-Unit / Townhouse</option>
            <option value="commercial">Commercial / Retail</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Upload Plans (Optional)</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
            <div className="space-y-1 text-center">
              <i className="fa-solid fa-cloud-arrow-up text-2xl text-slate-400 group-hover:text-blue-500 transition-colors"></i>
              <div className="flex text-sm text-slate-600">
                <span className="relative font-bold text-blue-600">
                  <span>Upload a file</span>
                  <input type="file" className="sr-only" />
                </span>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-tight">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 uppercase tracking-[0.15em] text-sm transform active:scale-[0.98]"
        >
          {variant === PageVariant.HOMEOWNERS ? 'Submit Your Plans' : 
           variant === PageVariant.DEVELOPERS ? 'Discuss Your Project' : 
           'Partner With Us'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <button 
          type="button"
          onClick={() => setSubmitted(true)}
          className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
        >
          Skip to Contact Info
        </button>
      </div>
    </div>
  );
};
