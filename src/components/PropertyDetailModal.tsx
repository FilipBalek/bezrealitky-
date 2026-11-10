import React, { useState } from 'react';
import { PropertyListing } from '../data/mockData';
import { X, Check, MapPin, Maximize2, ShieldCheck, Send, Clock, UserCheck } from 'lucide-react';

interface PropertyDetailModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onSendMessage: (listingTitle: string, message: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onSendMessage,
}) => {
  const [tenantName, setTenantName] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [message, setMessage] = useState('Dobrý den, mám velký zájem o Váš byt a rád bych se domluvil na nezávazné osobní prohlídce. Jsem pracující nekuřák bez domácích mazlíčků.');
  const [sent, setSent] = useState(false);

  if (!property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenantName || !tenantEmail) return;
    setSent(true);
    setTimeout(() => {
      onSendMessage(property.title, message);
      setSent(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EAE4DC] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF8F5]/90 hover:bg-[#FFFFFF] text-[#1B382B] flex items-center justify-center transition-colors shadow-sm"
          aria-label="Zavřít detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#EAE4DC] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-[#CBD8D0] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#8CA595]" />
              <span>Přímo od majitele</span>
              <span>·</span>
              <span>Bez provize realitce</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-[#E5ECE7] mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.addressSummary} ({property.district})</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Key Figures Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FFFFFF] rounded-xl border border-[#EAE4DC]">
            <div>
              <p className="text-xs text-[#5C6661]">Měsíční nájem</p>
              <p className="text-lg font-bold text-[#1B382B] tabular-nums mt-0.5">
                {property.priceCzk.toLocaleString('cs-CZ')} Kč
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5C6661]">Zálohy na služby</p>
              <p className="text-lg font-bold text-[#14231B] tabular-nums mt-0.5">
                {property.utilitiesCzk.toLocaleString('cs-CZ')} Kč
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5C6661]">Dispozice a plocha</p>
              <p className="text-lg font-bold text-[#14231B] mt-0.5">
                {property.disposition} · {property.areaM2} m²
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5C6661]">Vratná kauce</p>
              <p className="text-lg font-bold text-[#14231B] tabular-nums mt-0.5">
                {property.depositCzk.toLocaleString('cs-CZ')} Kč
              </p>
            </div>
          </div>

          {/* Description & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#14231B]">
                O nemovitosti
              </h3>
              <p className="text-sm text-[#4A5550] leading-relaxed">
                {property.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#14231B] pt-2">
                Vybavení a výhody
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3A4540]">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2C5E45] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Landlord Card & Free Message Form */}
            <div className="md:col-span-5 bg-[#FFFFFF] p-5 rounded-xl border border-[#EAE4DC] space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#F0ECE4]">
                <div className="w-10 h-10 rounded-full bg-[#E5ECE7] flex items-center justify-center text-[#1B382B] font-bold text-sm">
                  {property.ownerName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14231B]">{property.ownerName}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#5C6661]">
                    <Clock className="w-3 h-3 text-[#8CA595]" />
                    <span>{property.ownerResponseTime}</span>
                  </div>
                </div>
              </div>

              {/* Free contact promise callout */}
              <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EAE4DC] flex items-center gap-2 text-xs text-[#2C5E45] font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Kontaktování majitele je 100% zdarma</span>
              </div>

              {/* Message Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C6661] uppercase mb-1">
                    Vaše jméno a příjmení
                  </label>
                  <input
                    type="text"
                    required
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Např. Jan Novák"
                    className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg px-3 py-1.5 text-xs text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C6661] uppercase mb-1">
                      Váš e-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={tenantEmail}
                      onChange={(e) => setTenantEmail(e.target.value)}
                      placeholder="jan@email.cz"
                      className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg px-3 py-1.5 text-xs text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#5C6661] uppercase mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={tenantPhone}
                      onChange={(e) => setTenantPhone(e.target.value)}
                      placeholder="+420 777 000 000"
                      className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg px-3 py-1.5 text-xs text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#5C6661] uppercase mb-1">
                    Zpráva pro majitele
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DDD6CA] rounded-lg p-2.5 text-xs text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] disabled:bg-[#2C5E45] rounded-lg transition-colors shadow-sm"
                >
                  {sent ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Odesláno majiteli!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Odeslat zprávu zdarma</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
