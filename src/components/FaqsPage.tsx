import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, LifeBuoy, ArrowRight } from 'lucide-react';
import { FAQS } from '../data';

interface FaqsProps {
  navigate: (page: string) => void;
}

export default function FaqsPage({ navigate }: FaqsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'pricing' | 'calls' | 'lawyers'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq1');

  // Trigger search + category filter
  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryPills: { label: string; key: 'all' | 'general' | 'pricing' | 'calls' | 'lawyers' }[] = [
    { label: "All FAQ Answers", key: "all" },
    { label: "About NyaySetu", key: "general" },
    { label: "Pricing & Wallet Packages", key: "pricing" },
    { label: "During Consultation Match", key: "calls" },
    { label: "For Panel Lawyers", key: "lawyers" }
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Knowledge Hub Desk
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Resolved Frequently Asked Questions
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-3 max-w-xl mx-auto leading-relaxed">
            Got questions regarding credential checks, Razorpay transfers, phone privacy masking or call drops? We’ve outlined comprehensive guides below.
          </p>

          {/* Search Bar Input */}
          <div className="max-w-lg mx-auto mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
            <input 
              type="text"
              placeholder="Search by keyword, e.g. Refund, Masking, RERA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-primary rounded-2xl pl-12 pr-4 py-3.5 text-sm shadow-lg font-medium focus:outline-none placeholder-muted-text/70"
            />
          </div>
        </div>
      </section>

      {/* Categories Pillars + Accordions list */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        
        {/* Pills Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-legal-border">
          {categoryPills.map((pill) => (
            <button
              key={pill.key}
              onClick={() => {
                setActiveCategory(pill.key);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all select-none cursor-pointer border ${activeCategory === pill.key ? 'bg-primary border-primary text-white shadow-md' : 'bg-white border-legal-border text-muted-text hover:text-primary hover:border-primary'}`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Dynamic empty state */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-legal-border shadow-premium flex flex-col items-center justify-center p-8 gap-3">
            <LifeBuoy className="text-secondary scroll-py-1" size={32} />
            <h3 className="font-serif text-lg font-bold text-primary">No Matching FAQ found</h3>
            <p className="text-xs text-muted-text max-w-sm mx-auto leading-relaxed">
              We couldn’t find any matching answers for "<strong className="text-primary">{searchTerm}</strong>". Try researching with simplified terms like "refund", "time", "lawyer" or "voice".
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="mt-2 bg-primary hover:bg-accent text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white border border-legal-border rounded-2xl overflow-hidden shadow-premium transition-all"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-5 cursor-pointer hover:bg-secondary/5 transition-colors focus:outline-none"
                  >
                    <span className="font-serif font-bold text-sm md:text-base text-primary block pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-primary/10 text-primary shrink-0 transition-transform">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-muted-text/95 leading-relaxed bg-legal-bg/10 border-t border-legal-border/30 animate-[fadeIn_0.15s_ease-out]">
                      <p className="whitespace-pre-line">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Final CTA Help Desk */}
        <div className="mt-16 bg-gradient-to-br from-[#147A5D]/5 to-white border border-[#147A5D]/25 p-8 rounded-3xl text-center flex flex-col items-center gap-4">
          <h3 className="font-serif text-xl font-bold text-primary">Couldn’t find your answer?</h3>
          <p className="text-xs text-muted-text max-w-md mx-auto leading-relaxed">
            Our qualified operations care team is responsive 7 days a week. For complex inquiries, register a custom service resolution incident ticket inside our care center.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('talk')}
              className="bg-primary hover:bg-accent text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              Talk to a Lawyer Now
            </button>
            <button 
              onClick={() => navigate('support')}
              className="bg-transparent hover:bg-primary hover:text-white text-primary font-bold text-xs px-5 py-2.5 rounded-xl border border-legal-border transition-all"
            >
              Email Us Support Ticket →
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
