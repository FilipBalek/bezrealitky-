import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Search, SlidersHorizontal, Check, Home, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreListings: () => void;
  onOpenAddListing: () => void;
  onQuickFilter: (city: string, disposition: string, maxPrice: number | null) => void;
  onOpenSampleDetail: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreListings,
  onOpenAddListing,
  onQuickFilter,
  onOpenSampleDetail,
}) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDisposition, setSelectedDisposition] = useState('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickFilter(
      selectedCity,
      selectedDisposition,
      maxPrice ? parseInt(maxPrice, 10) : null
    );
    const element = document.getElementById('nabidka');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Trust statement badge */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-wider text-[#1B382B]">
              <span className="w-5 h-5 rounded-full bg-[#E5ECE7] flex items-center justify-center text-[#1B382B]">
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
              <span>Kontaktování majitelů je vždy zdarma.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#14231B] leading-[1.12] mb-6 font-sans text-balance">
              Najděte si bydlení.{' '}
              <span className="text-[#2C5E45] font-editorial italic font-normal block sm:inline">
                Bez zbytečných poplatků.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-[#4A5550] leading-relaxed mb-8 max-w-xl text-balance">
              Hledejte pronájmy přímo od majitelů. Bez provize, bez placení za kontakt a bez zbytečných prostředníků.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onExploreListings}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#FAF8F5] bg-[#1B382B] rounded-lg hover:bg-[#13281E] active:scale-[0.99] transition-all shadow-sm group"
              >
                <span>Prohlédnout pronájmy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onOpenAddListing}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-[#1B382B] bg-[#EAE4DC]/50 hover:bg-[#EAE4DC] border border-[#DDD6CA] rounded-lg active:scale-[0.99] transition-all"
              >
                <span>Pronajmout nemovitost</span>
              </button>
            </div>

            {/* Key Value Proposition Indicators */}
            <div className="pt-6 border-t border-[#EAE4DC] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-bold text-[#1B382B] tabular-nums">0 Kč</p>
                <p className="text-xs text-[#5C6661] mt-0.5">Zprávy majitelům</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1B382B] tabular-nums">0 %</p>
                <p className="text-xs text-[#5C6661] mt-0.5">Provize z nájmu</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1B382B] tabular-nums">1. inzerát</p>
                <p className="text-xs text-[#5C6661] mt-0.5">Soukromníkům zdarma</p>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(27,56,43,0.08)] border border-[#EAE4DC]/80 bg-[#E8E2D7] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/src/assets/images/hero_apartment_interior_1794314966635.jpg"
                alt="Prosvětlený moderní byt v Praze se skandinávským nábytkem a výhledem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Property Listing Preview Card */}
              <div
                onClick={onOpenSampleDetail}
                className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto sm:max-w-sm bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-xl border border-[#FAF8F5] shadow-[0_12px_32px_rgba(0,0,0,0.12)] cursor-pointer hover:bg-[#FFFFFF] transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#2C5E45] mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C5E45]" />
                      <span>Přímo od majitele</span>
                      <span className="text-[#8CA595]">·</span>
                      <span className="text-[#5C6661]">Ověřeno</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#1B1F1C] group-hover:text-[#1B382B] transition-colors line-clamp-1">
                      Světlý byt s výhledem na Týnský chrám
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-bold text-[#1B382B] tabular-nums">23 500 Kč</span>
                    <span className="text-[11px] text-[#5C6661] block">/ měsíc</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#5C6661] pt-2 border-t border-[#EAE4DC]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8CA595]" />
                    <span>Praha 1 – Staré Město</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span>2+kk</span>
                    <span>·</span>
                    <span>56 m²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Quick Search & Filter Strip */}
        <div className="mt-12 lg:mt-16 bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#EAE4DC] shadow-[0_10px_30px_rgba(27,56,43,0.04)]">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* City Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#5C6661] uppercase tracking-wider">
                Město v Česku
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg px-3.5 py-2.5 text-sm text-[#1B1F1C] focus:outline-none focus:ring-2 focus:ring-[#1B382B]/20 focus:border-[#1B382B]"
                >
                  <option value="">Všechna města</option>
                  <option value="Praha">Praha</option>
                  <option value="Brno">Brno</option>
                  <option value="Ostrava">Ostrava</option>
                  <option value="Plzeň">Plzeň</option>
                </select>
              </div>
            </div>

            {/* Layout / Disposition */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#5C6661] uppercase tracking-wider">
                Dispozice bytu
              </label>
              <div className="relative">
                <select
                  value={selectedDisposition}
                  onChange={(e) => setSelectedDisposition(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg px-3.5 py-2.5 text-sm text-[#1B1F1C] focus:outline-none focus:ring-2 focus:ring-[#1B382B]/20 focus:border-[#1B382B]"
                >
                  <option value="">Všechny dispozice</option>
                  <option value="1+kk">1+kk / Garsoniéra</option>
                  <option value="2+kk">2+kk</option>
                  <option value="2+1">2+1</option>
                  <option value="3+kk">3+kk a větší</option>
                </select>
              </div>
            </div>

            {/* Max Price */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#5C6661] uppercase tracking-wider">
                Maximální nájemné
              </label>
              <div className="relative">
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg px-3.5 py-2.5 text-sm text-[#1B1F1C] focus:outline-none focus:ring-2 focus:ring-[#1B382B]/20 focus:border-[#1B382B]"
                >
                  <option value="">Bez omezení ceny</option>
                  <option value="15000">Do 15 000 Kč</option>
                  <option value="20000">Do 20 000 Kč</option>
                  <option value="25000">Do 25 000 Kč</option>
                  <option value="30000">Do 30 000 Kč</option>
                </select>
              </div>
            </div>

            {/* Filter Action */}
            <div className="pt-2 sm:pt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-lg transition-colors shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Vyhledat pronájmy</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
