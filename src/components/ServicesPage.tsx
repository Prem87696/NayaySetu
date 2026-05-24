import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  navigate: (page: string, params?: { serviceId?: string; productId?: string }) => void;
}

export default function ServicesPage({ navigate }: ServicesProps) {
  // Safe helper to grab icons
  const getIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={28} className="stroke-[2]" /> : <LucideIcons.Scale size={28} />;
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Legal Expertise Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Online Legal Services
          </h1>
          <p className="text-base text-[#D8E7E3] mt-3 leading-relaxed max-w-2xl mx-auto">
            7 high-priority practice disciplines managed by fully experienced High Court panel advocates. Get instant clarity without the painful physical courts rounds.
          </p>
        </div>
      </section>

      {/* Grid of services */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-[#147A5D] tracking-widest">Choose Practice Area</span>
          <h2 className="text-3xl font-bold text-white mt-1">What can NyaySetu help you with?</h2>
          <p className="text-xs text-[#D8E7E3] mt-2 max-w-md mx-auto">
            Pick your category. Vetting parent deeds, resolving pre-marital confusion, or answers regarding corporate tax summons occur instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv) => (
            <div 
              key={serv.id}
              onClick={() => navigate('service-detail', { serviceId: serv.id })}
              className="bg-white p-8 rounded-2xl border border-legal-border hover:border-secondary shadow-premium hover:shadow-premium-hover transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform mb-6 border border-accent/10">
                  {getIcon(serv.iconName)}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-3 font-sans">
                  {serv.subtitle}
                </p>
                <p className="text-xs text-muted-text leading-relaxed">
                  {serv.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-legal-border flex items-center justify-between">
                <span className="text-xs text-muted-text font-bold">Pay-Per-Minute support</span>
                <span className="text-xs text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Select Problem <LucideIcons.ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote Card */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-primary text-white p-8 md:p-12 rounded-3xl text-center shadow-premium relative overflow-hidden flex flex-col items-center gap-4">
          <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-2xl font-serif font-bold">Unsure about your problem classification?</h3>
          <p className="text-xs text-[#D8E7E3] max-w-md">
            Don’t worry! Get matched with a broad counselor in under 60 seconds. Our experts will triage your case and point you to the proper specialist advocate.
          </p>
          <button 
            onClick={() => navigate('talk')}
            className="mt-2 bg-secondary hover:bg-secondary/90 text-primary font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-md"
          >
            Start General Consultation call for ₹99
          </button>
        </div>
      </section>
    </div>
  );
}
