import React, { useState } from 'react';
import { PRICING_PACKAGES } from '../data';
import { Check, Info, ShieldCheck, Zap, Award, HelpCircle, Star, Sparkles } from 'lucide-react';

interface PricingProps {
  navigate: (page: string) => void;
  onSelectProduct?: (productId: string) => void;
}

export default function PricingPage({ navigate }: PricingProps) {
  const [activeTab, setActiveTab] = useState<'minute' | 'monthly'>('minute');

  const plans = PRICING_PACKAGES.minutePlans;
  const packages = PRICING_PACKAGES.monthlyPackages;

  // Render comparative table list
  const comparativePlans = [
    { name: "BASIC (7 Min)", quota: "7 mins", price: "₹99", bestFor: "Brief strategic inquiry", features: "Hindi & English support. Balance stays forever." },
    { name: "POPULAR (15 Min)", quota: "15 mins", price: "₹599", bestFor: "Initial matrimonial or contract briefings", features: "Priority connects. 100% masked calls standard." },
    { name: "PRO (30 Min)", quota: "30 mins", price: "₹999", bestFor: "Detailed vetting planning", features: "Direct high-court experts. Document notes included." },
    { name: "MAX (60 Min)", quota: "60 mins", price: "₹1799", bestFor: "Complex multi-stage analysis", features: "Long-form session. Unlimited document attachments." }
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Transparent Wallet Credits
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Painless Transparent Pricing
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-3 max-w-xl mx-auto leading-relaxed">
            Choose pay-per-second talktime or explore massive discounts with bulk Monthly Packages. Credits stay securely inside your wallet and **never expire**.
          </p>
        </div>
      </section>

      {/* Selector tab: Minute quota vs Monthly Packages */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 border border-legal-border rounded-2xl flex shadow-sm">
            <button
              onClick={() => setActiveTab('minute')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all select-none cursor-pointer ${activeTab === 'minute' ? 'bg-primary text-white shadow-md' : 'text-muted-text hover:text-primary'}`}
            >
              Pay-Per-Minute Plans
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all select-none cursor-pointer ${activeTab === 'monthly' ? 'bg-primary text-white shadow-md' : 'text-muted-text hover:text-primary'}`}
            >
              Discounted Monthly Packages
            </button>
          </div>
        </div>

        {/* Content panel: Pay per minute cards */}
        {activeTab === 'minute' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((p, idx) => (
              <div 
                key={idx}
                className={`bg-white border rounded-3xl p-6 relative flex flex-col justify-between transition-all hover:scale-102 ${p.popular ? 'border-secondary ring-2 ring-secondary/40 shadow-premium-hover bg-gradient-to-b from-secondary/5 to-white' : 'border-legal-border shadow-premium'}`}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-primary font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full shadow border border-secondary">
                    {p.badge}
                  </span>
                )}
                {!p.popular && p.badge && (
                  <span className="bg-primary/5 text-primary border border-primary/10 self-start text-[9px] uppercase font-bold px-2 py-0.5 rounded mb-3">
                    {p.badge}
                  </span>
                )}
                
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wide mt-2">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl font-mono font-bold text-primary">₹{p.price}</span>
                    <span className="text-xs text-muted-text font-medium">flat fee</span>
                  </div>
                  <p className="text-xs text-[#147A5D] font-bold mt-1.5 bg-[#147A5D]/5 p-2 rounded-lg border border-[#147A5D]/15 font-mono text-center">
                    {p.minutes} Min talktime ({p.rate})
                  </p>
                  
                  <p className="text-xs text-muted-text/90 mt-4 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <button
                  onClick={() => navigate('talk')}
                  className="w-full bg-primary hover:bg-accent text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow"
                >
                  Buy Wallet talktime
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Content panel: Monthly Packages cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {packages.map((pkg, idx) => {
              const matchesSpecial = pkg.name === 'NyaySetu Special' || pkg.name === 'Corporate Shield';
              return (
                <div 
                  key={idx}
                  className={`bg-white border border-legal-border rounded-3xl p-8 shadow-premium hover:shadow-premium-hover transition-all relative flex flex-col justify-between ${matchesSpecial ? 'border-secondary' : ''}`}
                >
                  {matchesSpecial && (
                    <span className="absolute top-4 right-4 bg-secondary/15 text-primary border border-secondary/40 font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded">
                      Premium Pack
                    </span>
                  )}
                  
                  <div>
                    <span className="text-xs font-bold text-[#147A5D] uppercase tracking-widest">{pkg.hours} Bulk talktime</span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-1">{pkg.name} Package</h3>
                    <div className="flex items-baseline gap-1 mt-3 pb-4 border-b border-legal-border">
                      <span className="text-3xl font-mono font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-text uppercase font-bold">/ {pkg.validity}</span>
                    </div>
                    
                    <p className="text-xs text-muted-text leading-relaxed mt-4">
                      {pkg.desc}
                    </p>

                    <div className="flex flex-col gap-2.5 mt-6 mb-8">
                      {pkg.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#147A5D]/10 text-[#147A5D] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} className="stroke-[3]" />
                          </div>
                          <span className="text-xs text-primary leading-normal">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('talk')}
                    className="w-full bg-[#1F6F5B] hover:bg-[#1F6F5B]/90 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-md border border-[#1F6F5B]"
                  >
                    Activating package Call Now
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Section: Comprehensive Comparison list */}
        <div className="bg-white border border-legal-border rounded-3xl p-6 md:p-8 shadow-premium mb-16 overflow-x-auto select-none">
          <div className="min-w-[640px]">
            <h3 className="font-serif text-xl font-bold text-primary mb-6 border-b border-legal-border pb-3 flex items-center gap-2">
              <Sparkles className="text-secondary" size={20} />
              Minutes Quota comparative outline
            </h3>
            
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-legal-border/80 text-muted-text font-bold">
                  <th className="py-3 px-4">MINUTE MODULES</th>
                  <th className="py-3 px-4">MINUTE MAPPING</th>
                  <th className="py-3 px-4">PRICE</th>
                  <th className="py-3 px-4">BEST FOR</th>
                  <th className="py-3 px-4">SECURE INTEGRATIONS</th>
                  <th className="py-3 px-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {comparativePlans.map((row, idx) => (
                  <tr key={idx} className="border-b border-legal-border/30 hover:bg-[#0F8A6A]/5 font-medium">
                    <td className="py-4 px-4 font-bold text-primary">{row.name}</td>
                    <td className="py-4 px-4 font-mono text-[#147A5D]">{row.quota}</td>
                    <td className="py-4 px-4 font-mono font-bold text-primary">{row.price}</td>
                    <td className="py-4 px-4 text-muted-text">{row.bestFor}</td>
                    <td className="py-4 px-4 text-muted-text leading-snug">{row.features}</td>
                    <td className="py-4 px-4 text-right">
                      <button 
                        onClick={() => navigate('talk')}
                        className="bg-[#147A5D]/10 hover:bg-[#147A5D]/20 text-[#147A5D] font-bold px-3 py-1.5 rounded-lg text-[10px]"
                      >
                        Recharge →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Embedded pricing FAQ sub-section requested */}
        <div className="bg-gradient-to-br from-primary via-accent to-[#154E4F] text-white p-8 md:p-12 rounded-3xl shadow-premium">
          <h3 className="font-serif text-2xl font-bold border-b border-white/10 pb-4 mb-6 text-center">Frequently Asked Pricing Inquiries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-white/95">
            <div>
              <p className="font-bold text-secondary text-sm mb-1">Q: Does my remaining wallet talktime balance expire?</p>
              <p>No. Standard pay-per-minute wallet recharges (any minutes block from ₹99 to ₹1799) carry permanent lifetime validity. Feel free to use 3 minutes now for mutual division issues and save 12 minutes for later contracts vetting.</p>
            </div>
            <div>
              <p className="font-bold text-secondary text-sm mb-1">Q: Are there any hidden setup or platform connectivity parameters?</p>
              <p>NyaySetu does not charge connectivity fees, server fees or matchmaking charges. We operate plain, human, transparent rates. You pay purely for the duration of physical cellular talk.</p>
            </div>
            <div>
              <p className="font-bold text-secondary text-sm mb-1">Q: Can I buy multiple recharges for the same wallet?</p>
              <p>Certainly. Your wallet balance is additive. Recharging ₹99 and ₹599 consecutively aggregates your minutes perfectly within seconds.</p>
            </div>
            <div>
              <p className="font-bold text-secondary text-sm mb-1">Q: Is physical GST billing supported for start-up firms?</p>
              <p>Yes. Upon completion of payment via verified gateways, checkout panels let you input corporate GSTIN to extract statutory valid business expense invoices.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
