import React, { useState } from 'react';
import { Check, Sparkles, Building2, User, KeyRound, Info } from 'lucide-react';

interface PricingProps {
  onStartSearch: () => void;
  onAddListing: () => void;
  onSelectProTier: (tierName: string) => void;
}

type ProTier = 'start' | 'business' | 'premium';

export const Pricing: React.FC<PricingProps> = ({
  onStartSearch,
  onAddListing,
  onSelectProTier,
}) => {
  const [proTier, setProTier] = useState<ProTier>('business');

  const proTierDetails = {
    start: {
      name: 'START',
      price: '499 Kč',
      period: '/ měsíc',
      listingsCount: 'Až 5 aktivních inzerátů',
      description: 'Vhodné pro majitele s menším portfoliem bytů.',
    },
    business: {
      name: 'BUSINESS',
      price: '999 Kč',
      period: '/ měsíc',
      listingsCount: 'Až 15 aktivních inzerátů',
      description: 'Ideální pro správce a majitele bytových domů.',
    },
    premium: {
      name: 'PREMIUM',
      price: '1 499 Kč',
      period: '/ měsíc',
      listingsCount: 'Až 30 aktivních inzerátů',
      description: 'Pro profesionální pronajímatele a property manažery.',
    },
  };

  const currentPro = proTierDetails[proTier];

  return (
    <section id="cenik" className="py-20 lg:py-28 bg-[#F5F2EB]/60 border-t border-[#EAE4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2C5E45] mb-2.5">
            Transparentní ceník
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#14231B] text-balance">
            Férové ceny. Žádná nepříjemná překvapení.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#55615B] leading-relaxed text-balance">
            Základní používání platformy je pro zájemce o bydlení zcela zdarma. Platíte pouze za doplňkové služby nebo rozšířené možnosti inzerce.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* CARD 1 – FOR TENANTS */}
          <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#EAE4DC] shadow-[0_4px_24px_rgba(27,56,43,0.03)] hover:shadow-[0_12px_36px_rgba(27,56,43,0.06)] transition-all flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2C5E45]">
                  Navždy zdarma
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#EAE4DC]/60 flex items-center justify-center text-[#2C5E45]">
                  <User className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#14231B] mb-2">Hledám bydlení</h3>
              <p className="text-xs text-[#5C6661] mb-6">
                Pro jednotlivce, páry i rodiny hledající nový domov v ČR.
              </p>

              {/* Price Lockup */}
              <div className="mb-6 pb-6 border-b border-[#EAE4DC]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-[#1B382B] tracking-tight tabular-nums">
                    0 Kč
                  </span>
                  <span className="text-sm font-medium text-[#5C6661]">/ bez poplatků</span>
                </div>
                <p className="text-xs font-semibold text-[#2C5E45] mt-1.5 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Nikdy neplatíte za možnost kontaktovat majitele
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 text-sm text-[#3A4540] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Neomezené prohlížení inzerátů</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5 font-bold" />
                  <span className="font-semibold text-[#14231B]">Neomezené kontaktování majitelů</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Bezplatné odesílání zpráv</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Ukládání oblíbených nemovitostí</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Domlouvání prohlídek</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Žádné provize z nájemného</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onStartSearch}
              className="w-full py-3.5 px-4 text-sm font-semibold text-[#1B382B] bg-[#EAE4DC]/70 hover:bg-[#EAE4DC] border border-[#DDD6CA] rounded-xl transition-all active:scale-[0.99] text-center"
            >
              Začít hledat
            </button>
          </div>

          {/* CARD 2 – PRIVATE LANDLORDS (Flagship Card) */}
          <div className="bg-[#FFFFFF] rounded-2xl p-8 border-2 border-[#1B382B] shadow-[0_16px_40px_rgba(27,56,43,0.12)] flex flex-col justify-between relative transform lg:-translate-y-2">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1B382B] text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-[#E5ECE7]" />
              <span>Doporučeno pro soukromé majitele</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2C5E45]">
                  První inzerát zdarma
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#E5ECE7] flex items-center justify-center text-[#1B382B]">
                  <KeyRound className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#14231B] mb-2">Soukromý majitel</h3>
              <p className="text-xs text-[#5C6661] mb-6">
                Pronajímáte vlastní byt nebo dům a chcete spolehlivého nájemníka bez provize.
              </p>

              {/* Price Lockup */}
              <div className="mb-6 pb-6 border-b border-[#EAE4DC]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-[#1B382B] tracking-tight tabular-nums">
                    0 Kč
                  </span>
                  <span className="text-sm font-medium text-[#5C6661]">/ 1. aktivní inzerát</span>
                </div>
                <p className="text-xs font-medium text-[#5C6661] mt-1.5">
                  Další inzerát: 199 Kč / 30 dní · Zvýraznění: 99 Kč
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 text-sm text-[#3A4540] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5 font-bold" />
                  <span className="font-semibold text-[#14231B]">Jeden aktivní inzerát zdarma</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <span>Přímá komunikace se zájemci</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <span>Přehledná správa přijatých zpráv</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <span>Další inzeráty za férových 199 Kč / 30 dní</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <span>Volitelné zvýraznění nabídky za 99 Kč</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onAddListing}
              className="w-full py-3.5 px-4 text-sm font-bold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-xl transition-all shadow-sm active:scale-[0.99] text-center"
            >
              Přidat nemovitost zdarma
            </button>
          </div>

          {/* CARD 3 – PROFESSIONAL LANDLORDS */}
          <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#EAE4DC] shadow-[0_4px_24px_rgba(27,56,43,0.03)] hover:shadow-[0_12px_36px_rgba(27,56,43,0.06)] transition-all flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6661]">
                  Předplatné pro správce
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#EAE4DC]/60 flex items-center justify-center text-[#5C6661]">
                  <Building2 className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#14231B] mb-2">Profesionální pronajímatel</h3>
              <p className="text-xs text-[#5C6661] mb-5">
                Pro investory, správce portfolia a provozovatele nájemního bydlení.
              </p>

              {/* Sub-tier Switcher Tabs */}
              <div className="p-1 bg-[#EAE4DC]/70 rounded-xl flex items-center gap-1 mb-6 border border-[#DDD6CA]">
                {(['start', 'business', 'premium'] as ProTier[]).map((tierKey) => (
                  <button
                    key={tierKey}
                    onClick={() => setProTier(tierKey)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      proTier === tierKey
                        ? 'bg-[#1B382B] text-[#FAF8F5] shadow-sm'
                        : 'text-[#5C6661] hover:text-[#1B382B]'
                    }`}
                  >
                    {tierKey.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Dynamic Price Display */}
              <div className="mb-6 pb-6 border-b border-[#EAE4DC]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-[#1B382B] tracking-tight tabular-nums">
                    {currentPro.price}
                  </span>
                  <span className="text-sm font-medium text-[#5C6661]">{currentPro.period}</span>
                </div>
                <div className="mt-2 text-xs font-semibold text-[#14231B] bg-[#EAE4DC]/50 px-2.5 py-1 rounded inline-block">
                  {currentPro.listingsCount}
                </div>
                <p className="text-xs text-[#5C6661] mt-1.5">
                  {currentPro.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 text-sm text-[#3A4540] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Více aktivních inzerátů</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Přehledná správa zájemců</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Centrální správa komunikace</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Statistiky zobrazení inzerátů</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>Efektivnější správa pronájmů</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectProTier(currentPro.name)}
              className="w-full py-3.5 px-4 text-sm font-semibold text-[#1B382B] bg-[#EAE4DC]/70 hover:bg-[#EAE4DC] border border-[#DDD6CA] rounded-xl transition-all active:scale-[0.99] text-center"
            >
              Vybrat tarif {currentPro.name}
            </button>
          </div>
        </div>

        {/* Closing Core Statement */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#EAE4DC]/50 text-[#1B382B] mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-[#14231B] font-editorial italic">
            „Naše pravidlo je jednoduché: za možnost najít si bydlení se neplatí.“
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#7A8580]">
            <Info className="w-3.5 h-3.5" />
            <span>Všechny ceny jsou navrhované zaváděcí ceny pro český trh. Uvedené částky jsou konečné v CZK.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
