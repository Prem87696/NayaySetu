import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface CityLawyersProps {
  navigate: (page: string) => void;
}

interface MiniAdvocate {
  name: string;
  nlu: string;
  experience: number;
  rating: number;
  courtPractice: string;
  verifiedBadge: boolean;
}

export default function CityLawyers({ navigate }: CityLawyersProps) {
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');

  const cityDatabase: Record<string, {
    totalAdvocates: number;
    description: string;
    localCourt: string;
    avgSpeedSec: number;
    expertsCount: number;
    panelLawyers: MiniAdvocate[];
  }> = {
    'Delhi NCR': {
      totalAdvocates: 210,
      description: 'Serving Delhi High Court, Saket Court, Patiala House Complex, Dwarka and Noida/Gurgaon district bureaus under the legal bar framework.',
      localCourt: 'Hon’ble High Court of Delhi',
      avgSpeedSec: 32,
      expertsCount: 45,
      panelLawyers: [
        { name: 'Adv. Rohan Mehta', nlu: 'Campus Law Centre Delhi', experience: 12, rating: 4.95, courtPractice: 'Delhi High Court & Saket Subcourts', verifiedBadge: true },
        { name: 'Adv. Aarya Sharma', nlu: 'ILS Law College Pune', experience: 8, rating: 4.88, courtPractice: 'Noida RERA & Patiala House', verifiedBadge: true }
      ]
    },
    'Mumbai': {
      totalAdvocates: 165,
      description: 'Serving Bombay High Court, City Civil Court Fort, Bandra Family Court Complex, and Thane municipal tribunals.',
      localCourt: 'Hon’ble High Court of Judicature at Bombay',
      avgSpeedSec: 40,
      expertsCount: 38,
      panelLawyers: [
        { name: 'Adv. Vikram Deshmukh', nlu: 'Government Law College GLC', experience: 14, rating: 4.91, courtPractice: 'BHC Fort & NCLT Mumbai', verifiedBadge: true },
        { name: 'Adv. Shreya Iyer', nlu: 'NLSIU Bangalore', experience: 9, rating: 4.85, courtPractice: 'BHC Appellate Side', verifiedBadge: true }
      ]
    },
    'Bangalore': {
      totalAdvocates: 120,
      description: 'Serving Karnataka High Court, Mayo Hall civil cells, and Silicon Valley startup commercial dispute tribunals.',
      localCourt: 'Hon’ble High Court of Karnataka',
      avgSpeedSec: 35,
      expertsCount: 29,
      panelLawyers: [
        { name: 'Adv. Shreya Iyer', nlu: 'NLSIU Bangalore', experience: 9, rating: 4.94, courtPractice: 'KHC & Commercial Court Mayo Hall', verifiedBadge: true },
        { name: 'Adv. Amit K. Singhania', nlu: 'CLC Delhi', experience: 16, rating: 4.89, courtPractice: 'KHC Bench II Taxes', verifiedBadge: true }
      ]
    },
    'Pune': {
      totalAdvocates: 95,
      description: 'Serving Shivajinagar District Court, Pune Family Courts, and Maharashtra Industrial Grievance forums.',
      localCourt: 'Shivajinagar District & Sessions Court Pune',
      avgSpeedSec: 45,
      expertsCount: 18,
      panelLawyers: [
        { name: 'Adv. Tanvi Deshmukh', nlu: 'ILS Law College Pune', experience: 11, rating: 4.87, courtPractice: 'Shivajinagar Civil court & POSH units', verifiedBadge: true }
      ]
    },
    'Jaipur': {
      totalAdvocates: 82,
      description: 'Serving Rajasthan High Court (Jaipur Bench), Sessions and Civil cells, Board of Revenue cells.',
      localCourt: 'Hon’ble Rajasthan High Court - Jaipur Bench',
      avgSpeedSec: 50,
      expertsCount: 14,
      panelLawyers: [
        { name: 'Adv. Vinay Singhal', nlu: 'NALSAR Hyderabad', experience: 14, rating: 4.90, courtPractice: 'RHC & Jaipur District forums', verifiedBadge: true }
      ]
    }
  };

  const activeData = cityDatabase[selectedCity] || cityDatabase['Delhi NCR'];

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center animate-fade-in">
          <span className="bg-secondary/15 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 auto-pulse select-none">
            <LucideIcons.Globe size={13} />
            Nationwide Localized Advocate Panels
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            City-wise <span className="text-secondary">Verified Advocates</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Select your city to browse bar-registered trial and corporate litigation professionals practicing in your local district and high court tribunals.
          </p>
        </div>

        {/* Selected City Filter list */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none items-center justify-center flex-wrap">
          {Object.keys(cityDatabase).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold font-sans cursor-pointer whitespace-nowrap transition-all border ${selectedCity === city ? 'bg-[#0E8A6A] border-[#0E8A6A] text-white shadow' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'}`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* City Stats Block Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* SEO Local facts left */}
          <div className="md:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-4.5">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-serif font-black text-lg text-[#073B36]">{selectedCity} Tribunal</h3>
              <span className="bg-[#0f8a6a]/10 text-[#0F8A6A] px-2 py-0.5 rounded text-[9px] font-mono font-black uppercase">
                Active Matcher
              </span>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed font-semibold">
              {activeData.description}
            </p>

            <div className="flex flex-col gap-3 font-sans text-xs">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black block">Primary Court Body</span>
                <span className="font-bold text-gray-800 block mt-0.5">{activeData.localCourt}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-gray-50 border border-gray-150 p-3 rounded-xl">
                  <span className="text-[9px] text-[#0F8A6A] font-black uppercase tracking-wider block">Panel Advocates</span>
                  <span className="text-sm font-black font-mono block mt-1 text-[#073B36]">{activeData.totalAdvocates}+</span>
                </div>
                <div className="bg-amber-50 border border-amber-150 p-3 rounded-xl">
                  <span className="text-[9px] text-[#B88922] font-black uppercase tracking-wider block">Matching Velocity</span>
                  <span className="text-sm font-black font-mono block mt-1 text-amber-950">~{activeData.avgSpeedSec}s</span>
                </div>
              </div>
            </div>

            {/* Direct match CTA */}
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => navigate('talk')}
                className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5 uppercase"
              >
                <LucideIcons.PhoneCall size={13} className="fill-current" />
                Schedule Consult in {selectedCity}
              </button>
            </div>
          </div>

          {/* Local Advocates listing right */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <h3 className="font-serif font-black text-lg text-white">
              Vetted Advocates in {selectedCity} <span className="text-secondary font-mono">({activeData.panelLawyers.length})</span>
            </h3>

            <div className="flex flex-col gap-4">
              {activeData.panelLawyers.map((lawyer, i) => (
                <div
                  key={i}
                  className="bg-white text-gray-800 p-5 rounded-[22px] shadow-lg border border-gray-100 flex flex-col gap-3.5 hover-premium-card transition-all animate-fade-in"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 text-accent font-bold flex items-center justify-center border border-emerald-100">
                        <LucideIcons.UserCheck size={16} />
                      </div>
                      <div>
                        <h4 className="font-serif font-black text-base text-[#073B36] tracking-tight">{lawyer.name}</h4>
                        <p className="text-[9px] text-[#0F8A6A] font-extrabold font-mono tracking-widest">{lawyer.nlu} · {lawyer.experience} Yrs Exp</p>
                      </div>
                    </div>

                    <span className="text-[#B88922] font-extrabold text-xs flex items-center gap-0.5 font-mono">
                      <LucideIcons.Star size={12} className="fill-current" />
                      {lawyer.rating}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase font-black text-gray-400 tracking-wider">Practice courts</span>
                    <p className="text-xs text-gray-700 leading-snug font-semibold mt-0.5">{lawyer.courtPractice}</p>
                  </div>

                  <div className="flex justify-between items-center pt-2.5 border-t border-gray-100 mt-1 flex-wrap gap-2">
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <LucideIcons.ShieldAlert size={12} className="text-emerald-600" />
                      Bar Council Verified
                    </div>
                    <button
                      onClick={() => navigate('talk')}
                      className="text-xs font-extrabold text-[#0F8A6A] hover:text-[#075E53] hover:underline cursor-pointer"
                    >
                      Speak with {lawyer.name.split(' ')[0]} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
