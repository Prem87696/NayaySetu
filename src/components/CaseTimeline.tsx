import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface CaseTimelineProps {
  navigate: (page: string) => void;
}

interface CaseItem {
  id: string;
  cnrNumber: string;
  title: string;
  court: string;
  judge: string;
  nextHearing: string;
  status: string;
  purpose: string;
  history: { date: string; stage: string; status: 'Done' | 'Current' | 'Pending'; desc: string }[];
}

const SEED_CASES: CaseItem[] = [
  {
    id: 'c1',
    cnrNumber: 'MHCB010265432023',
    title: 'Rajesh Malhotra vs. Apex Infrabuild Ltd',
    court: 'Noida RERA Tribunal - Bench III',
    judge: 'Hon’ble Shri Justice S. K. Gupta (Retd.)',
    nextHearing: 'June 18, 2026',
    status: 'Evidence Phase',
    purpose: 'Filing of builder escrow records',
    history: [
      { date: '11 Oct 2023', stage: 'E-Filing Submitted', status: 'Done', desc: 'Case registered online via Noida RERA database under Section 31.' },
      { date: '04 Nov 2023', stage: 'Scrutiny & Admission', status: 'Done', desc: 'Registry vetted pleadings. No defects discovered. Admitted on board.' },
      { date: '15 Jan 2024', stage: 'Notice Dispatched', status: 'Done', desc: 'Court summons registered AD sent to respondent builder company.' },
      { date: '22 Mar 2024', stage: 'Written Objection', status: 'Done', desc: 'Defendants submitted written statement in replication.' },
      { date: 'Today', stage: 'Evidence Cross-examination', status: 'Current', desc: 'Complainant directed to record deposition under solemn oath.' },
      { date: '18 Jun 2026', stage: 'Final Arguments', status: 'Pending', desc: 'Bench arguments on recovery penalty interest levels.' },
      { date: 'Pending', stage: 'Pronouncement of Decree', status: 'Pending', desc: 'Execution of refund order release directives.' }
    ]
  },
  {
    id: 'c2',
    cnrNumber: 'DLCT020014232024',
    title: 'Manoj Sharma vs. Sunita Sharma',
    court: 'Saket Court complex - Family Court 02',
    judge: 'Shri Manoj Chawla (Principal Family Judge)',
    nextHearing: 'July 05, 2026',
    status: 'Mediation / Reconciliation',
    purpose: 'Mediation council final panel match',
    history: [
      { date: '02 Feb 2024', stage: 'E-Filing Submitted', status: 'Done', desc: 'Restitution of Conjugal Rights (Sec 9 HMA) petition recorded.' },
      { date: '20 Mar 2024', stage: 'Objection Vetting', status: 'Done', desc: 'Summons delivered to respondent spouse counsel.' },
      { date: 'Yesterday', stage: 'Notice of Reconciliation', status: 'Done', desc: 'Court mandates references to official mediation cell.' },
      { date: 'Today', stage: 'Mediation Session I', status: 'Current', desc: 'First mutual discussion round matching family counselors.' },
      { date: '05 Jul 2026', stage: 'Interim Alimony Hearing', status: 'Pending', desc: 'Adjudication on maintenance pendente lite parameters.' }
    ]
  },
  {
    id: 'c3',
    cnrNumber: 'MHCC030112342023',
    title: 'Prestige Finance vs. Vijay Agro Farms',
    court: 'Metropolitan Magistrate Court 18 - Mumbai',
    judge: 'Shri R. V. Deshmukh (Metropolitan Magistrate)',
    nextHearing: 'June 09, 2026',
    status: 'Summons Stage',
    purpose: 'Appearance of accused on default warrants',
    history: [
      { date: '01 Dec 2023', stage: 'Private Complaint lodged', status: 'Done', desc: 'Criminal Complaint under Section 138 of Negotiable Instruments Act recorded.' },
      { date: '14 Jan 2024', stage: 'Preliminary Evidence', status: 'Done', desc: 'Verification of original memo logs and cheque bounce memo.' },
      { date: '28 Feb 2024', stage: 'Summons Issued', status: 'Done', desc: 'Process issued of bailable warrants directing accused appearance.' },
      { date: 'Today', stage: 'Service of Summons', status: 'Current', desc: 'Warrant summons report returned back by executing local police station.' },
      { date: '09 Jun 2026', stage: 'Plea Recording', status: 'Pending', desc: 'Framing of formal charges and question on guilt admit.' }
    ]
  }
];

