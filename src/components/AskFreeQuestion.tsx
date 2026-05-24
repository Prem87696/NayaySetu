import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

interface AskFreeQuestionProps {
  navigate: (page: string) => void;
}

interface QuestionItem {
  id: string;
  title: string;
  category: string;
  questionText: string;
  askedBy: string;
  isPrivate: boolean;
  date: string;
  answeredBy?: string;
  answerStatus: 'Answered' | 'Pending Review';
  answerPreview?: string;
}

const SEED_QUESTIONS: QuestionItem[] = [
  {
    id: 'q1',
    title: 'Tenant not vacuuming/cleaning flat and refusing eviction notice',
    category: 'Property',
    questionText: 'My tenant has been defaulting on rent since 3 months and is causing damage. I sent an eviction notice, but they claim rights under rent control laws. What should I do?',
    askedBy: 'Rajesh K. (Delhi)',
    isPrivate: false,
    date: 'Today',
    answeredBy: 'Adv. Aarya Sharma',
    answerStatus: 'Answered',
    answerPreview: 'Under Delhi Rent Control Act, if arrears exceed 3 months, you can file a petition for eviction under Sec 14(1)(a). The legal notice sent gives them 60 days to pay; if ignored, you can approach the Rent Controller directly.'
  },
  {
    id: 'q2',
    title: 'Wife left home without reasonable excuse, how to file for reconciliation?',
    category: 'Divorce',
    questionText: 'My wife left the matrimonial home 6 months ago under parental influence. Can I file for restitution of conjugal rights in the family court?',
    askedBy: 'Manoj S. (Pune)',
    isPrivate: false,
    date: 'Yesterday',
    answeredBy: 'Adv. Rohan Mehta',
    answerStatus: 'Answered',
    answerPreview: 'Yes, you can file a petition under Section 9 of the Hindu Marriage Act for Restitution of Conjugal Rights. The court will mandate mediation sessions to try and reconcile the marriage before proceeding to trial.'
  },
  {
    id: 'q3',
    title: 'Delay in flat allotment by builder since 4 years',
    category: 'Property',
    questionText: 'The builder in Noida was supposed to hand over possession in 2022. He keeps asking for extension. Can I file a RERA complaint for refund with interest?',
    askedBy: 'Anjali P. (Noida)',
    isPrivate: false,
    date: '3 days ago',
    answeredBy: 'Adv. Aarya Sharma',
    answerStatus: 'Answered',
    answerPreview: 'Absolutely. Under Section 18 of the RERA Act, 2016, you have the right to withdraw from the project and claim full refund along with interest for delayed period, or claim monthly interest if you stay.'
  }
];

