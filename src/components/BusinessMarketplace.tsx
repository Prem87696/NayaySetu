import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface BusinessMarketplaceProps {
  navigate: (page: string) => void;
}

interface CorpLawyer {
  id: string;
  name: string;
  education: string;
  experience: number;
  rating: number;
  clientCount: number;
  hourlyRate: number;
  packagePrice: number;
  specialties: string[];
  bio: string;
  avatarLetter: string;
}

const SEED_CORP_LAWYERS: CorpLawyer[] = [
  {
    id: 'bl1',
    name: 'Adv. Vinay Singhal',
    education: 'NLSIU Bangalore (Gold Medalist) | Ex-Shardul Amarchand',
    experience: 14,
    rating: 4.93,
    clientCount: 142,
    hourlyRate: 3500,
    packagePrice: 15000,
    specialties: ['Funding / VC contracts', 'Corporate Law', 'Mergers & Acquisitions'],
    bio: 'Highly requested counselor advising technology unicorns and series funding startups on cap-table structuring, safe notes, and outbound compliance.',
    avatarLetter: 'V'
  },
  {
    id: 'bl2',
    name: 'Adv. Shreya Iyer',
    education: 'NALSAR Hyderabad | University of Oxford (B.C.L.)',
    experience: 9,
    rating: 4.88,
    clientCount: 95,
    hourlyRate: 2800,
    packagePrice: 12000,
    specialties: ['IP / Patent Protection', 'SaaS Licensing', 'SaaS intellectual properties'],
    bio: 'Ex-IP associate managing patent objections, trademark litigation, software escrow terms, and global cross-border SaaS compliance frameworks.',
    avatarLetter: 'S'
  },
  {
    id: 'bl3',
    name: 'Adv. Amit K. Singhania',
    education: 'Campus Law Centre (CLC) Delhi | Fellow, Chartered Tax Council',
    experience: 16,
    rating: 4.91,
    clientCount: 210,
    hourlyRate: 4000,
    packagePrice: 18000,
    specialties: ['GST & Tax Audits', 'Corporate Compliances', 'FEMA Compliance'],
    bio: 'Renowned expert defending directors against statutory taxation charges, handling corporate restructuring tax audits, and GST tribunal complaints.',
    avatarLetter: 'A'
  },
  {
    id: 'bl4',
    name: 'Adv. Tanvi Deshmukh',
    education: 'ILS Law College Pune | National Law University Jodhpur',
    experience: 11,
    rating: 4.85,
    clientCount: 118,
    hourlyRate: 2500,
    packagePrice: 9500,
    specialties: ['Employment Law', 'POSH Compliance', 'ESOP Pool Structuring'],
    bio: 'Specialist advising on employment contract drafts, formulating internal POSH compliance, and establishing multi-national ESOP rules for developers.',
    avatarLetter: 'T'
  }
];

