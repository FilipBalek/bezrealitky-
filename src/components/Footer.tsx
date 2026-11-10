import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14231B] text-[#FAF8F5] pt-16 pb-12 border-t border-[#1E3328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#233A2D]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#FAF8F5] flex items-center justify-center text-[#14231B]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                DOMOV
              </span>
            </div>

            <p className="text-base font-semibold text-[#8CA595] font-editorial italic">
              „Najděte si bydlení. Ne další poplatky.“
            </p>

            <p className="text-sm text-[#CBD8D0] max-w-sm leading-relaxed">
              Česká proptech platforma pro přímý pronájem nemovitostí. Propojujeme slušné majitele s lidmi hledajícími domov bez provizí a bez placeného kontaktu.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8CA595]">
              <Shield className="w-3.5 h-3.5" />
              <span>Provozováno v České republice · CZK</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8CA595]">
              Platforma
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD8D0]">
              <li>
                <a href="#nabidka" className="hover:text-white transition-colors">
                  Pronájmy
                </a>
              </li>
              <li>
                <a href="#jak-to-funguje" className="hover:text-white transition-colors">
                  Jak to funguje
                </a>
              </li>
              <li>
                <a href="#pro-majitele" className="hover:text-white transition-colors">
                  Pro majitele
                </a>
              </li>
              <li>
                <a href="#cenik" className="hover:text-white transition-colors">
                  Ceník
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8CA595]">
              Informace & Právo
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD8D0]">
              <li>
                <a href="#cenik" className="hover:text-white transition-colors">
                  Podmínky inzerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ochrana osobních údajů
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Obchodní podmínky
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pravidla komunity
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Placeholders */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8CA595]">
              Kontakt
            </h4>
            <p className="text-sm text-[#CBD8D0]">
              Máte dotaz nebo zájem o partnerství?
            </p>
            <p className="text-sm font-semibold text-white">
              info@domov-bydleni.cz
            </p>

            {/* Social Placeholders */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#CBD8D0]">
              <span className="px-2.5 py-1 bg-[#233A2D] rounded text-[11px] font-medium hover:text-white cursor-pointer transition-colors">
                LinkedIn
              </span>
              <span className="px-2.5 py-1 bg-[#233A2D] rounded text-[11px] font-medium hover:text-white cursor-pointer transition-colors">
                Instagram
              </span>
              <span className="px-2.5 py-1 bg-[#233A2D] rounded text-[11px] font-medium hover:text-white cursor-pointer transition-colors">
                Facebook
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8580]">
          <p>© {new Date().getFullYear()} DOMOV Technologies s.r.o. Všechna práva vyhrazena.</p>
          <p>Design prototyp pro prezentaci moderní české platformy nájemního bydlení.</p>
        </div>
      </div>
    </footer>
  );
};
