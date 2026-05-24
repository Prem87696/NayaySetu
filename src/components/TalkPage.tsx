import React, { useState } from 'react';
import { Phone, Users, CheckCircle, MessageCircle, ShieldAlert, Heart, Home, Scale, Award, Info, Loader2, Volume2, XCircle, PhoneCall } from 'lucide-react';

interface TalkProps {
  walletBalance: number;
  userSession: { name: string; phone: string } | null;
  navigate: (page: string) => void;
  onTopUp: (minutes: number) => void;
}

export default function TalkPage({ walletBalance, userSession, navigate, onTopUp }: TalkProps) {
  const [problemCategory, setProblemCategory] = useState('family');
  const [language, setLanguage] = useState('Hindi हिन्दी');
  const [lawyerPreference, setLawyerPreference] = useState('Different');
  
  // States of simulated call matching
  const [matchingState, setMatchingState] = useState<'idle' | 'matching' | 'connected' | 'recharge_req'>('idle');
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [matchedLawyer, setMatchedLawyer] = useState<any>(null);

  const handleStartCall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userSession) {
      alert('Please login or register first to unlock your custom telecom proxy routes.');
      navigate('login');
      return;
    }

    if (walletBalance <= 0) {
      setMatchingState('recharge_req');
      return;
    }

    // Begin matching flow
    setMatchingState('matching');
    let timer = 3;
    const interval = setInterval(() => {
      timer -= 1;
      if (timer <= 0) {
        clearInterval(interval);
        // Match a simulated lawyer based on category
        setMatchedLawyer({
          name: problemCategory === 'family' ? 'Adv. Meera K.' : problemCategory === 'property' ? 'Adv. Rohan Mehta' : 'Adv. Aarya Sharma',
          credentials: 'Bar Council Verified · State Council Roll',
          rating: '4.9 ★',
          successRate: '91% Out-of-court',
          maskedNumber: '+91 9XXXX XX011'
        });
        setMatchingState('connected');
      }
    }, 1000);
  };

  const handleDeclineCall = () => {
    setMatchingState('idle');
    setMatchedLawyer(null);
  };

  const handleBuyMinutesDemo = (mins: number) => {
    onTopUp(mins);
    setMatchingState('idle');
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-14 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Connect Under 60 Seconds
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Let’s Talk NyaySetu
          </h1>
          <p className="text-base text-[#D8E7E3] mt-3 max-w-xl mx-auto leading-relaxed">
            Connect with a verified, BCI-credentialed advocate instantly. Pay only for active talk minutes. Confidential masked phone protection guaranteed.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Connect module left column */}
        <div className="lg:col-span-7">
          
          {matchingState === 'idle' && (
            <div className="bg-white border border-legal-border rounded-3xl p-8 shadow-premium animate-[fadeIn_0.2s_ease-out]">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                <PhoneCall className="text-secondary" size={22} />
                Connect with a Lawyer
              </h3>
              <p className="text-xs text-muted-text mb-6">
                Brief your preferences below. Our telephony proxy will automatically pair you with the highest-rated active expert within seconds.
              </p>

              <form onSubmit={handleStartCall} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Category select dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Dispute Grievance Field</label>
                    <div className="relative">
                      <select 
                        value={problemCategory}
                        onChange={(e) => setProblemCategory(e.target.value)}
                        className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                      >
                        <option value="mediation">Counseling & Mediation</option>
                        <option value="family">Family Law & Mutual Consent</option>
                        <option value="property">Real Estate Deeds & Tenants</option>
                        <option value="criminal">Summons, Arrest & Jail Bails</option>
                        <option value="agreements">Custom Contract Drafting</option>
                        <option value="corporate">GST, Shareholder & Corporate</option>
                        <option value="startup">Trademark Filing & Patents</option>
                      </select>
                    </div>
                  </div>

                  {/* Language Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Preferred Counsel Language</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="Hindi हिन्दी">Hindi (हिन्दी)</option>
                      <option value="English">English (British-Standard)</option>
                      <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                      <option value="Marathi">Marathi (मराठी)</option>
                    </select>
                  </div>

                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Advocate Preference Channel</label>
                  <select
                    value={lawyerPreference}
                    onChange={(e) => setLawyerPreference(e.target.value)}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="Different">Match High-Rated Available Domain Counsel (Under 60s)</option>
                    <option value="Same">Attempt Last Connected Lawyer (If trials permit)</option>
                  </select>
                </div>

                {userSession && (
                  <div className="bg-[#147A5D]/5 p-3 rounded-xl border border-[#147A5D]/15 flex justify-between text-xs text-primary">
                    <span>Logged-in name: <strong>{userSession.name}</strong></span>
                    <span>Wallet remaining: <strong className="text-[#147A5D] font-mono">{walletBalance} minutes</strong></span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-4 bg-primary hover:bg-accent text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-colors shadow-md inline-flex items-center justify-center gap-2 cursor-pointer border border-primary hover:border-accent"
                >
                  <Phone size={14} className="fill-current animate-bounce" />
                  Initiate Secure Connect Call
                </button>
              </form>
            </div>
          )}

          {/* Sub Flow: Matching Progress Wheel */}
          {matchingState === 'matching' && (
            <div className="bg-white border border-legal-border rounded-3xl p-12 text-center shadow-premium flex flex-col items-center justify-center gap-4 animate-[fadeIn_0.2s_ease-out]">
              <Loader2 className="text-secondary animate-spin" size={44} />
              <h3 className="font-serif text-2xl font-bold text-primary">Searching Counsel Guild...</h3>
              <p className="text-xs text-muted-text max-w-sm leading-relaxed">
                Evaluating credential roll books inside <span className="font-bold text-primary font-mono uppercase">{problemCategory}</span>. Matching you to the highest available peer under {language} preference...
              </p>
              <div className="bg-[#147A5D]/10 text-primary border border-primary/10 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded mt-4">
                Masked telephony proxy server linked
              </div>
            </div>
          )}

          {/* Sub Flow: Active Matched incoming call dialogue simulated! */}
          {matchingState === 'connected' && matchedLawyer && (
            <div className="bg-[#0F3D3E] border border-accent/20 rounded-3xl p-8 text-white shadow-premium relative overflow-hidden animate-[fadeIn_0.25s_ease-out] flex flex-col gap-6 select-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-accent/30 pb-4 gap-3">
                <span className="text-[10px] bg-secondary/20 text-secondary border border-secondary/40 font-bold px-2 py-1 rounded tracking-widest uppercase">
                  ACTIVE INCOMING CALL SIMULATED
                </span>
                <span className="text-xs text-[#D8E7E3]/70 inline-flex items-center gap-1">
                  <Volume2 className="animate-pulse" size={14} /> Active matching connect
                </span>
              </div>

              <div className="flex flex-col items-center py-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-primary font-bold text-2xl font-serif shadow-lg mb-4 ring-4 ring-secondary/30">
                  {matchedLawyer.name.charAt(5)}
                </div>
                <h4 className="text-2xl font-serif font-bold text-white">{matchedLawyer.name}</h4>
                <p className="text-xs text-secondary font-medium tracking-wide mt-1">{matchedLawyer.credentials}</p>
                
                <div className="flex items-center gap-5 mt-4 text-[11px] text-[#D8E7E3] bg-white/5 border border-white/10 p-2 px-4 rounded-xl">
                  <span>Rating: {matchedLawyer.rating}</span>
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  <span>Out-of-court rate: {matchedLawyer.successRate}</span>
                </div>

                <p className="text-xs text-[#D8E7E3]/70 mt-6 leading-relaxed">
                  Call incoming on masked line <strong className="font-mono text-white text-xs">{matchedLawyer.maskedNumber}</strong>. Press Accept to simulate answers and record logs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => alert(`Simulating active telephone connection on masked credentials. You are now speaking with ${matchedLawyer.name}. A summary of consult will be published under logs.`)}
                  className="bg-[#147A5D] hover:bg-[#147A5D]/90 text-white font-bold py-3 rounded-xl text-xs transition-colors text-center inline-flex items-center justify-center gap-2 cursor-pointer border border-[#147A5D]"
                >
                  <Phone size={14} className="fill-current animate-bounce" />
                  Accept Call
                </button>
                <button
                  onClick={handleDeclineCall}
                  className="bg-red-500/20 hover:bg-red-500/35 text-red-100 hover:text-white font-bold py-3 rounded-xl text-xs transition-colors text-center inline-flex items-center justify-center gap-2 cursor-pointer border border-red-500/30"
                >
                  <XCircle size={14} />
                  Decline Call
                </button>
              </div>
            </div>
          )}

          {/* Sub Flow: Insufficient Wallet recharge redirect */}
          {matchingState === 'recharge_req' && (
            <div className="bg-white border border-red-100 rounded-3xl p-8 shadow-premium animate-[fadeIn_0.2s_ease-out] text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                <ShieldAlert size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-1">Quota Exhausted</h3>
              <p className="text-xs text-muted-text max-w-sm mx-auto leading-relaxed">
                Your wallet balance is under the minimum dial threshold (₹99 starter quota). Choose a standard pre-purchased minutes recharge block below to activate matching instant calls.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <button 
                  onClick={() => handleBuyMinutesDemo(7)}
                  className="p-3 bg-legal-bg hover:bg-secondary/15 border border-legal-border hover:border-secondary rounded-xl transition-all font-mono"
                >
                  <span className="block text-primary font-bold font-sans text-[11px] mb-1">Starter Pack</span>
                  <span className="block text-xs text-secondary font-bold select-none">₹99</span>
                  <span className="block text-[9px] text-muted-text mt-0.5 select-none font-sans">7 Min</span>
                </button>
                <button 
                  onClick={() => handleBuyMinutesDemo(15)}
                  className="p-3 bg-legal-bg hover:bg-secondary/15 border border-legal-border hover:border-secondary rounded-xl transition-all font-mono"
                >
                  <span className="block text-primary font-bold font-sans text-[11px] mb-1">Popular Pack</span>
                  <span className="block text-xs text-[#147A5D] font-bold select-none">₹599</span>
                  <span className="block text-[9px] text-muted-text mt-0.5 select-none font-sans">15 Min</span>
                </button>
                <button 
                  onClick={() => handleBuyMinutesDemo(30)}
                  className="p-3 bg-legal-bg hover:bg-secondary/15 border border-legal-border hover:border-secondary rounded-xl transition-all font-mono"
                >
                  <span className="block text-primary font-bold font-sans text-[11px] mb-1">Pro Pack</span>
                  <span className="block text-xs text-secondary font-bold select-none">₹999</span>
                  <span className="block text-[9px] text-muted-text mt-0.5 select-none font-sans">30 Min</span>
                </button>
                <button 
                  onClick={() => handleBuyMinutesDemo(60)}
                  className="p-3 bg-legal-bg hover:bg-secondary/15 border border-legal-border hover:border-secondary rounded-xl transition-all font-mono"
                >
                  <span className="block text-primary font-bold font-sans text-[11px] mb-1">Max Pack</span>
                  <span className="block text-xs text-secondary font-bold select-none">₹1799</span>
                  <span className="block text-[9px] text-muted-text mt-0.5 select-none font-sans">60 Min</span>
                </button>
              </div>

              <button 
                onClick={() => setMatchingState('idle')}
                className="text-xs text-primary underline mt-6 select-none cursor-pointer"
              >
                ← Back to connect page
              </button>
            </div>
          )}

        </div>

        {/* Right column dashboard side blocks */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Simple 3 Steps */}
          <div className="bg-white border border-legal-border rounded-2xl p-6 shadow-premium">
            <h4 className="font-serif text-sm font-bold text-primary border-b border-legal-border pb-3 mb-4">
              Simple 3-Staged Call Setup
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#147A5D]/10 text-[#147A5D] font-bold text-[10px] flex items-center justify-center shrink-0">1</div>
                <div>
                  <h5 className="font-bold text-xs text-primary">Pre-recharge wallet</h5>
                  <p className="text-[11px] text-muted-text leading-relaxed">Start with starter ₹99. Wallet amounts stay permanent and never expire.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#147A5D]/10 text-[#147A5D] font-bold text-[10px] flex items-center justify-center shrink-0">2</div>
                <div>
                  <h5 className="font-bold text-xs text-primary">Select categorizations</h5>
                  <p className="text-[11px] text-muted-text leading-relaxed">Choose dispute discipline & preferred language to align the counsel matches.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#147A5D]/10 text-[#147A5D] font-bold text-[10px] flex items-center justify-center shrink-0">3</div>
                <div>
                  <h5 className="font-bold text-xs text-primary">The incoming secure dial</h5>
                  <p className="text-[11px] text-muted-text leading-relaxed">Verify matched counselor rolling and engage physically on masked lines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Promises cards */}
          <div className="bg-[#147A5D]/5 border border-[#147A5D]/15 p-6 rounded-2xl">
            <h4 className="text-xs font-bold uppercase text-[#147A5D] tracking-wider mb-3">Our Secure Quality Promise</h4>
            <div className="flex flex-col gap-3 text-xs text-muted-text">
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#147A5D]" />
                <span>HD Voice quality networks mapping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#147A5D]" />
                <span>Automatic 3-sec retry on disconnections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#147A5D]" />
                <span>No hidden subscription billing fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#147A5D]" />
                <span>100% privilege masking on caller identity</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-primary p-6 rounded-2xl text-white text-center flex flex-col items-center gap-3">
            <div className="bg-[#25D366]/15 p-3 rounded-full">
              <MessageCircle className="text-[#25D366] fill-current animate-pulse" size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#25D366]">Alternative Route Chat</span>
            <h4 className="font-serif text-sm font-bold">Prefer WhatsApp Guidance First?</h4>
            <p className="text-[11px] text-[#D8E7E3] leading-relaxed">
              Not ready to talk live? Engage on our 24/7 active WhatsApp line to receive template briefs and clear procedural guidelines.
            </p>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-[#25D366] hover:bg-[#20BE5D] text-white font-bold py-2.5 rounded-xl text-xs transition-all inline-block select-none shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:scale-101"
            >
              Chat on WhatsApp Now
            </a>
          </div>

        </div>

      </section>
    </div>
  );
}
