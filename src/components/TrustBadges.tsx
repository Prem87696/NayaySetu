import React from 'react';
import { Scale, Shield, Lock, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  const list = [
    { text: "Bar Council Verified", desc: "100% active license credentials", icon: Scale },
    { text: "Razorpay Verified", desc: "Secure payment processing", icon: Shield },
    { text: "256-bit SSL Encrypted", desc: "Completely private proxy routes", icon: Lock },
    { text: "DPDPA 2023 Compliant", desc: "Indian data protection compliant", icon: CheckCircle }
  ];

  return (
    <div className="w-full bg-white border border-legal-border rounded-xl p-5 shadow-premium">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {list.map((badge, idx) => {
          const IconComp = badge.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-2.5 hover:scale-102 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#147A5D]/10 flex items-center justify-center text-[#147A5D] mb-2.5">
                <IconComp size={20} className="stroke-[2.5]" />
              </div>
              <p className="font-bold text-xs text-primary tracking-wide">{badge.text}</p>
              <p className="text-[10px] text-muted-text mt-0.5">{badge.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
