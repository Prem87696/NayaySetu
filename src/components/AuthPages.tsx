import React, { useState } from 'react';
import { Scale, Lock, Smartphone, User, Check, ShieldCheck, Mail } from 'lucide-react';

interface AuthProps {
  mode: 'login' | 'signup';
  navigate: (page: string) => void;
  onLoginSuccess: (session: { name: string; phone: string }) => void;
}

export default function AuthPages({ mode, navigate, onLoginSuccess }: AuthProps) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otpMode, setOtpMode] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [checkedTerms, setCheckedTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (mode === 'signup' && !name) {
      setErrorMsg('Please specify your full name.');
      return;
    }
    if (mode === 'signup' && !checkedTerms) {
      setErrorMsg('Please accept the Terms of Use to proceed.');
      return;
    }

    setErrorMsg('');
    setOtpMode(true);
    // Send standard mock trigger alert or instruction
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode !== '1111') {
      setErrorMsg('Incorrect OTP code. Enter "1111" for this prototype demo verification.');
      return;
    }

    onLoginSuccess({
      name: mode === 'signup' ? name : 'Demo Client',
      phone: phone
    });
    // Immediately redirect to Homepage or Talk to Lawyer Page
    navigate('home');
  };

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center px-4 py-16 bg-legal-bg relative">
      {/* Subtle modern glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-md w-full bg-white rounded-3xl border border-legal-border shadow-premium p-8 relative z-10">
        
        {/* Header Rebrand Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-accent items-center justify-center shadow-lg mb-3">
            <Scale size={24} className="text-primary stroke-[2.5]" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-primary">
            {mode === 'login' ? 'Login to NyaySetu' : 'Join NyaySetu Today'}
          </h2>
          <p className="text-xs text-muted-text mt-1 max-w-xs mx-auto">
            {otpMode ? 'Verify your telephone credentials' : 'Online legal services by the right team, right now.'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-5 bg-red-500/10 border border-red-500/25 p-3 rounded-xl text-red-700 text-xs text-center font-medium">
            {errorMsg}
          </div>
        )}

        {/* Form panel based on states */}
        {!otpMode ? (
          <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
            
            {mode === 'signup' && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AFC7C2]" size={16} />
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. SANJEEV MALHOTRA" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl pl-10 pr-4 py-2.5 text-sm uppercase placeholder-white/45 focus:outline-none focus:border-secondary text-white font-medium" 
                  />
                </div>
              </div>
            )}

            {mode === 'signup' && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wide">Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AFC7C2]" size={16} />
                  <input 
                    type="email" 
                    placeholder="e.g. client@domain.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-legal-bg border border-legal-border rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-white/45 focus:outline-none focus:border-secondary text-white font-medium" 
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-primary uppercase tracking-wide">10-Digit Mobile Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AFC7C2]" size={16} />
                <span className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-white font-bold border-r border-legal-border pr-2">+91</span>
                <input 
                  type="tel" 
                  required
                  maxLength={10}
                  placeholder="90000 00000" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-legal-bg border border-legal-border rounded-xl pl-20 pr-4 py-2.5 text-sm font-semibold tracking-wide text-white placeholder-white/45 focus:outline-none focus:border-secondary" 
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div className="flex items-start gap-2.5 mt-1">
                <input 
                  type="checkbox" 
                  id="agree-terms"
                  checked={checkedTerms}
                  onChange={(e) => setCheckedTerms(e.target.checked)}
                  className="mt-0.5 rounded border-legal-border text-primary focus:ring-secondary cursor-pointer"
                />
                <label htmlFor="agree-terms" className="text-[11px] text-muted-text leading-tight cursor-pointer select-none">
                  By signing up, you authorize NyaySetu and its advocates to contact you through call, SMS, WhatsApp or any other mode. I agree to the <span className="text-primary font-bold underline cursor-pointer" onClick={(e) => { e.stopPropagation(); navigate('terms'); }}>Terms & Conditions</span>.
                </label>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors mt-2"
            >
              Request OTP Authentication
            </button>

            {mode === 'login' ? (
              <p className="text-xs text-center text-muted-text mt-4">
                New to the platform?{' '}
                <button 
                  type="button" 
                  onClick={() => navigate('signup')} 
                  className="text-primary font-bold underline"
                >
                  Create an account
                </button>
              </p>
            ) : (
              <p className="text-xs text-center text-muted-text mt-4">
                Already registered with NyaySetu?{' '}
                <button 
                  type="button" 
                  onClick={() => navigate('login')} 
                  className="text-primary font-bold underline"
                >
                  Log in here
                </button>
              </p>
            )}

          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
            <div className="bg-[#147A5D]/5 border border-[#147A5D]/15 p-4 rounded-xl text-xs text-[#147A5D] leading-relaxed">
              <span className="font-bold block mb-1">🔐 Demonstration Mode Enabled</span>
              An OTP code was sent to <strong className="font-mono text-xs text-primary">+91 {phone}</strong>. For quick access, type <strong>1111</strong> to verify your account right now.
            </div>

            <div className="flex flex-col gap-1.5 focus-within:ring-0">
              <label className="text-xs font-bold text-primary uppercase tracking-wide">Enter 4-Digit One-Time Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AFC7C2]" size={16} />
                <input 
                  type="password" 
                  required
                  maxLength={4}
                  placeholder="e.g. 1111" 
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-legal-bg border border-legal-border rounded-xl pl-10 pr-4 py-2.5 text-center text-sm font-extrabold tracking-[0.5em] text-white placeholder-white/45 focus:outline-none focus:border-secondary" 
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#147A5D] hover:bg-[#147A5D]/90 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors"
            >
              Verify & Log In
            </button>

            <div className="flex justify-between items-center text-xs mt-2 text-muted-text">
              <span>Didn’t receive?</span>
              <button 
                type="button" 
                onClick={() => alert('Another prototype notification SMS dispatched.')} 
                className="text-primary font-bold hover:underline"
              >
                Resend SMS Code
              </button>
            </div>

            <button 
              type="button"
              onClick={() => setOtpMode(false)}
              className="text-center text-xs text-primary underline mt-4"
            >
              ← Edit phone number
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-legal-border text-center">
          <div className="flex items-center justify-center gap-1.5 text-muted-text text-[10px] uppercase font-bold tracking-wider">
            <ShieldCheck size={14} className="text-[#147A5D]" />
            <span>256-Bit Secure User Portal Link</span>
          </div>
        </div>

      </div>
    </div>
  );
}
