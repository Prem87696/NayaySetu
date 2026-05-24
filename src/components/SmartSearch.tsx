import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface SmartSearchProps {
  navigate: (page: string) => void;
}

interface SearchResult {
  id: string;
  category: 'Service' | 'Lawyer' | 'Product / Template' | 'Case Law';
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  targetPage: string;
  icon: string;
}

const MASTER_DIRECTORY: SearchResult[] = [
  {
    id: 's1',
    category: 'Service',
    title: 'Mutual Consent Divorce',
    subtitle: 'Family Law',
    description: 'Fast, hassle-free filing and counseling panels for mutual consent separation and alimony settlements.',
    badge: '₹14,999 Package',
    targetPage: 'services',
    icon: 'HeartCrack'
  },
  {
    id: 's2',
    category: 'Service',
    title: 'Cheque Bounce Notice Section 138',
    subtitle: 'Debt Recovery',
    description: 'Send professional legal notices within 30 days of memo dishonor. Establish strong court stand.',
    badge: '₹999 notice',
    targetPage: 'services',
    icon: 'Coins'
  },
  {
    id: 's3',
    category: 'Service',
    title: 'Noida RERA Refund Suit',
    subtitle: 'Property Law',
    description: 'Demand refund with heavy penalty interest for extended 4-year builder possession delays.',
    badge: 'RERA Certified',
    targetPage: 'services',
    icon: 'Home'
  },
  {
    id: 'l1',
    category: 'Lawyer',
    title: 'Adv. Rohan Mehta',
    subtitle: 'Bar Council of Delhi · 12 Yrs Exp',
    description: 'Top trial expert for criminal jurisprudence, summons bails, and high-court civil litigation.',
    badge: 'Rs. 14/Min',
    targetPage: 'lawyers',
    icon: 'UserCheck'
  },
  {
    id: 'l2',
    category: 'Lawyer',
    title: 'Adv. Aarya Sharma',
    subtitle: 'Bar Council of Maharashtra · 8 Yrs Exp',
    description: 'Property acquisition compliance, RERA filings, and municipal property quash specialist.',
    badge: 'Rs. 14/Min',
    targetPage: 'locations',
    icon: 'UserCheck'
  },
  {
    id: 'p1',
    category: 'Product / Template',
    title: 'Mutual Non-Disclosure Agreement (NDA)',
    subtitle: 'Startup Template',
    description: 'Lock proprietary algorithms, corporate records, and funding plans with contractors securely.',
    badge: 'Safe Generator',
    targetPage: 'generator',
    icon: 'Lock'
  },
  {
    id: 'p2',
    category: 'Product / Template',
    title: 'Residential Rent Agreement',
    subtitle: 'Rental Deeds',
    description: 'Complete stamp-ready residential tenancy contracts outlining eviction guidelines.',
    badge: 'Stamp Matched',
    targetPage: 'generator',
    icon: 'FileText'
  },
  {
    id: 'c1',
    category: 'Case Law',
    title: 'Naveen Kohli vs. Neelu Kohli (2006)',
    subtitle: 'Supreme Court Irretrievable Breakdown',
    description: 'Supreme Court recommended irretrievable breakdown of marriage to serve as valid grounds for divorce.',
    badge: 'Precedent IPC',
    targetPage: 'checker',
    icon: 'BookOpen'
  }
];

export default function SmartSearch({ navigate }: SmartSearchProps) {
  const [keyword, setKeyword] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Service' | 'Lawyer' | 'Product' | 'Case Law'>('All');

  const filteredResults = MASTER_DIRECTORY.filter((item) => {
    // Keyword match
    const matchesKeyword = item.title.toLowerCase().includes(keyword.toLowerCase()) || 
      item.subtitle.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase());

    // Filter match
    if (activeFilter === 'All') return matchesKeyword;
    if (activeFilter === 'Product') return item.category.includes('Product') && matchesKeyword;
    return item.category === activeFilter && matchesKeyword;
  });

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-secondary/15 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 animate-pulse">
            <LucideIcons.Search size={12} />
            Unified Discovery Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            Universal <span className="text-secondary">Smart Legal Search</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed">
            Find advocates by specialty, generate legal templates instantly, look up court hearing timelines, or explore supreme court case precedents seamlessly.
          </p>
        </div>

        {/* Dynamic Search block */}
        <div className="bg-white text-[#073B36] p-6 rounded-3xl shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-4">
          <div className="relative">
            <LucideIcons.Search size={22} className="text-[#0F8A6A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services, lawyers, contracts, or judgments... (e.g. Divorce, Noida, NDA)"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full text-sm bg-gray-50 border-2 border-gray-100 p-3.5 pl-12 rounded-2xl text-gray-800 font-bold focus:ring-1 focus:ring-accent focus:border-[#0F8A6A] outline-none"
            />
          </div>

          {/* Quick Filter buttons */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 items-center flex-wrap">
            {['All', 'Service', 'Lawyer', 'Product', 'Case Law'].map((btn) => (
              <button
                key={btn}
                onClick={() => setActiveFilter(btn as any)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold font-sans cursor-pointer whitespace-nowrap transition-all border ${activeFilter === btn ? 'bg-[#0F8A6A] border-[#0F8A6A] text-white' : 'bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200'}`}
              >
                {btn === 'Product' ? 'Templates' : btn}
              </button>
            ))}
          </div>
        </div>

        {/* Results listing */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center pl-1">
            <h3 className="font-serif font-black text-lg text-white">
              Directory Results <span className="text-secondary font-mono">({filteredResults.length})</span>
            </h3>
            {keyword && (
              <button 
                onClick={() => setKeyword('')} 
                className="text-xs text-secondary hover:underline cursor-pointer font-bold"
              >
                Clear Query
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="bg-white text-gray-800 p-5 rounded-[22px] shadow-lg border border-gray-100 flex flex-col gap-3.5 hover-premium-card transition-all"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="bg-emerald-50 text-accent border border-emerald-100 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="bg-amber-50 text-[#B88922] font-mono font-bold text-[9px] px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif font-black text-base text-[#073B36] tracking-tight">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 font-semibold font-mono mt-0.5">{item.subtitle}</p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="flex justify-end pt-2 border-t border-gray-50 mt-1">
                    <button
                      onClick={() => navigate(item.targetPage)}
                      className="text-xs font-bold text-[#0F8A6A] hover:text-[#075E53] inline-flex items-center gap-1 cursor-pointer transition-all hover:underline"
                    >
                      Access {item.category.split(' ')[0]} →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 bg-[#0A4B45] p-10 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center gap-4 min-h-[250px]">
                <div className="w-12 h-12 bg-white/5 text-secondary border border-white/5 rounded-xl flex items-center justify-center">
                  <LucideIcons.Search size={22} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-white text-base">No Matching Entries</h4>
                  <p className="text-xs text-gray-300 mt-1 pl-4 pr-4 leading-normal max-w-md mx-auto">
                    Try searching matching legal strings such as "Divorce", "Malhotra", "NDA", "Rental", or check filters.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
