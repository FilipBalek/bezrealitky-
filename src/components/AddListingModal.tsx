import React, { useState } from 'react';
import { X, Check, Building, KeyRound, Sparkles, Upload, ArrowRight } from 'lucide-react';

interface AddListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (title: string) => void;
}

export const AddListingModal: React.FC<AddListingModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [ownerType, setOwnerType] = useState<'private' | 'pro'>('private');
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('Praha');
  const [disposition, setDisposition] = useState('2+kk');
  const [price, setPrice] = useState('21000');
  const [utilities, setUtilities] = useState('3800');

  if (!isOpen) return null;

  const handleFinish = () => {
    onSuccess(title || `Nový byt ${disposition} v lokalitě ${city}`);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE4DC]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EAE4DC]/60 hover:bg-[#EAE4DC] text-[#1B382B] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[#5C6661] font-medium">
          <span className={`px-2 py-0.5 rounded ${step === 1 ? 'bg-[#1B382B] text-white font-bold' : 'bg-[#EAE4DC]'}`}>
            1. Typ nabídky
          </span>
          <span>→</span>
          <span className={`px-2 py-0.5 rounded ${step === 2 ? 'bg-[#1B382B] text-white font-bold' : 'bg-[#EAE4DC]'}`}>
            2. Parametry bytu
          </span>
          <span>→</span>
          <span className={`px-2 py-0.5 rounded ${step === 3 ? 'bg-[#1B382B] text-white font-bold' : 'bg-[#EAE4DC]'}`}>
            3. Shrnutí & 0 Kč
          </span>
        </div>

        {/* Step 1: Owner Type */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#14231B]">
                Jakou nemovitost nabízíte?
              </h3>
              <p className="text-sm text-[#5C6661] mt-1">
                Pro soukromé majitele je první inzerát na platformě DOMOV zcela zdarma.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setOwnerType('private')}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                  ownerType === 'private'
                    ? 'border-[#1B382B] bg-[#FFFFFF] shadow-sm'
                    : 'border-[#EAE4DC] hover:border-[#CBD8D0] bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5ECE7] flex items-center justify-center text-[#1B382B]">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#2C5E45] bg-[#E5ECE7] px-2 py-0.5 rounded">
                    0 Kč ZDARMA
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#14231B]">Soukromý majitel</h4>
                <p className="text-xs text-[#5C6661] mt-1">
                  Pronajímám 1 vlastní byt nebo dům. První inzerát je navždy bez poplatku.
                </p>
              </div>

              <div
                onClick={() => setOwnerType('pro')}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                  ownerType === 'pro'
                    ? 'border-[#1B382B] bg-[#FFFFFF] shadow-sm'
                    : 'border-[#EAE4DC] hover:border-[#CBD8D0] bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAE4DC] flex items-center justify-center text-[#5C6661]">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-[#5C6661]">
                    Od 499 Kč / měs.
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#14231B]">Profesionální správce</h4>
                <p className="text-xs text-[#5C6661] mt-1">
                  Mám více než 3 byty, zastupuji developerský projekt nebo bytový dům.
                </p>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-xl transition-all"
            >
              <span>Pokračovat k parametrům</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Apartment Specs */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-[#14231B]">
                Údaje o vašem bytě
              </h3>
              <p className="text-xs text-[#5C6661] mt-1">
                Zadejte základní parametry, aby vás zájemci rychle našli.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#5C6661] uppercase mb-1">
                  Výstižný název inzerátu
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Např. Slunný 2+kk po rekonstrukci u metra"
                  className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3.5 py-2 text-sm text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5C6661] uppercase mb-1">
                    Město
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3 py-2 text-sm text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                  >
                    <option value="Praha">Praha</option>
                    <option value="Brno">Brno</option>
                    <option value="Ostrava">Ostrava</option>
                    <option value="Plzeň">Plzeň</option>
                    <option value="Olomouc">Olomouc</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C6661] uppercase mb-1">
                    Dispozice
                  </label>
                  <select
                    value={disposition}
                    onChange={(e) => setDisposition(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3 py-2 text-sm text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                  >
                    <option value="1+kk">1+kk</option>
                    <option value="2+kk">2+kk</option>
                    <option value="2+1">2+1</option>
                    <option value="3+kk">3+kk</option>
                    <option value="4+kk">4+kk a větší</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5C6661] uppercase mb-1">
                    Čistý nájem (Kč / měs.)
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3 py-2 text-sm text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C6661] uppercase mb-1">
                    Poplatky za služby (Kč)
                  </label>
                  <input
                    type="number"
                    value={utilities}
                    onChange={(e) => setUtilities(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3 py-2 text-sm text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                  />
                </div>
              </div>

              {/* Photo placeholder zone */}
              <div className="p-4 border-2 border-dashed border-[#DDD6CA] rounded-xl text-center bg-[#FFFFFF]">
                <Upload className="w-5 h-5 mx-auto text-[#8CA595] mb-1" />
                <p className="text-xs font-semibold text-[#14231B]">Přetáhněte fotografie bytu</p>
                <p className="text-[11px] text-[#5C6661]">Nebo klikněte pro výběr z počítače</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-2.5 px-3 text-xs font-semibold text-[#5C6661] bg-[#EAE4DC]/50 rounded-lg"
              >
                Zpět
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-lg transition-all"
              >
                <span>Náhled a publikace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Summary & 0 Kč Confirmation */}
        {step === 3 && (
          <div className="space-y-5 text-center">
            <div className="w-12 h-12 rounded-full bg-[#E5ECE7] text-[#1B382B] mx-auto flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#14231B]">
                Váš inzerát je připraven k vystavení
              </h3>
              <p className="text-sm text-[#5C6661] mt-1">
                Konečná cena za vložení: <strong className="text-[#1B382B] font-bold text-base">0 Kč (ZDARMA)</strong>
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#EAE4DC] text-left text-xs space-y-1.5">
              <p className="font-semibold text-sm text-[#14231B]">
                {title || `Krásný byt ${disposition} v lokalitě ${city}`}
              </p>
              <p className="text-[#5C6661]">
                Město: {city} · Dispozice: {disposition}
              </p>
              <p className="text-[#1B382B] font-bold tabular-nums">
                Nájemné: {parseInt(price || '0', 10).toLocaleString('cs-CZ')} Kč / měsíc (+ {parseInt(utilities || '0', 10).toLocaleString('cs-CZ')} Kč služby)
              </p>
              <p className="text-[#2C5E45] font-semibold pt-1 border-t border-[#F0ECE4]">
                ✓ Žádná provize z nájemného · Přímý kontakt se zájemci
              </p>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 px-4 text-sm font-bold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-xl transition-all shadow-md"
            >
              Zveřejnit inzerát zdarma
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
