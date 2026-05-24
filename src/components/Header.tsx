import React, { useState } from 'react';
import { SERVICES, PRODUCTS } from '../data';
import { Menu, X, ChevronDown, Phone, User, LogIn, Scale, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  userSession: { name: string; phone: string } | null;
  walletBalance: number;
  navigate: (page: string, params?: { serviceId?: string; productId?: string; blogId?: string }) => void;
  onLogout: () => void;
}

export default function Header({ currentPage, userSession, walletBalance, navigate, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const handleLink = (page: string, params?: any) => {
    navigate(page, params);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setToolsOpen(false);
  };

  return (
    <header className="w-full relative z-50">
      {/* Top Offer Strip */}
      <div className="w-full bg-[#042F2D] text-[#D8E7E3] py-2.5 px-4 text-xs font-sans flex items-center justify-between border-b border-[#0F8A6A]/15 shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-secondary/15 text-secondary border border-secondary/35 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">NEW OFFER</span>
            <p className="font-semibold text-center sm:text-left tracking-wide">New user? Start your first legal consultation for just ₹99.</p>
          </div>
          <button 
            onClick={() => handleLink('talk')} 
            className="text-secondary hover:text-white font-bold transition-colors inline-flex items-center gap-1 cursor-pointer hover:underline"
          >
            Get started now →
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-primary text-white py-4 px-4 shadow-premium border-b border-accent/10">
        <nav className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Logo Branding */}
          <div 
            onClick={() => handleLink('home')} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Scale size={20} className="text-primary stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                NyaySetu
                <span className="w-1.5 h-1.5 bg-secondary rounded-full inline-block animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-text group-hover:text-secondary transition-colors">
                Solution Without Litigation
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#D8E7E3]">
            <button 
              onClick={() => handleLink('home')} 
              className={`hover:text-secondary transition-colors cursor-pointer ${currentPage === 'home' ? 'text-secondary font-bold' : ''}`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => { setServicesOpen(true); setProductsOpen(false); }}
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`hover:text-secondary transition-colors inline-flex items-center gap-1 cursor-pointer py-2 ${currentPage === 'services' || currentPage === 'service-detail' ? 'text-secondary font-bold' : ''}`}
              >
                Services
                <ChevronDown size={14} className={`transform transition-transform ${servicesOpen ? 'rotate-180 text-secondary' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div 
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] bg-white text-dark-text p-6 rounded-2xl shadow-premium-hover border border-gray-100 grid grid-cols-2 gap-4 animate-[fadeIn_0.15s_ease-out]"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-muted-text">Practice Areas</span>
                    <button onClick={() => handleLink('services')} className="text-xs text-primary-light hover:text-secondary font-bold inline-flex items-center gap-1">
                      View All Services →
                    </button>
                  </div>
                  {SERVICES.map((serv) => (
                    <div 
                      key={serv.id} 
                      onClick={() => handleLink('service-detail', { serviceId: serv.id })}
                      className="p-2.5 rounded-xl hover:bg-neutral-50 hover:border-secondary border border-transparent transition-all cursor-pointer flex flex-col group/item"
                    >
                      <span className="font-semibold text-[#073B36] text-sm group-hover/item:text-secondary transition-colors">
                        {serv.title}
                      </span>
                      <span className="text-[11px] text-muted-text mt-0.5 leading-snug line-clamp-1">
                        {serv.subtitle}
                      </span>
                    </div>
                  ))}
                  <div className="col-span-2 bg-[#0F8A6A]/5 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                    <span className="text-xs text-muted-text">Need custom arbitration?</span>
                    <button onClick={() => handleLink('talk')} className="bg-[#0F8A6A] hover:bg-[#18A982] text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors">
                      Talk To Lawyer Now
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => { setProductsOpen(true); setServicesOpen(false); }}
                onClick={() => setProductsOpen(!productsOpen)}
                className={`hover:text-secondary transition-colors inline-flex items-center gap-1 cursor-pointer py-2 ${currentPage === 'products' || currentPage === 'product-detail' ? 'text-secondary font-bold' : ''}`}
              >
                Products
                <ChevronDown size={14} className={`transform transition-transform ${productsOpen ? 'rotate-180 text-secondary' : ''}`} />
              </button>

              {productsOpen && (
                <div 
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-white text-dark-text p-6 rounded-2xl shadow-premium-hover border border-gray-100 grid grid-cols-2 gap-4 animate-[fadeIn_0.15s_ease-out]"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-muted-text">Legal Documents</span>
                    <button onClick={() => handleLink('products')} className="text-xs text-primary-light hover:text-secondary font-bold inline-flex items-center gap-1">
                      View All Documents →
                    </button>
                  </div>
                  {PRODUCTS.map((prod) => (
                    <div 
                      key={prod.id} 
                      onClick={() => handleLink('product-detail', { productId: prod.id })}
                      className="p-2.5 rounded-xl hover:bg-neutral-50 hover:border-secondary border border-transparent transition-all cursor-pointer flex flex-col group/item"
                    >
                      <span className="font-semibold text-[#073B36] text-sm group-hover/item:text-secondary transition-colors">
                        {prod.title}
                      </span>
                      <span className="text-[11px] text-muted-text mt-0.5 flex justify-between items-center">
                        <span>{prod.category}</span>
                        <span className="text-legal-green font-bold text-xs">{prod.priceText}</span>
                      </span>
                    </div>
                  ))}
                  <div className="col-span-2 bg-[#0F8A6A]/5 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                    <span className="text-xs text-muted-text">Trademark registration assistance?</span>
                    <button onClick={() => handleLink('talk')} className="bg-[#0F8A6A] hover:bg-[#18A982] text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors">
                      Speak with Advocate
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* AI & SaaS Tools Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => { setToolsOpen(true); setServicesOpen(false); setProductsOpen(false); }}
                onClick={() => setToolsOpen(!toolsOpen)}
                className={`hover:text-secondary transition-colors inline-flex items-center gap-1 cursor-pointer py-2 ${['ask-free', 'checker', 'doc-review', 'generator', 'emergency', 'timeline', 'b2b-marketplace', 'dashboard', 'search', 'city-lawyers'].includes(currentPage) ? 'text-secondary font-bold' : ''}`}
              >
                AI & Tools
                <ChevronDown size={14} className={`transform transition-transform ${toolsOpen ? 'rotate-180 text-secondary' : ''}`} />
              </button>

              {toolsOpen && (
                <div 
                  onMouseLeave={() => setToolsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[530px] bg-white text-dark-text p-6 rounded-2xl shadow-premium-hover border border-gray-100 grid grid-cols-2 gap-4 animate-[fadeIn_0.15s_ease-out]"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-muted-text">Advanced SaaS Features</span>
                    <span className="text-[10px] bg-secondary/15 text-secondary border border-secondary/35 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      Premium Suite
                    </span>
                  </div>

                  <div 
                    onClick={() => handleLink('ask-free')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Ask Free Question Q&A
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Quick diagnostic advice forum</span>
                  </div>

                  <div 
                    onClick={() => handleLink('checker')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      AI Legal Issue Checker
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Factual risk severe scanner</span>
                  </div>

                  <div 
                    onClick={() => handleLink('doc-review')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Document Upload & Review
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Vetting scopes & signature audit</span>
                  </div>

                  <div 
                    onClick={() => handleLink('generator')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Guided Document Generator
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Custom templates & digital signs</span>
                  </div>

                  <div 
                    onClick={() => handleLink('timeline')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      CNR Case Court Tracker
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Judicial timelines scheduler</span>
                  </div>

                  <div 
                    onClick={() => handleLink('b2b-marketplace')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Enterprise Startup Market
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">NDA-locked partner bids</span>
                  </div>

                  <div 
                    onClick={() => handleLink('dashboard')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Advocate Partner Portal
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Professional wallet VoIP console</span>
                  </div>

                  <div 
                    onClick={() => handleLink('search')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Unified Directory Search
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Unified keyword directory scanning</span>
                  </div>

                  <div 
                    onClick={() => handleLink('city-lawyers')}
                    className="p-2 rounded-xl hover:bg-neutral-50 border border-transparent transition-all cursor-pointer flex flex-col group/item col-span-2"
                  >
                    <span className="font-semibold text-[#073B36] text-xs leading-snug group-hover/item:text-secondary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      City-wise Court Panels (SEO)
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">Localized Bar panels (Delhi, Mumbai, Pune, Bangalore)</span>
                  </div>

                  <div 
                    onClick={() => handleLink('emergency')}
                    className="p-2.5 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 transition-all cursor-pointer flex flex-col group/item col-span-2 select-none"
                  >
                    <span className="font-extrabold text-red-700 text-xs leading-snug group-hover/item:text-red-800 transition-colors flex items-center gap-1.5 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-650 inline-block animate-ping"></span>
                      🚨 24/7 Red Alert Law Emergency Desk
                    </span>
                    <span className="text-[10px] text-red-900 mt-0.5 leading-snug font-medium">Masked urgent matches with trials counselors</span>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleLink('pricing')} 
              className={`hover:text-secondary transition-colors cursor-pointer ${currentPage === 'pricing' ? 'text-secondary font-bold' : ''}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => handleLink('about')} 
              className={`hover:text-secondary transition-colors cursor-pointer ${currentPage === 'about' ? 'text-secondary font-bold' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => handleLink('locations')} 
              className={`hover:text-secondary transition-colors cursor-pointer ${currentPage === 'locations' ? 'text-secondary font-bold' : ''}`}
            >
              Locations
            </button>
            <button 
              onClick={() => handleLink('blog')} 
              className={`hover:text-secondary transition-colors cursor-pointer ${currentPage === 'blog' ? 'text-secondary font-bold' : ''}`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleLink('contact')} 
              className={`hover:text-secondary transition-colors cursor-pointer ${currentPage === 'contact' ? 'text-secondary font-bold' : ''}`}
            >
              Contact
            </button>
          </div>

          {/* User Logged-in State or Login button */}
          <div className="hidden lg:flex items-center gap-3">
            {userSession ? (
              <div className="flex items-center gap-3 bg-accent/20 px-3 py-1.5 rounded-xl border border-accent/40">
                <div className="flex flex-col text-right">
                  <span className="text-xs font-bold text-white max-w-[120px] truncate">{userSession.name}</span>
                  <span className="text-[10px] text-secondary font-medium">Wallet: {walletBalance} min</span>
                </div>
                <button
                  onClick={onLogout}
                  className="bg-red-500/20 hover:bg-red-500/40 text-red-100 hover:text-white px-2 py-1 rounded text-xs transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => handleLink('login')}
                className="hover:text-secondary font-semibold text-[14px] px-4 py-2 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <LogIn size={15} />
                Login
              </button>
            )}

            <button 
              onClick={() => handleLink('talk')}
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-[14px] px-5 py-2.5 rounded-xl transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer border border-secondary"
            >
              <Phone size={15} className="fill-current animate-[bounce_2s_infinite]" />
              Talk to Lawyer
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            {userSession && (
              <div className="flex flex-col text-right pr-2">
                <span className="text-[11px] font-bold text-white max-w-[80px] truncate">{userSession.name}</span>
                <span className="text-[9px] text-secondary">Bal: {walletBalance} min</span>
              </div>
            )}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 px-2 border border-accent/30 rounded-lg text-white hover:text-secondary transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Navigation Dropdown Panels */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary text-white border-b border-accent/20 shadow-premium-hover flex flex-col p-5 gap-4 animate-[fadeIn_0.2s_ease-out] max-h-[85vh] overflow-y-auto">
          
          <button 
            onClick={() => handleLink('home')} 
            className="text-left font-bold py-2 border-b border-accent/10 hover:text-secondary text-lg"
          >
            Home
          </button>

          {/* Mobile Services Expander */}
          <div>
            <div className="flex justify-between items-center py-2 border-b border-accent/10">
              <span className="font-bold text-lg">Practice Services</span>
              <button 
                onClick={() => handleLink('services')} 
                className="text-xs text-secondary font-bold underline"
              >
                View list
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 pl-3 mt-2">
              {SERVICES.map((s) => (
                <button 
                  key={s.id} 
                  onClick={() => handleLink('service-detail', { serviceId: s.id })}
                  className="text-left text-sm text-[#D8E7E3] py-1.5 hover:text-secondary"
                >
                  • {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Products Expander */}
          <div>
            <div className="flex justify-between items-center py-2 border-b border-accent/10">
              <span className="font-bold text-lg">Legal Document Products</span>
              <button 
                onClick={() => handleLink('products')} 
                className="text-xs text-secondary font-bold underline"
              >
                View list
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 pl-3 mt-2">
              {PRODUCTS.map((p) => (
                <button 
                  key={p.id} 
                  onClick={() => handleLink('product-detail', { productId: p.id })}
                  className="text-left text-sm text-[#D8E7E3] py-1.5 hover:text-secondary flex justify-between"
                >
                  <span>• {p.title}</span>
                  <span className="text-secondary font-bold text-xs">{p.priceText}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Tools Expander */}
          <div>
            <div className="flex justify-between items-center py-2 border-b border-accent/10">
              <span className="font-bold text-lg">AI & SaaS Tools</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pl-3 mt-2 text-xs font-semibold">
              <button 
                onClick={() => handleLink('ask-free')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • Free Q&A Forum
              </button>
              <button 
                onClick={() => handleLink('checker')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • AI Issue Checker
              </button>
              <button 
                onClick={() => handleLink('doc-review')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • Vetting Vouch
              </button>
              <button 
                onClick={() => handleLink('generator')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • Doc Generator
              </button>
              <button 
                onClick={() => handleLink('timeline')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • Court Timeline
              </button>
              <button 
                onClick={() => handleLink('b2b-marketplace')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • B2B Startup RFP
              </button>
              <button 
                onClick={() => handleLink('dashboard')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • Lawyer Console
              </button>
              <button 
                onClick={() => handleLink('search')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3]"
              >
                • Smart Search
              </button>
              <button 
                onClick={() => handleLink('city-lawyers')}
                className="text-left py-1.5 hover:text-secondary text-[#D8E7E3] col-span-2"
              >
                • City Court Panels
              </button>
              <button 
                onClick={() => handleLink('emergency')}
                className="text-left py-2 hover:text-secondary text-red-300 font-extrabold col-span-2 flex items-center gap-1 uppercase"
              >
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block animate-ping"></span>
                • 🚨 Red Emergency
              </button>
            </div>
          </div>

          <button 
            onClick={() => handleLink('pricing')} 
            className="text-left font-bold py-2 border-b border-accent/10 hover:text-secondary text-lg"
          >
            Pricing & Wallet Packages
          </button>

          <button 
            onClick={() => handleLink('about')} 
            className="text-left font-bold py-2 border-b border-accent/10 hover:text-secondary text-lg"
          >
            About Branding
          </button>

          <button 
            onClick={() => handleLink('locations')} 
            className="text-left font-bold py-2 border-b border-accent/10 hover:text-secondary text-lg"
          >
            Delhi NCR & Online Locations
          </button>

          <button 
            onClick={() => handleLink('blog')} 
            className="text-left font-bold py-2 border-b border-accent/10 hover:text-secondary text-lg"
          >
            Blog & Legal Guides
          </button>

          <button 
            onClick={() => handleLink('contact')} 
            className="text-left font-bold py-2 border-b border-accent/10 hover:text-secondary text-lg"
          >
            Contact Helpdesk
          </button>

          <div className="pt-2 flex flex-col gap-3">
            {userSession ? (
              <div className="bg-accent/20 p-3 rounded-xl border border-accent/40 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-secondary">{userSession.name}</div>
                  <div className="text-[11px] text-[#D8E7E3]">Wallet Quota: {walletBalance} minutes</div>
                </div>
                <button 
                  onClick={onLogout}
                  className="bg-red-500/20 hover:bg-red-500/40 text-red-100 hover:text-white px-3 py-1.5 rounded-lg text-xs"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => handleLink('login')}
                className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-2.5 rounded-xl text-center"
              >
                Log In / Register
              </button>
            )}

            <button 
              onClick={() => handleLink('talk')}
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={18} className="fill-current" />
              Talk to Lawyer Starting ₹99
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
