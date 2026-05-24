import React from 'react';
import { SERVICES, PRODUCTS } from '../data';
import { Scale, Phone, Mail, MessageSquare, MessageCircle, Facebook, Youtube, Instagram, Linkedin, Heart, HelpCircle, MapPin } from 'lucide-react';

interface FooterProps {
  navigate: (page: string, params?: { serviceId?: string; productId?: string; blogId?: string }) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-[#E2EAE7] pt-16 pb-8 border-t-4 border-secondary px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-accent/20">
        
        {/* Brand Block */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <Scale size={20} className="text-primary stroke-[2.5]" />
            </div>
            <span className="text-2xl font-bold font-serif text-white tracking-tight">NyaySetu</span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed font-sans">
            "Solution Without Litigation." Online legal consultations, dispute mediation, and lawyer-drafted contracts in India. Powered by a qualified verified counsel network.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/20 hover:bg-secondary rounded-lg transition-colors text-white hover:text-primary">
              <Facebook size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/20 hover:bg-secondary rounded-lg transition-colors text-white hover:text-primary">
              <Youtube size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/20 hover:bg-secondary rounded-lg transition-colors text-white hover:text-primary">
              <Instagram size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/20 hover:bg-secondary rounded-lg transition-colors text-white hover:text-primary">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Popular Services Block */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold tracking-wider text-xs uppercase border-b border-accent/20 pb-2">Popular Practice Areas</span>
          <div className="flex flex-col gap-2">
            {SERVICES.map((serv) => (
              <button 
                key={serv.id} 
                onClick={() => navigate('service-detail', { serviceId: serv.id })}
                className="text-left text-sm text-white/70 hover:text-secondary transition-colors cursor-pointer"
              >
                {serv.title}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Products Block */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold tracking-wider text-xs uppercase border-b border-accent/20 pb-2">Drafting & Filings</span>
          <div className="flex flex-col gap-2">
            {PRODUCTS.map((prod) => (
              <button 
                key={prod.id} 
                onClick={() => navigate('product-detail', { productId: prod.id })}
                className="text-left text-sm text-white/70 hover:text-secondary transition-colors cursor-pointer"
              >
                {prod.title}
              </button>
            ))}
          </div>
        </div>

        {/* Contact info & trusted badges summary */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold tracking-wider text-xs uppercase border-b border-accent/20 pb-2">Verified Helpdesk</span>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2.5">
              <Mail className="text-secondary shrink-0" size={16} />
              <span className="text-white/80 font-mono">support@nyaysetu.in</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="text-secondary shrink-0" size={16} />
              <span className="text-white/80 font-mono">+91 90000 00000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageCircle className="text-[#25D366] fill-[#25D366] shrink-0" size={16} />
              <span className="text-white/80">WhatsApp: Chat Live with Advocate</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="text-secondary shrink-0" size={16} />
              <span className="text-white/80 text-xs">Delhi NCR Head Office · Virtual Consultation India-Wide</span>
            </div>
          </div>
        </div>

      </div>

      {/* Grid of trusted performance indicators */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 py-10 border-b border-accent/20 text-center md:text-left">
        <div>
          <h4 className="text-white font-bold text-lg">1,500+</h4>
          <p className="text-xs text-white/70">Happy Smiles Secured</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">4.9 Star</h4>
          <p className="text-xs text-white/70">Rated on Verified Google Reviews</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">770+</h4>
          <p className="text-xs text-white/70">Clients Actively Served</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">08:00 AM – 11:00 PM</h4>
          <p className="text-xs text-white/70">Active IST Support Desk</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <span className="bg-secondary/10 text-secondary border border-secondary/30 px-2.5 py-1.5 rounded-lg text-xs font-bold block text-center">
            In-person Delhi NCR Hubs
          </span>
        </div>
      </div>

      {/* Quick links & Privacy policy routes */}
      <div className="max-w-7xl mx-auto py-8 border-b border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/75">
        <div className="flex flex-wrap justify-center gap-5">
          <button onClick={() => navigate('about')} className="hover:text-secondary cursor-pointer">About Us</button>
          <button onClick={() => navigate('contact')} className="hover:text-secondary cursor-pointer">Contact</button>
          <button onClick={() => navigate('support')} className="hover:text-secondary cursor-pointer">Help & Support</button>
          <button onClick={() => navigate('locations')} className="hover:text-secondary cursor-pointer">Locations Map</button>
          <button onClick={() => navigate('pricing')} className="hover:text-secondary cursor-pointer">Wallet Pricing</button>
          <button onClick={() => navigate('faqs')} className="hover:text-secondary cursor-pointer">Detailed FAQs</button>
          <button onClick={() => navigate('blog')} className="hover:text-secondary cursor-pointer">Legal Blogs</button>
        </div>
        <div className="flex flex-wrap justify-center gap-5 pt-2 md:pt-0">
          <button onClick={() => navigate('privacy')} className="hover:text-secondary cursor-pointer text-secondary">Privacy Policy</button>
          <button onClick={() => navigate('terms')} className="hover:text-secondary cursor-pointer text-secondary">Terms & Conditions</button>
          <button onClick={() => navigate('refund')} className="hover:text-secondary cursor-pointer text-secondary">Cancellation & Refund Policy</button>
        </div>
      </div>

      {/* Official Grievance Redressal and Compliance block & Legal Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col gap-6 text-[11px] text-white/60 leading-relaxed">
        <div>
          <p className="font-bold text-white/80 mb-1 text-xs">Grievance Redressal Mechanism</p>
          <p>
            Grievance Redressal Officer: Compliance Officer | Legal Cell Desk, Connaught Place, New Delhi 110001
          </p>
          <p>
            Email: <span className="font-mono text-xs text-white/75">grievance@nyaysetu.in</span> · Phone: <span className="font-mono text-xs text-white/75">+91 90000 00000</span> | Resolution timeline: within applicable Indian statutory guidelines.
          </p>
        </div>

        <div>
          <p className="font-bold text-white/80 mb-1 text-xs">STATUTORY CONDITIONS & DISCLAIMER</p>
          <p>
            NyaySetu registered office: CP Legal Hub, Connaught Place, New Delhi, India. Replace with real registered office and reviewed legal details before production. By visiting this website and accessing information, resources, services, products, and tools, users agree to the terms and conditions stated in NyaySetu policies. Users authorize NyaySetu to contact them through call, SMS, email, WhatsApp or any other mode. Under Article 19(1)(g) of the Constitution and the Advocates Act, 1961, opinions are academic advices that do not construct a physical court suit solicitor bond until officially mandated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-accent/10 pt-6 gap-3">
          <span>© {currentYear} NyaySetu.in — Solution Without Litigation. All Rights Reserved.</span>
          <span className="text-[10px] bg-accent/30 text-white px-2.5 py-1 rounded">Interactive Demo Platform</span>
        </div>
      </div>

    </footer>
  );
}
