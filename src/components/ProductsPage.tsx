import React from 'react';
import * as LucideIcons from 'lucide-react';
import { PRODUCTS } from '../data';

interface ProductsProps {
  navigate: (page: string, params?: { productId?: string }) => void;
}

export default function ProductsPage({ navigate }: ProductsProps) {
  const getIcon = (name: string) => {
    const IconC = (LucideIcons as any)[name];
    return IconC ? <IconC size={26} className="stroke-[2]" /> : <LucideIcons.FileText size={26} />;
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Attorney Vetted & Drafted
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            Legal Drafting & Registrations
          </h1>
          <p className="text-base text-[#D8E7E3] mt-3 leading-relaxed max-w-2xl mx-auto">
            Professional customized legal agreements, corporate NDAs, trademark/copyright filings, Mother Deed property vetting maps, and Last Wills. Handled entirely on a fixed-fee delivery model.
          </p>
        </div>
      </section>

      {/* Grid of Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase text-secondary tracking-widest">Document Registry Catalog</span>
          <h2 className="text-3xl font-bold text-white mt-1">Fixed-Fee Legal Deliveries</h2>
          <p className="text-xs text-[#D8E7E3] mt-2 max-w-md mx-auto">
            All drafting products include professional advocate consultation, 2 edits/revision rounds, and delivery within 48-72 working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((prod) => (
            <div 
              key={prod.id}
              onClick={() => navigate('product-detail', { productId: prod.id })}
              className="bg-white rounded-3xl border border-legal-border hover:border-secondary shadow-premium hover:shadow-premium-hover transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-[#1F6F5B]/5 text-[#1F6F5B] rounded-2xl flex items-center justify-center border border-[#1F6F5B]/10">
                    {getIcon(prod.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#B88922] uppercase bg-secondary/5 border border-secondary/25 px-2.5 py-1 rounded-full">
                    {prod.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  {prod.description}
                </p>
              </div>

              <div className="bg-[#053733] p-6 border-t border-legal-border flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-[#AFC7C2] uppercase font-bold block">Drafting Price</span>
                  <span className="text-lg font-bold text-secondary font-mono">{prod.priceText}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('product-detail', { productId: prod.id });
                  }}
                  className="bg-primary hover:bg-accent text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-md group-hover:bg-accent border border-primary group-hover:border-accent"
                >
                  Configure Draft →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Trust Badges Summary banner */}
        <div className="bg-[#147A5D]/5 border border-[#147A5D]/20 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <LucideIcons.ShieldAlert size={28} className="text-[#147A5D]" />
            <div>
              <h4 className="font-bold text-primary text-base">All Drafting Products Encrypted</h4>
              <p className="text-xs text-muted-text max-w-md mt-0.5 leading-relaxed">
                We value security. Information regarding startup contracts, mutual partnership equities or Wills are sheltered inside physical vaults and automatically quashed upon contract download.
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate('contact')}
            className="bg-primary hover:bg-accent text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            Inquire Vetting help Desk
          </button>
        </div>

      </section>
    </div>
  );
}
