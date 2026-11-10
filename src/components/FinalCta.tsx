import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

interface FinalCtaProps {
  onSearchHousing: () => void;
  onAddListing: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onSearchHousing,
  onAddListing,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#1B382B] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative architectural background atmosphere */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <img
          src="/src/assets/images/hero_apartment_interior_1794314966635.jpg"
          alt="Moderní interiér bytu"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand mark badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5]/10 text-xs font-semibold text-[#CBD8D0] uppercase tracking-wider mb-6">
            <span>DOMOV · Česká republika</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight font-sans text-balance">
            Nové bydlení je blíž, než si myslíte.
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#E5ECE7] leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
            Začněte hledat pronájem bez poplatků za kontaktování. Nebo přidejte svou nemovitost a najděte nájemníka přímo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onSearchHousing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#1B382B] bg-[#FAF8F5] hover:bg-[#FFFFFF] rounded-xl transition-all shadow-md active:scale-[0.99]"
            >
              <span>Hledat bydlení</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onAddListing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#FAF8F5] bg-transparent hover:bg-[#FAF8F5]/10 border border-[#FAF8F5]/30 rounded-xl transition-all active:scale-[0.99]"
            >
              <Plus className="w-4 h-4" />
              <span>Přidat inzerát</span>
            </button>
          </div>

          <p className="mt-8 text-xs text-[#8CA595]">
            Soukromý majitel má 1. inzerát zdarma · Kontaktování majitelů vždy zdarma · Bez provize
          </p>
        </div>
      </div>
    </section>
  );
};
