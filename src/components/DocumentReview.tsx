import React, { useState, useRef, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

interface DocumentReviewProps {
  navigate: (page: string) => void;
}

interface RiskPoint {
  severity: 'High' | 'Medium' | 'Low';
  clause: string;
  riskDesc: string;
  correction: string;
}

export default function DocumentReview({ navigate }: DocumentReviewProps) {
  const [docCategory, setDocCategory] = useState('Agreement');
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  
  // Progress Timeline states
  const [uploadStep, setUploadStep] = useState(0); // 0: Idle, 1: Uploaded, 2: Advocate Assigned, 3: Review In Progress, 4: Risk Analysis, 5: Ready
  const [isProcessing, setIsProcessing] = useState(false);
  const [signedName, setSignedName] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [signatureMode, setSignatureMode] = useState<'draw' | 'type'>('type');

  // Drawing signature canvas refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (signatureMode === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#073B36';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
      }
    }
  }, [signatureMode, uploadStep]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB'
      });
      triggerSimulationSequence(file.name);
    }
  };

  const handleManualUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB'
      });
      triggerSimulationSequence(file.name);
    }
  };

  const triggerSimulationSequence = (fileName: string) => {
    setIsProcessing(true);
    setUploadStep(1);
    
    // Simulate progression steps
    setTimeout(() => {
      setUploadStep(2); // Advocate Assigned
    }, 1200);

    setTimeout(() => {
      setUploadStep(3); // Review in Progress
    }, 2400);

    setTimeout(() => {
      setUploadStep(4); // Risk points discovered
    }, 3600);

    setTimeout(() => {
      setUploadStep(5); // Ready
      setIsProcessing(false);
    }, 4800);
  };

  // Canvas Drawing Methods
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || signatureMode !== 'draw') return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current || signatureMode !== 'draw') return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsSigned(false);
  };

  const handleSaveSignature = () => {
    setIsSigned(true);
  };

  const documentCategories = [
    'Agreement',
    'Property Paper',
    'Legal Notice',
    'FIR Copy',
    'Divorce Paper',
    'Business Contract',
    'Rent Agreement',
    'Other Document'
  ];

  const mockRiskPoints: RiskPoint[] = [
    {
      severity: 'High',
      clause: 'Section 9.2: Indemnity Cap Limit Voided',
      riskDesc: 'The contract provides an unlimited financial liability on the executive party in event of minor vendor delays, exposing your firm to heavy asset audits by partners.',
      correction: 'Cap maximum aggregate indemnity limit to either 100% of the active received contract fee, or a fixed threshold (e.g. ₹5,00,000).'
    },
    {
      severity: 'Medium',
      clause: 'Section 14: Unilateral Jurisdiction Rights',
      riskDesc: 'All conflict resolutions and court filings are registered strictly under Bangalore High Court jurisdiction, which poses heavy logistics burdens for a Delhi-based startup client.',
      correction: 'Amend jurisdiction terms to mutually convenient territories, or insert an out-of-court arbitration clause handled online by NyaySetu Mediators.'
    },
    {
      severity: 'Low',
      clause: 'Section 4.1: Ambiguous Notice Dispatch Modes',
      riskDesc: 'The clause demands sending physical courier notifications only, lacking options of instant emails. This might trigger delay defaults on sudden terminations.',
      correction: 'Insert a safe explicit secondary path enabling validated PDF emails as formal legal notices.'
    }
  ];

  const handleSignTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signedName.trim()) {
      setIsSigned(true);
    }
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-[#D6A93A]/10 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1">
            <LucideIcons.ShieldAlert size={12} />
            Professional Asset Shielding
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            Document Upload <span className="text-secondary">& Lawyer Review</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed font-sans">
            Secure peace of mind before executing contracts. Drag & drop folders to let senior bar partners read clauses, dissect hidden risks, and stamp verified status.
          </p>
        </div>

        {/* Disclaimer Warning */}
        <div className="bg-[#0A4B45] border-l-4 border-secondary p-4 rounded-r-2xl text-xs text-[#D8E7E3] flex gap-3 shadow-lg select-none">
          <LucideIcons.AlertCircle size={20} className="text-secondary shrink-0" />
          <p className="leading-relaxed font-semibold">
            <strong className="text-white">Legal Disclaimer:</strong> This portal processes initial review matrices. Generative analytics represent compliance guidelines; final valid execution should be secured through verified advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: File Drop and Timeline */}
          <div className="lg:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5 pb-2.5 border-b border-gray-100">
              <h3 className="font-bold text-base text-[#073B36]">Review Dashboard</h3>
              <p className="text-[10px] text-gray-400 font-semibold font-mono">ENCRYPTION: 256-BIT STATE SECURE</p>
            </div>

            {/* Selector */}
            <div className="flex flex-col gap-1.5 text-xs font-bold">
              <label className="text-gray-700">Document Type</label>
              <select
                value={docCategory}
                onChange={(e) => setDocCategory(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
              >
                {documentCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Drag Drop Area */}
            <div 
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-[22px] p-6 text-center transition-all flex flex-col items-center justify-center gap-3 relative ${dragActive ? 'border-secondary bg-amber-50/15' : 'border-gray-200 hover:border-primary-light bg-gray-50/60'}`}
            >
              <input 
                type="file" 
                id="manual-file-upload"
                className="hidden" 
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                onChange={handleManualUpload} 
              />
              <div className="w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center shadow-sm">
                <LucideIcons.UploadCloud size={24} className="stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#073B36]">Drag & Drop your document here</p>
                <p className="text-[10px] text-gray-400 mt-1">Accepts PDF, DOC, JPG, PNG up to 15MB</p>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap justify-center mt-1">
                <span className="bg-red-50 text-red-700 border border-red-100 px-2 py-0.5 rounded text-[9px] font-bold">PDF</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold">DOC</span>
                <span className="bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded text-[9px] font-bold">PNG</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded text-[9px] font-bold">JPG</span>
              </div>

              <label 
                htmlFor="manual-file-upload" 
                className="bg-[#0F8A6A] hover:bg-[#18A982] text-white text-[11px] font-bold px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer mt-2"
              >
                Browse Folders
              </label>
            </div>

            {/* Selected File Details */}
            {selectedFile && (
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-xs font-semibold flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <LucideIcons.FileText size={16} className="text-[#0f8a6a]" />
                  <div className="truncate">
                    <p className="text-gray-700 font-bold truncate max-w-[150px]">{selectedFile.name}</p>
                    <p className="text-[9px] text-gray-400">{selectedFile.size}</p>
                  </div>
                </div>
                <button 
                  onClick={() => { setSelectedFile(null); setUploadStep(0); }}
                  className="text-red-500 hover:text-red-700 font-bold text-[10px]"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Simulated Timeline */}
            {uploadStep > 0 && (
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3 font-sans">
                <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider">Review Pipeline Timeline</h4>
                <div className="flex flex-col gap-3.5 text-xs font-semibold">
                  {[
                    { step: 1, title: 'Document Uploaded', desc: 'Secure cloud check completed' },
                    { step: 2, title: 'Advocate Assigned', desc: 'Adv. Rohan Mehta (Specialist)' },
                    { step: 3, title: 'Review in Progress', desc: 'Vetting operational variables' },
                    { step: 4, title: 'Risk Points Discovered', desc: 'Dissecting indemnity terms' },
                    { step: 5, title: 'Report Ready', desc: 'Verification certification complete' }
                  ].map((pipe) => {
                    const isActive = uploadStep >= pipe.step;
                    return (
                      <div key={pipe.step} className="flex gap-3 relative">
                        {/* Bullet circle */}
                        <div className="flex flex-col items-center">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono border ${isActive ? 'bg-primary border-primary text-white font-extrabold shadow' : 'bg-gray-100 border-gray-200 text-gray-400'}`}>
                            {isActive ? <LucideIcons.Check size={11} className="stroke-[3]" /> : pipe.step}
                          </div>
                          {pipe.step < 5 && (
                            <div className={`w-0.5 h-7 ${uploadStep > pipe.step ? 'bg-primary' : 'bg-gray-100'}`}></div>
                          )}
                        </div>
                        <div>
                          <p className={`font-bold ${isActive ? 'text-[#073B36]' : 'text-gray-400'}`}>{pipe.title}</p>
                          <p className="text-[9px] text-gray-400 font-normal">{pipe.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Analyzed Output Risk Points + Signature Section */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {uploadStep === 0 ? (
              <div className="bg-[#0A4B45]/70 p-10 rounded-3xl border border-white/5 text-center min-h-[350px] flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <LucideIcons.ShieldAlert size={28} className="animate-pulse" />
                </div>
                <div className="max-w-md">
                  <h3 className="font-serif font-black text-xl text-white">Review Vault Inactive</h3>
                  <p className="text-xs text-[#D8E7E3] leading-relaxed mt-2">
                    To start auditing your contract, select a legal category and upload your draft inside the drag & drop terminal. Our platform registers active partner matching instantly.
                  </p>
                </div>
              </div>
            ) : uploadStep < 5 ? (
              <div className="bg-white text-gray-800 rounded-3xl p-8 border border-gray-100 shadow-xl min-h-[350px] flex flex-col items-center justify-center text-center gap-4">
                <div className="relative">
                  <div className="absolute w-20 h-20 rounded-full border-4 border-[#0F8A6A]/10 border-t-[#0F8A6A] animate-spin"></div>
                  <LucideIcons.ScanEye size={28} className="text-[#0F8A6A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <div className="mt-8">
                  <h4 className="font-serif font-black text-lg text-[#073B36]">Review Pipeline Active</h4>
                  <p className="text-xs text-gray-500 mt-1 max-w-sm">
                    Our compliance specialist is actively reading clause lines. Critical risk scores are being compiled...
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 animate-fade-in text-gray-800">
                {/* Score Summary Box Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <LucideIcons.Eye size={20} className="text-yellow-600" />
                      <h3 className="font-serif font-bold text-lg text-[#073B36]">Vetting Assessment Report</h3>
                    </div>
                    <span className="bg-red-50 text-red-700 border border-red-100 px-3 py-1 rounded text-[10px] font-extrabold flex items-center gap-1">
                      <LucideIcons.ShieldAlert size={12} />
                      3 Critical Points Found
                    </span>
                  </div>

                  {/* Red/Amber Risk Items List */}
                  <div className="flex flex-col gap-3.5">
                    {mockRiskPoints.map((point, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-red-700 bg-red-50 px-2 py-0.5 rounded uppercase">
                            {point.severity} RISK
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#073B36]">{point.clause}</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                          {point.riskDesc}
                        </p>
                        <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-100/50 text-xs text-emerald-800 font-normal leading-relaxed flex gap-2">
                          <LucideIcons.CheckCircle size={14} className="text-[#0F8A6A] shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-emerald-950 font-bold">Suggested Correction:</strong> {point.correction}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => navigate('talk')}
                      className="flex-1 bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] p-3 rounded-xl font-black text-xs shadow-md flex items-center justify-center gap-1.5"
                    >
                      <LucideIcons.PhoneCall size={14} className="fill-current" />
                      Get Advocate Call (₹14/min)
                    </button>
                    <button
                      onClick={() => alert('This simulator demonstrates our high-precision contract vetting framework. All correction points can be executed in an official draft by ordering our Corporate Document Package.')}
                      className="sm:w-1/3 border border-gray-300 text-gray-700 p-3 rounded-xl font-bold text-xs bg-white"
                    >
                      Get PDF Report
                    </button>
                  </div>
                </div>

                {/* E-Signature Box */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-4">
                  <div className="pb-3 border-b border-gray-100">
                    <h3 className="font-serif font-black text-lg text-[#073B36]">E-Signature & Initialing Vault</h3>
                    <p className="text-[10px] text-gray-400 mt-1 font-semibold">Legal Draft Certification Service</p>
                  </div>

                  {/* Toggle Sign Type vs Draw */}
                  <div className="flex rounded-lg bg-gray-100 p-1 border border-gray-200 text-xs flex-wrap">
                    <button
                      type="button"
                      onClick={() => setSignatureMode('type')}
                      className={`flex-1 px-3 py-2 rounded-md font-bold transition-all cursor-pointer text-center ${signatureMode === 'type' ? 'bg-[#0F8A6A] text-white' : 'text-gray-500'}`}
                    >
                      Handwritten Font Typist
                    </button>
                    <button
                      type="button"
                      onClick={() => { setSignatureMode('draw'); setIsSigned(false); }}
                      className={`flex-1 px-3 py-2 rounded-md font-bold transition-all cursor-pointer text-center ${signatureMode === 'draw' ? 'bg-[#0F8A6A] text-white' : 'text-gray-500'}`}
                    >
                      Draw Using Mouse/Touch
                    </button>
                  </div>

                  {signatureMode === 'type' ? (
                    <form onSubmit={handleSignTypeSubmit} className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-600 font-bold">Type Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Adv. Meera K."
                          value={signedName}
                          onChange={(e) => { setSignedName(e.target.value); setIsSigned(false); }}
                          className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                        />
                      </div>

                      {signedName && (
                        <div className="p-5 bg-gradient-to-tr from-amber-50 to-neutral-50 rounded-2xl border border-dashed border-amber-300 text-center flex flex-col items-center justify-center select-none font-serif min-h-[100px]">
                          <span className="text-gray-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-1">E-SIGNATURE DRAFT PREVIEW</span>
                          <span className="text-3xl text-primary font-serif italic tracking-wide select-none bg-transparent">
                            {signedName}
                          </span>
                          <span className="text-[9px] text-[#0F8A6A] font-mono mt-2 font-bold uppercase tracking-wider">
                            ID: L11-SIG-{Math.floor(1000 + Math.random() * 9000)} · CRYPTO EMBEDDED
                          </span>
                        </div>
                      )}

                      {!isSigned ? (
                        <button
                          type="submit"
                          className="bg-primary hover:bg-[#075E53] text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer"
                        >
                          Lock and Seal Signature
                        </button>
                      ) : (
                        <div className="bg-emerald-50 text-emerald-800 p-3.5 rounded-xl border border-emerald-100 flex items-center justify-between text-xs font-bold font-sans animate-pulse">
                          <div className="flex items-center gap-1.5">
                            <LucideIcons.CheckSquare size={16} />
                            <span>Signed by user: {signedName}</span>
                          </div>
                          <span className="bg-emerald-200 text-emerald-950 px-2 py-0.5 rounded text-[8px] tracking-wide uppercase">LOCKED SECURE</span>
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <div className="bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden flex flex-col items-center justify-center min-h-[160px] cursor-crosshair">
                        <canvas
                          ref={canvasRef}
                          width={400}
                          height={160}
                          onMouseDown={startDrawing}
                          onMouseMove={draw}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          onTouchStart={startDrawing}
                          onTouchMove={draw}
                          onTouchEnd={stopDrawing}
                          className="w-full h-[160px]"
                        />
                        <button
                          type="button"
                          onClick={clearCanvas}
                          className="absolute bottom-2 right-2 bg-white hover:bg-gray-100 shadow border border-gray-200 px-2.5 py-1 rounded text-[10px] text-gray-500 font-bold"
                        >
                          Clear
                        </button>
                      </div>

                      {!isSigned ? (
                        <button
                          type="button"
                          onClick={handleSaveSignature}
                          className="bg-primary hover:bg-[#075E53] text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer"
                        >
                          Save Hand-Drawn Initials
                        </button>
                      ) : (
                        <div className="bg-emerald-50 text-emerald-800 p-3.5 rounded-xl border border-emerald-100 flex items-center justify-between text-xs font-bold font-sans animate-pulse">
                          <div className="flex items-center gap-1.5">
                            <LucideIcons.CheckSquare size={16} />
                            <span>Initials Drawn and Locked</span>
                          </div>
                          <span className="bg-emerald-200 text-emerald-950 px-2 py-0.5 rounded text-[8px] tracking-wide uppercase">LOCKED SECURE</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Signature utilities */}
                  {isSigned && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <button
                        onClick={() => alert(`Simulated signed document: Approved! Executing and downloading legal file package...`)}
                        className="bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] p-3 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-1 text-center"
                      >
                        <LucideIcons.Download size={13} />
                        Download PDF
                      </button>
                      <button
                        onClick={() => alert(`Simulating Whatsapp transmission code... Link generated and copied successfully!`)}
                        className="border border-[#0F8A6A]/40 text-[#0F8A6A] hover:bg-[#0F8A6A]/5 p-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1"
                      >
                        <LucideIcons.Share2 size={13} />
                        Share via WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
