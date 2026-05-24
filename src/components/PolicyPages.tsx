import React from 'react';
import { ShieldCheck, FileText, RefreshCw, AlertTriangle } from 'lucide-react';

interface PolicyProps {
  view: 'privacy' | 'terms' | 'refund';
  navigate: (page: string) => void;
}

export default function PolicyPages({ view, navigate }: PolicyProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      
      {/* Disclaimer Box */}
      <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-3xl flex items-start gap-4 mb-10 text-amber-900 leading-relaxed">
        <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
          <AlertTriangle size={20} />
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm">Demo Verification Disclaimer</h4>
          <p className="text-xs text-muted-text mt-0.5">
            NyaySetu is a prototype legal consultation platform. Replace this content with official reviewed legal policy files before physical commercial launch.
          </p>
        </div>
      </div>

      {view === 'privacy' && (
        <article className="bg-white p-8 md:p-12 border border-legal-border rounded-3xl shadow-premium prose prose-slate max-w-none text-sm text-muted-text leading-relaxed">
          <div className="flex items-center gap-3 border-b border-legal-border pb-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#147A5D]/10 text-[#147A5D] flex items-center justify-center">
              <ShieldCheck size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">Privacy Policy</h1>
              <p className="text-xs text-muted-text mt-0.5">Last updated: May 22, 2026</p>
            </div>
          </div>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">1. Introduction and Scope</h3>
          <p>
            Welcome to NyaySetu (“we,” “our,” or “us”). Under the Digital Personal Data Protection Act, 2023 (DPDPA), we respect client privacy. This policy describes how we collect, store, mask, and secure your phone numbers, name, and billing details once you register on <span className="font-semibold text-primary font-mono text-xs">nyaysetu.in</span>.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">2. Confidentiality & Masked Call Privacy</h3>
          <p>
            Your telephony consults are strictly privileged. We do not expose personal telephone numbers directly to paired counsel. All calls are routed through encrypted third-party telephone masking channels. Conversation briefs written by experts are kept strictly encrypted in high-tier database silos.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">3. Information Collected</h3>
          <p>
            We process minimal credentials necessary to execute call recharges and verify account status:
          </p>
          <ul className="list-disc pl-5 my-3 flex flex-col gap-1.5 text-xs">
            <li>Your mobile number for OTP confirmation.</li>
            <li>Your name or alias chosen for consult addressing.</li>
            <li>Wallet balance logs and Razorpay-routed transaction invoice markers.</li>
            <li>Voluntary case drafts uploaded strictly for attorney vetting.</li>
          </ul>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">4. Disclosing Client Data</h3>
          <p>
            We do not sell, rent, or trade your personal files. Information is only presented to law enforcement directories under formal Indian judicial warrants issued under applicable statutory rules.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">5. Updates and Compliance</h3>
          <p>
            Any substantial changes to this policy will be announced on this dashboard. For compliance queries, write to our designated grievance officer at <span className="font-semibold text-primary font-mono text-xs">grievance@nyaysetu.in</span>.
          </p>
        </article>
      )}

      {view === 'terms' && (
        <article className="bg-white p-8 md:p-12 border border-legal-border rounded-3xl shadow-premium prose prose-slate max-w-none text-sm text-muted-text leading-relaxed">
          <div className="flex items-center gap-3 border-b border-legal-border pb-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#147A5D]/10 text-[#147A5D] flex items-center justify-center">
              <FileText size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">Terms & Conditions of Service</h1>
              <p className="text-xs text-muted-text mt-0.5">Last updated: May 22, 2026</p>
            </div>
          </div>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">1. The Tele-Consultation Model</h3>
          <p>
            By registering on <span className="font-semibold text-primary">nyaysetu.in</span> and filling up talktime credits, you understand that advice provided by legal professionals represents academic legal opinions based strictly on your verbal disclosures. Opinions are not physical court filings and do not substitute official trial representations.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">2. Verification of Counsel Credentials</h3>
          <p>
            NyaySetu makes optimal checks using active enrollment numbers. However, clients must execute reasonable caution when sharing vital physical trade secrets. Users authorize NyaySetu and its verified panel to establish telephonic, SMS, or WhatsApp communications regarding active balances.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">3. Wallet Credits & Expiry Protection</h3>
          <p>
            Your pre-purchased talktime minutes are secured inside your wallet. We guarantee these credits **never expire** as long as your account remains in active status. If a call experiences unexpected dropping under 60 seconds with zero legal communication, the system will not levy any charge.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">4. User Obligations & Anti-Abuse</h3>
          <p>
            Abusing paired lawyers, using profane languages, or utilizing consult routes to plan illicit criminal activities is strictly prohibited and results in immediate wallet forfeiture and profile bans block without notice.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">5. Jurisdictional Mandate</h3>
          <p>
            All consumer claims or transaction disputes fall strictly under exclusive courts in the NCR Territory of Delhi, India.
          </p>
        </article>
      )}

      {view === 'refund' && (
        <article className="bg-white p-8 md:p-12 border border-legal-border rounded-3xl shadow-premium prose prose-slate max-w-none text-sm text-muted-text leading-relaxed">
          <div className="flex items-center gap-3 border-b border-legal-border pb-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#147A5D]/10 text-[#147A5D] flex items-center justify-center">
              <RefreshCw size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">Cancellation & Refund Policy</h1>
              <p className="text-xs text-muted-text mt-0.5">Last updated: May 22, 2026</p>
            </div>
          </div>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">1. Refund of Minutes Wallet Credits</h3>
          <p>
            We take pride in absolute transparency. If you made a recharge under any minute plan (e.g., ₹99, ₹599, ₹999, ₹1799) and have not initiated any talktime call, you are entitled to a **100% full money back refund** back to source payment within 7 days of payment date.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">2. Processing Dropped Communications</h3>
          <p>
            If a call disconnects due to carrier failures before you can describe the dispute, write immediate details to <span className="font-semibold text-primary font-mono text-xs">support@nyaysetu.in</span>. We will analyze the logs and reinstate your minute quota within 1 working hour.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">3. Draft Vetting and Document Services</h3>
          <p>
            Once our legal team initiates trademark search, drafts NDA or Will, cancellation is not possible. However, we include 2 intensive review rounds inside the fee so you acquire completely satisfactory customized results matching your requirements.
          </p>

          <h3 className="font-bold text-primary text-base mt-6 mb-2">4. Disputed Deductions</h3>
          <p>
            If a debit card is charged twice on a gateway glitch, Razorpay auto-quashes the duplicate charge. You will see the rollback on your bank statement in 3 to 5 working days as standard banking procedures.
          </p>
        </article>
      )}

      <div className="mt-8 flex justify-center gap-4 text-xs">
        <button onClick={() => navigate('home')} className="text-primary font-bold hover:underline">
          ← Back to Homepage
        </button>
        <span className="text-legal-border">|</span>
        <button onClick={() => navigate('support')} className="text-primary font-bold hover:underline">
          Go to Support Desk
        </button>
      </div>

    </div>
  );
}