export default function AskFreeQuestion({ navigate }: AskFreeQuestionProps) {
  const [questions, setQuestions] = useState<QuestionItem[]>(SEED_QUESTIONS);
  const [category, setCategory] = useState('Property');
  const [title, setTitle] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all');

  const categories = [
    'Property',
    'Divorce',
    'Criminal',
    'Consumer Complaint',
    'Startup',
    'Employment',
    'Family',
    'Tax',
    'Legal Notice'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !questionText || !userName || !userMobile) return;

    const newQuestion: QuestionItem = {
      id: `q-${Date.now()}`,
      title,
      category,
      questionText,
      askedBy: `${userName} (${userMobile.slice(0, 4)}XXXXXX)`,
      isPrivate,
      date: 'Just Now',
      answerStatus: isPrivate ? 'Pending Review' : 'Answered',
      answeredBy: isPrivate ? undefined : 'Adv. Kavya Rao (System Match)',
      answerPreview: isPrivate 
        ? 'Your query is private. A certified expert has been assigned and the answer has been locked in your Secure Console for absolute privacy.' 
        : `Thank you for posting! Based on primary laws, you should check Section 73 (Indian Contract Act) or relevant property acts. We recommend immediate 10-minute briefing with an expert to avoid statutory delay.`
    };

    setQuestions([newQuestion, ...questions]);
    setIsSubmitted(true);
    
    // Clear form
    setTitle('');
    setQuestionText('');
    setUserName('');
    setUserMobile('');
    setUserEmail('');
  };

  return (
    <div className="w-full bg-[#042F2D] text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Page Header */}
        <div className="text-center">
          <span className="bg-secondary/15 text-secondary border border-secondary/35 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            24/7 Verified Forum
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 tracking-tight">
            Ask Free <span className="text-secondary">Legal Question</span>
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-2 max-w-2xl mx-auto leading-relaxed">
            Get automated primary guidance and initial opinions from verified Bar Council advocates across India. Fully secure and private by default.
          </p>
        </div>

        {/* Disclaimer Alert */}
        <div className="bg-[#0A4B45] border-l-4 border-secondary p-4 rounded-r-2xl text-xs text-[#D8E7E3] flex gap-3 shadow-lg select-none">
          <LucideIcons.Info size={20} className="text-secondary shrink-0" />
          <p className="leading-relaxed font-medium">
            <strong className="text-white">Legal Disclaimer:</strong> This tool provides general legal information only and is not a substitute for advice from a verified advocate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Ask Form Card */}
          <div className="lg:col-span-5 bg-white text-[#073B36] p-6 rounded-[24px] shadow-[0_18px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0F8A6A] flex items-center justify-center">
                <LucideIcons.HelpCircle size={18} />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#073B36]">Post Your Query</h3>
                <p className="text-[10px] text-gray-500 font-medium">Takes less than 90 seconds</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-6 flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                  <LucideIcons.CheckCircle size={32} className="stroke-[2.5]" />
                </div>
                <h4 className="font-bold text-lg text-emerald-800">Question Received!</h4>
                <p className="text-xs text-gray-600 px-4 leading-relaxed">
                  Your question has been mapped to our active panel partners. Review response cards below or upgrade to direct talk time for active counseling.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  Ask Another Question
                </button>
                <button 
                  onClick={() => navigate('talk')}
                  className="w-full mt-4 bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3 rounded-xl shadow-md cursor-pointer"
                >
                  Speak to Lawyer Instantly
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-semibold">
                {/* Category Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-medium">Legal Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-medium focus:ring-1 focus:ring-accent outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Question Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-medium">Brief Question Title</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Cheque bounce notice time limit"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-medium focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>

                {/* Question Details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-medium">Elaborate Your Concern</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Provide incident dates, amounts, notices received, state, and other specific details here..."
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 font-normal focus:ring-1 focus:ring-accent outline-none leading-relaxed"
                  />
                </div>

                {/* Public / Private Choice */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-700 font-medium pb-0.5">Privacy Setting</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPrivate(false)}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${!isPrivate ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-500 bg-white'}`}
                    >
                      <LucideIcons.Globe size={14} />
                      Public Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPrivate(true)}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${isPrivate ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-500 bg-white'}`}
                    >
                      <LucideIcons.Lock size={14} />
                      Private Lock
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 font-normal font-mono">
                    {isPrivate ? '🔒 Highly secured. Only matched advocate can view details.' : '🌐 Published in the public database without your matching phone/email.'}
                  </p>
                </div>

                {/* Name / Mobile / Email Fields */}
                <div className="border-t border-gray-100 pt-3 flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-700 font-medium">Your Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 focus:ring-1 focus:ring-accent outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-700 font-medium">Mobile Number</label>
                      <input 
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={userMobile}
                        onChange={(e) => setUserMobile(e.target.value)}
                        className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-700 font-medium">Email (Optional)</label>
                      <input 
                        type="email"
                        placeholder="e.g. user@gmail.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full text-xs bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-gray-800 focus:ring-1 focus:ring-accent outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-[#B88922] text-[#052F2D] font-extrabold text-xs py-3.5 rounded-xl mt-2 shadow-[0_4px_15px_rgba(214,169,58,0.2)] hover:shadow-[0_4px_22px_rgba(214,169,58,0.35)] transition-all cursor-pointer border border-secondary"
                >
                  Submit Free Question
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Answers Catalog */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-white">
                Solved Queries <span className="text-secondary font-mono">({questions.length})</span>
              </h2>
              <div className="flex rounded-lg bg-[#0A4B45] p-1 border border-white/10 text-xs">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${activeTab==='all' ? 'bg-[#0F8A6A] text-white' : 'text-gray-300'}`}
                >
                  All Answers
                </button>
                <button 
                  onClick={() => setActiveTab('mine')}
                  className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${activeTab==='mine' ? 'bg-[#0F8A6A] text-white' : 'text-gray-300'}`}
                >
                  My Submissions
                </button>
              </div>
            </div>

            {/* Questions list */}
            <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-1">
              {questions
                .filter(q => activeTab === 'all' || q.askedBy.includes(userName) || q.askedBy.includes('Just Now') || q.id.startsWith('q-'))
                .map((q) => (
                  <div 
                    key={q.id}
                    className="bg-white text-gray-800 p-5 rounded-[22px] shadow-lg border border-gray-100 flex flex-col gap-3 hover-premium-card transition-all"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="bg-[#0F8A6A]/10 text-[#0F8A6A] border border-[#0F8A6A]/15 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                        {q.category}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono font-medium flex items-center gap-1">
                        <LucideIcons.Calendar size={11} /> {q.date} · {q.askedBy}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-[#073B36] tracking-tight leading-snug">
                      {q.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium bg-gray-50/50 p-3 rounded-xl border border-gray-100 italic">
                      " {q.questionText} "
                    </p>

                    {/* Answer Area */}
                    <div className="border-t border-gray-100 pt-3 flex flex-col gap-2 mt-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-secondary/15 text-[#B88922] rounded-full flex items-center justify-center">
                            <LucideIcons.ShieldCheck size={14} />
                          </div>
                          <span className="text-xs font-bold text-[#073B36]">
                            {q.answeredBy || 'Verifying Specialist...'}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${q.answerStatus === 'Answered' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {q.answerStatus}
                        </span>
                      </div>

                      <p className="text-xs text-gray-700 leading-relaxed font-normal pl-8">
                        {q.answerPreview}
                      </p>
                    </div>

                    {/* CTA on each card */}
                    <div className="flex justify-end pt-2 border-t border-gray-50">
                      <button 
                        onClick={() => navigate('talk')}
                        className="text-xs text-primary-light hover:text-secondary font-bold inline-flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        Talk to {q.answeredBy?.split(' ')[0] || 'Lawyer'} about this issue →
                      </button>
                    </div>
                  </div>
                ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
