import React from 'react';
import { MessageSquareOff, UserCheck, Banknote } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const benefits = [
    {
      index: '01',
      title: 'Kontakt zdarma',
      description:
        'Každému majiteli můžete napsat bez placení. Bez limitů a bez skrytých poplatků.',
      highlight: 'Žádné SMS ani prémiové kredity',
      icon: MessageSquareOff,
    },
    {
      index: '02',
      title: 'Přímo od majitelů',
      description:
        'Komunikujete přímo s člověkem, který nemovitost pronajímá.',
      highlight: 'Rovné a osobní jednání',
      icon: UserCheck,
    },
    {
      index: '03',
      title: 'Bez provize',
      description:
        'Neplatíte procenta z nájemného ani poplatek za možnost kontaktovat majitele.',
      highlight: 'Ušetříte 1 celý nájem',
      icon: Banknote,
    },
  ];

  return (
    <section className="py-16 lg:py-24 border-y border-[#EAE4DC] bg-[#F5F2EB]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2C5E45] mb-2.5">
            Základní filozofie platformy DOMOV
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14231B] text-balance">
            Bydlení hledáte. Ne další poplatky.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#55615B] text-balance">
            Český trh s nájemním bydlením byl dlouho plný zbytečných bariér. Vytvořili jsme prostor, kde se obě strany potkávají za rovných a férových podmínek.
          </p>
        </div>

        {/* 3 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.index}
                className="group relative bg-[#FAF8F5] p-8 rounded-xl border border-[#E4DDD3] shadow-[0_4px_20px_rgba(27,56,43,0.03)] hover:shadow-[0_12px_32px_rgba(27,56,43,0.08)] hover:border-[#CBD8D0] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold tracking-wider text-[#8CA595] font-mono tabular-nums">
                      {item.index}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#EAE4DC]/60 flex items-center justify-center text-[#1B382B] group-hover:bg-[#1B382B] group-hover:text-[#FAF8F5] transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Benefit Title */}
                  <h3 className="text-xl font-bold text-[#14231B] mb-3 group-hover:text-[#1B382B] transition-colors">
                    {item.title}
                  </h3>

                  {/* Benefit Description */}
                  <p className="text-[#55615B] text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-8 pt-4 border-t border-[#EAE4DC] flex items-center gap-2 text-xs font-medium text-[#2C5E45]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C5E45]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