export default function BusinessMarketplace({ navigate }: BusinessMarketplaceProps) {
  const [activeSpecialty, setActiveSpecialty] = useState('All');
  const [selectedLawyer, setSelectedLawyer] = useState<CorpLawyer | null>(null);
  
  // Proposal parameters
  const [companyName, setCompanyName] = useState('');
  const [companyBudget, setCompanyBudget] = useState('₹10,000 - ₹25,000');
  const [remarks, setRemarks] = useState('');
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  const specialties = ['All', 'Corporate Law', 'IP / Patent Protection', 'Funding / VC contracts', 'GST & Tax Audits', 'Employment Law'];

  const filteredLawyers = activeSpecialty === 'All' 
    ? SEED_CORP_LAWYERS 
    : SEED_CORP_LAWYERS.filter(l => l.specialties.some(s => s.toLowerCase().includes(activeSpecialty.toLowerCase().slice(0, 5))));

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !remarks) return;

    setProposalSubmitted(true);
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-[#D6A93A]/10 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 animate-pulse">
            <LucideIcons.Tv size={13} />
            B2B Premium Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            Enterprise & Startup <span className="text-secondary">Lawyer Marketplace</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed">
            Match with Tier-1 NLU specialists and ex-corporate associates for ESOP structuring, series fundraisings, IP audits, GST tribunals, and watertight vendor agreements.
          </p>
        </div>

        {/* Corporate Trust Badges Card */}
        <div className="bg-[#0A4B45] p-5 rounded-3xl border border-white/10 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-center select-none">
          {[
            { label: 'Ex-Big Law Associates', val: 'Exquisite Quality' },
            { label: 'Seeded NALSAR / NLSIU', val: 'Premier Education' },
            { label: 'NDA Enforced Lines', val: 'Absolute Cryptography' },
            { label: 'Unified Monthly Escrow', val: 'Corporate Shielding' }
          ].map((inf, i) => (
            <div key={i} className="flex flex-col gap-1 border-r last:border-0 border-white/10 pr-2">
              <span className="text-secondary font-extrabold text-sm font-mono tracking-tight">{inf.val}</span>
              <span className="text-[10px] text-gray-300 font-sans">{inf.label}</span>
            </div>
          ))}
        </div>

        {/* Specialties Filter row */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none items-center flex-wrap">
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-sans cursor-pointer whitespace-nowrap transition-all border ${activeSpecialty === spec ? 'bg-[#0F8A6A] border-[#0F8A6A] text-white' : 'bg-white/5 border-white/10 text-[#AFC7C2] hover:bg-white/10'}`}
            >
              {spec}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Marketplace catalog left */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="font-serif font-black text-lg text-white">
              Available Corporate Partners <span className="text-secondary font-mono">({filteredLawyers.length})</span>
            </h3>

            <div className="flex flex-col gap-4">
              {filteredLawyers.map((l) => (
                <div 
                  key={l.id}
                  className="bg-white text-gray-800 p-5 rounded-[22px] shadow-lg border border-gray-100 flex flex-col gap-3.5 hover-premium-card transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#0F8A6A] font-extrabold text-lg flex items-center justify-center border border-emerald-100">
                        {l.avatarLetter}
                      </div>
                      <div>
                        <h4 className="font-serif font-extrabold text-base text-[#073B36] tracking-tight">{l.name}</h4>
                        <p className="text-[10px] text-rose-700 font-extrabold font-mono tracking-wide">{l.education}</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col">
                      <span className="text-[#B88922] font-black text-xs flex items-center justify-end gap-1 font-mono">
                        <LucideIcons.Star size={12} className="fill-current" />
                        {l.rating}
                      </span>
                      <span className="text-[9px] text-[#0F8A6A] font-black font-mono tracking-widest">{l.experience} Yrs Exp</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pl-1">
                    {l.bio}
                  </p>

                  {/* Specialties tag block */}
                  <div className="flex flex-wrap gap-1.5 pl-1">
                    {l.specialties.map((s, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[9px] tracking-wide font-extrabold border border-gray-100 uppercase">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Price metrics */}
                  <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex items-center justify-between text-xs font-semibold px-4.5 mt-1">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-400 uppercase tracking-widest">Consult Hourly</span>
                      <span className="text-[#073B36] font-extrabold font-mono text-sm">₹{l.hourlyRate}/Hr</span>
                    </div>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <div className="flex flex-col text-center">
                      <span className="text-[9px] text-gray-400 uppercase tracking-widest">Fixed Retainer</span>
                      <span className="text-[#0F8A6A] font-extrabold font-mono text-sm">₹{l.packagePrice} Base</span>
                    </div>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <div className="flex flex-col text-right">
                      <span className="text-[9px] text-gray-400 uppercase tracking-widest">Active B2B Files</span>
                      <span className="text-[#B88922] font-extrabold font-mono text-sm">{l.clientCount}+ Clients</span>
                    </div>
                  </div>

                  {/* Action buttons directly on card */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100/50">
                    <button
                      onClick={() => { setSelectedLawyer(l); setProposalSubmitted(false); }}
                      className="flex-1 bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] p-2.5 rounded-xl font-black text-xs cursor-pointer shadow-sm text-center"
                    >
                      Request Proposal Brief
                    </button>
                    <button
                      onClick={() => navigate('talk')}
                      className="border border-[#0F8A6A] hover:bg-[#0F8A6A]/5 p-2.5 rounded-xl text-xs font-bold text-[#0F8A6A] font-sans px-4"
                    >
                      Counsel Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form RFP module right */}
          <div className="lg:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-5">
            <div className="pb-3 border-b border-gray-100 flex items-center gap-2">
              <LucideIcons.Mail size={20} className="text-[#0F8A6A]" />
              <div>
                <h3 className="font-bold text-sm text-[#073B36] uppercase">Request Corporate RFQ</h3>
                <p className="text-[10px] text-gray-400 font-semibold font-mono">Bilateral NDA Lock Armed</p>
              </div>
            </div>

            {proposalSubmitted ? (
              <div className="text-center py-6 flex flex-col gap-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <LucideIcons.Briefcase size={28} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-base text-emerald-950">Proposal Distributed!</h4>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs leading-normal mx-auto">
                    Brief variables have been dispatched to {selectedLawyer ? selectedLawyer.name : 'our elite partner desk'}. Match responses will populate your portal in 3 hours.
                  </p>
                </div>

                <div className="bg-emerald-50 text-emerald-800 p-3.5 rounded-xl border border-emerald-100 text-xs text-left font-sans">
                  <strong className="text-emerald-950 block mb-0.5">Dispatched Parameters:</strong>
                  Company: {companyName}<br/>
                  Target Budget: {companyBudget}<br/>
                  NDA Status: Armed Active (Bilateral)
                </div>

                <button
                  type="button"
                  onClick={() => setProposalSubmitted(false)}
                  className="text-xs font-bold text-[#0F8A6A] hover:underline cursor-pointer"
                >
                  Post Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleProposalSubmit} className="flex flex-col gap-4 text-xs font-semibold">
                
                {selectedLawyer && (
                  <div className="p-3 bg-neutral-50 rounded-xl border border-gray-100 flex items-center justify-between text-xs flex-wrap gap-2 animate-fade-in text-gray-700">
                    <span className="font-bold">Target Advocate:</span>
                    <span className="bg-[#0F8A6A]/10 text-[#0F8A6A] px-2 py-0.5 rounded text-[10px] font-black">{selectedLawyer.name}</span>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-bold">Company / Founder Legal Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. LegalProduct Tech Private Limited"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-bold">Target Corporate Budget Pool</label>
                  <select
                    value={companyBudget}
                    onChange={(e) => setCompanyBudget(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-bold"
                  >
                    <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000 (Advisory Series)</option>
                    <option value="₹15,000 - ₹50,000">₹15,000 - ₹50,000 (Standard Retainer)</option>
                    <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000 (Premium Transactional)</option>
                    <option value="Monthly Retained (Custom)">Monthly Retained (Custom Agreement)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-bold">Briefly Describe Requirements</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="e.g. We require custom founder partners agreement, safe notes for raising seed capital ₹50 Lakhs, or trademark Phonetic registrations for 2 logos..."
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-normal leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-md cursor-pointer border border-secondary uppercase"
                >
                  Distribute Proposal Under NDA
                </button>

                <p className="text-[10px] text-center text-gray-400 font-serif leading-relaxed">
                   🔒 Mutual-NDA binds automatically upon dispatch. Data strictly restricted from general crawling networks.
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