export default function CaseTimeline({ navigate }: CaseTimelineProps) {
  const [searchCnr, setSearchCnr] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseItem>(SEED_CASES[0]);
  const [lookupError, setLookupError] = useState('');

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCnr.trim()) return;

    setLookupError('');
    const match = SEED_CASES.find(c => c.cnrNumber.toLowerCase().includes(searchCnr.toLowerCase()) || c.title.toLowerCase().includes(searchCnr.toLowerCase()));

    if (match) {
      setSelectedCase(match);
    } else {
      setLookupError('CNR details or case title not found. Try searching Malhotra or Sharma.');
    }
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-secondary/15 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 animate-pulse">
            <LucideIcons.Calendar size={13} />
            Direct Court Integration
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            Case Timeline <span className="text-secondary">Tracker</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed font-sans">
            Sync litigation updates directly with court registries. Lookup active status logs, hearing purpose notifications, and history charts using your 16-character CNR Number.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="bg-white text-[#073B36] p-5 rounded-3xl shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100">
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <LucideIcons.Search size={18} className="text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Lookup Case (CNR Number, e.g., MHCB010265432023 or type Malhotra)"
                value={searchCnr}
                onChange={(e) => setSearchCnr(e.target.value)}
                className="w-full text-xs bg-gray-50 border border-gray-200 p-3 pl-11 rounded-xl text-gray-800 focus:ring-1 focus:ring-accent outline-none font-semibold font-mono"
              />
            </div>
            <button
              type="submit"
              className="bg-[#0F8A6A] hover:bg-[#18A982] text-white text-xs font-black px-6 py-3 rounded-xl shadow transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              <LucideIcons.RefreshCw size={13} />
              Query Registry
            </button>
          </form>
          {lookupError && (
            <p className="text-[11px] text-red-600 font-bold mt-2.5 pl-1 flex items-center gap-1 animate-pulse">
              <LucideIcons.AlertCircle size={12} /> {lookupError}
            </p>
          )}

          {/* Quick seeded matches clickable */}
          <div className="mt-3 flex items-center gap-1.5 flex-wrap text-[10px] text-gray-400 font-semibold pl-1">
            <span className="font-bold">Quick Examples:</span>
            {SEED_CASES.map(c => (
              <button
                key={c.id}
                onClick={() => { setSelectedCase(c); setSearchCnr(c.cnrNumber); setLookupError(''); }}
                className="bg-gray-100 hover:bg-[#0F8A6A]/10 hover:text-[#0F8A6A] border border-gray-200 px-2 py-1 rounded-md cursor-pointer transition-all"
              >
                {c.cnrNumber.slice(0, 6)}... ({c.title.split(' vs.')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case details and timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column court card */}
          <div className="lg:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-4">
            <div className="pb-3.5 border-b border-gray-100 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/30">
                <LucideIcons.Folder size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#073B36]">Case Parameters</h3>
                <p className="text-[10px] text-gray-400 font-semibold font-mono">CNR: {selectedCase.cnrNumber}</p>
              </div>
            </div>

            {/* Core facts */}
            <div className="flex flex-col gap-3 font-sans">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black block">Case Title</span>
                <span className="font-serif font-black text-[#073B36] text-sm leading-tight block mt-0.5">{selectedCase.title}</span>
              </div>

              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black block">Court Room & forum</span>
                <span className="font-bold text-xs text-gray-700 leading-tight block mt-0.5">{selectedCase.court}</span>
              </div>

              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black block">Presiding Justice</span>
                <span className="font-bold text-xs text-gray-600 leading-tight block mt-0.5">{selectedCase.judge}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-amber-50 border border-amber-100 p-2.5 rounded-xl">
                  <span className="text-[9px] text-[#B88922] font-black uppercase tracking-wider block">Next hearing</span>
                  <span className="font-extrabold text-xs text-amber-950 block mt-0.5">{selectedCase.nextHearing}</span>
                </div>
                <div className="bg-emerald-50 border border-emerald-150 p-2.5 rounded-xl">
                  <span className="text-[9px] text-[#0F8A6A] font-black uppercase tracking-wider block">Case Status</span>
                  <span className="font-extrabold text-xs text-[#073B36] block mt-0.5">{selectedCase.status}</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl mt-1 text-xs">
                <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider block">Schedule Purpose</span>
                <p className="font-semibold text-gray-700 mt-0.5 leading-relaxed">
                  {selectedCase.purpose}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => navigate('talk')}
                className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1 uppercase"
              >
                <LucideIcons.PhoneCall size={13} className="fill-current" />
                Brief Advocate for 18-Jun
              </button>
            </div>
          </div>

          {/* Right Column historical timeline */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-black text-lg text-white">Litigation Action Timeline</h3>
              <span className="bg-[#0A4B45] text-secondary border border-[#0A4B45] px-2.5 py-1 rounded text-[10px] font-mono font-black uppercase">
                {selectedCase.history.length} stages audited
              </span>
            </div>

            {/* Timeline cards stack vertically */}
            <div className="flex flex-col gap-4 font-sans max-h-[70vh] overflow-y-auto pr-1">
              {selectedCase.history.map((hist, idx) => {
                const isDone = hist.status === 'Done';
                const isCurrent = hist.status === 'Current';
                const isPending = hist.status === 'Pending';

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-3xl border transition-all flex gap-3.5 items-start ${isCurrent ? 'bg-white text-gray-800 border-[#D6A93A] shadow-lg scale-[1.02]' : 'bg-white/5 text-[#D8E7E3] border-white/5'}`}
                  >
                    {/* Visual icon badge depending on status */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${isDone ? 'bg-[#0F8A6A]/10 text-primary-light border-[#0F8A6A]/15' : isCurrent ? 'bg-amber-50 text-[#B88922] border-amber-200' : 'bg-transparent text-gray-500 border-white/10'}`}>
                      {isDone ? (
                        <LucideIcons.Check size={14} className="stroke-[3]" />
                      ) : isCurrent ? (
                        <LucideIcons.CalendarClock size={14} className="animate-pulse" />
                      ) : (
                        <LucideIcons.Hourglass size={14} />
                      )}
                    </div>

                    <div className="flex-grow flex flex-col gap-1 text-xs">
                      <div className="flex justify-between items-center sm:items-start flex-wrap gap-1.5">
                        <span className={`font-black text-xs ${isCurrent ? 'text-[#073B36]' : 'text-white'}`}>
                          {hist.stage}
                        </span>
                        <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-amber-700' : 'text-gray-400'}`}>
                          {hist.date}
                        </span>
                      </div>
                      <p className={`leading-relaxed ${isCurrent ? 'text-gray-600' : 'text-[#AFC7C2]'} text-[11px]`}>
                        {hist.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
