import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface AiCheckerProps {
  navigate: (page: string) => void;
}

interface AnalysisResult {
  category: string;
  urgency: string;
  recommendedLawyer: string;
  documentsNeeded: string[];
  nextSteps: string[];
  score: number; // risk score out of 100
  summary: string;
}

export default function AiChecker({ navigate }: AiCheckerProps) {
  const [issueText, setIssueText] = useState('');
  const [urgency, setUrgency] = useState('Medium');
  const [city, setCity] = useState('Delhi NCR');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const cities = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Pune',
    'Jaipur',
    'Lucknow',
    'Gurgaon',
    'Noida',
    'Kolkata',
    'Chennai',
    'Hyderabad'
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueText.trim()) return;

    setIsAnalyzing(true);
    setResult(null);
    setAnalysisProgress(0);

    const steps = [
      'Reading factual grievances...',
      'Tokenizing statutory keywords...',
      'Mapping IPC/BNS & Indian Civil provisions...',
      'Assessing risk severity indices...',
      'Generating legal compliance draft...'
    ];

    let currentStepIndex = 0;
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            generateResult();
            setIsAnalyzing(false);
          }, 400);
          return 100;
        }
        
        // Update text step based on progress thresholds
        const stepNum = Math.floor((prev / 100) * steps.length);
        if (stepNum !== currentStepIndex && stepNum < steps.length) {
          currentStepIndex = stepNum;
          setCurrentStepText(steps[currentStepIndex]);
        }
        
        return prev + 5;
      });
    }, 120);
  };

  const generateResult = () => {
    const text = issueText.toLowerCase();
    let category = 'General Civil / Contractual';
    let recommendedLawyer = 'Civil Litigation Attorney';
    let documentsNeeded = ['Identity Copy', 'Relevant Correspondence', 'Timeline Statement'];
    let nextSteps = [
      'Draft a formal, structured response outlining your grievances.',
      'Check if a mediation clause is present in your original contract.',
      'Book a 15-minute consultation to avoid missing statutory limitation periods.'
    ];
    let score = 55;
    let summary = 'This issue relates to standard civil rights or contract terms. To prevent litigation escalations, the executing party should respond to communication pathways in writing.';

    // Keyword checks
    if (text.includes('divorce') || text.includes('wife') || text.includes('husband') || text.includes('marriage') || text.includes('matrimonial') || text.includes('alimony') || text.includes('dowry')) {
      category = 'Matrimonial & Family Dispute';
      recommendedLawyer = 'Senior Matrimonial & Family Law Advocate';
      documentsNeeded = [
        'Marriage Registration Certificate / Invitation Card',
        'Address Proof matching matrimonial domicile',
        'Proof of spouse income (Pay slips, ITRs, or bank logs if available)',
        'Detailed inventory of ancestral Streedhan / jewelry gifts'
      ];
      nextSteps = [
        'Attempt pre-litigation counseling and structured family mediation panels.',
        'Protect your banking passwords and lock joint lockers if assets are disputed.',
        'File a petition under Hindu Marriage Act Section 9 (Reconciliation) or prepare Mutual Consent limits.'
      ];
      score = 72;
      summary = 'Matrimonial disputes in India are bound under rigorous personal laws. Standard family courts mandate pre-litigation counseling, hence formalizing custody & asset parameters in writing is advised.';
    } else if (text.includes('property') || text.includes('flat') || text.includes('builder') || text.includes('land') || text.includes('tenant') || text.includes('rent') || text.includes('eviction') || text.includes('rera') || text.includes('lease')) {
      category = 'Property & Real Estate Issue';
      recommendedLawyer = 'Property Acquisition & RERA Litigation Advocate';
      documentsNeeded = [
        'Allotment Letter / Builder-Buyer Contract terms',
        'Official Mother Deed chain (Ideally spanning 30 past years)',
        'State RERA project registration ID screenshot',
        'Rent/Lease deed with stamp registration details'
      ];
      nextSteps = [
        'Cross-check the builder registration status directly on the State RERA portal database.',
        'Send a formal statutory legal warning notice giving 15-30 days to pay or deliver flat possession.',
        'Prepare the civil petition template to request recovery interest on delayed possession.'
      ];
      score = 65;
      summary = 'Property disputes often involve high stakes. Real Estate Regulation Act (RERA) 2016 shields consumers, but proper dispatch of legal warning notices is mandatory prior to filing civil litigation.';
    } else if (text.includes('arrest') || text.includes('summons') || text.includes('police') || text.includes('fir') || text.includes('criminal') || text.includes('bail') || text.includes('cheat') || text.includes('fraud') || text.includes('ipc') || text.includes('bns')) {
      category = 'Criminal Law / Summons Matter';
      recommendedLawyer = 'Criminal Jurisprudence & Defense Specialist';
      documentsNeeded = [
        'Certified Copy of the First Information Report (FIR) or Police Notice',
        'Official Summons or warrant document from Magistrate Court',
        'Clean identity records for immediate bailsmen criteria validation',
        'Alibi logs (Flight tickets, WhatsApp chats, GPS timelines)'
      ];
      nextSteps = [
        'Do NOT default or ignore official police summons to avoid sudden containment.',
        'Consult instantly to draft and apply for Anticipatory Bail under CrPC 438 / BNSS 482.',
        'Maintain silent cooperation during investigation; always have an advocate guide your verbal responses.'
      ];
      score = 90;
      summary = 'This is a high-risk criminal or summons category. Personal liberty can be at stake. Securing immediate protective legal counseling to file bail applications is the most critical priority.';
    } else if (text.includes('cheque') || text.includes('bounce') || text.includes('money') || text.includes('debt') || text.includes('unpaid') || text.includes('loan') || text.includes('salary') || text.includes('recovery')) {
      category = 'Debt Recovery & Cheque Bounce (Sec 138)';
      recommendedLawyer = 'Money Recovery & Statutory Debt Advocate';
      documentsNeeded = [
        'Original Bounced Cheque leaf scans',
        'Official Cheque Return Memo from clearing banker (stating reason)',
        'Original Ledger details / Invoice copy / Bill details',
        'Unpaid salary logs / Employment letters'
      ];
      nextSteps = [
        'You must issue a formal Section 138 statutory Legal Notice within 30 days of the return memo date.',
        'Provide the defaulting debtor exactly 15 days to perform payment refund.',
        'If unpaid after those 15 days, you have exactly 30 days to lodge a complaint in court.'
      ];
      score = 80;
      summary = 'Section 138 is a criminal offense offering high speed of recovery. However, missing the strict 30-day statutory timeline will invalidate your criminal standing, restricting you to slower civil routes.';
    } else if (text.includes('trademark') || text.includes('patent') || text.includes('logo') || text.includes('startup') || text.includes('nda') || text.includes('contract') || text.includes('copyright') || text.includes('founder') || text.includes('compliance')) {
      category = 'Corporate Compliances & Startup Intellectual Property';
      recommendedLawyer = 'Corporate Attorney & IPR Specialist';
      documentsNeeded = [
        'Startup Incorporation Certificate / MoA & AoA file',
        'Proposed Brand Logo high-res graphic / Phonetic name description',
        'Existing NDAs or employment letters in dispute',
        'Trademark/Copyright objector letter details (if disputed)'
      ];
      nextSteps = [
        'Perform an active phonetic trademark search in the national IP database to check compliance.',
        'Draft a customized Mutual Non-Disclosure Agreement (Mutual NDA) to secure proprietary secrets.',
        'File trademark registration forms instantly to get prior-usage precedence.'
      ];
      score = 45;
      summary = 'Startups need to scale with clean legal frameworks. Prioritize trademark registrations and secure watertight founder/partner agreements to maintain clean cap tables and seamless compliance.';
    }

    // Boost score slightly if user selected high urgency
    let finalUrgency = urgency;
    if (urgency === 'High') {
      score = Math.min(score + 10, 98);
    } else if (urgency === 'Low') {
      score = Math.max(score - 10, 15);
    }

    setResult({
      category,
      urgency: finalUrgency,
      recommendedLawyer,
      documentsNeeded,
      nextSteps,
      score,
      summary
    });
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-secondary/15 text-secondary border border-secondary/35 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 animate-pulse">
            <LucideIcons.Sparkles size={13} />
            Advanced AI Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            AI Legal <span className="text-secondary">Issue Checker</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed">
            Provide a brief description of your legal grievance. Our custom system scans variables to classify legal risk, match advocacy types, list mandated documents, and formulate immediate relief paths.
          </p>
        </div>

        {/* Disclaimer Box */}
        <div className="bg-[#0A4B45] border-l-4 border-[#D6A93A] p-4 rounded-r-2xl text-xs text-[#D8E7E3] flex gap-3 shadow-lg select-none">
          <LucideIcons.AlertTriangle size={20} className="text-secondary shrink-0" />
          <p className="leading-relaxed font-medium">
            <strong className="text-white">Legal Disclaimer:</strong> This AI checker gives general legal information only. Final advice should be taken from a verified advocate.
          </p>
        </div>

        {/* Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Input Form */}
          <div className="md:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-5">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <LucideIcons.Terminal size={22} className="text-secondary" />
              <div>
                <h3 className="font-bold text-sm text-[#073B36]">AI Diagnostic Terminal</h3>
                <p className="text-[10px] text-gray-400 font-semibold font-mono">Status: Live Parser L11</p>
              </div>
            </div>

            <form onSubmit={handleAnalyze} className="flex flex-col gap-4 text-xs font-semibold">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-700 font-medium">Type Your Problem / Case Context</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Describe your issue with keywords such as 'cheque bounce', 'divorce', 'builder possession delay', 'police summons', 'trademark objection' etc. for custom analytical breakdown..."
                  value={issueText}
                  onChange={(e) => setIssueText(e.target.value)}
                  className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-normal focus:ring-1 focus:ring-accent outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-medium">Urgency Mode</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-medium focus:ring-1 focus:ring-accent outline-none"
                  >
                    <option value="Low">Low - Advisory</option>
                    <option value="Medium">Medium - Standard</option>
                    <option value="High">High - Critical Action</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-semibold">Grievance City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-semibold focus:ring-1 focus:ring-accent outline-none"
                  >
                    {cities.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-secondary to-[#B88922] disabled:from-gray-300 disabled:to-gray-400 text-[#052F2D] disabled:text-gray-600 font-extrabold text-xs py-3.5 rounded-xl shadow-[0_4px_15px_rgba(214,169,58,0.2)] hover:shadow-[0_4px_22px_rgba(214,169,58,0.35)] transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-secondary"
              >
                {isAnalyzing ? (
                  <>
                    <LucideIcons.Loader2 size={14} className="animate-spin" />
                    Scanning Variables...
                  </>
                ) : (
                  <>
                    <LucideIcons.Bot size={15} />
                    Analyze My Issue
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Output Analysis Container */}
          <div className="md:col-span-7">
            {isAnalyzing ? (
              <div className="bg-[#0A4B45]/80 p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-5 text-center min-h-[300px] shadow-2xl">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full border-4 border-secondary/10 border-t-secondary animate-spin"></div>
                  <LucideIcons.Cpu size={32} className="text-secondary animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-lg text-white">AI Engine Processing</h4>
                  <p className="text-xs text-secondary mt-1 tracking-wider font-mono font-bold uppercase">
                    {analysisProgress}% - {currentStepText}
                  </p>
                </div>
                <div className="w-48 bg-[#042F2D] h-1.5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                  <div className="bg-secondary h-full transition-all duration-100" style={{ width: `${analysisProgress}%` }}></div>
                </div>
              </div>
            ) : result ? (
              <div className="bg-white text-gray-800 rounded-3xl p-6 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-5 animate-fade-in">
                
                {/* Result Title */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    <h3 className="font-serif font-black text-lg text-[#073B36]">AI Diagnostic Summary</h3>
                  </div>
                  <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1">
                    <LucideIcons.ShieldAlert size={12} />
                    AI + Verified Lawyer Guidance
                  </div>
                </div>

                {/* Score Grid & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="sm:col-span-4 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-gray-100 pb-3 sm:pb-0 sm:pr-3">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Severity Score</span>
                    <span className={`text-4xl font-extrabold font-mono mt-1 ${result.score > 75 ? 'text-rose-600' : result.score > 50 ? 'text-amber-500' : 'text-emerald-600'}`}>
                      {result.score}%
                    </span>
                    <span className="text-[10px] text-gray-500 mt-0.5 font-bold">Risk Probability</span>
                  </div>

                  <div className="sm:col-span-8 flex flex-col gap-1.5">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400">Classified Category</span>
                      <h4 className="font-bold text-sm text-[#073B36] font-serif">{result.category}</h4>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${result.urgency === 'High' ? 'bg-red-50 text-red-700 text-xs' : result.urgency === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`}>
                        Urgency: {result.urgency}
                      </span>
                      <span className="bg-emerald-50 text-[#0F8A6A] px-2 py-0.5 rounded text-[10px] font-bold">
                        Target City: {city}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanatory notes */}
                <p className="text-xs text-gray-600 leading-relaxed font-medium pl-2.5 border-l-2 border-secondary italic">
                  "{result.summary}"
                </p>

                {/* Recommended Lawyer Type */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Recommended Advocate Profile</span>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-emerald-50 text-[#0F8A6A] rounded-full flex items-center justify-center border border-[#0F8A6A]/10">
                      <LucideIcons.UserCheck size={14} />
                    </div>
                    <span className="text-sm font-bold text-[#073B36]">{result.recommendedLawyer}</span>
                  </div>
                </div>

                {/* Documents Needed List */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Mandatory Verification Checklist</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {result.documentsNeeded.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-[#0F8A6A]/5 p-2 rounded-xl text-xs font-semibold text-gray-700 border border-[#0F8A6A]/5">
                        <LucideIcons.FileCheck size={13} className="text-[#0F8A6A]" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next steps timeline style */}
                <div className="flex flex-col gap-2 bg-neutral-50 px-4 py-4 rounded-2xl border border-gray-100">
                  <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Actionable Next Steps</span>
                  <ul className="flex flex-col gap-2 text-xs text-gray-700 pl-1">
                    {result.nextSteps.map((step, idx) => (
                      <li key={idx} className="flex gap-2 leading-relaxed">
                        <span className="text-secondary font-black font-mono select-none">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => navigate('talk')}
                    className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-[0_4px_15px_rgba(214,169,58,0.2)] hover:shadow-[0_4px_22px_rgba(214,169,58,0.35)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <LucideIcons.PhoneCall size={14} className="fill-current" />
                    Connect with matched {result.recommendedLawyer.split(' ')[0]} now
                  </button>
                  <p className="text-center text-[10px] text-gray-400 font-medium font-serif">
                     Average matching speed under 45 seconds · Masks user telephone logic
                  </p>
                </div>

              </div>
            ) : (
              <div className="bg-[#0A4B45]/90 p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center min-h-[300px] gap-4 shadow-sm select-none">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-lg">
                  <LucideIcons.SearchCode size={28} className="animate-bounce" />
                </div>
                <div className="max-w-md">
                  <h4 className="font-serif font-bold text-lg text-white">Analysis Terminal Awaiting Input</h4>
                  <p className="text-xs text-[#D8E7E3] mt-2 leading-relaxed">
                    Once you supply your factual grievance parameters and submit inside the scanner block, our semantic parser executes legal matching variables instantly.
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
