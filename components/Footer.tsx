
import React, { useState } from 'react';
import { Language, PageVariant } from '../types';
import { TRANSLATIONS } from '../translations';
import { SYSTEM_VERSION } from '../constants';

interface FooterProps {
  language: Language;
  setVariant: (variant: PageVariant) => void;
  logoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({ language, setVariant, logoUrl }) => {
  // Store both title (for display) and type (for content selection)
  const [activeLegalDoc, setActiveLegalDoc] = useState<{ title: string; type: 'privacy' | 'terms' } | null>(null);
  const [imgError, setImgError] = useState(false);
  const t = TRANSLATIONS[language].footer;
  const tn = TRANSLATIONS[language].nav;

  // Gadget Links specific to the requested change
  const gadgetLinks = [
    { label: t.gadgets?.calculator || 'Calculator', variant: PageVariant.CALCULATOR },
    { label: t.gadgets?.measurer || 'Site Measurer', variant: PageVariant.MEASURER }, 
    { label: t.gadgets?.design || 'Design Studio', variant: PageVariant.DESIGN_STUDIO }, // Now Active
  ];

  // Icons mapped to the order in translations.ts
  // 0: Mortgage, 1: Real Estate, 2: Construction
  const partnerIcons = [
    'fa-percent',       // 1st Mortgage Group
    'fa-sign-hanging',  // 8 Miles Estate
    'fa-trowel-bricks'  // Core-Base Construction
  ];

  return (
    <>
      <footer className="bg-stone-100 text-slate-500 border-t border-stone-200 relative z-10">
        {/* Pre-Footer CTA */}
        <div className="border-b border-stone-200 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.cta.title}</h3>
              <p className="text-slate-600">{t.cta.sub}</p>
            </div>
            <button 
              onClick={() => setVariant(PageVariant.CONTACT)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs rounded transition-all shadow-lg shadow-blue-600/10"
            >
              {t.cta.btn}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div className="flex flex-col cursor-pointer" onClick={() => setVariant(PageVariant.HOME)}>
                {logoUrl && !imgError ? (
                  <img 
                    src={logoUrl} 
                    alt="Le Sector" 
                    className="h-32 lg:h-40 w-auto object-contain mb-6" 
                    onError={() => setImgError(true)} 
                  />
                ) : (
                  <>
                    <span className="text-xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                      Le <span className="text-blue-600">Sector</span>
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 mt-1">Modular Delivery</span>
                  </>
                )}
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {t.mission}
              </p>
            </div>

            {/* Column 2: Gadgets & Services */}
            <div>
              {/* Renamed "Company" to "Gadgets" (t.col1) */}
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-8">{t.col1}</h4>
              <ul className="space-y-4">
                {gadgetLinks.map((link, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => link.variant ? setVariant(link.variant) : null}
                      className={`text-sm font-medium transition-colors ${link.variant ? 'text-slate-600 hover:text-blue-600' : 'text-slate-400 cursor-not-allowed'}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mt-8 mb-4">{t.col2}</h4>
              <ul className="space-y-2">
                {t.serviceList.map((service: string, i: number) => (
                  <li key={i} className="text-xs text-slate-500">{service}</li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-8">{t.col3}</h4>
              <ul className="space-y-6">
                <li>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Phone</div>
                  <div className="text-slate-900 font-medium">{t.contactDetails.phone}</div>
                </li>
                <li>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Email</div>
                  <div className="text-slate-900 font-medium">{t.contactDetails.email}</div>
                </li>
                <li>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Service Area</div>
                  <div className="text-slate-900 font-medium">{t.contactDetails.area}</div>
                </li>
                <li>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Business Hours</div>
                  <div className="text-slate-900 font-medium">{t.contactDetails.hours}</div>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & Partners */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-8">{t.col4}</h4>
              
              {/* Partners Section (Icons with Rotation) */}
              <div className="mb-10">
                <div className="text-xs font-bold text-slate-400 uppercase mb-6">Strategic Partners</div>
                <div className="flex flex-row items-start gap-4">
                  {t.partners?.map((partner: any, i: number) => (
                    <a 
                      key={i}
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col items-center w-20"
                      title={`${partner.name} - ${partner.role}`}
                    >
                      {/* Icon Container with Rotation */}
                      <div className="relative w-14 h-14 flex items-center justify-center mb-3">
                        {/* The Rotating Ring */}
                        <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-full animate-[spin_12s_linear_infinite] group-hover:border-blue-500 group-hover:animate-[spin_4s_linear_infinite] transition-all origin-center"></div>
                        
                        {/* The Icon */}
                        <i className={`fa-solid ${partnerIcons[i] || 'fa-handshake'} text-lg text-slate-400 group-hover:text-blue-600 transition-colors`}></i>
                      </div>
                      
                      {/* Label */}
                      <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest text-center leading-tight group-hover:text-slate-900 transition-colors">
                        {partner.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-200">
                {t.legal.map((item: string, i: number) => (
                  <li key={i}>
                    <button 
                      type="button"
                      // Map index 0 to Privacy, 1 to Terms based on existing translation arrays
                      onClick={() => setActiveLegalDoc({ title: item, type: i === 0 ? 'privacy' : 'terms' })}
                      className="text-xs font-medium text-slate-400 hover:text-blue-600 transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 bg-stone-200/50">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.copyright} • v{SYSTEM_VERSION}</p>
            <p className="text-[10px] text-slate-500 max-w-xl text-center md:text-right leading-relaxed">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeLegalDoc && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">{activeLegalDoc.title}</h3>
              <button 
                onClick={() => setActiveLegalDoc(null)} 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all text-slate-400"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="prose prose-slate prose-sm max-w-none">
                
                {activeLegalDoc.type === 'terms' ? (
                  /* FULL TERMS & CONDITIONS CONTENT */
                  <>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Last Updated: 31/12/2025</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">1. About Le Sector</h4>
                    <p className="text-slate-600 mb-6">
                      Le Sector provides modular housing delivery, coordination, and advisory services. We specialise in taking client-designed plans and managing the process of modular feasibility, optimisation, coordination, and delivery.<br/><br/>
                      Le Sector is not an architectural practice and does not provide regulated design services unless expressly agreed in writing.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">2. Acceptance of Terms</h4>
                    <p className="text-slate-600 mb-6">
                      By accessing this website, engaging with Le Sector, or requesting information or services, you agree to be bound by these Terms & Conditions.<br/>
                      If you do not agree, you should not use this website or our services.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">3. Scope of Services</h4>
                    <p className="text-slate-600 mb-2">Le Sector’s services may include, but are not limited to:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>Modular feasibility assessment</li>
                      <li>Design review for modular suitability</li>
                      <li>Modular optimisation and coordination</li>
                      <li>Pre-construction planning and scheduling</li>
                      <li>Consultant coordination</li>
                      <li>Modular manufacturing coordination</li>
                      <li>Delivery and installation oversight</li>
                    </ul>
                    <p className="text-slate-600 mb-2">All services are subject to:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-1">
                      <li>A formal written agreement</li>
                      <li>Defined scope, fees, and deliverables</li>
                    </ul>
                    <p className="text-slate-600 mb-6">Le Sector does not guarantee outcomes outside the agreed scope.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">4. Design Responsibility</h4>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-2">
                      <li>All architectural, structural, engineering, and design documentation is prepared by external designers or consultants unless otherwise agreed in writing.</li>
                      <li>Le Sector does not warrant the accuracy, completeness, or compliance of third-party design documentation.</li>
                      <li>Responsibility for statutory approvals, certifications, and regulatory compliance rests with the appointed designers and consultants unless expressly stated otherwise.</li>
                    </ul>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">5. Relationship with CoreBase Construction</h4>
                    <p className="text-slate-600 mb-2">Le Sector may collaborate with CoreBase Construction for foundations, groundworks, and related site works.</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-1">
                      <li>CoreBase Construction operates as a separate legal entity</li>
                      <li>Any works performed by CoreBase Construction are subject to separate agreements</li>
                      <li>Le Sector does not assume liability for works performed under a CoreBase Construction contract</li>
                    </ul>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">6. Estimates, Costs & Timelines</h4>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-2">
                      <li>Any pricing, cost indications, or timelines provided are indicative only unless stated otherwise in a formal agreement.</li>
                      <li>Modular construction involves dependencies including manufacturing capacity, site readiness, approvals, and third-party inputs.</li>
                      <li>Le Sector does not warrant fixed pricing or timelines unless contractually agreed.</li>
                    </ul>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">7. Deposits & Engagement</h4>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-2">
                      <li>Engagement of services may require an initial deposit or staged payments</li>
                      <li>Deposits allow Le Sector to allocate resources, commence coordination, and secure production planning</li>
                      <li>Deposit terms are defined in the relevant engagement agreement</li>
                    </ul>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">8. Intellectual Property</h4>
                    <p className="text-slate-600 mb-2">All content on this website, including:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-2 space-y-1">
                      <li>Text</li>
                      <li>Graphics</li>
                      <li>Diagrams</li>
                      <li>Processes</li>
                      <li>Branding</li>
                    </ul>
                    <p className="text-slate-600 mb-2">is the intellectual property of Le Sector unless otherwise stated.</p>
                    <p className="text-slate-600 mb-6">You may not reproduce, distribute, or use this content without written consent.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">9. Limitation of Liability</h4>
                    <p className="text-slate-600 mb-2">To the maximum extent permitted by law:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-1">
                      <li>Le Sector is not liable for indirect, consequential, or economic losses</li>
                      <li>Liability is limited to the value of services provided under the relevant agreement</li>
                      <li>Le Sector is not responsible for delays or failures caused by third parties, regulatory authorities, or force majeure events</li>
                    </ul>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">10. Website Information Disclaimer</h4>
                    <p className="text-slate-600 mb-6">
                      Information on this website is provided for general information purposes only and does not constitute professional, legal, financial, or construction advice.<br/>
                      Project suitability, costs, and outcomes vary and should be assessed on a project-specific basis.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">11. Privacy</h4>
                    <p className="text-slate-600 mb-6">
                      Use of this website is also governed by our Privacy Policy, which outlines how personal information is collected and managed.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">12. Governing Law</h4>
                    <p className="text-slate-600 mb-6">
                      These Terms & Conditions are governed by the laws of Australia (or your specific state, if preferred).<br/>
                      Any disputes are subject to the jurisdiction of Australian courts.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">13. Changes to Terms</h4>
                    <p className="text-slate-600 mb-6">
                      Le Sector reserves the right to update or amend these Terms & Conditions at any time.<br/>
                      Continued use of the website constitutes acceptance of any updates.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">14. Contact</h4>
                    <p className="text-slate-600 mb-6">
                      For questions regarding these Terms & Conditions, contact:<br/>
                      <strong>Le Sector</strong><br/>
                      Email: lesector.vic@gmail.com<br/>
                      Phone: 0432 866 168
                    </p>
                  </>
                ) : (
                  /* FULL PRIVACY POLICY CONTENT */
                  <>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Last Updated: 31/12/2025</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">1. Introduction</h4>
                    <p className="text-slate-600 mb-6">
                      Le Sector is committed to protecting your privacy and handling personal information in an open and transparent manner.<br/>
                      This Privacy Policy explains how we collect, use, disclose, store, and protect personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).<br/>
                      By using our website or engaging with our services, you consent to the collection and use of your personal information as outlined in this policy.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">2. What Personal Information We Collect</h4>
                    <p className="text-slate-600 mb-2">We may collect personal information including, but not limited to:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Postal address</li>
                      <li>Project details and enquiry information</li>
                      <li>Company or organisation name</li>
                      <li>Any other information you voluntarily provide through forms, email, or communication with us</li>
                    </ul>
                    <p className="text-slate-600 mb-6">We do not intentionally collect sensitive information unless required and expressly provided with consent.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">3. How We Collect Personal Information</h4>
                    <p className="text-slate-600 mb-2">Personal information may be collected when you:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>Submit an enquiry through our website</li>
                      <li>Contact us by phone or email</li>
                      <li>Request information, proposals, or consultations</li>
                      <li>Engage our services</li>
                      <li>Interact with us via LinkedIn or other professional platforms</li>
                    </ul>
                    <p className="text-slate-600 mb-2">We may also collect limited technical information automatically, such as:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Pages visited</li>
                    </ul>
                    <p className="text-slate-600 mb-6">This data is used only for website functionality and analytics.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">4. Why We Collect Personal Information</h4>
                    <p className="text-slate-600 mb-2">We collect personal information to:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>Respond to enquiries and provide requested information</li>
                      <li>Assess project suitability and feasibility</li>
                      <li>Provide services and manage client relationships</li>
                      <li>Communicate updates or relevant information</li>
                      <li>Improve our website and service offering</li>
                      <li>Meet legal and regulatory obligations</li>
                    </ul>
                    <p className="text-slate-600 mb-6">We do not sell or rent personal information.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">5. Disclosure of Personal Information</h4>
                    <p className="text-slate-600 mb-2">We may disclose personal information to:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>Professional advisors (lawyers, accountants)</li>
                      <li>Consultants or contractors engaged for project coordination</li>
                      <li>Related entities, including CoreBase Construction, where collaboration is relevant to your enquiry or project</li>
                      <li>Regulatory authorities, if required by law</li>
                    </ul>
                    <p className="text-slate-600 mb-6">Any disclosure is limited to what is reasonably necessary.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">6. Relationship with CoreBase Construction</h4>
                    <p className="text-slate-600 mb-2">Le Sector may collaborate with CoreBase Construction for foundations and groundworks.</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-6 space-y-1">
                      <li>CoreBase Construction operates as a separate legal entity</li>
                      <li>Personal information is only shared where relevant to service delivery</li>
                      <li>Each entity manages personal information in accordance with applicable privacy laws</li>
                    </ul>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">7. Storage and Security of Information</h4>
                    <p className="text-slate-600 mb-2">We take reasonable steps to protect personal information from misuse, loss, unauthorised access, modification, or disclosure.</p>
                    <p className="text-slate-600 mb-2">Information may be stored:</p>
                    <ul className="list-disc pl-5 text-slate-600 mb-4 space-y-1">
                      <li>Electronically (secure systems and cloud services)</li>
                      <li>In limited physical records, where required</li>
                    </ul>
                    <p className="text-slate-600 mb-6">Access is restricted to authorised personnel only.</p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">8. Access and Correction</h4>
                    <p className="text-slate-600 mb-6">
                      You may request access to personal information we hold about you and request corrections if it is inaccurate, incomplete, or out of date.<br/>
                      Requests can be made by contacting us using the details below.<br/>
                      We will respond within a reasonable timeframe.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">9. Cookies and Analytics</h4>
                    <p className="text-slate-600 mb-6">
                      Our website may use cookies or third-party analytics tools to improve functionality and understand website usage.<br/>
                      You can disable cookies via your browser settings; however, this may affect website performance.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">10. Overseas Disclosure</h4>
                    <p className="text-slate-600 mb-6">
                      We do not intentionally disclose personal information overseas.<br/>
                      If overseas disclosure is required (e.g. cloud services), reasonable steps are taken to ensure compliance with Australian privacy obligations.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">11. Complaints</h4>
                    <p className="text-slate-600 mb-6">
                      If you believe we have breached your privacy, you may contact us to lodge a complaint.<br/>
                      We will investigate and respond within a reasonable timeframe.<br/>
                      If you are not satisfied, you may contact the Office of the Australian Information Commissioner (OAIC).
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">12. Changes to This Policy</h4>
                    <p className="text-slate-600 mb-6">
                      We may update this Privacy Policy from time to time.<br/>
                      The most current version will always be available on our website.
                    </p>

                    <h4 className="text-slate-900 font-bold text-lg mb-2">13. Contact Us</h4>
                    <p className="text-slate-600 mb-6">
                      For privacy enquiries or requests, contact:<br/>
                      <strong>Le Sector</strong><br/>
                      Email: lesector.vic@gmail.com<br/>
                      Phone: 0432 866 168
                    </p>
                  </>
                )}

              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setActiveLegalDoc(null)} 
                className="px-8 py-3 bg-slate-900 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
