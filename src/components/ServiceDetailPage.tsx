import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';

interface ServiceDetailProps {
  serviceId: string;
  navigate: (page: string, params?: { serviceId?: string; productId?: string }) => void;
}

export default function ServiceDetailPage({ serviceId, navigate }: ServiceDetailProps) {
  // Grab the service object based on ID
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const getIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={26} className="stroke-[2]" /> : <LucideIcons.Scale size={26} />;
  };

  // Grab sibling services for related services section
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="w-full">
      {/* Breadcrumbs Navigation */}
      <div className="bg-white border-b border-legal-border py-3 px-4 text-xs text-muted-text select-none">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 font-medium">
          <button onClick={() => navigate('home')} className="hover:text-primary">Home</button>
          <LucideIcons.ChevronRight size={12} />
          <button onClick={() => navigate('services')} className="hover:text-primary">Services</button>
          <LucideIcons.ChevronRight size={12} />
          <span className="text-primary font-bold">{service.title}</span>
        </div>
      </div>

      {/* Hero Service Block */}
      <section className="bg-gradient-to-br from-primary to-[#164C4D] text-white py-14 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max">
              {service.subtitle}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-sm text-[#D8E7E3] max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="lg:col-span-4 bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                {getIcon(service.iconName)}
              </div>
              <span className="font-bold text-sm text-white">Verified Expert Consult</span>
            </div>
            <p className="text-xs text-[#D8E7E3]/85 leading-relaxed">
              Connect in under 60 seconds with an active advocate holding expertise inside this specific practice directory. Standard pay-per-minute billing from your secure wallet.
            </p>
            <button 
              onClick={() => navigate('talk')}
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-2.5 rounded-xl text-xs transition-colors shadow-lg"
            >
              Consult Lawyer Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Core content block */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Section: Common Issues */}
          <div>
            <h3 className="text-xl font-serif text-white font-bold pb-2 border-b border-legal-border/30 mb-4 flex items-center gap-2">
              <LucideIcons.AlertCircle size={18} className="text-secondary" />
              Common Grievance Cases We Handle
            </h3>
            <p className="text-xs text-[#D8E7E3] mb-4 leading-relaxed">
              Our seasoned counsel panel has resolved multiple disputes under statutory Indian provisions. Standard cases include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.commonIssues.map((issue, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <LucideIcons.Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-xs text-[#D8E7E3] leading-relaxed">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: How consultation works */}
          <div>
            <h3 className="text-xl font-serif text-white font-bold pb-2 border-b border-legal-border/30 mb-4 flex items-center gap-2">
              <LucideIcons.PlayCircle size={18} className="text-secondary" />
              How the Consultation Flow Operates
            </h3>
            <div className="relative border-l border-legal-border/30 pl-6 ml-3 flex flex-col gap-6">
              {service.howItWorks.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-secondary text-primary border border-white/20 text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-xs font-bold text-white">{idx === 0 ? 'Initialize Match' : idx === 1 ? 'Problem Brief' : idx === 2 ? 'The Session Case Discovery' : 'Resolution Documenting'}</p>
                  <p className="text-xs text-[#D8E7E3] mt-0.5 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Documents Needed */}
          <div>
            <h3 className="text-xl font-serif text-white font-bold pb-2 border-b border-legal-border/30 mb-4 flex items-center gap-2">
              <LucideIcons.FileCheck size={18} className="text-secondary" />
              Suggested Documents Vetting Checklist
            </h3>
            <p className="text-xs text-[#D8E7E3] mb-4 leading-relaxed">
              If you have these documents physically or electronically, please upload them during sign-up to make the consultation highly efficient (optional):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.documentsNeeded.map((doc, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <LucideIcons.FileText size={16} />
                  </div>
                  <span className="text-xs font-medium text-[#D8E7E3] leading-tight">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Expected Outcome */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="font-serif text-base font-bold text-white flex items-center gap-2 mb-2">
              <LucideIcons.Award size={18} className="text-secondary" />
              Targeted Case Outcomes
            </h4>
            <p className="text-xs text-[#D8E7E3] leading-relaxed">
              {service.outcome} Our primary focus is solving your litigation friction quickly, prioritizing mutual settlement draft solutions, solid defense replies, or certified legal rights filing.
            </p>
          </div>

        </div>

        {/* Sidebar Panel: Related Services */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-legal-border rounded-2xl p-6 shadow-premium">
            <h4 className="font-serif text-sm font-bold text-primary border-b border-legal-border pb-3 mb-4">
              Other Practice Areas
            </h4>
            <div className="flex flex-col gap-3">
              {relatedServices.map((rel) => (
                <div 
                  key={rel.id}
                  onClick={() => navigate('service-detail', { serviceId: rel.id })}
                  className="p-3 bg-primary/5 hover:bg-primary/10 border border-transparent hover:border-secondary rounded-xl transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-primary leading-tight">{rel.title}</span>
                    <span className="text-[10px] text-muted-text mt-0.5 line-clamp-1">{rel.subtitle}</span>
                  </div>
                  <LucideIcons.ChevronRight size={14} className="text-muted-text group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('services')}
              className="w-full mt-6 bg-[#1F6F5B]/10 hover:bg-[#1F6F5B]/15 text-[#1F6F5B] font-bold text-xs py-2 rounded-xl transition-colors text-center"
            >
              Explore All 7 Services
            </button>
          </div>

          {/* Quick FAQ card */}
          <div className="bg-primary p-6 rounded-2xl text-white flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold border-b border-white/15 pb-2">Quick Consultation Tip</h4>
            <p className="text-xs text-[#E2EAE7] leading-relaxed">
              Before the system dial matches you to the advocate, write down your timeline of events. Keep paper and pencil handy to note critical legal clause steps advised by court practitioners.
            </p>
            <button 
              onClick={() => navigate('talk')}
              className="mt-2 text-center bg-secondary hover:bg-secondary/90 text-primary font-bold py-2.5 rounded-xl text-xs transition-colors shadow-md"
            >
              Consult Advocate Starting ₹99
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
