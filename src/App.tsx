import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TalkPage from './components/TalkPage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SupportPage from './components/SupportPage';
import FaqsPage from './components/FaqsPage';
import BlogPage from './components/BlogPage';
import LocationsPage from './components/LocationsPage';
import AuthPages from './components/AuthPages';
import PolicyPages from './components/PolicyPages';
import AskFreeQuestion from './components/AskFreeQuestion';
import AiChecker from './components/AiChecker';
import DocumentReview from './components/DocumentReview';
import DocumentGenerator from './components/DocumentGenerator';
import EmergencyHelp from './components/EmergencyHelp';
import CaseTimeline from './components/CaseTimeline';
import BusinessMarketplace from './components/BusinessMarketplace';
import LawyerDashboard from './components/LawyerDashboard';
import SmartSearch from './components/SmartSearch';
import CityLawyers from './components/CityLawyers';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [serviceId, setServiceId] = useState<string>('counseling-mediation');
  const [productId, setProductId] = useState<string>('trademark-registration');
  const [blogId, setBlogId] = useState<string | null>(null);

  // Quick Wallet credits and active logged in states
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [userSession, setUserSession] = useState<{ name: string; phone: string } | null>(() => {
    try {
      const saved = localStorage.getItem('nyaysetu_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Handle auto scroll-to-top upon changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, serviceId, productId, blogId]);

  const handleNavigate = (page: string, params?: { serviceId?: string; productId?: string; blogId?: string }) => {
    setCurrentPage(page);
    if (params?.serviceId) {
      setServiceId(params.serviceId);
    }
    if (params?.productId) {
      setProductId(params.productId);
    }
    if (page === 'blog') {
      setBlogId(params?.blogId || null);
    }
  };

  const handleLogin = (session: { name: string; phone: string }) => {
    setUserSession(session);
    setWalletBalance(15); // Preloading a friendly 15 minutes of talktime credit to play with!
    try {
      localStorage.setItem('nyaysetu_session', JSON.stringify(session));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleLogout = () => {
    setUserSession(null);
    setWalletBalance(0);
    try {
      localStorage.removeItem('nyaysetu_session');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleTopUp = (minutes: number) => {
    setWalletBalance((prev) => prev + minutes);
  };

  return (
    <div className="w-full min-h-screen bg-legal-bg flex flex-col justify-between selection:bg-secondary/40 selection:text-primary relative font-sans">
      
      {/* Top Header navbar container */}
      <Header 
        currentPage={currentPage}
        userSession={userSession}
        walletBalance={walletBalance}
        navigate={handleNavigate}
        onLogout={handleLogout}
      />

      {/* Main Contents Panel Routing Swapper */}
      <main className="w-full flex-grow relative pb-28 lg:pb-0">
        {currentPage === 'home' && (
          <HomePage navigate={handleNavigate} />
        )}
        
        {currentPage === 'talk' && (
          <TalkPage 
            walletBalance={walletBalance} 
            userSession={userSession} 
            navigate={handleNavigate} 
            onTopUp={handleTopUp} 
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage navigate={handleNavigate} />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage serviceId={serviceId} navigate={handleNavigate} />
        )}

        {currentPage === 'products' && (
          <ProductsPage navigate={handleNavigate} />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage productId={productId} navigate={handleNavigate} />
        )}

        {currentPage === 'pricing' && (
          <PricingPage navigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage navigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'support' && (
          <SupportPage navigate={handleNavigate} />
        )}

        {currentPage === 'faqs' && (
          <FaqsPage navigate={handleNavigate} />
        )}

        {currentPage === 'blog' && (
          <BlogPage 
            activeBlogId={blogId} 
            navigate={handleNavigate} 
            onSelectBlog={(id) => setBlogId(id)} 
          />
        )}

        {currentPage === 'locations' && (
          <LocationsPage navigate={handleNavigate} />
        )}

        {currentPage === 'login' && (
          <AuthPages mode="login" navigate={handleNavigate} onLoginSuccess={handleLogin} />
        )}

        {currentPage === 'signup' && (
          <AuthPages mode="signup" navigate={handleNavigate} onLoginSuccess={handleLogin} />
        )}

        {currentPage === 'privacy' && (
          <PolicyPages view="privacy" navigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <PolicyPages view="terms" navigate={handleNavigate} />
        )}

        {currentPage === 'refund' && (
          <PolicyPages view="refund" navigate={handleNavigate} />
        )}

        {currentPage === 'ask-free' && (
          <AskFreeQuestion navigate={handleNavigate} />
        )}

        {currentPage === 'checker' && (
          <AiChecker navigate={handleNavigate} />
        )}

        {currentPage === 'doc-review' && (
          <DocumentReview navigate={handleNavigate} />
        )}

        {currentPage === 'generator' && (
          <DocumentGenerator navigate={handleNavigate} />
        )}

        {currentPage === 'emergency' && (
          <EmergencyHelp navigate={handleNavigate} />
        )}

        {currentPage === 'timeline' && (
          <CaseTimeline navigate={handleNavigate} />
        )}

        {currentPage === 'b2b-marketplace' && (
          <BusinessMarketplace navigate={handleNavigate} />
        )}

        {currentPage === 'dashboard' && (
          <LawyerDashboard navigate={handleNavigate} />
        )}

        {currentPage === 'search' && (
          <SmartSearch navigate={handleNavigate} />
        )}

        {currentPage === 'city-lawyers' && (
          <CityLawyers navigate={handleNavigate} />
        )}
      </main>

      {/* Persistent Large Footer */}
      <Footer navigate={handleNavigate} />

      {/* Floating Active WhatsApp Chat Button */}
      <a 
        href="https://wa.me/919000000000" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-[95] bg-[#25D366] hover:bg-[#20BE5D] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group select-none flex items-center justify-center ring-4 ring-[#25D366]/35"
        title="Chat with NyaySetu Advocate"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-secondary border border-primary"></span>
        </span>
        <MessageCircle size={24} className="fill-current text-white" />
      </a>

      {/* Sticky Bottom CTA for Mobile devices */}
      {currentPage !== 'talk' && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#063F3B]/85 backdrop-blur-md text-white py-4 px-5 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] flex items-center justify-between border-t border-[#0F8A6A]/25 z-[90] animate-[slideUp_0.3s_ease-out]">
          <div className="flex flex-col text-left">
            <span className="text-sm font-black text-secondary uppercase tracking-widest leading-none">Starting ₹99</span>
            <span className="text-[10px] text-[#D8E7E3] mt-1.5 leading-none font-semibold">Verified advocate match &lt;60s</span>
          </div>
          <button 
            onClick={() => handleNavigate('talk')}
            className="bg-gradient-to-r from-secondary to-[#B88922] hover:from-[#B88922] hover:to-secondary text-[#052F2D] font-extrabold text-xs px-4 py-2.5 rounded-xl text-center shadow-md inline-flex items-center gap-1.5 cursor-pointer border border-secondary"
          >
            <PhoneCall size={12} className="fill-current animate-[bounce_1.5s_infinite]" />
            Talk to Lawyer
          </button>
        </div>
      )}

    </div>
  );
}
