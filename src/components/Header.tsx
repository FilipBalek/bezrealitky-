import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Plus } from 'lucide-react';

interface HeaderProps {
  onOpenAddListing: () => void;
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAddListing, onOpenAuth }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE4DC] shadow-[0_2px_12px_rgba(27,56,43,0.04)]'
          : 'bg-[#FAF8F5] border-b border-[#EAE4DC]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#1B382B] group whitespace-nowrap shrink-0"
            aria-label="DOMOV - Hlavní stránka"
          >
            <div className="w-9 h-9 rounded-md bg-[#1B382B] flex items-center justify-center text-[#FAF8F5] transition-transform duration-200 group-hover:scale-105">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1B382B] font-sans">
                DOMOV
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#4A5550]">
            <a
              href="#nabidka"
              className="hover:text-[#1B382B] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#8CA595]/50"
            >
              Pronájmy
            </a>
            <a
              href="#jak-to-funguje"
              className="hover:text-[#1B382B] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#8CA595]/50"
            >
              Jak to funguje
            </a>
            <a
              href="#pro-majitele"
              className="hover:text-[#1B382B] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#8CA595]/50"
            >
              Pro majitele
            </a>
            <a
              href="#cenik"
              className="hover:text-[#1B382B] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#8CA595]/50"
            >
              Ceník
            </a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenAuth}
              className="px-3.5 py-2 text-[14px] font-medium text-[#1B382B] hover:text-[#13281E] transition-colors whitespace-nowrap shrink-0"
            >
              Přihlásit se
            </button>
            <button
              onClick={onOpenAddListing}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[14px] font-semibold text-[#FAF8F5] bg-[#1B382B] rounded-lg hover:bg-[#13281E] active:scale-[0.99] transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Přidat inzerát</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAddListing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#FAF8F5] bg-[#1B382B] rounded-md"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Inzerát</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B382B] hover:bg-[#EAE4DC]/50 rounded-lg"
              aria-label={mobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE4DC] bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-3">
          <a
            href="#nabidka"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#1B382B] hover:text-[#13281E]"
          >
            Pronájmy
          </a>
          <a
            href="#jak-to-funguje"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#1B382B] hover:text-[#13281E]"
          >
            Jak to funguje
          </a>
          <a
            href="#pro-majitele"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#1B382B] hover:text-[#13281E]"
          >
            Pro majitele
          </a>
          <a
            href="#cenik"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#1B382B] hover:text-[#13281E]"
          >
            Ceník
          </a>
          <div className="pt-3 border-t border-[#EAE4DC] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-[#1B382B] bg-[#EAE4DC]/40 rounded-lg"
            >
              Přihlásit se
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddListing();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#1B382B] rounded-lg"
            >
              <Plus className="w-4 h-4" />
              <span>Přidat inzerát zdarma</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
