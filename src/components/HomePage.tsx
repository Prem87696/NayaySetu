import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES, PRODUCTS, TESTIMONIALS, FAQS, LAWYERS, REVENUE_STATS, TRUST_BADGES, COMMON_LEGAL_PROBLEMS, PRICING_PACKAGES } from '../data';

interface HomeProps {
  navigate: (page: string, params?: { serviceId?: string; productId?: string; blogId?: string }) => void;
}

export default function HomePage({ navigate }: HomeProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const heroSlides = [
    { title: "Expert Legal Advice, Starting at ₹99", highlight: "For ₹99 Only" },
    { title: "The Right Lawyer. Right Now.", highlight: "Connect < 60s" },
    { title: "Meet Your Lawyer In Person in Delhi NCR.", highlight: "In-Person Hubs" }
  ];

  const getProblemIcon = (name: string) => {
    switch (name) {
      case 'Receipt': return <LucideIcons.Receipt size={24} className="text-[#C89B3C]" />;
      case 'Heart': return <LucideIcons.Heart size={24} className="text-[#C89B3C]" />;
      case 'Home': return <LucideIcons.Home size={24} className="text-[#C89B3C]" />;
      case 'ShieldAlert': return <LucideIcons.ShieldAlert size={24} className="text-[#C89B3C]" />;
      default: return <LucideIcons.Scale size={24} className="text-[#C89B3C]" />;
    }
  };

  const getServiceIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={26} className="text-secondary stroke-[2]" /> : <LucideIcons.Scale size={26} className="text-secondary" />;
  };

  const getProductIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={22} className="text-secondary" /> : <LucideIcons.FileText size={22} className="text-secondary" />;
  };

  const getBadgeIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={20} className="stroke-[2.5]" /> : <LucideIcons.CheckCircle size={20} />;
  };

  // 4 FAQ items for FAQ preview section
  const faqPreviewItems = FAQS.slice(0, 4);

  return (
    <div className="w-full bg-legal-bg min-h-screen relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-primary via-[#164D4E] to-primary text-white py-14 px-4 relative overflow-hidden select-none z-10 isolate">
        
        {/* Subtle decorative glowing mesh background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left content block */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#147A5D] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm animate-pulse flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                49 lawyers online now
              </span>
              <span className="bg-secondary/20 text-secondary border border-secondary/40 text-[10px] font-extrabold tracking-widest uppercase px-2 py-1 rounded-md">
                Limited offer
              </span>
            </div>

            {/* Dynamic Slider Header */}
            <div className="min-h-[140px] md:min-h-[110px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight animate-[fadeIn_0.3s_ease-out]">
                {heroSlides[activeSlide].title}
              </h1>
              <span className="block text-secondary font-bold text-sm uppercase tracking-widest mt-1.5">
                • {heroSlides[activeSlide].highlight}
              </span>
            </div>

            <p className="text-[#E2EAE7] font-semibold text-sm">
              Connect with a verified lawyer in under 60 seconds
            </p>

            <p className="text-xs text-[#D8E7E3] leading-relaxed max-w-xl">
              India’s pay-per-minute legal consultation platform — verified advocates across family law, property, criminal matters, business disputes, startup registrations and more. Pay only for the time you use. Balance never expires.
            </p>

            {/* Quick Hero statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-white/10 text-center sm:text-left mt-2">
              <div>
                <span className="block text-xl font-bold font-mono text-secondary">₹99</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFC7C2]">Starter Call</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-secondary">&lt;60s</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFC7C2]">Connect time</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-secondary">4.9★</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFC7C2]">Avg rating</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-secondary">2,300+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFC7C2]">Clients helped</span>
              </div>
            </div>

            {/* CTA panel */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={() => navigate('talk')}
                className="bg-gradient-to-r from-secondary to-[#B88922] hover:from-[#B88922] hover:to-secondary text-[#052F2D] font-extrabold text-xs px-7 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(214,169,58,0.25)] hover:shadow-[0_4px_25px_rgba(214,169,58,0.4)] hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer border border-secondary"
              >
                <LucideIcons.Phone size={14} className="fill-current animate-bounce" />
                Talk to Lawyer Now
              </button>
              <button 
                onClick={() => navigate('pricing')}
                className="bg-white/5 hover:bg-white/10 text-[#D8E7E3] hover:text-white font-bold text-xs px-7 py-4 rounded-xl border border-white/25 transition-all text-center cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                See Wallet Pricing Plans
              </button>
            </div>
          </div>

          {/* Hero Right side: Phone Call consultation visual card simulation */}
          <div className="lg:col-span-5 grid justify-center z-10 w-full md:px-4">
            <div className="bg-white text-[#073B36] rounded-[24px] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-sm w-full border border-gray-100 relative overflow-hidden flex flex-col gap-5 select-none animate-[fadeIn_0.5s_ease-out]">
              <div className="absolute top-0 right-0 p-3 bg-secondary/10 rounded-bl-2xl">
                <LucideIcons.ShieldCheck size={20} className="text-secondary" />
              </div>

              {/* Masked incoming call status */}
              <div className="flex items-center gap-2.5 pb-3.5 border-b border-gray-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#18A982] inline-block animate-ping"></div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Incoming consultation via NyaySetu Secure Proxy</span>
              </div>

              {/* Counsel detail */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0F8A6A] to-[#075E53] rounded-full flex items-center justify-center font-bold text-white text-lg font-serif shadow-md border border-[#18A982]/20">
                  M
                </div>
                <div>
                  <h4 className="font-serif font-black text-base text-[#073B36]">Adv. Meera K.</h4>
                  <p className="text-[10px] text-[#147A5D] font-bold mt-0.5">Bar Verified · Delhi NCR Panel</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">Number masked: +91 9XXXX XX011</p>
                </div>
              </div>

              {/* Matching state progress bar line */}
              <div className="bg-gray-50 p-3.5 rounded-xl flex items-center justify-between text-xs font-semibold text-[#073B36] border border-gray-100/80">
                <span className="text-gray-600">Connecting matched line...</span>
                <span className="text-secondary font-mono font-bold">00:03</span>
              </div>

              {/* Visual simulated Accept / Decline CTA Buttons inside the card */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button 
                  onClick={() => navigate('talk')}
                  className="bg-[#147A5D] hover:bg-[#075E53] text-white font-bold py-3 text-center text-xs rounded-xl tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer select-none"
                >
                  Accept Call
                </button>
                <button 
                  onClick={() => alert('This is a simulated demo dashboard. Please purchase talktime to receive live matches.')}
                  className="bg-red-50/5 hover:bg-red-50/10 text-red-600 font-bold py-3 text-center text-xs rounded-xl transition-all cursor-pointer border border-red-100/50"
                >
                  Decline Call
                </button>
              </div>

              {/* Trust Badge overlay */}
              <div className="pt-3.5 border-t border-gray-100 text-center flex justify-between text-[10px] text-gray-400 font-medium">
                <span>Delivered: 25,000+ min</span>
                <span className="text-[#147A5D] font-bold">Out-of-court rate: 89%</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. HERO SLIDER / CAROUSEL INDICATOR DOTS */}
      <div className="w-full bg-[#164D4E]/90 py-3 text-center border-b border-accent/25 flex items-center justify-center gap-4 text-white text-xs select-none">
        <span className="font-mono text-secondary">0{activeSlide + 1} / 03</span>
        <div className="flex gap-2">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${activeSlide === idx ? 'bg-secondary px-2' : 'bg-white/40 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      {/* 3. FIRST-TIME OFFER CARD */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-6 select-none relative z-10 isolate overflow-hidden">
        <div className="bg-gradient-to-r from-[#0A4B45] to-[#063F3B] rounded-3xl p-7 border border-secondary/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 border border-secondary/25 shadow-sm">
              <LucideIcons.Sparkles size={22} className="animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-lg tracking-tight">New Client Trial Discount</h4>
              <p className="text-xs text-[#D8E7E3] mt-1">
                Start your first private, secure consultation session for just <span className="text-secondary font-black font-mono text-sm">₹99</span>. <strong className="text-secondary font-semibold">Limited to once per verified user profile!</strong>
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate('talk')}
            className="bg-gradient-to-r from-secondary to-[#B88922] hover:from-[#B88922] hover:to-secondary text-[#052F2D] font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(214,169,58,0.2)] hover:shadow-[0_4px_20px_rgba(214,169,58,0.35)] shrink-0 cursor-pointer"
          >
            Claim Trial Now →
          </button>
        </div>
      </section>

      {/* QUICK TOOLS DASHBOARD GRID (SaaS ADVANCED SUITE) */}
      <section className="max-w-7xl mx-auto px-4 py-8 select-none relative z-10 isolate overflow-hidden">
        <div className="bg-[#063F3B] rounded-[32px] p-6 sm:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="bg-emerald-500/10 absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-5">
            <div>
              <span className="bg-[#18A982]/15 text-[#18A982] border border-[#18A982]/30 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider inline-flex items-center gap-1">
                <LucideIcons.Bot size={11} className="animate-spin" />
                NyaySetu SaaS Sandbox Suite
              </span>
              <h2 className="text-2xl font-serif font-black text-white mt-1.5 tracking-tight">Interactive AI Client Utilities</h2>
            </div>
            <p className="text-xs text-[#D8E7E3]/80 max-w-sm md:text-right leading-relaxed font-semibold">
              Leverage automated vetting, live judicial lookups, smart template compilers, and private corporate RFP boards instantly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
            {[
              { title: 'Free Legal Q&A Forum', desc: 'Ask public & private queries', page: 'ask-free', icon: 'HelpCircle', tag: 'Expert Backed' },
              { title: 'AI Issue Urgency Checker', desc: 'Estimate severity and files', page: 'checker', icon: 'Sparkles', tag: 'Automated AI' },
              { title: 'Document Vetting Review', desc: 'Progressive workflow upload', page: 'doc-review', icon: 'FileCheck', tag: 'Lawyer Audit' },
              { title: 'Guided Template Factory', desc: 'Symmetric contract drafts', page: 'generator', icon: 'FileSignature', tag: 'E-Sign Ready' },
              { title: 'CNR Court Case Tracker', desc: 'Full judicial timeline lookup', page: 'timeline', icon: 'Calendar', tag: 'Live Registry' },
              { title: 'Enterprise B2B Market', desc: 'RFP client matching bids', page: 'b2b-marketplace', icon: 'Building2', tag: 'Startup Pack' },
              { title: 'Lawyer Working Portal', desc: 'Practioner VoIP dashboard', page: 'dashboard', icon: 'Trophy', tag: 'Console' },
              { title: 'Universal Smart Search', desc: 'Cross-catalog search matching', page: 'search', icon: 'Search', tag: 'Smart Sync' },
              { title: 'District Bar Panels (SEO)', desc: 'Localized regional rosters', page: 'city-lawyers', icon: 'MapPinned', tag: 'Locality Match' },
              { title: '🚨 Red Alert Rescue Desk', desc: '24/7 direct mask routing', page: 'emergency', icon: 'AlertOctagon', tag: 'Urgent callback', danger: true },
            ].map((tool, index) => {
              const IconComp = (LucideIcons as any)[tool.icon] || LucideIcons.HelpCircle;
              return (
                <div
                  key={index}
                  onClick={() => navigate(tool.page)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between group h-[145px] hover:scale-102 hover:shadow-lg ${tool.danger ? 'bg-red-950/20 border-red-500/30 hover:bg-red-950/40 hover:border-red-500' : 'bg-[#0A4B45] border-white/5 hover:bg-[#0A4B45]/90 hover:border-[#18a982]/30'}`}
                >
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${tool.danger ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-white/5 text-secondary border-white/10 group-hover:text-white'}`}>
                        <IconComp size={16} />
                      </div>
                      <span className={`text-[8px] font-mono font-black uppercase px-1.5 py-0.5 rounded ${tool.danger ? 'bg-red-500/20 text-red-300' : 'bg-[#18A982]/10 text-[#18A982]'}`}>
                        {tool.tag}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-white mt-3.5 group-hover:text-secondary tracking-tight line-clamp-1">{tool.title}</h4>
                    <p className="text-[10px] text-[#D8E7E3]/60 leading-tight mt-1 line-clamp-2">{tool.desc}</p>
                  </div>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 block group-hover:underline text-left">Launch →</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMMON LEGAL PROBLEMS */}
      <section className="max-w-7xl mx-auto px-4 py-12 select-none relative z-10 isolate overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Immediate Mitigation</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">What can NyaySetu help you with?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMON_LEGAL_PROBLEMS.map((prob, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-legal-border shadow-premium flex flex-col justify-between hover:scale-102 transition-transform transform-gpu"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#C89B3C]/10 flex items-center justify-center mb-4">
                  {getProblemIcon(prob.icon)}
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-2">{prob.title}</h3>
                <p className="text-xs text-muted-text leading-relaxed">{prob.desc}</p>
                <p className="text-[11px] text-[#147A5D] font-bold mt-3 leading-snug border-l-2 border-[#147A5D] pl-2.5 italic">
                  {prob.outcome}
                </p>
              </div>
              <button 
                onClick={() => navigate('talk')}
                className="mt-6 text-xs text-primary hover:text-secondary font-bold text-left inline-flex items-center gap-1 justify-between w-full border-t border-legal-border/30 pt-3"
              >
                <span>Get help now</span>
                <LucideIcons.ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW GRID (7 PRACTICE AREAS SUMMARY) */}
      <section id="homepage-services" className="max-w-7xl mx-auto px-4 py-12 relative z-10 isolate overflow-hidden">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">The Practice Area Matrix</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">Comprehensive Legal Services</h2>
          <p className="text-xs text-[#D8E7E3] mt-2 max-w-md mx-auto">
            7 priority practices managed strictly by High Court and Supreme Court advocates panel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((serv) => (
            <div 
              key={serv.id}
              onClick={() => navigate('service-detail', { serviceId: serv.id })}
              className="bg-white p-6 rounded-2xl border border-legal-border hover:border-secondary hover:shadow-premium-hover transition-all cursor-pointer flex flex-col justify-between group transform-gpu"
            >
              <div>
                <div className="w-10 h-10 bg-legal-bg rounded-lg flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors mb-4">
                  {getServiceIcon(serv.iconName)}
                </div>
                <h3 className="font-serif font-bold text-primary text-base group-hover:text-secondary transition-colors">
                  {serv.title}
                </h3>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-wider mt-0.5">{serv.subtitle}</p>
                <p className="text-[11px] text-muted-text leading-relaxed mt-2.5 line-clamp-2">
                  {serv.description}
                </p>
              </div>
              <span className="mt-5 text-xs text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                Select Problem <LucideIcons.ArrowRight size={12} className="ml-1" />
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('services')}
            className="bg-primary hover:bg-accent text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors shadow select-none"
          >
            Explore all 7 core Services
          </button>
        </div>
      </section>

      {/* 6. HOW NYAYSETU WORKS */}
      <section className="bg-gradient-to-br from-primary to-[#154E4F] text-white py-16 px-4 border-y border-accent/25 select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase text-secondary tracking-widest">Simple. Fast. Secure.</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">How NyaySetu Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-3 relative">
              <span className="text-3xl font-mono font-black text-secondary">01</span>
              <h4 className="font-bold text-xs uppercase text-white tracking-wider">Sign Up & Verify</h4>
              <p className="text-[11px] text-[#D8E7E3] leading-relaxed">Enter your phone number, receive OTP verification and secure account console in 30 seconds.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-3 relative">
              <span className="text-3xl font-mono font-black text-secondary">02</span>
              <h4 className="font-bold text-xs uppercase text-white tracking-wider">Buy Talktime Credits</h4>
              <p className="text-[11px] text-[#D8E7E3] leading-relaxed">Choose standard wallet minutes starting at just ₹99. Payment secured via PCI-DSS gates.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-3 relative">
              <span className="text-3xl font-mono font-black text-secondary">03</span>
              <h4 className="font-bold text-xs uppercase text-white tracking-wider">Pick category + lingo</h4>
              <p className="text-[11px] text-[#D8E7E3] leading-relaxed">Pick divorce, RERA property delayed possession category, and set preferred language dial rules.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-3 relative">
              <span className="text-3xl font-mono font-black text-secondary">04</span>
              <h4 className="font-bold text-xs uppercase text-white tracking-wider">Matched Lawyer Calls</h4>
              <p className="text-[11px] text-[#D8E7E3] leading-relaxed">Algorithmic fast telephone dial matches verified counsel who calls your phone masked in &lt;60s.</p>
            </div>

          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => navigate('talk')}
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Try it Now — Talk for ₹99
            </button>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENT PRICING & WALLET PLANS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Transparent Wallet Credits</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">Pre-Purchased Wallet Plans</h2>
          <p className="text-xs text-[#D8E7E3] mt-2 max-w-md mx-auto">
            Only pay for the exact duration you utilize. Remaining talktime balance carries permanent lifetime validity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_PACKAGES.minutePlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`bg-white border rounded-3xl p-6 relative flex flex-col justify-between transition-all hover:scale-102 ${plan.popular ? 'border-secondary bg-gradient-to-br from-secondary/5 to-white ring-2 ring-secondary/35 shadow-premium-hover' : 'border-legal-border shadow-premium'}`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-primary text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow border border-secondary">
                  {plan.badge}
                </span>
              )}
              {!plan.popular && plan.badge && (
                <span className="bg-primary/5 text-primary border border-primary/10 self-start text-[8px] uppercase font-bold px-2 py-0.5 rounded mb-3">
                  {plan.badge}
                </span>
              )}

              <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wide">{plan.name} Package</h4>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-mono font-bold text-primary">₹{plan.price}</span>
                  <span className="text-xs text-muted-text">flat</span>
                </div>
                <div className="bg-[#147A5D]/5 border border-[#147A5D]/15 p-2 rounded-xl text-center text-xs text-[#147A5D] font-bold mt-2 font-mono">
                  {plan.minutes} Min talktime ({plan.rate})
                </div>
                <p className="text-[11px] text-muted-text mt-4 mb-6 leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <button 
                onClick={() => navigate('talk')}
                className={`w-full py-3 rounded-xl text-xs transition-all cursor-pointer font-bold ${plan.popular ? 'bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] shadow-[0_4px_15px_rgba(214,169,58,0.2)] hover:shadow-[0_4px_20px_rgba(214,169,58,0.35)] hover:-translate-y-0.1' : 'bg-primary hover:bg-[#0F8A6A] text-white'}`}
              >
                Buy Wallet Credit
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MONTHLY BULK PACKAGES SPECIFICATION */}
      <section className="bg-legal-bg py-16 px-4 border-t border-legal-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase text-secondary tracking-widest">Corporate & Dispute Shields</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">Structured Monthly Packages</h2>
            <p className="text-xs text-[#D8E7E3] mt-2 max-w-sm mx-auto animate-bounce">
              Save massive percentages on long-term litigations and regular business compliance advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PACKAGES.monthlyPackages.map((pkg, idx) => (
              <div 
                key={idx}
                className="bg-white border border-legal-border rounded-3xl p-6 shadow-premium hover:shadow-premium-hover hover:scale-101 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{pkg.hours} Talktime quota</span>
                  <h3 className="font-serif text-lg font-bold text-primary mt-1">{pkg.name} Pack</h3>
                  <div className="flex items-baseline gap-0.5 mt-3 pb-3 border-b border-legal-border">
                    <span className="text-2xl font-mono font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-[10px] text-muted-text uppercase font-bold">/ Mo</span>
                  </div>
                  
                  <p className="text-[11px] text-muted-text/95 mt-3 leading-snug">
                    {pkg.desc}
                  </p>

                  <div className="flex flex-col gap-2 mt-5 mb-6">
                    {pkg.bullets.slice(0, 4).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#147A5D]/10 text-[#147A5D] flex items-center justify-center shrink-0 mt-0.5">
                          <LucideIcons.Check size={9} className="stroke-[3.5]" />
                        </div>
                        <span className="text-[10px] text-primary leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => navigate('talk')}
                  className="w-full bg-[#0F8A6A] hover:bg-[#18A982] text-white font-bold py-3 rounded-xl text-xs transition-all tracking-wide shadow-sm hover:shadow-md cursor-pointer border border-[#0F8A6A]/10"
                >
                  Buy Pack
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LEGAL DOCUMENTS / PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Watertight Agreements</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">Legal Document Products</h2>
          <p className="text-xs text-[#D8E7E3] mt-2 max-w-sm mx-auto">
            Fixed-fee agreements or IP registrations filed by panel lawyers. Includes 2 edits/revisions. Delivered in 48-72 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PRODUCTS.slice(0, 4).map((prod) => (
            <div 
              key={prod.id}
              onClick={() => navigate('product-detail', { productId: prod.id })}
              className="bg-white rounded-3xl border border-legal-border hover:border-secondary shadow-premium hover:shadow-premium-hover transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-10 h-10 bg-legal-bg rounded-xl flex items-center justify-center mb-4 border border-legal-border/30">
                  {getProductIcon(prod.iconName)}
                </div>
                <h3 className="font-serif font-bold text-primary text-base group-hover:text-secondary transition-colors line-clamp-1">
                  {prod.title}
                </h3>
                <span className="bg-secondary/10 text-[#B88922] border border-secondary/20 font-bold text-[9px] uppercase tracking-wide px-2 py-0.5 rounded inline-block mt-1">
                  {prod.category}
                </span>
                <p className="text-[11px] text-muted-text mt-3 leading-relaxed line-clamp-2">
                  {prod.description}
                </p>
              </div>
              <div className="bg-slate-50 p-4 border-t border-legal-border flex items-center justify-between text-xs mt-auto">
                <span className="font-mono font-bold text-[#0F8A6A]">{prod.priceText}</span>
                <span className="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  Order <LucideIcons.ChevronRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => navigate('products')}
            className="bg-primary hover:bg-accent text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors shadow select-none"
          >
            View all Document Products
          </button>
        </div>
      </section>

      {/* 10. OUR LAWYERS PANEL SUMMARY */}
      <section className="bg-legal-bg py-16 px-4 border-y border-legal-border select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase text-secondary tracking-widest">The Council Guild</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">Meet our Verified Panel</h2>
            <p className="text-xs text-[#D8E7E3] mt-2 max-w-sm mx-auto">
              Our lawyers clear multiple background check matrices before taking active tele-consult calls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAWYERS.map((lawyer) => (
              <div key={lawyer.id} className="bg-white p-6 rounded-3xl border border-legal-border shadow-premium flex flex-col justify-between hover:scale-101 transition-transform">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-serif">
                      {lawyer.name.charAt(5)}
                    </div>
                    <span className="bg-[#147A5D]/10 text-[#147A5D] border border-[#147A5D]/20 font-bold text-[9px] uppercase px-2 py-0.5 rounded">
                      COP Verified
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-primary text-lg">{lawyer.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-secondary font-bold mt-0.5">
                    <span>{lawyer.location} Panel</span>
                    <span>•</span>
                    <span>{lawyer.yearsOfExperience}+ Years Court practice</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {lawyer.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="bg-primary/10 text-primary text-[9px] font-bold px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] text-muted-text mt-4">
                    Expertly handled over <strong className="text-primary">{lawyer.consultationsCount}+</strong> masked consultations with client rating of <strong className="text-secondary">{lawyer.rating}★</strong>.
                  </p>
                </div>

                <button 
                  onClick={() => navigate('talk')}
                  className="w-full mt-6 bg-primary hover:bg-accent text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow"
                >
                  Talk with Counselor Call Now
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. BENEFITS OF NYAYSETU */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Strict Quality Standards</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">Benefits of NyaySetu</h2>
          <p className="text-xs text-[#D8E7E3] mt-2">Best in Legal | 24x7 | Quick & Accurate</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-legal-border flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
              <LucideIcons.Clock size={20} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Pay Per Second Billing</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">No high hourly deposits. Deductions occur strictly matching voice conversation seconds in real time.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-legal-border flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
              <LucideIcons.PiggyBank size={20} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Saves Time & Money</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">Avoid spending thousands visiting courtroom corridors. Get real legal intelligence right on your mobile phone.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-legal-border flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
              <LucideIcons.ShieldAlert size={20} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Quick & High Accurate Advice</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">Our matching pipeline aligns you exclusively with advocates carrying active experience in your exact grievance area.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-legal-border flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
              <LucideIcons.Lock size={20} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Confidential and Protected Privileges</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">Full masks protect phone directories. Communications are structured under 256-bit secure SSL certifications standard.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-legal-border flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
              <LucideIcons.CheckCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">100% Verified Counsel Lawyers</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">No mock accounts are listed. Bar Council registry mapping confirms valid practitioner roll books in active status.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-legal-border flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
              <LucideIcons.MapPin size={20} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Online + In-Person NCR Support</h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">Vetting is administered virtually. Complex arbitrations can proceed physically at Connaught Place FLAGSHIP hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TESTED FOOTPRINTS IN INDIA BOARD */}
      <section className="bg-primary text-white py-14 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-secondary tracking-widest text-xs uppercase font-extrabold mb-1">Our Footprints</span>
          <h2 className="font-serif text-3xl font-bold mb-8 text-white text-center">Trusted by India’s Legal-Help Seekers</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="bg-accent/10 p-5 rounded-2xl border border-accent/20 text-center">
              <span className="block text-3.5xl font-bold font-mono text-secondary mb-1">2,300+</span>
              <span className="block text-xs uppercase tracking-wide text-[#AFC7C2]">Clients Helped</span>
            </div>
            <div className="bg-accent/10 p-5 rounded-2xl border border-accent/20 text-center">
              <span className="block text-3.5xl font-bold font-mono text-secondary mb-1">25,000+ min</span>
              <span className="block text-xs uppercase tracking-wide text-[#AFC7C2]">Talktime Delivered</span>
            </div>
            <div className="bg-accent/10 p-5 rounded-2xl border border-accent/20 text-center">
              <span className="block text-3.5xl font-bold font-mono text-secondary mb-1">4.9 Star</span>
              <span className="block text-xs uppercase tracking-wide text-[#AFC7C2]">Average Google rating</span>
            </div>
            <div className="bg-accent/10 p-5 rounded-2xl border border-accent/20 text-center">
              <span className="block text-3.5xl font-bold font-mono text-secondary mb-1">89%</span>
              <span className="block text-xs uppercase tracking-wide text-[#AFC7C2]">Out-Of-Court Resolution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TESTIMONIALS (6 CARDS WITH MIXED HINDI-ENGLISH STYLE) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Happy Smiles Secured</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">Our Happy Users</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="bg-white p-6 rounded-3xl border border-legal-border shadow-premium flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map((_, rIdx) => (
                      <LucideIcons.Star key={rIdx} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="bg-[#147A5D]/10 text-[#147A5D] px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wide">
                    {test.category} Client
                  </span>
                </div>
                <p className="text-xs text-muted-text leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-legal-border/40 flex flex-col">
                <span className="text-xs font-bold text-primary">{test.name}</span>
                <span className="text-[10px] text-muted-text mt-0.5">{test.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. FAQ PREVIEW ACCORDIONS */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Self-Solve Answers</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">FAQ Preview</h2>
        </div>

        <div className="flex flex-col gap-3.5 mb-10">
          {faqPreviewItems.map((faq, idx) => {
            const isFaqExpanded = expandedFaq === idx;
            return (
              <div key={faq.id} className="bg-white border border-legal-border rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setExpandedFaq(isFaqExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-sm text-primary hover:bg-secondary/5 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif block pr-2 leading-snug">{faq.question}</span>
                  <span className="text-primary shrink-0">
                    {isFaqExpanded ? <LucideIcons.Minus size={15} /> : <LucideIcons.Plus size={15} />}
                  </span>
                </button>
                {isFaqExpanded && (
                  <div className="p-4 pt-0 text-xs text-muted-text/95 leading-relaxed bg-legal-bg/10 border-t border-legal-border/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={() => navigate('faqs')}
            className="text-secondary hover:text-white font-bold text-xs inline-flex items-center gap-1 cursor-pointer underline"
          >
            See all detailed FAQs answers <LucideIcons.ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* 15. FINAL CALL TO ACTION (CTA) */}
      <section className="max-w-6xl mx-auto px-4 pb-20 select-none">
        <div className="bg-gradient-to-br from-[#0F3D3E] via-[#164D4E] to-[#0F3D3E] text-white p-10 md:p-14 rounded-3xl text-center shadow-2xl relative overflow-hidden flex flex-col items-center gap-4 border border-accent/25">
          <div className="absolute top-0 right-0 transform translate-x-16 -translate-y-16 opacity-5">
            <LucideIcons.Scale size={260} />
          </div>
          
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full animate-pulse">
            No Waiting. No Booking Hassles.
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-white leading-tight">
            Stop Wondering. Start Talking.
          </h2>
          <p className="text-xs text-[#D8E7E3] max-w-lg mx-auto leading-relaxed mt-2">
            Get absolute clarity on your legal dispute or contract in 7 minutes — for just ₹99. Speak directly with verified Bar Council advocates with total masked privilege protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
            <button 
              onClick={() => navigate('talk')}
              className="bg-secondary hover:bg-secondary/95 text-primary font-bold text-xs px-8 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <LucideIcons.PhoneCall size={14} className="fill-current" />
              Talk to a Lawyer Now
            </button>
            <a 
              href="https://wa.me/919000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BE5D] text-white font-bold text-xs px-8 py-3.5 rounded-xl transition-all text-center inline-flex items-center justify-center gap-2 select-none shadow-[0_4px_15px_rgba(37,211,102,0.25)] hover:scale-[1.02] active:scale-95"
            >
              <LucideIcons.MessageCircle size={14} className="fill-current" />
              WhatsApp Us Instead
            </a>
          </div>

          <p className="text-[10px] text-[#D8E7E3]/70 mt-4">
            Once-per-user trial offer · 4.9★ rating based on 770+ active clients · 100% Checked panel advocates
          </p>
        </div>
      </section>

    </div>
  );
}
