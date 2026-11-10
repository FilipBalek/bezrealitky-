import React, { useState } from 'react';
import { Search, Mail, Calendar, UploadCloud, Users, KeyRound, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tenants' | 'landlords'>('tenants');

  const tenantSteps = [
    {
      step: '1',
      title: 'Najděte si bydlení.',
      description: 'Vyberte si z nabídky pronájmů podle lokality, ceny a svých představ.',
      detail: 'Filtrujte podle dispozice, lokality i vybavení bez nutnosti registrace.',
      icon: Search,
    },
    {
      step: '2',
      title: 'Napište majiteli.',
      description: 'Kontaktujte ho přímo a úplně zdarma.',
      detail: 'Žádné placení za telefonní číslo ani limit na počet odeslaných zpráv.',
      icon: Mail,
    },
    {
      step: '3',
      title: 'Domluvte si prohlídku.',
      description: 'Vše vyřešíte přímo s majitelem.',
      detail: 'Podmínky a termín prohlídky si dohodnete bez zprostředkovatelských provizí.',
      icon: Calendar,
    },
  ];

  const landlordSteps = [
    {
      step: '1',
      title: 'Přidejte inzerát.',
      description: 'Prezentujte svou nemovitost lidem, kteří hledají nové bydlení.',
      detail: 'Soukromý majitel má první inzerát zcela zdarma. Zveřejnění trvá pár minut.',
      icon: UploadCloud,
    },
    {
      step: '2',
      title: 'Komunikujte se zájemci.',
      description: 'Dostávejte zprávy a vybírejte si zájemce.',
      detail: 'Přímo ve zprávách vidíte profil a představení zájemce. Reagujete podle svého uvážení.',
      icon: Users,
    },
    {
      step: '3',
      title: 'Najděte nájemníka.',
      description: 'Pronajměte svou nemovitost bez provize.',
      detail: 'Veškerý nájem zůstává vám. Žádné procentní poplatky z uzavřené smlouvy.',
      icon: KeyRound,
    },
  ];

  return (
    <section id="jak-to-funguje" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2C5E45] mb-2.5">
            Jak to funguje
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14231B] text-balance">
            Jednoduše. Férově. Bez komplikací.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#55615B] text-balance">
            Přímá cesta k novému domovu i spolehlivému nájemníkovi. Bez zbytečných kroků navíc.
          </p>

          {/* Persona Flow Selector */}
          <div className="inline-flex p-1.5 mt-8 bg-[#EAE4DC]/60 rounded-xl border border-[#DDD6CA]">
            <button
              onClick={() => setActiveTab('tenants')}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'tenants'
                  ? 'bg-[#FAF8F5] text-[#1B382B] shadow-sm'
                  : 'text-[#5C6661] hover:text-[#1B382B]'
              }`}
            >
              Pro zájemce o bydlení
            </button>
            <button
              onClick={() => setActiveTab('landlords')}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'landlords'
                  ? 'bg-[#1B382B] text-[#FAF8F5] shadow-sm'
                  : 'text-[#5C6661] hover:text-[#1B382B]'
              }`}
            >
              Pro majitele nemovitostí
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {(activeTab === 'tenants' ? tenantSteps : landlordSteps).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#FFFFFF] rounded-2xl p-8 border border-[#EAE4DC] shadow-[0_4px_24px_rgba(27,56,43,0.03)] hover:border-[#CBD8D0] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step badge & icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-10 h-10 rounded-full bg-[#EAE4DC]/60 flex items-center justify-center text-sm font-bold text-[#1B382B] font-mono tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-center text-[#2C5E45]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#14231B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#3A4540] text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0ECE4] text-xs text-[#5C6661] leading-normal flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2C5E45] shrink-0 mt-0.5" />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Both Flows Side-by-Side Summary Banner */}
        <div id="pro-majitele" className="mt-14 p-6 sm:p-8 bg-[#1B382B] text-[#FAF8F5] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">Jste soukromý majitel bytu či domu?</h4>
            <p className="text-sm text-[#CBD8D0] max-w-xl">
              Váš první inzerát máte na DOMOV navždy zdarma. Vyzkoušejte si, jak snadno najdete spolehlivého nájemníka bez zbytečných provizí.
            </p>
          </div>
          <a
            href="#cenik"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#1B382B] bg-[#FAF8F5] hover:bg-[#FFFFFF] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Zobrazit podmínky pro majitele</span>
          </a>
        </div>
      </div>
    </section>
  );
};
