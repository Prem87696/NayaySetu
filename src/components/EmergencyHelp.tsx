import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface EmergencyHelpProps {
  navigate: (page: string) => void;
}

export default function EmergencyHelp({ navigate }: EmergencyHelpProps) {
  const [selectedCategory, setSelectedCategory] = useState('Arrest / Police Matter');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [connecting, setConnecting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [connectedLawyer, setConnectedLawyer] = useState<{name: string, COP: string} | null>(null);

  const emergencyCategories = [
    { title: 'Arrest / Police Matter', icon: 'ShieldAlert', desc: 'Settle unlawful detention, sudden police station visits, custody, or third party queries.' },
    { title: 'FIR / Criminal Case', icon: 'FileText', desc: 'Secure quashing options, summon notices, or strategic pre-trial defense guidelines.' },
    { title: 'Domestic Violence', icon: 'HeartHandshake', desc: 'Secure direct protection orders, fast counseling, or emergency relocation terms.' },
    { title: 'Urgent Legal Notice', icon: 'Mail', desc: 'Answering high-priority statutory notices matching statutory deadlines.' },
    { title: 'Property Lock / Possession Issue', icon: 'Key', desc: 'Encroachment defaults, lockouts by build landlords, or RERA physical actions.' },
    { title: 'Cyber Fraud', icon: 'Laptop', desc: 'Immediate transaction freezes, bank liaisons, or phishing scams.' },
    { title: 'Workplace Harassment', icon: 'Ban', desc: 'Internal committee filing guidelines or termination warnings.' },
    { title: 'Consumer Fraud', icon: 'ShoppingBag', desc: 'Aggressive medical emergencies, product hazards, or flight cancellations.' }
  ];

  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.slice(0, 10).trim()) return;

    setConnecting(true);
    setProgress(0);
    setConnectedLawyer(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setConnectedLawyer({
            name: 'Adv. Meera K. (Delhi NCR Criminal Panel)',
            COP: 'D/4831/2014 - Bar Council of Delhi'
          });
          setConnecting(false);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="w-full bg-[#052F2D] text-white min-h-screen py-12 px-4 relative overflow-hidden">
      
      {/* Background radial soft red alert glow (still premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-950/25 rounded-full blur-[120px] pointer-events-none select-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-red-500/15 text-red-400 border border-red-500/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 animate-pulse select-none">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-ping"></span>
            Available 24/7 For Urgent Legal Grievance
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3.5 tracking-tight">
            Urgent <span className="text-red-400">Emergency Legal</span> Help Desk
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Liberty threat? Police station summons? Instant banking cyber fraud? Do not panic. File your urgent secure contact link to match directly with high-priority trial specialists.
          </p>
        </div>

        {/* Safety Disclaimer Label - MUST BE FIRST */}
        <div className="bg-red-950/45 border-l-4 border-red-500 p-4 rounded-r-2xl text-xs text-[#D8E7E3] flex gap-3 shadow-lg select-none">
          <LucideIcons.AlertOctagon size={22} className="text-red-400 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white font-extrabold uppercase tracking-wider block mb-0.5">Critical Emergency Safety Disclaimer:</strong> For immediate physical danger, medical crises, active violence, or critical safety threats, contact local emergency services (112 / 100) first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Card Selection Grid */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <h3 className="font-serif font-extrabold text-lg text-white">
              Choose Emergency Practice Category
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {emergencyCategories.map((item) => {
                const isSelected = selectedCategory === item.title;
                return (
                  <div
                    key={item.title}
                    onClick={() => { setSelectedCategory(item.title); setConnectedLawyer(null); }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col gap-2 relative ${isSelected ? 'border-red-500/60 bg-red-950/20 shadow-lg' : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10'}`}
                  >
                    {isSelected && (
                      <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-red-500 shadow-md"></span>
                    )}
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${isSelected ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-white/5 text-gray-300 border-white/5'}`}>
                        <LucideIcons.Scale size={16} />
                      </div>
                      <h4 className="font-bold text-xs text-white tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-[10px] text-[#AFC7C2] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Callback / Direct talk Trigger Panel */}
          <div className="md:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_22px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-5">
            <div className="pb-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <LucideIcons.PhoneCall size={16} className="animate-bounce" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#073B36]">Secure Call Request</h3>
                <p className="text-[10px] text-gray-400 font-semibold font-mono">Response Speed &lt; 60 Seconds</p>
              </div>
            </div>

            {connecting ? (
              <div className="text-center py-6 flex flex-col items-center justify-center gap-5 min-h-[220px]">
                <div className="relative">
                  <div className="absolute w-20 h-20 rounded-full border-4 border-red-100 border-t-red-500 animate-spin"></div>
                  <LucideIcons.Radio size={24} className="text-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-red-950 font-serif">Pinching Proxy Connection...</h4>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold font-mono tracking-wider">{progress}% Secure Matching...</p>
                </div>
              </div>
            ) : connectedLawyer ? (
              <div className="text-center py-5 flex flex-col gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <LucideIcons.PhoneIncoming size={28} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 font-serif text-base">Matched Representative Found!</h4>
                  <p className="text-xs text-[#0F8A6A] font-bold mt-1.5">{connectedLawyer.name}</p>
                  <p className="text-[9px] text-gray-400 font-mono mt-0.5">{connectedLawyer.COP}</p>
                </div>

                <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl border border-emerald-100 font-semibold text-xs leading-relaxed text-left">
                  Our encrypted proxy line is patching callback route: <strong className="text-emerald-950 font-bold">+91 {phone.slice(0, 4)}XXXXXX</strong>. Please accept the incoming call from match router coordinates.
                </div>

                <button
                  type="button"
                  onClick={() => setConnectedLawyer(null)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-700 hover:underline cursor-pointer"
                >
                  Request Alternate Match
                </button>
              </div>
            ) : (
              <form onSubmit={handleCallbackRequest} className="flex flex-col gap-4 text-xs font-semibold">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-black text-gray-400">Active grievance Category</span>
                  <p className="text-xs font-black text-[#073B36] font-serif border border-dashed border-red-200 bg-red-50/40 p-2.5 rounded-xl">{selectedCategory}</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-semibold">Your Contact Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma (Principal)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-semibold">Mobile Number for Callback</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                  />
                  <p className="text-[10px] text-gray-400 font-medium leading-normal italic pl-1">
                    🔒 Number is fully masked. Matched lawyer receives secure redirection.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-[0_4px_15px_rgba(220,38,38,0.25)] hover:shadow-[0_4px_22px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-1.5 uppercase"
                >
                  <LucideIcons.PhoneIncoming size={13} className="animate-pulse" />
                  Get Urgent Lawyer Help
                </button>

                <button
                  type="button"
                  onClick={() => navigate('talk')}
                  className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-xs py-3 rounded-xl transition-all"
                >
                  Request Standard Callback (₹99)
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
