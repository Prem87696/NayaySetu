import React from 'react';
import { Award, ShieldCheck, Clock, Users, CheckCircle, Scale } from 'lucide-react';
import { REVENUE_STATS } from '../data';

interface AboutProps {
  navigate: (page: string) => void;
}

export default function AboutPage({ navigate }: AboutProps) {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-20 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Solution Without Litigation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white leading-tight">
            About NyaySetu
          </h1>
          <p className="text-base text-[#D8E7E3] mt-4 leading-relaxed max-w-2xl mx-auto">
            India’s dedicated pay-per-minute online legal counseling platform. Built to deliver quick, authentic, and pocket-friendly resolution to your daily dispute inquiries.
          </p>
        </div>
      </section>

      {/* Grid of details */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Our Vision & Story</span>
          <h2 className="text-3xl font-bold text-white mt-2">Why NyaySetu Was Founded?</h2>
          <div className="text-[#D8E7E3] mt-6 flex flex-col gap-5 text-sm leading-relaxed">
            <p>
              In traditional Indian legal frameworks, seeking preliminary help or vetting a simple property title chain is often painful. Hardworking consumers usually face exorbitant hourly fees, endless physical consulting chambers trips, and lack of upfront fee transparency.
            </p>
            <p>
              We established <strong className="text-secondary font-bold">NyaySetu</strong> to completely flip this model. By utilizing a highly secure voice consultation matching algorithm and custom pre-purchased talktime wallets, you pay only for the exact active duration of your call.
            </p>
            <p className="border-l-4 border-secondary pl-4 italic text-secondary font-medium">
              "We believe that legal intelligence is not a generic premium service; it is a fundamental daily assurance. Our motto is to secure quick, amicable, out-of-court solutions right when they matter."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-premium border border-legal-border flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary">
              <Clock size={20} />
            </div>
            <h3 className="font-bold text-primary text-base">Pay Per Minute</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              No advance deposits. No hidden retainer fees. Wallet balances stay permanent, matching your usage down to the second.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-premium border border-legal-border flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary">
              <Users size={20} />
            </div>
            <h3 className="font-bold text-primary text-base">Verified Advocates</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Every practitioner goes through rigorous credentials checks with active Bar Council verification and physical court experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-premium border border-legal-border flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-primary text-base">Total Privacy Masking</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              All telephone consultation numbers are masked in real time. We strictly protect your identity under standard privilege rules.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-premium border border-legal-border flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary">
              <Award size={20} />
            </div>
            <h3 className="font-bold text-primary text-base">2 Revisions Included</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              For any legal document bought from our desk, you get professional lawyer drafts with 2 custom revisions standard.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="bg-primary text-white py-14 px-4 border-y border-accent/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-secondary text-xs uppercase font-bold tracking-widest mb-2">Our Footprints</p>
          <h2 className="text-center font-serif text-3xl font-bold mb-10 text-white">Trusted by India’s Legal-Help Seekers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {REVENUE_STATS.map((stat, idx) => (
              <div key={idx} className="bg-accent/10 p-5 rounded-2xl border border-accent/20 text-center">
                <span className="block text-3xl md:text-4xl font-bold font-mono text-secondary mb-1">{stat.value}</span>
                <span className="block text-sm font-bold text-white">{stat.label}</span>
                <span className="block text-xs text-[#D8E7E3]/70 mt-1">{stat.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we maintain clean counsel panel */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Verification Standards</span>
          <h2 className="text-3xl font-bold text-white mt-1">Our Strict Partner Lawyer Blueprint</h2>
          <p className="text-sm text-[#D8E7E3] mt-3">
            We understand that legal advice is critical. That’s why we do not allow random listings. Our onboarding flow is strictly structured:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-legal-border flex flex-col gap-3">
            <span className="text-3xl font-bold text-secondary font-mono">01</span>
            <h4 className="font-bold text-white text-base">Bar Register Mapping</h4>
            <p className="text-xs text-[#D8E7E3] leading-relaxed">
              We collect Certificate of Practice (COP) and verify active registration logs directly on state Bar registries.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-legal-border flex flex-col gap-3">
            <span className="text-3xl font-bold text-secondary font-mono">02</span>
            <h4 className="font-bold text-white text-base">Case Judgment Audit</h4>
            <p className="text-xs text-[#D8E7E3] leading-relaxed">
              We review actual court litigation involvement and published judgment references on judicial portals.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-legal-border flex flex-col gap-3">
            <span className="text-3xl font-bold text-secondary font-mono">03</span>
            <h4 className="font-bold text-white text-base">Ethics Evaluation</h4>
            <p className="text-xs text-[#D8E7E3] leading-relaxed">
              All lawyers clear ethics testing sessions regarding masked details preservation & conflict prevention rules.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Quote Card */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-br from-primary to-accent text-white p-8 md:p-12 rounded-3xl text-center shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 opacity-5">
            <Scale size={280} />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">Connect with a Verified Attorney Instantly</h3>
          <p className="text-sm text-[#D8E7E3] max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to experience professional legal consultancy? Get matched with an active domain advocate in under 60 seconds. Talktime balance never expires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('talk')}
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-3 rounded-xl transition-all shadow-md"
            >
              Start Consultation Call Now
            </button>
            <button 
              onClick={() => navigate('pricing')}
              className="bg-transparent hover:bg-white/10 text-white font-bold px-8 py-3 rounded-xl border border-white/30 transition-all"
            >
              See Wallet Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
