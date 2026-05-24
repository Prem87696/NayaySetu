import { ServiceItem, ProductItem, TestimonialItem, FAQItem, LawyerItem, BlogPostItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'counseling-mediation',
    title: 'Counseling & Mediation',
    subtitle: 'Mediation, arbitration & conciliation',
    description: 'Resolve disputes out of court swiftly and amicably. Save emotional energy and hefty court fees with guidance from experienced Dispute Resolution Specialists.',
    outcome: 'Mutually agreeable settlements drafted as a legally binding Consent Award.',
    commonIssues: [
      'Commercial contract disputes between business partners',
      'Family division or partition disagreements before litigation',
      'Pre-litigation mediation for matrimonial differences',
      'Employer and employee compensation or termination disputes'
    ],
    howItWorks: [
      'Book a legal consultation session with a certified dispute mediator.',
      'Provide core facts and documents related to the conflict.',
      'Our experts run a structured session to discover mutually beneficial terms.',
      'A formal, binding settlement agreement is drawn and executed.'
    ],
    documentsNeeded: [
      'Original agreement or contract in dispute',
      'Written correspondence or notices exchanged',
      'Proof of identity of participating parties',
      'Financial ledgers or transaction logs (if financial)'
    ],
    iconName: 'Scale'
  },
  {
    id: 'matrimonial-family',
    title: 'Matrimonial & Family Issues',
    subtitle: 'Divorce, custody, domestic matters',
    description: 'Empathetic legal support to navigate emotional family transitions. We prioritize fair resolution, child welfare, and protective advocacy under personal laws.',
    outcome: 'Clear roadmap for mutual divorce, custody rights, or maintenance orders.',
    commonIssues: [
      'Mutual consent divorce agreements and terms of alimony',
      'Contested divorce proceedings and strategizing defense',
      'Child custody disputes, visitation rights, and guardian petitions',
      'Domestic violence protection petitions and maintenance claims'
    ],
    howItWorks: [
      'Initial consultation to assess personal laws (Hindu, Muslim, Christian, Special Marriage Act).',
      'Analyze assets, maintenance needs, and custody preferences.',
      'Draft petitions or replies matching your specific personal situation.',
      'Representation in designated Family Court or mediation cells.'
    ],
    documentsNeeded: [
      'Marriage Certificate or wedding photographs',
      'Proof of address of both spouses',
      'Income details / Salary slips / Income Tax Returns of both parties',
      'List of joint assets and inventory of gold/isthridhan'
    ],
    iconName: 'Users'
  },
  {
    id: 'property-issues',
    title: 'Property Issues',
    subtitle: 'Disputes, sale deeds, RERA, tenancy',
    description: 'Safeguard your hard-earned investments. Our property specialists handle title verification, builder delays under RERA, partition suits, and standard tenant-landlord disputes.',
    outcome: 'Secure ownership clearance, solid defense in RERA/Civil Courts, or robust sale deeds.',
    commonIssues: [
      'Delayed possession by builders in residential/commercial complexes',
      'Ancestral property partition suites and legal heir certificates',
      'Illegal encroachment defense and eviction notices to defaulting tenants',
      'Vetting complex property title chains before financial commitment'
    ],
    howItWorks: [
      'Consultation with a senior property advocate.',
      'Submit the title deeds or allotment letters for professional evaluation.',
      'Drafting of representations, notices, or formal court plaints.',
      'Continuous filing and defense updates across RERA or civil courts.'
    ],
    documentsNeeded: [
      'Mother deed / Title chain documents (minimum 13-30 years)',
      'Sanctioned building plan and occupancy certificate',
      'Tax paid receipts and encumbrance certificates (EC)',
      'Allotment letter or Builder-Buyer agreement'
    ],
    iconName: 'Home'
  },
  {
    id: 'criminal-matters',
    title: 'Criminal Matters',
    subtitle: 'FIR, bail, defence & representation',
    description: 'Urgent, strategic legal aid when liberty is threatened. Get immediate online guidance on FIR registration, anticipatory bail, police summons, and strategic criminal defense.',
    outcome: 'Immediate protection checklist, drafted bail petitions, or strong trial representation strategy.',
    commonIssues: [
      'Filing or quashing of First Information Report (FIR) under statutory provisions',
      'Securing regular or anticipatory bail during police investigation',
      'Responding to formal summons or notices from investigating agencies',
      'Defending against allegations of criminal breach of trust, cheating, or defamation'
    ],
    howItWorks: [
      'Emergency 1-on-1 talk with an advocate specializing in criminal jurisprudence.',
      'Analyzing exact clauses of the FIR or summons.',
      'Formulating response defense and drafting the bail application.',
      'Representing before Magistrates, Sessions Court, or the High Court.'
    ],
    documentsNeeded: [
      'Copy of the written FIR or complaint (if available)',
      'Arrest memo, search memo, or official police summons',
      'ID proof and resident proof of the accused',
      'Valid identity documents of potential local bailsmen/sureties'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'agreement-contracts',
    title: 'Agreement & Contracts',
    subtitle: 'NDA, rent, partnership, MoU drafting',
    description: 'Prevent disputes with watertight transactional contracts. Customized drafting by corporate experts ensuring absolute protectability of intellectual property, cash flow, and assets.',
    outcome: 'Highly enforceable, fully customized, digital-ready contractual drafts.',
    commonIssues: [
      'Unstructured partnership agreements leading to sudden equity disputes',
      'Inadequate intellectual property protectability clauses in employee letters',
      'Loosely drafted lease deeds leading to security deposit forfeiture issues',
      'Weak non-disclosure provisions leaking proprietary algorithms or data'
    ],
    howItWorks: [
      'Detailed onboarding call to specify commercial parameters.',
      'Our team drafts a customized, robust contract within 48 hours.',
      'Comprehensive round of review and edits based on your notes.',
      'Delivery of high-quality, executable contract format with e-stamping guidelines.'
    ],
    documentsNeeded: [
      'Detailed brief of commercial consensus or term sheet',
      'Company incorporation details (if applicable)',
      'Names, addresses, and ID proofs of executing parties',
      'Key timelines, payment structures, and jurisdiction preferences'
    ],
    iconName: 'FileText'
  },
  {
    id: 'business-corporate',
    title: 'Business & Corporate Issues',
    subtitle: 'GST, incorporation, employment law',
    description: 'Full-suite corporate legal support for mid-size businesses and startups. We handle legal notices, employment guidelines, labor complaints, and complex tax compliance.',
    outcome: 'Strict regulatory peace-of-mind and shielded business standing.',
    commonIssues: [
      'Answering complex show-cause notices from GST/Income Tax departments',
      'Structuring employee manuals, sexual harassment (POSH) compliance policies',
      'Drafting official termination notices or settling employee non-compete disputes',
      'Advising directors regarding fiduciary compliance, shareholder disputes, and board decisions'
    ],
    howItWorks: [
      'Consultation with our corporate retainer team for instant analysis.',
      'We examine the official corporate issue or governmental notice.',
      'Providing an authoritative written legal opinion or drafting the response copy.',
      'Representation before administrative boards or appellate authorities.'
    ],
    documentsNeeded: [
      'Company Incorporation Certificate / MoA & AoA',
      'Disputed notice or employee correspondence in question',
      'Financial statements, invoices, or audit reports related to the issue',
      'Existing HR policies or directors list (if applicable)'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'startup-registrations',
    title: 'Startup & Registrations',
    subtitle: 'Trademark, copyright, ESOP, compliance',
    description: 'Launch with absolute compliance. Fast track your trademark filing, protect proprietary code via copyright certificates, structure your ESOP pools, and clear DPIIT registration.',
    outcome: 'Government-issued registration certificates, structured pools, and active tax exemptions.',
    commonIssues: [
      'Protecting logo and brand name from competitors using similar phonetics',
      'Acquiring DPIIT startup registration to claim three-year income tax exemptions',
      'Drafting clear, binding ESOP agreements to retain key software engineers',
      'Registering copyright for proprietary software, artistic modules, or literary work'
    ],
    howItWorks: [
      'Perform detailed trademark/copyright availability search on statutory databases.',
      'Submit registration filings instantly to proper regulatory portals.',
      'Handle minor objections raised by the registry without extra core fee.',
      'Deliver final registrations, certificates, or compliant equity plans.'
    ],
    documentsNeeded: [
      'Logo image / Brand name details / Creative artwork content',
      'Proprietary software codebase fragments or literary script',
      'PAN card and Aadhaar card of startup directors/partners',
      'DPIIT/Incorporation certificates (if already incorporated)'
    ],
    iconName: 'Settings'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'trademark-registration',
    title: 'Trademark Registration',
    description: 'Register and secure your brand name, logo, or slogan with statutory authority across any of the 45 international legal classes. Our package includes search report, drafting, and instantaneous filing on the IP India portal.',
    priceText: '₹6,499',
    priceValue: 6499,
    features: [
      'Comprehensive search report across registered trademarks',
      'Accurate drafting of Form TM-A with proper legal description',
      'Filing within 24 working hours under proper classes',
      'TM Application number delivered instantly so you can use ™ next to your brand prefix',
      'Guidance on dealing with minor trademark examiner objections'
    ],
    category: 'IP & Registrations',
    turnaroundTime: '24-48 Hours',
    iconName: 'Award'
  },
  {
    id: 'copyright-registration',
    title: 'Copyright Registration',
    description: 'Safeguard your creative assets, software codes, books, training videos, websites, or songs. Secure a government-issued ownership authority certificate to prevent plagiarism and unauthorized redistribution.',
    priceText: '₹4,499',
    priceValue: 4499,
    features: [
      'Detailed evaluation of work protectability by expert trademark advocates',
      'Online filing of copyright application form (Form XIV) with Copyright Diary Number',
      'Assistance in physical submission of mandatory work copies to copyright division',
      'Tracking of application through the mandatory 30-day waiting period',
      'Assisting with defense against third party objections if filed'
    ],
    category: 'IP & Registrations',
    turnaroundTime: '2-3 Days',
    iconName: 'Copyright'
  },
  {
    id: 'nda',
    title: 'Non Disclosure Agreement',
    description: 'Shield proprietary business concepts, confidential codes, customer lists, and trade secrets before entering joint ventures, investor meetings, or hiring sensitive positions. Custom-crafted, watertight Mutual or One-Way NDA.',
    priceText: '₹1,499',
    priceValue: 1499,
    features: [
      'Drafted as an absolute enforceable shield against information leaks',
      'Clear definition of "Confidential Information" specific to your startup',
      'Robust indemnification clauses and damage-recovery provisions',
      'Strict provisions of IP ownership and return of data upon termination',
      '2 rounds of lawyer reviews and fully customized parameters included'
    ],
    category: 'Contracts & Drafting',
    turnaroundTime: '24-48 Hours',
    iconName: 'Lock'
  },
  {
    id: 'partnership-agreement',
    title: 'Partnership Agreement',
    description: 'Avoid future internal commercial fallouts. Establish an absolute, robust outline defining equity splits, capital contribution obligations, detailed profit/loss ratios, governance, and clear exit mechanisms.',
    priceText: '₹2,999',
    priceValue: 2999,
    features: [
      'Clear outlining of partner responsibilities and capital commitment thresholds',
      'Enforceable voting rules, dispute mediation, and final decision-making authority',
      'Structured retirement, sudden demise, or voluntary partner exit parameters',
      'Full compliance with the Indian Partnership Act, 1932',
      'Clean editable draft tailored for registry execution and stamp paper printing'
    ],
    category: 'Contracts & Drafting',
    turnaroundTime: '48 Hours',
    iconName: 'Users'
  },
  {
    id: 'sale-deed',
    title: 'Sale Deed Drafting',
    description: 'Ensure seamless real estate legal title transfers. Our senior title attorneys draft a secure, flawless Sale Deed highlighting absolute payment receipts, land measurement precision, and title chain history.',
    priceText: '₹4,999',
    priceValue: 4999,
    features: [
      'Detailed review of parent title chain (minimum 13 years back)',
      'Clear, robust clauses verifying absence of prior mortgage/encumbrance/liens',
      'Exact schedule details matching local revenue records',
      'Compliance with local registration rules and Stamp Duty estimations',
      'Ready in editable draft format with detailed guidelines for physically executing registry'
    ],
    category: 'Property Documents',
    turnaroundTime: '48-72 Hours',
    iconName: 'FileText'
  },
  {
    id: 'gift-deed',
    title: 'Gift Deed',
    description: 'Transfer properties, funds, or securities voluntarily to family members or registered charities without any financial exchange. Ensure the gift stands legally unchallenged in the future.',
    priceText: '₹2,499',
    priceValue: 2499,
    features: [
      'Watertight drafting demonstrating voluntary transfer out of love and affection',
      'Clear acceptance clause by receiver (donee) which is crucial for legality',
      'Guidance on specific stamp duty exemptions available for blood relatives',
      'Ready-to-use template designed to prevent future challenges by legal heirs',
      'Detailed registry guide'
    ],
    category: 'Property Documents',
    turnaroundTime: '24-48 Hours',
    iconName: 'Heart'
  },
  {
    id: 'will',
    title: 'Will Drafting',
    description: 'Ensure your loved ones are protected with painless estate allocation. Avoid costly, lengthy inheritance disputes by producing an legally unburdensome, perfectly enforceable Last Will & Testament.',
    priceText: '₹3,499',
    priceValue: 3499,
    features: [
      'Precise listing of all properties, investments, bank balances, and jewelry',
      'Nomination of a trusted Executor and allocation of asset ratios to beneficiaries',
      'Guardian provisions for minor offspring containing ultimate care instructions',
      'Structured clauses designed to survive future legal disputes on mental capacity',
      'Instructions on optional local Registry physical registration and witness protocols'
    ],
    category: 'Estate Planning',
    turnaroundTime: '48 Hours',
    iconName: 'Bookmark'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sanjeev Malhotra',
    location: 'Gurgaon, Haryana',
    category: 'Matrimonial',
    rating: 5,
    text: 'Mujhe divorce process ko lekar bohot confusion thi. Internet par bohot complicated explanations hain but NyaySetu advocate se 15 minute baat karke saare doubts clear ho gaye. Unki simple explanation and empathetic approach ne mera stress aadha kar diya. Highly recommended pay-per-minute model!'
  },
  {
    id: 't2',
    name: 'Priyanka Sharma',
    location: 'Delhi NCR',
    category: 'Property',
    rating: 5,
    text: 'Our builder was delaying the flat possession for 2 years! We were feeling completely helpless. NyaySetu paired us with a dedicated RERA expert who immediately drafted a formal legal warning notice. Surprisingly, the builder agreed to pay part interest. The best pocket-friendly legal consultation in India.'
  },
  {
    id: 't3',
    name: 'Amit Deshmukh',
    location: 'Mumbai, Maharashtra',
    category: 'Money Recovery',
    rating: 5,
    text: 'Client cheque bounce hone ke baad bohot चक्कर lagaye, but resolution nahi mila. NyaySetu lawyer gave me step-by-step guidance on Section 138 Notice dynamic rules in just ₹198 consultation charge. Saved thousands of Rupees that local brokers were demanding for simple notices.'
  },
  {
    id: 't4',
    name: 'Tejasvi Rao',
    location: 'Bangalore, Karnataka',
    category: 'Business Contract',
    rating: 5,
    text: 'As a startup, hiring standard lawyers on monthly retainer is too expensive. We ordered an NDA and Partnership Agreement draft from NyaySetu. The lawyer assigned was extremely cooperative, doing two custom revisions. Absolute value for money!'
  },
  {
    id: 't5',
    name: 'Rajinder Singh',
    location: 'Noida, UP',
    category: 'Will & Estate',
    rating: 5,
    text: 'Apni high-age ke chalte property distribution ka legal draft banana chahta tha. NyaySetu through solid consultation karke Will banayi. Direct lawyer ne local language mein samjhaya and clarify kiya. Bohot badiya service!'
  },
  {
    id: 't6',
    name: 'Vikram Chawla',
    location: 'Pune, Maharashtra',
    category: 'Family Law',
    rating: 4,
    text: 'Excellent service model. Connecting with real lawyers takes forever in Pune, but NyaySetu got me an advocate call in exactly 45 seconds on a Sunday morning! The advice was incredibly precise, objective, and realistic.'
  }
];

export const GENERAL_STATS = {
  activeLawyersOnline: 49,
  avgConnectTime: '< 60 seconds',
  clientsHelped: '2,300+',
  minutesDelivered: '25,000+',
  avgRating: '4.9★',
  outOfCourtRate: '89%'
};

export const REVENUE_STATS = [
  { label: "Clients Helped", value: "2,300+", subtext: "Across major Indian cities" },
  { label: "Talktime Delivered", value: "25,000+ min", subtext: "Painless per-minute billing" },
  { label: "Average Rating", value: "4.9 ★", subtext: "Based on 770+ verified reviews" },
  { label: "Settlement Rate", value: "89%", subtext: "Resolved without court battle" }
];

export const TRUST_BADGES = [
  { text: "Bar Council Verified", desc: "100% active license checks", icon: "Scale" },
  { text: "Razorpay Verified", desc: "Secure payment gateways", icon: "Shield" },
  { text: "256-bit SSL Encrypted", desc: "Private client vaults", icon: "Lock" },
  { text: "DPDPA 2023 Compliant", desc: "Indian data protection", icon: "CheckCircle" }
];

export const LAWYERS: LawyerItem[] = [
  {
    id: 'l1',
    name: 'Adv. Aarya Sharma',
    yearsOfExperience: 15,
    rating: 4.9,
    languages: ['Hindi', 'English'],
    specialties: ['Corporate Law', 'Property Disputes', 'IPR Filing'],
    location: 'Delhi NCR',
    successRate: '92%',
    consultationsCount: 840
  },
  {
    id: 'l2',
    name: 'Adv. Rohan Mehta',
    yearsOfExperience: 12,
    rating: 4.8,
    languages: ['Hindi', 'English', 'Marathi'],
    specialties: ['Family Law', 'Civil Disputes', 'Pre-Court Mediation'],
    location: 'Mumbai',
    successRate: '87%',
    consultationsCount: 680
  },
  {
    id: 'l3',
    name: 'Adv. Kavya Rao',
    yearsOfExperience: 10,
    rating: 4.9,
    languages: ['English', 'Kannada', 'Hindi'],
    specialties: ['Startup Compliance', 'Contracts Drafting', 'Employment Law'],
    location: 'Bangalore',
    successRate: '90%',
    consultationsCount: 590
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Are these real, qualified lawyers?',
    answer: 'Yes, absolutely. NyaySetu performs multi-step credential mapping. We verify every practitioner’s active Bar Association license number, academic background, and real court standing before giving them portal access. Every practitioner has a minimum of 5-15+ years of active experience in high courts and district courts.',
    category: 'general'
  },
  {
    id: 'faq2',
    question: 'How does the pay-per-minute model work?',
    answer: 'Unlike traditional legal consultants who charge massive upfront consulting fees, NyaySetu operates a talktime wallet model. You buy talktime (starting at just ₹99 for 7 minutes). When you request a call, you are connected instantly. The system calculates talktime in real-time. If you talk for 5 minutes, only 5 minutes are deducted. The remaining balance stays in your wallet with permanent validity.',
    category: 'pricing'
  },
  {
    id: 'faq3',
    question: 'What if I run out of minutes mid-call?',
    answer: 'Don’t worry! If your wallet is close to depletion (under 1 minute remaining), the system alerts you via a gentle tone. You can execute a quick 10-second recharge directly while keeping the call active, or reconnect instantly with the same lawyer once the top-up is completed.',
    category: 'pricing'
  },
  {
    id: 'faq4',
    question: 'Is my conversation confidential?',
    answer: 'Confidentiality is an absolute legal right and a professional duty. Every counseling session takes place through heavily encrypted proxy network routes. Your phone number is fully masked, and lawyers never see your personal details unless voluntarily shared. All written summaries and logs are secured with 256-bit encryption.',
    category: 'general'
  },
  {
    id: 'faq5',
    question: 'Does NyaySetu represent me in court?',
    answer: 'NyaySetu is an online consultation and document drafting platform. We provide pre-litigation counseling, document legal drafts, and legal warning notices. However, if your case requires actual physical representation in court, our panel advocates can assist you in filing physical petitions. You can separate that engagement individually with them.',
    category: 'about'
  },
  {
    id: 'faq6',
    question: 'Can I choose which lawyer I talk to?',
    answer: 'In the fast-connect route, our matching algorithm links you to the highest-rated active expert in your specific problem class under 60 seconds. However, if you prefer, you can specifically request a talk with any lawyer from our panel listing, or opt to reconnect with a lawyer you have previously spoken with.',
    category: 'calls'
  },
  {
    id: 'faq7',
    question: 'What problems can NyaySetu help with?',
    answer: 'Our lawyers represent a vast catalog of legal fields: matrimonial and mutual divorces, commercial contract breaches, section 138 cheque bounce warnings, RERA builder delays, real estate deeds vetting, employment or labor disputes, and startup intellectual property registration (trademarks & copyright catalog).',
    category: 'general'
  },
  {
    id: 'faq8',
    question: 'Do I get a written summary after the call?',
    answer: 'Yes! After your call ends, your assigned advocate writes a brief Legal Consultation Note outlining the core problem discussed, suggested statutory rules, steps of relief, and document checklists. You can access this summary anytime via your Secure Console tab.',
    category: 'calls'
  },
  {
    id: 'faq9',
    question: 'How is my payment secured?',
    answer: 'All payments on NyaySetu are routed through payment gateways equipped with PCI-DSS compliance. We accept UPI, Net Banking, credit/debit cards, and mobile wallets. Refund processes are handled systematically under our standard Cancellation & Refund Policy.',
    category: 'pricing'
  },
  {
    id: 'faq10',
    question: 'Can I talk to the same lawyer again?',
    answer: 'Absolutely. When you open the NyaySetu "Talk" console, you have an option to select "Same Lawyer" or choose from your previous consultation log. If that advocate is currently occupied physically with court trials, you can schedule an appointment or request an SMS-alert when they log back in.',
    category: 'calls'
  },
  {
    id: 'faq11',
    question: 'Which languages are supported?',
    answer: 'Our panel speaks multiple Indian languages! You can select your preferred spoken language (e.g., Hindi, English, Kannada, Marathi, Tamil, Telugu, etc.) prior to matching to ensure zero communication gaps during critical briefings.',
    category: 'calls'
  },
  {
    id: 'faq12',
    question: 'How can I join NyaySetu as a lawyer?',
    answer: 'If you are an active practitioner advocating under the Bar Council of India, with a clean record and 5+ years of court representation, you can apply using our "Lawyer Onboarding Portal". Our compliance desk will verify your COP, handle a mock interview, and approve your listing.',
    category: 'lawyers'
  },
  {
    id: 'faq13',
    question: 'Do you serve cities outside metros?',
    answer: 'Yes. Our online consultation platform works across every region in India. As long as you have basic mobile signal, our lawyers can call you back regarding your grievances. We support cities ranging from Tier 1 to Tier 3 areas.',
    category: 'general'
  },
  {
    id: 'faq14',
    question: 'Are family/corporate monthly plans available?',
    answer: 'Yes, we provide Monthly Packages in our platform where you get dedicated bulk talktime hours blocks (e.g., 3 Hours - 12 Hours) along with a dedicated Relationship Manager and offline meet integrations at a highly discounted price compared to standard per-minute rates.',
    category: 'pricing'
  },
  {
    id: 'faq15',
    question: 'Can I meet the lawyer in person?',
    answer: 'Yes! For in-person support, we offer consultations in Delhi NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad). Also, our premium Monthly Packages (Legal Security, Corporate Shield, NyaySetu Special) include predefined offline face-to-face meetings at clean corporate hubs.',
    category: 'calls'
  }
];

export const BLOGS: BlogPostItem[] = [
  {
    id: 'b1',
    title: 'How to Handle an Offence under Section 138 Cheque Bounce in India',
    slug: 'handle-cheque-bounce-india',
    category: 'Money Recovery',
    date: 'May 15, 2026',
    readTime: '6 Min Read',
    thumbnail: '⚖️',
    excerpt: 'Getting a cheque bounced can disrupt your business cash flows. Understand the critical 15-day and 30-day timelines required to issue a strong legal notice.',
    author: 'Adv. Aarya Sharma',
    content: [
      'Cheque bounce is a criminal offense under Section 138 of the Negotiable Instruments Act, 1881. It is punishable with imprisonment for a term which may extend to two years, or with premium monetary penalties, or both.',
      'The first critical step is acquiring the official "Cheque Return Memo" from your bank stating the exact reasons (e.g., "Insufficient Funds" or "Signatures Mismatch").',
      'You MUST send a formal legal demand notice to the drawer within 30 days of receiving this Return Memo. The drawer is given exactly 15 days from notice delivery to make the unpaid settlement.',
      'If they fail to clear the dues within those 15 days, you must file a formal criminal complaint in the Magistrate Court within the next 30 days. Delaying this will expire your legal right to file under Section 138.'
    ]
  },
  {
    id: 'b2',
    title: 'Mutual Consent Divorce Process Explained Simply',
    slug: 'mutual-consent-divorce-process',
    category: 'Family Law',
    date: 'April 28, 2026',
    readTime: '8 Min Read',
    thumbnail: '🕊️',
    excerpt: 'Mutual divorce minimizes emotional distress and speeds up asset split. Learn about Section 13B of the Hindu Marriage Act and the cooling-off period.',
    author: 'Adv. Rohan Mehta',
    content: [
      'Under Section 13B of the Hindu Marriage Act, 1955, spouses can jointly petition for divorce if they have lived separately for a minimum period of one year and have mutually agreed to dissolve the marriage.',
      'The petition describes internal settlement consensus: how alimony will be handled (either one-time lump sum or monthly maintenance), how Streedhan is distributed, and who holds parenting custody.',
      'Once filed, both parties record statements under the "First Motion". The court traditionally provides a 6-month cooling-off period to secure potential reconnections.',
      'If differences remain, the "Second Motion" is moved. Upon satisfying itself of voluntary statements, the Family Court issues a formal decree of divorce.'
    ]
  },
  {
    id: 'b3',
    title: 'Critical Documents Vetting Checklist for Buying a Plot or Flat',
    slug: 'property-vetting-checklist',
    category: 'Property Law',
    date: 'March 11, 2026',
    readTime: '7 Min Read',
    thumbnail: '🏠',
    excerpt: 'Buying property is a massive lifetime investment. Do not bypass checking Mother Deed, Khata, Encumbrance Certificate, and RERA registration.',
    author: 'Adv. Kavya Rao',
    content: [
      'The Mother Deed is the most critical document. It traces the complete origin of ownership history. Ensure you vet this history going back at least 13 to 30 years to check for smooth legal transitions.',
      'Always request an Encumbrance Certificate (EC) for the past 15-30 years. This guarantees the property has no active outstanding bank mortgages or unresolved legal attachments.',
      'Ensure the project is approved under the state’s Real Estate Regulatory Authority (RERA). RERA rules demand builders maintain a separate escrow account for construction funds, saving you from builder defaults.',
      'Verify the Khata certificate (or state specific revenue records) to ensure tax assessments match the physical dimensions and name of the current seller.'
    ]
  },
  {
    id: 'b4',
    title: 'Trademark Registration Basics: How to Shield Your Brand Name',
    slug: 'trademark-registration-basics',
    category: 'Intellectual Property',
    date: 'February 19, 2026',
    readTime: '5 Min Read',
    thumbnail: '🏷️',
    excerpt: 'Building brand reputation is hard work. File your trademark early under the correct classification to block competitors from copying your exact brand name.',
    author: 'Adv. Kavya Rao',
    content: [
      'A Trademark protects your brand name, logo, or distinct tagline. Trademark applications are split into 45 international legal classes (Classes 1-34 for physical products, 35-45 for online and physical services).',
      'The moment you file Form TM-A on the IP India portal, you acquire the right to print the (TM) symbol next to your logo, showing prior legal use.',
      'After preliminary examination, the registrar publishes the mark in the Trademark Journal. Anyone can oppose this within 4 months if they prove prior confusing similar usage.',
      'Once the opposition period clears cleanly, you are granted a Registered Trademark certificate valid for 10 years, unlockable by the prestigious (R) mark.'
    ]
  }
];

export const LOCATIONS = [
  { name: 'Delhi', region: 'Delhi NCR', isHub: true, address: 'NyaySetu Hub, Connaught Place, New Delhi 110001' },
  { name: 'Gurgaon', region: 'Delhi NCR', isHub: true, address: 'NyaySetu Workspace, Sector 44, Gurgaon, Haryana 122003' },
  { name: 'Noida', region: 'Delhi NCR', isHub: true, address: 'NyaySetu Office, Sector 62, Noida, Uttar Pradesh 201301' },
  { name: 'Faridabad', region: 'Delhi NCR', isHub: false, address: 'Co-meeting Hub, Mathura Road, Faridabad' },
  { name: 'Ghaziabad', region: 'Delhi NCR', isHub: false, address: 'Co-meeting Hub, RDC, Ghaziabad' },
  { name: 'Mumbai', region: 'Maharashtra', isHub: false, address: 'Partner Desk, Nariman Point, Mumbai 400021' },
  { name: 'Bangalore', region: 'Karnataka', isHub: false, address: 'Partner Desk, Indiranagar, Bangalore 560038' },
  { name: 'Pune', region: 'Maharashtra', isHub: false, address: 'Partner Desk, Koregaon Park, Pune 411001' },
  { name: 'Jaipur', region: 'Rajasthan', isHub: false, address: 'Partner Desk, Malviya Nagar, Jaipur 302017' },
  { name: 'Lucknow', region: 'Uttar Pradesh', isHub: false, address: 'Partner Desk, Hazratganj, Lucknow 226001' }
];

export const PRICING_PACKAGES = {
  minutePlans: [
    { name: 'BASIC', minutes: 7, price: 99, rate: '₹14.14/min', popular: false, desc: 'Quick 7-minute talktime for brief doubt clearing', badge: 'Starter Call' },
    { name: 'POPULAR', minutes: 15, price: 599, rate: '₹39.93/min', popular: true, desc: 'Ideal for detailed analysis or initial case review', badge: 'Most Popular' },
    { name: 'PRO', minutes: 30, price: 999, rate: '₹33.30/min', popular: false, desc: 'Comprehensive strategy planning with document lists', badge: 'Best Value' },
    { name: 'MAX', minutes: 60, price: 1799, rate: '₹29.98/min', popular: false, desc: 'Full-fledged briefing and multiple document review', badge: 'Double Talktime' }
  ],
  monthlyPackages: [
    {
      name: 'Must Have',
      hours: '3 Hours',
      validity: 'One Month',
      price: 3748,
      desc: 'Perfect for ongoing disputes or marital counselling counseling.',
      bullets: [
        '3 Hours dedicated talktime (60-sec rounds)',
        'Dedicated Legal Relationship Manager',
        'Support on working days 08:00 AM to 11:00 PM',
        'Unlimited case document uploads for easy tracking',
        'Hindi & English support standard'
      ]
    },
    {
      name: 'Legal Security',
      hours: '7 Hours',
      validity: 'One Month',
      price: 6748,
      desc: 'Protects key familial assets and covers civil claims.',
      bullets: [
        '7 Hours dedicated audio/video talktime',
        '1 Physical Offline meeting in Delhi NCR offices',
        'Priority matchmaking with senior Bar Council advocates',
        'Custom Legal Notices vetting included',
        '24/7 emergency response support desk access'
      ]
    },
    {
      name: 'Corporate Shield',
      hours: '11 Hours',
      validity: 'One Month',
      price: 10498,
      desc: 'Designed for SMBs, compliance filing, and contract shielding.',
      bullets: [
        '11 Hours audio/video consultation quota',
        '1 Physical offline meeting at premium legal offices',
        'Drafting assistance for up to 3 standard documents',
        'Direct employment/labor issue advisory',
        'Dedicated corporate attorney assigned'
      ]
    },
    {
      name: 'NyaySetu Special',
      hours: '12 Hours',
      validity: 'One Month',
      price: 14998,
      desc: 'Premium coverage for complex litigations and multi-state issues.',
      bullets: [
        '12 Hours premium consultation quota',
        '2 Physical offline meetings at Delhi NCR partners',
        'Drafting of complex legal representations & replies',
        'Full case history file analysis',
        'Senior high-court panel advocates matching'
      ]
    }
  ]
};

export const COMMON_LEGAL_PROBLEMS = [
  {
    title: "Cheque bounce?",
    problemCode: "cheque_bounce",
    desc: "Received cheque return memo? Do not ignore! File a legal warning notice under Section 138 within 30 days to claim your cash back.",
    outcome: "Recover your funds with official interest and legal cost recovery from drawer.",
    icon: "Receipt"
  },
  {
    title: "Divorce or family dispute?",
    problemCode: "family_dispute",
    desc: "Filing or resolving matrimonial differences, child custody disputes, maintenance, or domestic protection. Friendly, empathetic advocates.",
    outcome: "Clean separation agreements, custody maps, and out-of-court mediation models.",
    icon: "Heart"
  },
  {
    title: "Property or land issue?",
    problemCode: "property_dispute",
    desc: "Facing delayed home possession by builder? Inherited property distribution dispute? Tenant refusing block eviction? RERA violations?",
    outcome: "Clear title deed verification checklist or formal warning notices yielding settlement.",
    icon: "Home"
  },
  {
    title: "Criminal matter?",
    problemCode: "criminal_summons",
    desc: "Police summons received? Preparing regular or anticipatory bail petitions instantly? Shield legal representation during investigations.",
    outcome: "Secure liberty guidelines, custom response drafts, and urgent trial strategist matching.",
    icon: "ShieldAlert"
  }
];
