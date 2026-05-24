import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface LawyerDashboardProps {
  navigate: (page: string) => void;
}

interface ConsultingJob {
  id: string;
  clientName: string;
  category: string;
  phone: string;
  timeSlot: string;
  status: 'Active' | 'Completed' | 'Refunded';
  fee: number;
}

export default function LawyerDashboard({ navigate }: LawyerDashboardProps) {
  const [earnings, setEarnings] = useState(24850);
  const [payoutRequested, setPayoutRequested] = useState(false);
  const [activeTab, setActiveTab] = useState<'consults' | 'documents' | 'wallet'>('consults');

  // Consultation clients list
  const [consultations, setConsultations] = useState<ConsultingJob[]>([
    { id: 'job1', clientName: 'Rajesh Malhotra', category: 'Property Delay', phone: '+91 98765 43210', timeSlot: 'Today, 03:00 PM', status: 'Active', fee: 450 },
    { id: 'job2', clientName: 'Anjali Patel', category: 'Divorce Draft', phone: '+91 91234 56789', timeSlot: 'Today, 04:30 PM', status: 'Active', fee: 350 },
    { id: 'job3', clientName: 'Vikram Deshmukh', category: 'Rent Agreement', phone: '+91 99887 76655', timeSlot: 'Yesterday', status: 'Completed', fee: 200 },
    { id: 'job4', clientName: 'Sanjay Rastogi', category: 'Cheque Bounce notice', phone: '+91 94433 22110', timeSlot: '2 days ago', status: 'Completed', fee: 600 }
  ]);

  // VoIP call states
  const [isCalling, setIsCalling] = useState(false);
  const [callingClient, setCallingClient] = useState<string | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [callTimer, setCallTimer] = useState<any>(null);

  // Advocate uploaded files desk
  const [filesDesk, setFilesDesk] = useState([
    { name: 'Vetted_Rent_Deed_Signed.pdf', client: 'Vikram D.', size: '420 KB', date: 'Today' },
    { name: 'RERA_Complaint_Draft_Malhotra.docx', client: 'Rajesh M.', size: '1.2 MB', date: 'Yesterday' }
  ]);
  const [newFileName, setNewFileName] = useState('');
  const [newFileClient, setNewFileClient] = useState('Rajesh Malhotra');

  const startCallSim = (clientName: string) => {
    setIsCalling(true);
    setCallingClient(clientName);
    setCallDuration(0);
    
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    setCallTimer(timer);
  };

  const endCallSim = (id: string) => {
    setIsCalling(false);
    setCallingClient(null);
    clearInterval(callTimer);
    setCallDuration(0);

    // Mark job as completed
    setConsultations(prev => prev.map(job => job.id === id ? { ...job, status: 'Completed' } : job));
    setEarnings(prev => prev + 450); // Boost earnings
  };

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFileName.trim()) return;

    setFilesDesk([
      {
        name: newFileName.endsWith('.pdf') ? newFileName : `${newFileName}.pdf`,
        client: newFileClient,
        size: '520 KB',
        date: 'Just Now'
      },
      ...filesDesk
    ]);
    setNewFileName('');
    alert('Document uploaded to Client secure dashboard successfully!');
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Head */}
        <div className="text-center">
          <span className="bg-emerald-500/15 text-secondary border border-secondary/35 px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1 animate-pulse select-none">
            <LucideIcons.ShieldAlert size={12} />
            Advocate Partner Workspace
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight animate-fade-in">
            Lawyer Console & <span className="text-secondary">Dashboard</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed">
            Manage your daily court briefs, consult scheduled client leads, dispatch certified compliance folders, and manage direct secure bank wallet payouts.
          </p>
        </div>

        {/* Lawyer Profile Metrics Quick card */}
        <div className="bg-[#0A4B45] p-5 rounded-3xl border border-white/10 shadow-lg flex flex-col sm:flex-row gap-5 justify-between items-center select-none text-center sm:text-left font-semibold">
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <div className="w-14 h-14 bg-gradient-to-tr from-secondary to-[#B88922] text-[#052F2D] rounded-full flex items-center justify-center font-serif font-black text-xl border-2 border-white/15">
              RM
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white leading-tight">Adv. Rohan Mehta</h3>
              <p className="text-xs text-secondary mt-1 font-mono uppercase font-black tracking-widest">COP: D/3921/2012 (Bar Council of Delhi)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#042F2D] px-4 py-2.5 rounded-2xl border border-white/5 flex flex-col items-center">
              <span className="text-[10px] text-gray-400 uppercase font-black">Accrued Fees</span>
              <span className="text-base text-secondary font-mono font-bold mt-0.5">₹{earnings}</span>
            </div>
            <div className="bg-[#042F2D] px-4 py-2.5 rounded-2xl border border-white/5 flex flex-col items-center">
              <span className="text-[10px] text-gray-400 uppercase font-black">Client Rating</span>
              <span className="text-base text-rose-400 font-mono font-bold mt-0.5 flex items-center gap-0.5">
                4.95 <LucideIcons.Star size={11} className="fill-current" />
              </span>
            </div>
          </div>
        </div>

        {/* Menu selections */}
        <div className="flex rounded-xl bg-[#0A4B45] p-1 border border-white/5 text-xs max-w-lg mx-auto w-full font-bold">
          <button
            onClick={() => setActiveTab('consults')}
            className={`flex-1 p-2.5 rounded-lg transition-all cursor-pointer text-center ${activeTab === 'consults' ? 'bg-[#0F8A6A] text-white' : 'text-gray-300'}`}
          >
            Manage Consults ({consultations.filter(c => c.status === 'Active').length})
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`flex-1 p-2.5 rounded-lg transition-all cursor-pointer text-center ${activeTab === 'documents' ? 'bg-[#0F8A6A] text-white' : 'text-gray-300'}`}
          >
            Upload Documents (Files)
          </button>
          <button
            onClick={() => setActiveTab('wallet')}
            className={`flex-1 p-2.5 rounded-lg transition-all cursor-pointer text-center ${activeTab === 'wallet' ? 'bg-[#0F8A6A] text-white' : 'text-gray-300'}`}
          >
            Payout Wallet
          </button>
        </div>

        {/* Dynamic content windows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main workspace section left */}
          <div className="md:col-span-8">
            
            {/* Consult Jobs Tab */}
            {activeTab === 'consults' && (
              <div className="flex flex-col gap-4">
                <h3 className="font-serif font-black text-lg text-white">Active Queue</h3>
                
                <div className="flex flex-col gap-4">
                  {consultations.map((job) => (
                    <div 
                      key={job.id}
                      className="bg-white text-gray-800 p-5 rounded-[22px] border border-gray-100 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in"
                    >
                      <div className="flex-1 flex flex-col gap-1.5 font-sans text-xs font-semibold">
                        <div className="flex items-center gap-2 flex-wrap text-[#073B36]">
                          <span className="font-serif font-extrabold text-base tracking-tight">{job.clientName}</span>
                          <span className="bg-[#0F8A6A]/10 text-primary px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wide">
                            {job.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-[11px] font-medium font-mono">{job.timeSlot} · {job.phone}</p>
                        <p className="text-[#B88922] font-black font-mono">Retainer Pool: ₹{job.fee}</p>
                      </div>

                      {/* Job Statuses */}
                      <div>
                        {job.status === 'Active' ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => startCallSim(job.clientName)}
                              className="bg-gradient-to-r from-emerald-600 to-[#0F8A6A] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                            >
                              <LucideIcons.PhoneCall size={13} className="fill-current animate-bounce" />
                              VoIP Call
                            </button>
                            <button
                              onClick={() => setConsultations(prev => prev.map(c => c.id === job.id? { ...c, status: 'Completed' } : c))}
                              className="border border-gray-300 text-gray-600 px-3 py-2 rounded-xl font-bold text-xs bg-white hover:bg-gray-50"
                            >
                              Resolve
                            </button>
                          </div>
                        ) : (
                          <span className="bg-gray-100 text-gray-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-gray-150 inline-block">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents tab */}
            {activeTab === 'documents' && (
              <div className="bg-white text-gray-800 rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col gap-5 animate-fade-in">
                <div className="pb-3 border-b border-gray-100 flex items-center gap-2">
                  <LucideIcons.UploadCloud size={20} className="text-primary-light" />
                  <h3 className="font-serif font-bold text-base text-[#073B36]">Advocate Upload Files Desk</h3>
                </div>

                <form onSubmit={handleFileUpload} className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs font-bold items-end">
                  <div className="sm:col-span-6 flex flex-col gap-1">
                    <label className="text-gray-600">Draft Document Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Noida_RERA_Statutory_Reply"
                      value={newFileName}
                      onChange={(e) => setNewFileName(e.target.value)}
                      className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 focus:ring-1 focus:ring-accent outline-none"
                    />
                  </div>
                  <div className="sm:col-span-4 flex flex-col gap-1">
                    <label className="text-gray-600">Map with Client</label>
                    <select
                      value={newFileClient}
                      onChange={(e) => setNewFileClient(e.target.value)}
                      className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800"
                    >
                      {consultations.map(c => (
                        <option key={c.id} value={c.clientName}>{c.clientName}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="sm:col-span-2 bg-[#0F8A6A] hover:bg-[#18A982] text-white p-2.5 rounded-xl transition-all font-bold text-xs cursor-pointer shadow-sm border border-[#0F8A6A] leading-tight"
                  >
                    Upload File
                  </button>
                </form>

                <div className="flex flex-col gap-3.5 mt-2">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Uploaded Files Repository</h4>
                  {filesDesk.map((file, idx) => (
                    <div key={idx} className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 flex items-center justify-between text-xs font-semibold">
                      <div className="flex items-center gap-2 truncate">
                        <LucideIcons.FileText size={18} className="text-[#0F8A6A]" />
                        <div className="truncate">
                          <p className="text-gray-800 font-bold truncate">{file.name}</p>
                          <p className="text-[9px] text-gray-400 mt-0.5">Size: {file.size} · Bound: {file.client} · Handed {file.date}</p>
                        </div>
                      </div>
                      <span className="bg-emerald-50 text-[#0F8A6A] border border-emerald-100 px-2 py-0.5 rounded text-[8px] font-bold uppercase">SECURED LOCKED</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wallet tab */}
            {activeTab === 'wallet' && (
              <div className="bg-white text-gray-800 rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col gap-5 animate-fade-in">
                <div className="pb-3 border-b border-gray-100 flex items-center gap-2">
                  <LucideIcons.Wallet size={20} className="text-primary-light" />
                  <h3 className="font-serif font-black text-base text-[#073B36]">Wallet Payout Settlement</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col gap-1">
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest font-black">Accrued Partner Earnings</span>
                    <span className="text-3xl font-extrabold font-mono text-[#073B36]">₹{earnings}</span>
                    <span className="text-[10px] text-gray-400 mt-1 font-semibold">Ready for direct instant transfer to bank account</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col gap-1">
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest font-black">Settlement Destination</span>
                    <span className="text-xs font-extrabold text-gray-700 block mt-1">HDFC BANK PRIVILEGE CORP</span>
                    <span className="text-[10px] text-[#0f8a6a] mt-0.5 font-bold font-mono">A/C: *******8921 IFSC: HDFC0000004</span>
                  </div>
                </div>

                {payoutRequested ? (
                  <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl border border-emerald-100 text-xs font-semibold leading-relaxed text-center animate-fade-in">
                    <LucideIcons.CheckCircle size={28} className="text-emerald-600 mx-auto mb-2" />
                    <strong>Payout Direct requested!</strong> Transfer process initiated. Funds will be cleared inside statutory bank settlement schedules (under 4 hours).
                  </div>
                ) : (
                  <button
                    onClick={() => { setPayoutRequested(true); setEarnings(0); }}
                    className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl shadow-md border border-secondary uppercase"
                  >
                    Transfer Earnings to Bank Account
                  </button>
                )}
              </div>
            )}

          </div>

          {/* VoIP Call visual side block right column */}
          <div className="md:col-span-4">
            {isCalling && callingClient ? (
              <div className="bg-white text-gray-800 p-5 rounded-[24px] border border-red-200 shadow-xl flex flex-col items-center justify-center text-center gap-5 min-h-[300px] animate-pulse">
                <div className="relative">
                  <div className="absolute w-20 h-20 rounded-full border-4 border-red-100 border-t-red-600 animate-spin"></div>
                  <div className="absolute w-24 h-24 rounded-full bg-red-100/30 animate-pulse"></div>
                  <LucideIcons.PhoneIncoming size={28} className="text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-base text-red-950">Active VoIP Consultation Connection</h4>
                  <p className="text-xs text-[#0F8A6A] font-bold mt-1">Matching Client: {callingClient}</p>
                  <p className="text-4xl text-gray-800 font-mono font-bold mt-3">
                    {Math.floor(callDuration / 60).toString().padStart(2, '0')}:
                    {(callDuration % 60).toString().padStart(2, '0')}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold font-mono font-bold tracking-wider">Line Encryption: Active Bilateral masked</p>
                </div>

                <button
                  type="button"
                  onClick={() => endCallSim('job1')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-1 uppercase pointer-events-auto cursor-pointer"
                >
                  <LucideIcons.PhoneOff size={13} />
                  Terminate Connection
                </button>
              </div>
            ) : (
              <div className="bg-[#0A4B45] p-5 rounded-[24px] border border-white/5 text-center min-h-[300px] flex flex-col items-center justify-center gap-4 text-xs font-semibold select-none leading-relaxed text-[#D8E7E3]">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-secondary flex items-center justify-center border border-white/5">
                  <LucideIcons.Radio size={22} className="animate-pulse" />
                </div>
                <div className="max-w-xs">
                  <h4 className="font-serif font-black text-[#D6A93A] text-sm tracking-tight">Proxy Line Inactive</h4>
                  <p className="text-[11px] text-gray-300 mt-1.5 leading-normal">
                    When you click "VoIP Call", our telecom line routes proxy call sessions securely through server nodes. Accrued payout fees trigger dynamically upon final terminations.
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
