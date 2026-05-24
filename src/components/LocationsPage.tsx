import React from 'react';
import { MapPin, Globe, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { LOCATIONS } from '../data';

interface LocationsProps {
  navigate: (page: string) => void;
}

export default function LocationsPage({ navigate }: LocationsProps) {
  const ncrHubs = LOCATIONS.filter((l) => l.region === 'Delhi NCR');
  const otherPartnerDesks = LOCATIONS.filter((l) => l.region !== 'Delhi NCR');

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Local Arbitrations & Digital Consults
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Our Consultation Centers
          </h1>
          <p className="text-base text-[#D8E7E3] mt-3 leading-relaxed max-w-2xl mx-auto">
            Providing offline in-person consultations inside Delhi NCR. Full strategic online legal counseling support accessible in any district across the Union of India.
          </p>
        </div>
      </section>

      {/* Main NCR In-Person Highlight card */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#147A5D]/10 via-[#F8F5EF] to-white border border-legal-border rounded-3xl p-8 md:p-12 mb-12 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#147A5D] tracking-widest">In-Person Delhi NCR Support</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Need Face-to-Face Counsel Meetings?</h2>
            <p className="text-sm text-muted-text leading-relaxed">
              For complex matrimonial asset split disputes, commercial business arbitrations, or formal deeds signature handovers, a physical meeting provides deeper peace of mind. Our physical corporate consult chambers are based at prime central districts equipped with safe conference rooms.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2.5 text-xs text-primary font-bold">
                <ShieldCheck className="text-secondary shrink-0" size={16} />
                <span>Fully air-conditioned Private Meeting Conference Chambers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-primary font-bold">
                <ShieldCheck className="text-secondary shrink-0" size={16} />
                <span>Available with all monthly bulk talktime packages</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-primary font-bold">
                <ShieldCheck className="text-secondary shrink-0" size={16} />
                <span>Book through Relationship Manager standard 24 hours prior</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-legal-border shadow-md flex flex-col gap-4 text-center items-center">
            <span className="text-xs uppercase font-bold text-muted-text">Direct Line For Bookings</span>
            <div className="w-12 h-12 bg-secondary/10 text-primary rounded-full flex items-center justify-center">
              <Phone size={22} className="animate-pulse" />
            </div>
            <p className="font-serif text-lg font-bold text-primary">Recharge & Book Now</p>
            <p className="text-xs text-muted-text">
              Offline chambers meetings are mapped immediately within 1-2 hours upon purchase of our Legal Security, Corporate Shield, or Special monthly support packages.
            </p>
            <button 
              onClick={() => navigate('pricing')}
              className="w-full bg-primary hover:bg-accent text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Examine Monthly Packages →
            </button>
          </div>
        </div>

        {/* Delhi NCR Hubs Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 border-b border-legal-border pb-3">
            <MapPin className="text-secondary" size={20} />
            <h3 className="text-xl font-bold text-primary">Delhi NCR Flagship In-Person Hubs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ncrHubs.map((loc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-legal-border shadow-premium flex flex-col justify-between hover:scale-102 transition-transform">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-sm text-primary uppercase">{loc.name}</span>
                    {loc.isHub && (
                      <span className="bg-[#147A5D]/10 text-[#147A5D] px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                        Corporate Hub
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {loc.address}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-legal-border flex items-center justify-between text-xs text-secondary font-bold">
                  <span>Available Mon–Sun</span>
                  <button onClick={() => navigate('talk')} className="hover:underline inline-flex items-center gap-1">
                    Book Consult <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pan India Online and Partner Desk Section */}
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-legal-border pb-3">
            <Globe className="text-[#147A5D]" size={20} />
            <h3 className="text-xl font-bold text-primary">Pan India Partner Desks & Online Digital Coverage</h3>
          </div>
          <p className="text-xs text-muted-text mb-6">
            In non-NCR metropolitan circles and major secondary cities, our verified advocate network connects instantly via HD telecom conference routes. Documents vetting and warning notice filing occur entirely online with high speed execution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherPartnerDesks.map((loc, idx) => (
              <div key={idx} className="bg-white/80 p-5 rounded-xl border border-legal-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#147A5D]"></div>
                    <span className="font-bold text-xs text-primary">{loc.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-text leading-tight block">{loc.region} Desk</span>
                  <p className="text-[11px] text-muted-text font-serif italic mt-1 leading-snug">
                    {loc.address}
                  </p>
                </div>
                <button 
                  onClick={() => navigate('talk')}
                  className="mt-4 text-[10px] text-primary hover:text-secondary font-bold text-left hover:underline"
                >
                  Consult Advocate now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-primary text-white py-12 text-center px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Active Everywhere</span>
          <h3 className="text-2xl font-serif font-bold text-white">Serving Inquiries Across 28 States & UTs</h3>
          <p className="text-xs text-[#D8E7E3] leading-relaxed">
            Even if you live outside metropolitan city lines, our counsel team is fully trained in regional litigation nuances and offers guidance across Hindi, English, Kannada, Marathi, Tamil, Telugu, and other local tongues.
          </p>
          <button 
            onClick={() => navigate('talk')}
            className="mt-4 bg-secondary hover:bg-secondary/90 text-primary font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
          >
            Match with a local Lawyer Instantly
          </button>
        </div>
      </section>
    </div>
  );
}
