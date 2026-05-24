import React, { useState } from 'react';
import { HelpCircle, RefreshCcw, Smartphone, CreditCard, ShieldAlert, ArrowRight, CheckCircle } from 'lucide-react';

interface SupportProps {
  navigate: (page: string) => void;
}

export default function SupportPage({ navigate }: SupportProps) {
  const [successMsg, setSuccessMsg] = useState('');
  const [ticketData, setTicketData] = useState({
    userEmail: '',
    topic: 'payment',
    text: ''
  });

  const handleTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketData.userEmail || !ticketData.text) {
      alert('Please fill out email and message details.');
      return;
    }
    setSuccessMsg(`Ticket raised successfully! Reference: L11-SR-${Math.floor(Math.random() * 900000) + 100000}. We will correspond via mail in 1-2 hours.`);
    setTicketData({ userEmail: '', topic: 'payment', text: '' });
  };

  const categories = [
    {
      title: "Account Help",
      desc: "Issues with OTP delivery, password resets, profile details or active session logins.",
      icon: Smartphone,
      topicKey: "account"
    },
    {
      title: "Payment Vetting",
      desc: "Recharge failures, double debits on bank cards, GST invoice requests, or wallet ledger discrepancies.",
      icon: CreditCard,
      topicKey: "payment"
    },
    {
      title: "Call Disconnections",
      desc: "Call disconnections, audio lag, dropped connections or trouble matching under 60s.",
      icon: ShieldAlert,
      topicKey: "call"
    },
    {
      title: "Wallet Refund requests",
      desc: "Claiming unused credits back to source payment accounts under terms of refund policy.",
      icon: RefreshCcw,
      topicKey: "refund"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            NyaySetu Care
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Help & Support Desk
          </h1>
          <p className="text-base text-[#D8E7E3] mt-3 leading-relaxed max-w-2xl mx-auto">
            Experienced a dropped call or billing glitch? We operate a 100% resolution priority policy. Submit your grievance ticket below for immediate attention.
          </p>
        </div>
      </section>

      {/* Grid of help topics */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Self-Solve Topics</span>
          <h2 className="text-3xl font-bold text-white mt-1">Select Issue Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, idx) => {
            const IconC = cat.icon;
            return (
              <div 
                key={idx} 
                onClick={() => setTicketData({...ticketData, topic: cat.topicKey})}
                className={`bg-white p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between hover:shadow-premium-hover ${ticketData.topic === cat.topicKey ? 'border-secondary bg-secondary/5 ring-1 ring-secondary' : 'border-legal-border shadow-premium'}`}
              >
                <div className="flex flex-col gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ticketData.topic === cat.topicKey ? 'bg-secondary text-primary' : 'bg-[#147A5D]/10 text-[#147A5D]'}`}>
                    <IconC size={20} />
                  </div>
                  <h4 className="font-bold text-primary text-sm">{cat.title}</h4>
                  <p className="text-xs text-muted-text leading-relaxed">{cat.desc}</p>
                </div>
                <span className="text-xs text-secondary font-bold mt-4 flex items-center gap-1">
                  Select Topic <ArrowRight size={12} />
                </span>
              </div>
            );
          })}
        </div>

        {/* Raise a Support Ticket Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-legal-border shadow-premium">
            <h3 className="text-xl font-serif text-primary font-bold mb-4">Submit Helpdesk Incident Ticket</h3>
            {successMsg ? (
              <div className="bg-[#147A5D]/10 border border-[#147A5D]/20 text-[#147A5D] p-5 rounded-2xl flex flex-col gap-3">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle size={18} />
                  <span>Submission Successful</span>
                </div>
                <p className="text-xs leading-relaxed">{successMsg}</p>
                <button 
                  onClick={() => setSuccessMsg('')}
                  className="bg-[#147A5D] text-white text-[11px] font-bold py-1.5 px-3 rounded-lg w-max hover:bg-[#147A5D]/90 transition-colors"
                >
                  Raise another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleTicket} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Select Issue Focus</label>
                  <select 
                    value={ticketData.topic}
                    onChange={(e) => setTicketData({...ticketData, topic: e.target.value})}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary"
                  >
                    <option value="account">Account logins & OTP verification</option>
                    <option value="payment">Card/UPI debit & wallet balance credit glitch</option>
                    <option value="call">Call connectivity or dropped match</option>
                    <option value="refund">Refunding remaining wallet credits</option>
                    <option value="complaint">Complaint about matched lawyer expertise</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Email Address for Correspondence <span className="text-red-500">*</span></label>
                  <input 
                    type="email"
                    required
                    placeholder="e.g. user@gmail.com"
                    value={ticketData.userEmail}
                    onChange={(e) => setTicketData({...ticketData, userEmail: e.target.value})}
                    className="w-full bg-[#042F2D] border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-secondary" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Comprehensive Incident Description <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={4}
                    required
                    value={ticketData.text}
                    onChange={(e) => setTicketData({...ticketData, text: e.target.value})}
                    placeholder="Please specify transaction ID, matched advocate name, or precise time of call drop..."
                    className="w-full bg-[#042F2D] border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-secondary resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-xl text-xs transition-transform"
                >
                  Raise Resolution Ticket
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-12 xl:col-span-5 bg-primary p-6 md:p-8 rounded-3xl text-white flex flex-col gap-5 self-start">
            <h3 className="text-xl font-serif text-white font-bold pb-2 border-b border-accent/20">Helpdesk Promises</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-secondary">2 Hours TAT responses</h4>
                  <p className="text-[11px] text-[#D8E7E3] mt-0.5 leading-relaxed">Our email help team operates at lightning speeds responding to active recharges.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-secondary">Painless Call Drops Audit</h4>
                  <p className="text-[11px] text-[#D8E7E3] mt-0.5 leading-relaxed">We audit tele-networks. If a match gets dropped under 60 seconds with zero counsel communication, the system refunds the talktime balance instantly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-secondary">Simple Refunds</h4>
                  <p className="text-[11px] text-[#D8E7E3] mt-0.5 leading-relaxed">Requested refund for unused wallet credits? Approved instantly and dispatched back to source within 3 banking days automatically.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('faqs')}
              className="mt-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 rounded-xl transition-colors border border-white/20 select-none cursor-pointer"
            >
              Browse 15+ Detailed FAQs →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
