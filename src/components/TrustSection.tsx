import React from 'react';
import { MessageSquare, BadgePercent, AlertTriangle, PhoneCall, ShieldCheck, Check } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      title: 'Přímá komunikace',
      description:
        'Komunikujete přímo se skutečným majitelem nemovitosti bez zprostředkovatelů a přeprodeje vašich kontaktních údajů třetím stranám.',
      icon: MessageSquare,
      badge: '100% přímé',
    },
    {
      title: 'Transparentní podmínky',
      description:
        'Žádné provize ve výši jednoho až dvou nájmů, žádné skryté manipulační poplatky. Přesně víte, kolik platíte a za co.',
      icon: BadgePercent,
      badge: 'Nulová provize',
    },
    {
      title: 'Žádné poplatky za kontakt',
      description:
        'Na rozdíl od jiných portálů u nás nemusíte platit SMS ani kredity za zobrazení telefonu či odeslání zprávy. Bydlení má být dostupné.',
      icon: ShieldCheck,
      badge: 'Navždy zdarma',
    },
    {
      title: 'Ochrana před podezřelými nabídkami',
      description:
        'Každý uživatel může jedním kliknutím nahlásit podezřelý inzerát nebo neférové jednání. Náš tým podněty neprodleně prověřuje.',
      icon: AlertTriangle,
      badge: 'Aktivní moderace',
    },
    {
      title: 'Ověřování telefonních čísel',
      description:
        'Plánovaná funkce: připravujeme dvoufázové ověření telefonních čísel a identit majitelů (např. přes BankID) pro maximální bezpečí.',
      icon: PhoneCall,
      badge: 'Plánovaná funkce',
      isPlanned: true,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB]/40 border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2C5E45] mb-2.5">
            Bezpečnost a férovost
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14231B] text-balance">
            Více důvěry. Méně nejistoty.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#55615B] leading-relaxed text-balance">
            Pronájem domova je zásadní životní krok. Vytváříme prostředí založené na vzájemném respektu, otevřených informacích a transparentních pravidlech.
          </p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`bg-[#FAF8F5] p-7 rounded-2xl border transition-all ${
                  pillar.isPlanned
                    ? 'border-dashed border-[#DDD6CA] bg-[#FAF8F5]/60'
                    : 'border-[#EAE4DC] shadow-[0_4px_20px_rgba(27,56,43,0.02)] hover:border-[#CBD8D0]'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAE4DC]/60 flex items-center justify-center text-[#1B382B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
                      pillar.isPlanned
                        ? 'bg-[#EAE4DC] text-[#7A8580]'
                        : 'bg-[#E5ECE7] text-[#1B382B]'
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#14231B] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#55615B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}

          {/* Guarantee Summary Box */}
          <div className="bg-[#1B382B] text-[#FAF8F5] p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CBD8D0] block mb-2">
                Náš slib
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">
                Férovost není marketing, ale základní princip.
              </h3>
              <p className="text-xs text-[#E5ECE7] leading-relaxed">
                Pokud narazíte na skryté poplatky nebo neférové zprostředkovatele, garantujeme okamžité prověření nabídky.
              </p>
            </div>
            <div className="pt-6 border-t border-[#2C5E45]/80 flex items-center gap-2 text-xs text-[#CBD8D0]">
              <Check className="w-4 h-4 text-[#8CA595]" />
              <span>Ověřený etický kodex přímého pronájmu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
