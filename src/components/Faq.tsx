import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2C5E45] mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Časté otázky a odpovědi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14231B] text-balance">
            Vše, co potřebujete vědět o DOMOV.
          </h2>
          <p className="mt-3 text-base text-[#55615B] text-balance">
            Odpovědi na nejčastější dotazy zájemců o bydlení i majitelů nemovitostí.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="bg-[#FFFFFF] rounded-xl border border-[#EAE4DC] overflow-hidden transition-all duration-200 shadow-[0_2px_12px_rgba(27,56,43,0.02)]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#14231B]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EAE4DC]/50 flex items-center justify-center text-[#1B382B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1B382B] text-[#FAF8F5]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#4A5550] text-[15px] leading-relaxed border-t border-[#F5F2EB]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 p-5 bg-[#F5F2EB] rounded-xl border border-[#E4DDD3] text-center text-sm text-[#55615B]">
          Máte další otázku nebo nápad na vylepšení platformy?{' '}
          <a
            href="mailto:podpora@domov-bydleni.cz"
            className="font-semibold text-[#1B382B] hover:underline"
          >
            Napište nám na podpora@domov-bydleni.cz
          </a>
        </div>
      </div>
    </section>
  );
};
