import React from 'react';
import * as LucideIcons from 'lucide-react';
import { PRODUCTS } from '../data';
import TrustBadges from './TrustBadges';

interface ProductDetailProps {
  productId: string;
  navigate: (page: string, params?: { productId?: string }) => void;
}

export default function ProductDetailPage({ productId, navigate }: ProductDetailProps) {
  // Grab the product object based on ID
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const getIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={26} className="stroke-[2]" /> : <LucideIcons.FileText size={26} />;
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full">
      {/* Breadcrumbs Navigation */}
      <div className="bg-white border-b border-legal-border py-3 px-4 text-xs text-muted-text select-none">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 font-medium">
          <button onClick={() => navigate('home')} className="hover:text-primary">Home</button>
          <LucideIcons.ChevronRight size={12} />
          <button onClick={() => navigate('products')} className="hover:text-primary">Products</button>
          <LucideIcons.ChevronRight size={12} />
          <span className="text-primary font-bold">{product.title}</span>
        </div>
      </div>

      {/* Main product wrapper */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main content body left */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Header and Details */}
            <div className="bg-white border border-legal-border rounded-3xl p-8 shadow-premium">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#1F6F5B]/5 text-[#1F6F5B] rounded-2xl flex items-center justify-center border border-[#1F6F5B]/10">
                  {getIcon(product.iconName)}
                </div>
                <span className="bg-[#147A5D]/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-serif font-bold text-white mb-3">{product.title}</h1>
              <p className="text-sm text-[#D8E7E3] leading-relaxed mt-2">{product.description}</p>
            </div>

            {/* Price quotation details box */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-start gap-3.5 mb-4">
                <LucideIcons.AlertCircle className="text-secondary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Requirement Assessment Pricing</h4>
                  <p className="text-xs text-secondary font-bold mt-1">Starting base draft: {product.priceText} (Estimated turnaround: {product.turnaroundTime})</p>
                </div>
              </div>
              <p className="text-xs text-[#D8E7E3] leading-relaxed">
                For pricing details and to place an order, talk to our team — we’ll quote based on the complexity of your specific requirements.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <button 
                  onClick={() => navigate('talk')}
                  className="bg-[#0A4B45] hover:bg-[#073B36] text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-[0_4px_15px_rgba(4,47,45,0.4)] inline-flex items-center justify-center gap-2 border border-white/10"
                >
                  <LucideIcons.PhoneCall size={14} />
                  Talk to Lawyer about this
                </button>
                <button 
                  onClick={() => navigate('contact')}
                  className="bg-[#0F8A6A] hover:bg-[#18A982] text-white font-bold text-xs py-3 px-5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  <LucideIcons.MessageSquare size={14} />
                  WhatsApp Us
                </button>
              </div>
            </div>

            {/* Key list of features of the draft */}
            <div>
              <h3 className="text-lg font-serif text-white font-bold pb-2 border-b border-legal-border/30 mb-4 flex items-center gap-2">
                <LucideIcons.CheckCircle size={16} className="text-secondary" />
                What is Included in the Package
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="bg-white/5 p-4 border border-white/10 rounded-xl flex items-start gap-3 hover:scale-101 transition-transform">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <LucideIcons.Check size={12} className="stroke-[3.5]" />
                    </div>
                    <span className="text-xs text-[#D8E7E3] leading-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Injected Trust Badges */}
            <div>
              <h4 className="text-xs font-semibold uppercase text-[#D8E7E3] tracking-widest mb-3">NyaySetu Security Guarantees</h4>
              <TrustBadges />
            </div>

          </div>

          {/* Right Sidebar related products */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white border border-legal-border rounded-2xl p-6 shadow-premium">
              <h4 className="font-serif text-sm font-bold text-primary border-b border-legal-border pb-3 mb-4">
                Other Legal Documents
              </h4>
              <div className="flex flex-col gap-3">
                {relatedProducts.map((rel) => (
                  <div 
                    key={rel.id}
                    onClick={() => navigate('product-detail', { productId: rel.id })}
                    className="p-3 bg-primary/5 hover:bg-primary/10 border border-transparent hover:border-secondary rounded-xl transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-xs text-primary leading-tight">{rel.title}</span>
                      <span className="text-[10px] text-muted-text mt-0.5">{rel.category}</span>
                    </div>
                    <LucideIcons.ChevronRight size={14} className="text-muted-text group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('products')}
                className="w-full mt-6 bg-[#1F6F5B]/10 hover:bg-[#1F6F5B]/15 text-[#1F6F5B] font-bold text-xs py-2 rounded-xl transition-colors text-center"
              >
                Browse All Documents
              </button>
            </div>

            {/* Quick help banner */}
            <div className="bg-primary p-6 rounded-2xl text-white flex flex-col gap-4">
              <h4 className="font-serif text-sm font-bold border-b border-white/15 pb-2">Vetting Services</h4>
              <p className="text-xs text-[#D8E7E3] leading-relaxed">
                Already have a draft agreement and need the counsel to scrub it for hidden liabilities? We offer professional doc vetting services customized to family division or corporate trade contracts.
              </p>
              <button 
                onClick={() => navigate('talk')}
                className="mt-2 text-center bg-secondary hover:bg-secondary/90 text-primary font-bold py-2.5 rounded-xl text-xs transition-colors shadow-lg"
              >
                Discuss with Advocate
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
