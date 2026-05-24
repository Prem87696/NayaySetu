import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MessageCircle, Clock, MapPin, Send, CheckCircle, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    problemCategory: 'family',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }
    // Perform mock form submission
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      problemCategory: 'family',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Immediate Legal Guidance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Connect Helpdesk
          </h1>
          <p className="text-base text-[#D8E7E3] mt-3 leading-relaxed max-w-2xl mx-auto">
            Got an active grievance or need assistance with your talktime wallet? Get in touch. Our support team and lawyers are here 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Card Contacts */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Info Deck */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold uppercase text-secondary tracking-widest">Connect Routes</span>
            <h2 className="text-3xl font-bold text-white mt-1">Get Instant Support</h2>
            <p className="text-sm text-[#D8E7E3] mt-3">
              No need to wait for business mail replies if you are facing urgent police summons or contract deadlines. Use our telephone matching system first.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            
            <div className="bg-white p-5 rounded-2xl border border-legal-border flex items-start gap-4 shadow-premium">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm">Email Support</h4>
                <p className="text-xs text-muted-text mt-0.5">Expect response within 2-4 working hours.</p>
                <p className="text-sm text-secondary font-mono font-bold mt-1">support@nyaysetu.in</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-legal-border flex items-start gap-4 shadow-premium">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm">Inquiry Telephone</h4>
                <p className="text-xs text-muted-text mt-0.5">Wallet top-up support questions.</p>
                <p className="text-sm text-secondary font-mono font-bold mt-1">+91 90000 00000</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-legal-border flex items-start gap-4 shadow-premium">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                <MessageCircle size={18} className="fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm">WhatsApp Live Chat</h4>
                <p className="text-xs text-muted-text mt-0.5">Direct link for instant query guidelines.</p>
                <p className="text-xs text-[#25D366] font-bold mt-1">Chat available 24/7</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-legal-border flex items-start gap-4 shadow-premium">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm">Working Hours</h4>
                <p className="text-xs text-muted-text mt-0.5">Advocate panel consultation schedule.</p>
                <p className="text-xs text-primary font-bold mt-1">Monday – Sunday, 8:00 AM – 11:00 PM IST</p>
              </div>
            </div>

          </div>

          {/* Grievance Desk Box */}
          <div className="bg-primary/5 p-5 border border-primary/10 rounded-2xl flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <ShieldAlert size={16} />
              <span>Safety & Escalation Officer</span>
            </div>
            <p className="text-[11px] text-muted-text leading-relaxed">
              If your wallet recharge was double debited or you are unhappy with the counsel advice, write to <span className="font-semibold font-mono">grievance@nyaysetu.in</span> with transaction receipt screenshot. We will resolve your dispute in 48 hours max.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-legal-border shadow-premium self-start">
          
          {formSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center gap-4 animate-[fadeIn_0.2s_ease-out]">
              <div className="w-14 h-14 rounded-full bg-[#147A5D]/10 text-[#147A5D] flex items-center justify-center mb-2">
                <CheckCircle size={32} className="stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-serif">Message Received Perfectly</h3>
              <p className="text-sm text-muted-text max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-primary font-semibold">{formData.name}</strong>. Our dedicated legal relation manager will reach out via <span className="font-mono">{formData.phone}</span> or <span className="font-mono">{formData.email}</span> within 2 hours.
              </p>
              <button 
                onClick={handleReset}
                className="mt-6 bg-primary hover:bg-accent text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-serif text-primary font-bold">Inquire About Services</h3>
                <p className="text-xs text-muted-text mt-1">Fill out the private briefing sheet below. All fields are secure.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-sm uppercase text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Mobile Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. +91 90000 00000" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. client@domain.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary uppercase tracking-wide">Legal Grievance Field</label>
                  <select 
                    value={formData.problemCategory}
                    onChange={(e) => setFormData({...formData, problemCategory: e.target.value})}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="mediation">Counseling & Joint Mediation</option>
                    <option value="family">Matrimonial & Family Dispute</option>
                    <option value="property">Property, RERA & Tenants Issues</option>
                    <option value="criminal">Summons, Jail Bail & Penal Matters</option>
                    <option value="agreements">Contracts Vetting & Drafting</option>
                    <option value="corporate">GST, Business & Company Suits</option>
                    <option value="startup">Trademark & Intellectual Registry</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wide">Private Case Memo (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Provide a short description of the dispute, court summons details or contract query..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-legal-bg border border-legal-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer border border-primary hover:border-accent"
              >
                <Send size={16} />
                Submit Secure Briefing Form
              </button>
            </form>
          )}

        </div>
      </section>

      {/* Map Placeholder as specified in req */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white border border-legal-border rounded-3xl p-6 shadow-premium">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Delhi NCR Corporate Consult Chambers</h3>
              <p className="text-xs text-muted-text">Join physical arbitration and contract signing directly at our flagship center.</p>
            </div>
            <span className="bg-[#147A5D]/10 text-[#147A5D] px-3 py-1 rounded-full text-xs font-bold">Connaught Place Central Hub</span>
          </div>
          <div className="w-full h-80 rounded-2xl bg-legal-bg border border-legal-border relative flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative text-center p-6 flex flex-col items-center gap-2 z-10">
              <MapPin size={40} className="text-secondary animate-bounce stroke-[2.5]" />
              <p className="font-serif text-base font-bold text-white">Interactive Map Blueprint</p>
              <p className="text-xs text-[#D8E7E3] max-w-sm mx-auto leading-relaxed">
                NyaySetu CP Hub Palace Area, Block-E Connaught Place, New Delhi 110001 (Located near Rajiv Chowk Metro station, Exit 5).
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 bg-primary hover:bg-accent text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
