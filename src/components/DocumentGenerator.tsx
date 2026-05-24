import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface DocumentGeneratorProps {
  navigate: (page: string) => void;
}

interface DocMetaField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'date';
  placeholder: string;
  value: string;
}

export default function DocumentGenerator({ navigate }: DocumentGeneratorProps) {
  const [activeStep, setActiveStep] = useState(1); // 1: Choose Type, 2: Fill Metadata, 3: Preview & E-Sign, 4: Finish
  const [docType, setDocType] = useState('Rent Agreement');
  
  // Custom metadata fields depending on selection
  const [fields, setFields] = useState<DocMetaField[]>([
    { id: 'p1', label: 'Landlord Full Name', type: 'text', placeholder: 'e.g. Ramesh Kumar', value: '' },
    { id: 'p2', label: 'Tenant Full Name', type: 'text', placeholder: 'e.g. Vikram Deshmukh', value: '' },
    { id: 'p3', label: 'Monthly Rental Amount', type: 'number', placeholder: 'e.g. 24000', value: '' },
    { id: 'p4', label: 'Security Deposit Paid', type: 'number', placeholder: 'e.g. 50000', value: '' },
    { id: 'p5', label: 'Lease Commencement Date', type: 'date', placeholder: '', value: '' },
  ]);

  const [signerName, setSignerName] = useState('');
  const [signatureDone, setSignatureDone] = useState(false);

  const documentTypes = [
    { name: 'Rent Agreement', icon: 'Home', desc: 'Secure landlord & tenant lease covenants with legal stamp formats.' },
    { name: 'NDA', icon: 'Lock', desc: 'Secure corporate formulas, secrets, and IP assets between co-operating parties.' },
    { name: 'Legal Notice', icon: 'FileText', desc: 'Settle unpaid debt, cheque bounces, or service breaches pre-arbitration.' },
    { name: 'Affidavit', icon: 'Bookmark', desc: 'Settle declared statements required by government bureaus with high precision.' },
    { name: 'Power of Attorney', icon: 'Scale', desc: 'Authorize high-stakes business representation and legal signatories.' },
    { name: 'Employment Agreement', icon: 'Briefcase', desc: 'Lock work guidelines, ESOP pools, and intellectual rights with developers.' },
    { name: 'Business Contract', icon: 'Building', desc: 'Solidify vendor delivery parameters, pricing, and delay penalties.' },
    { name: 'Will', icon: 'Heart', desc: 'Painless familial wealth protection outlining division of real estates.' }
  ];

  const handleDocTypeSelect = (type: string) => {
    setDocType(type);
    
    // Tailor inputs based on what they select
    let newFields: DocMetaField[] = [];
    if (type === 'Rent Agreement') {
      newFields = [
        { id: 'p1', label: 'Landlord Full Name', type: 'text', placeholder: 'e.g. Ramesh Kumar', value: '' },
        { id: 'p2', label: 'Tenant Full Name', type: 'text', placeholder: 'e.g. Vikram Deshmukh', value: '' },
        { id: 'p3', label: 'Monthly Rental Amount (₹)', type: 'number', placeholder: 'e.g. 24000', value: '' },
        { id: 'p4', label: 'Security Deposit Paid (₹)', type: 'number', placeholder: 'e.g. 50000', value: '' },
        { id: 'p5', label: 'Lease Commencement Date', type: 'date', placeholder: '', value: '' },
      ];
    } else if (type === 'NDA') {
      newFields = [
        { id: 'n1', label: 'Disclosing Entity Name', type: 'text', placeholder: 'e.g. NyaySetu Tech Private Limited', value: '' },
        { id: 'n2', label: 'Receiving Contractor Name', type: 'text', placeholder: 'e.g. Software Specialist LLP', value: '' },
        { id: 'n3', label: 'Confidentiality Duration (Years)', type: 'number', placeholder: 'e.g. 3', value: '' },
        { id: 'n4', label: 'Governing State/Jurisdiction', type: 'text', placeholder: 'e.g. New Delhi, India', value: '' },
      ];
    } else if (type === 'Legal Notice') {
      newFields = [
        { id: 'l1', label: 'Sender Full Name', type: 'text', placeholder: 'e.g. Amit Malhotra', value: '' },
        { id: 'l2', label: 'Defaulter Full Name', type: 'text', placeholder: 'e.g. Sharma Finance Company', value: '' },
        { id: 'l3', label: 'Outstandings Due Amount (₹)', type: 'number', placeholder: 'e.g. 150000', value: '' },
        { id: 'l4', label: 'Default Date of Transaction', type: 'date', placeholder: '', value: '' },
      ];
    } else {
      newFields = [
        { id: 'g1', label: 'Executing Principal party', type: 'text', placeholder: 'e.g. Rajesh Kumar', value: '' },
        { id: 'g2', label: 'Secondary matching party', type: 'text', placeholder: 'e.g. Sunita Gupta', value: '' },
        { id: 'g3', label: 'Execution State/Territory', type: 'text', placeholder: 'e.g. Maharashtra', value: '' },
      ];
    }
    setFields(newFields);
    setActiveStep(2);
  };

  const handleFieldChange = (id: string, val: string) => {
    setFields((prev) => prev.map(f => f.id === id ? { ...f, value: val } : f));
  };

  const handleSignTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signerName.trim()) {
      setSignatureDone(true);
    }
  };

  // Dynamically compile draft text depending on state fields filled
  const compileDraftText = () => {
    const values = fields.reduce((acc: any, field) => {
      acc[field.label.split(' ')[0].toLowerCase()] = field.value || `[PENDING: ${field.label}]`;
      return acc;
    }, {});

    if (docType === 'Rent Agreement') {
      return `RENTAL LEASE AGREEMENT

This lease agreement is drawn into dynamic execution on this date of ${values.lease || '[COMMENCEMENT DATE]'} between structural landholder, hereafter known as Landlord: ${values.landlord || '[LANDLORD NAME]'} of first part, and hereinafter known as Tenant: ${values.tenant || '[TENANT NAME]'} of second part.

1. TENANCY PARITY: The Landlord hereby lets out flat residential units under legal possession.
2. FINANCIAL CONSIDERATION: The tenant agrees to settle a monthly rental block of ₹${values.monthly || '[RENT AMOUNT]'} due on 5th of each calendar month.
3. SECURITY ESCROW: The tenant submits an interest-free refundable deposit of ₹${values.security || '[SECURITY AMOUNT]'} to serve as collateral buffer against physical structural damages.
4. NOTICE DWELL: Minimal notice span of 30 days shall stand valid for both parties entering eviction processes.

SIGNED BY MASTER EXECUTING PRINCIPALS:`;
    } else if (docType === 'NDA') {
      return `MUTUAL NON-DISCLOSURE AGREEMENT

This Intellectual Property protection agreement is registered between Disclosing Party: ${values.disclosing || '[DISCLOSING PARTY]'} and Receiving Party: ${values.receiving || '[RECEIVING PARTY]'} hereon.

1. PROPRIETARY DEFINITION: Confidential information encompasses coding layouts, customer indexes, operational designs, and financial balances.
2. DURATION INDEMNITY: Receiving party swears to preserve secret assets for a minimum span of ${values.confidentiality || '[DURATION]'} years.
3. JURISDICTION SHIELD: Disputes related to leakages shall yield exclusive arbitration in territory of ${values.governing || '[STATE JURISDICTION]'}.

ACCEPTED UNDER COVENANT STAMP:`;
    } else if (docType === 'Legal Notice') {
      return `DEMAND LEGAL WARNING NOTICE
(Registered AD / Instant Electronic Delivery)

To,
The Defaulting Defaulter: ${values.defaulter || '[DEFAULTER FULL NAME]'}

Under formal briefing instructions from my client, Sender: ${values.sender || '[SENDER NAME]'}, I hereby issue this statutory warning notice regarding default settlement:

1. BREACH FACTUM: Your firm defaulted on paying critical outstanding transaction balances of ₹${values.outstandings || '[DUE AMOUNT]'} originating on chronological timestamp ${values.default || '[DEFAULT DATE]'}.
2. MANDATORY REMEDY: You are ordered to refund and clear indices within exactly 15 days of this notice.
3. LITIGATION FORCE: Failing default compliance triggers immediate petition files under Section 138 (Cheque Bounce) or relevant civil recovery codes in statutory court cells.

ISSUED BY REPRESENTATIVE ADVOCATE FOR MATCHED CLIENT:`;
    } else {
      return `OFFICIAL REGISTRATION CONTRACT DEED

Between Execution Party A: ${values.executing || '[EXECUTANT PARTY A]'} and Execution Party B: ${values.secondary || '[EXECUTANT PARTY B]'}.

Registered in State Territory of ${values.execution || '[EXECUTION STATE STATE]'}.

1. GENERAL CONSENSUS: Both parties mutually reconcile the covenants highlighted herein.
2. LEGAL VIABILITY: The draft serves as prime legal representation which should be validated before authorized notary parameters.

EXECUTED VOLUNTARILY:`;
    }
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Header */}
        <div className="text-center">
          <span className="bg-secondary/15 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 animate-pulse">
            <LucideIcons.Wrench size={13} />
            Watertight Document Studio
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            Guided Legal <span className="text-secondary">Document Generator</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed">
            Generate customized, legally robust agreements, wills, notices, and partnership forms in minutes using our certified multi-step generator framework.
          </p>
        </div>

        {/* Wizard Progress Steps Indicator */}
        <div className="bg-[#0A4B45] p-5 rounded-3xl border border-white/10 shadow-lg select-none flex justify-between items-center gap-2 max-w-2xl mx-auto w-full flex-wrap font-semibold text-xs">
          {[
            { step: 1, title: 'Choose Template' },
            { step: 2, title: 'Fill Metadata' },
            { step: 3, title: 'E-Sign Draft' },
            { step: 4, title: 'Certify & Export' }
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-[11px] border ${activeStep === item.step ? 'bg-secondary border-secondary text-[#052F2D]' : activeStep > item.step ? 'bg-[#0F8A6A] border-[#0F8A6A] text-white' : 'border-white/20 text-gray-400'}`}>
                {activeStep > item.step ? <LucideIcons.Check size={12} className="stroke-[3]" /> : item.step}
              </div>
              <span className={`hidden sm:inline ${activeStep === item.step ? 'text-secondary font-bold' : activeStep > item.step ? 'text-[#AFC7C2]' : 'text-gray-400'}`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Label */}
        <div className="bg-[#0A4B45] border-l-4 border-secondary p-4 rounded-r-2xl text-xs text-[#D8E7E3] flex gap-3 shadow-sm select-none">
          <LucideIcons.AlertTriangle size={20} className="text-[#D6A93A] shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white">Professional Safeguard:</strong> Generated draft should be reviewed by a verified advocate before use. Do not claim absolute court finality without bar association guidance.
          </p>
        </div>

        {/* Wizard Main Pane Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Step Panels */}
          <div className="md:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-5">
            
            {/* Step 1: Choose Template Grid */}
            {activeStep === 1 && (
              <div className="flex flex-col gap-4">
                <div className="pb-2.5 border-b border-gray-100">
                  <h3 className="font-bold text-sm text-[#073B36] uppercase">Step 1: Select Your Document Template</h3>
                  <p className="text-[10px] text-gray-400 font-medium font-serif">8 Pre-vetted forms compiled by legal bar specialists</p>
                </div>

                <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-1">
                  {documentTypes.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => handleDocTypeSelect(item.name)}
                      className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 hover:border-[#0F8A6A]/40 hover:bg-[#0F8A6A]/5 ${docType === item.name ? 'border-[#0F8A6A] bg-[#0F8A6A]/5' : 'border-gray-100 bg-gray-50/50'}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-secondary shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                        <LucideIcons.FileText size={18} className="text-primary-light" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xs text-[#073B36]">{item.name}</h4>
                        <p className="text-[9px] text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                      <LucideIcons.ArrowRight size={14} className="text-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Fill Parameters */}
            {activeStep === 2 && (
              <div className="flex flex-col gap-4">
                <div className="pb-2.5 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#073B36] uppercase">Step 2: Enter Covenants</h3>
                    <p className="text-[10px] text-gray-400 font-medium font-serif">{docType} custom metadata</p>
                  </div>
                  <button 
                    onClick={() => setActiveStep(1)}
                    className="text-xs text-[#0F8A6A] font-bold hover:underline"
                  >
                    Change Template
                  </button>
                </div>

                <div className="flex flex-col gap-3 text-xs font-bold">
                  {fields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-1.5 animate-fade-in">
                      <label className="text-gray-700">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                        className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={fields.some(f => !f.value)}
                  onClick={() => setActiveStep(3)}
                  className="w-full bg-gradient-to-r from-secondary to-[#B88922] disabled:from-gray-200 disabled:to-gray-300 text-[#052F2D] disabled:text-gray-500 font-extrabold text-xs py-3.5 rounded-xl shadow-md cursor-pointer border border-secondary mt-2 flex items-center justify-center gap-1.5"
                >
                  Generate & Proceed to Sign
                  <LucideIcons.ArrowRight size={13} />
                </button>
              </div>
            )}

            {/* Step 3: Signature Pad */}
            {activeStep === 3 && (
              <div className="flex flex-col gap-4">
                <div className="pb-2.5 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#073B36] uppercase">Step 3: Secure E-Sign</h3>
                    <p className="text-[10px] text-gray-400 font-medium font-serif">Type signature credentials lawfully</p>
                  </div>
                  <button 
                    onClick={() => setActiveStep(2)}
                    className="text-xs text-[#0F8A6A] font-bold hover:underline"
                  >
                    Edit Metadata
                  </button>
                </div>

                {!signatureDone ? (
                  <form onSubmit={handleSignTypeSubmit} className="flex flex-col gap-3 text-xs font-bold">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-700">Your Full Signing Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adv. Meera K."
                        value={signerName}
                        onChange={(e) => setSignerName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                      />
                    </div>

                    {signerName && (
                      <div className="p-4 bg-amber-50 rounded-xl border border-dashed border-amber-200 text-center font-serif flex items-center justify-center min-h-[90px] select-none text-2xl text-primary leading-none">
                        {signerName}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="bg-primary hover:bg-[#075E53] text-white p-3 rounded-xl transition-colors font-bold cursor-pointer mt-1"
                    >
                      Authenticate Signature Seal
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col gap-3 text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <LucideIcons.CheckSquare size={24} className="stroke-[2.5]" />
                    </div>
                    <h4 className="font-bold text-[#073B36] text-base">Signature Affixed Safely!</h4>
                    <p className="text-xs text-gray-500 pl-2 leading-relaxed">
                      Your legal token signature has been watermarked into the draft on this date under strict security. Proceed to finalize deployment package.
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveStep(4)}
                      className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-md cursor-pointer border border-secondary mt-2 inline-flex items-center justify-center gap-1.5"
                    >
                      Compile Final Document
                      <LucideIcons.ArrowRight size={13} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Final Finisher Export */}
            {activeStep === 4 && (
              <div className="flex flex-col gap-4 py-3 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <LucideIcons.CheckCircle size={32} className="stroke-[2.5] text-[#052F2D]" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl text-[#073B36]">Draft Package Complete!</h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed max-w-sm mx-auto">
                    Your certified draft copy of <strong className="text-emerald-950 font-bold">{docType}</strong> has been secured with timestamp validation. Secure professional review below to protect the contract in court.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-4">
                  <button
                    onClick={() => alert(`Simulated signed document: Approved! Executing and downloading legal file package...`)}
                    className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <LucideIcons.Download size={14} />
                    Download Draft PDF (Free Demo)
                  </button>

                  <button
                    onClick={() => navigate('talk')}
                    className="w-full bg-primary hover:bg-[#075E53] text-white font-extrabold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <LucideIcons.FileCheck size={14} />
                    Get Senior Lawyer Vetting Vouch
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveStep(1);
                      setFields([]);
                      setSignerName('');
                      setSignatureDone(false);
                    }}
                    className="text-xs text-gray-400 hover:text-gray-700 font-bold hover:underline cursor-pointer pt-2"
                  >
                    Build Another Template Draft
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Panel: Scrollable Stamp Preview Card */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <h3 className="font-serif font-bold text-lg text-white">
              Dynamic Document Preview
            </h3>

            {/* Simulated Stamp Paper Frame UI */}
            <div className="bg-white text-gray-800 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden relative font-serif select-none prose">
              {/* Top Fake Indenture Stamp Block */}
              <div className="border-[3px] border-[#D6A93A] p-4 text-center rounded-2xl flex flex-col items-center justify-center gap-1 select-none font-sans relative border-double">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[9px] font-mono text-[#D6A93A]/50 font-bold select-none -rotate-90">GOVT OF INDIA</div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[9px] font-mono text-[#D6A93A]/50 font-bold select-none rotate-90">NON JUDICIAL</div>
                <span className="text-[10px] uppercase tracking-widest text-[#B88922] font-black leading-none bg-[#D6A93A]/10 px-3 py-1 rounded">GOVERNMENT STATUTORY NO-VALUE REFERENCE</span>
                <span className="text-3xl font-serif font-black text-[#073B36] tracking-tight mt-1 leading-none">STAMP DEED DRAFT</span>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-1 leading-none font-bold">TIMELOCKED VERIFICATION ID: L11-DEED-DECLARED</span>
              </div>

              {/* Verified Ribbon overlay */}
              <div className="absolute top-48 right-6 bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1.5 rounded-xl text-[10px] uppercase font-bold tracking-wider opacity-90 shadow flex items-center gap-1 select-none">
                <LucideIcons.ShieldAlert size={14} className="text-[#147A5D]" />
                L11 GENERATOR VERIFIED
              </div>

              {/* Actual Text Block scrollable */}
              <div className="text-xs md:text-sm leading-relaxed text-gray-800 font-serif border border-gray-100 rounded-2xl p-4.5 bg-neutral-50/50 max-h-[350px] overflow-y-auto whitespace-pre-line border-dashed">
                {compileDraftText()}

                {/* Draw dynamic signature stamping at bottom */}
                {signatureDone && signerName && (
                  <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col gap-1 items-start">
                    <span className="text-red-700 font-sans tracking-wide text-[10px] uppercase bg-red-50 border border-red-100 px-2 py-0.5 rounded font-extrabold flex items-center gap-1 select-none animate-pulse">
                      <LucideIcons.CheckCircle size={10} />
                      Signed by User
                    </span>
                    <span className="text-2xl text-primary font-serif italic tracking-wide select-none pl-3.5 pt-1 font-bold">
                      {signerName}
                    </span>
                    <span className="text-[9px] text-gray-400 font-mono italic pl-3.5">
                      Completed via e-sign channel {new Date().toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Watermark Notice label */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium font-sans">
                <span>Total turnaround: 2 min</span>
                <span className="text-[#0F8A6A] font-bold">Review-Ready Class</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
