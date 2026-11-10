import React, { useState } from 'react';
import { PropertyListing } from '../data/mockData';
import { Heart, MapPin, Maximize2, UserCheck, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface PropertyListingsProps {
  properties: PropertyListing[];
  selectedCity: string;
  selectedDisposition: string;
  maxPrice: number | null;
  onSelectProperty: (property: PropertyListing) => void;
  favorites: string[];
  onToggleFavorite: (id: string, title: string) => void;
  onClearFilters: () => void;
  onShowAllModal: () => void;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({
  properties,
  selectedCity,
  selectedDisposition,
  maxPrice,
  onSelectProperty,
  favorites,
  onToggleFavorite,
  onClearFilters,
  onShowAllModal,
}) => {
  const [activeCityTab, setActiveCityTab] = useState<string>('Vše');

  // Filter listings
  const filteredListings = properties.filter((item) => {
    // City filter from tabs or hero
    if (activeCityTab !== 'Vše' && item.city !== activeCityTab) return false;
    if (selectedCity && item.city !== selectedCity) return false;
    // Disposition filter
    if (selectedDisposition && item.disposition !== selectedDisposition) return false;
    // Price filter
    if (maxPrice && item.priceCzk > maxPrice) return false;
    return true;
  });

  const cities = ['Vše', 'Praha', 'Brno', 'Ostrava', 'Plzeň'];

  const hasActiveFilters = Boolean(selectedCity || selectedDisposition || maxPrice);

  return (
    <section id="nabidka" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2C5E45] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ukázka aktuálních nabídek</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14231B] text-balance">
              Možná právě tady najdete svůj nový domov.
            </h2>
            <p className="mt-2 text-base text-[#55615B]">
              Všechny inzeráty jsou vloženy přímo majiteli bez realitní provize a poplatků za kontakt.
            </p>
          </div>

          {/* City Segmented Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EAE4DC]/60 rounded-xl border border-[#DDD6CA] overflow-x-auto self-start md:self-auto max-w-full">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCityTab(city)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCityTab === city
                    ? 'bg-[#1B382B] text-[#FAF8F5] shadow-sm'
                    : 'text-[#5C6661] hover:text-[#1B382B]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Filter notification if active */}
        {hasActiveFilters && (
          <div className="mb-6 p-3 bg-[#EAE4DC]/40 border border-[#DDD6CA] rounded-xl flex items-center justify-between text-xs text-[#1B382B]">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#2C5E45]" />
              <span>
                Aktivní filtry z vyhledávání: {selectedCity && `Město: ${selectedCity} `}
                {selectedDisposition && `· Dispozice: ${selectedDisposition} `}
                {maxPrice && `· Max. cena: ${maxPrice.toLocaleString('cs-CZ')} Kč`}
              </span>
            </div>
            <button
              onClick={onClearFilters}
              className="font-semibold underline hover:text-[#13281E]"
            >
              Resetovat filtry
            </button>
          </div>
        )}

        {/* Listings Grid */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-2xl border border-[#EAE4DC] p-8">
            <p className="text-base font-semibold text-[#14231B] mb-2">
              Zvoleným kritériím neodpovídá žádná ukázková nabídka.
            </p>
            <p className="text-sm text-[#5C6661] mb-6">
              Zkuste upravit cenový strop nebo zvolit jiné město.
            </p>
            <button
              onClick={onClearFilters}
              className="px-4 py-2 text-xs font-semibold text-[#1B382B] bg-[#EAE4DC] rounded-lg"
            >
              Zobrazit všechny nabídky
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredListings.map((property) => {
              const isFavorite = favorites.includes(property.id);

              return (
                <div
                  key={property.id}
                  className="group bg-[#FFFFFF] rounded-xl border border-[#EAE4DC] overflow-hidden shadow-[0_4px_16px_rgba(27,56,43,0.03)] hover:shadow-[0_12px_28px_rgba(27,56,43,0.08)] hover:border-[#CBD8D0] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] bg-[#EAE4DC] overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(property.id, property.title);
                        }}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isFavorite
                            ? 'bg-[#1B382B] text-[#FAF8F5]'
                            : 'bg-[#FAF8F5]/85 text-[#1B382B] hover:bg-[#FFFFFF]'
                        }`}
                        aria-label={isFavorite ? 'Odebrat z oblíbených' : 'Uložit do oblíbených'}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>

                      {/* Unboxed Metadata on Top */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <div className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8CA595]" />
                          <span>Přímo od majitele</span>
                        </div>
                        <span className="opacity-90">{property.disposition}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5">
                      {/* Price Lockup */}
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-[#1B382B] tabular-nums tracking-tight">
                            {property.priceCzk.toLocaleString('cs-CZ')} Kč
                          </span>
                          <span className="text-xs text-[#5C6661]">/ měsíc</span>
                        </div>
                        <span className="text-xs text-[#7A8580] tabular-nums">
                          + {property.utilitiesCzk.toLocaleString('cs-CZ')} poplatky
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-[#14231B] text-[15px] leading-snug line-clamp-1 mb-2 group-hover:text-[#1B382B] transition-colors">
                        {property.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-[#55615B] mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#8CA595] shrink-0" />
                        <span className="truncate">{property.district}</span>
                      </div>

                      {/* Key specs */}
                      <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-xs text-[#5C6661]">
                        <div className="flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#8CA595]" />
                          <span>{property.areaM2} m²</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-[#2C5E45]" />
                          <span className="truncate max-w-[100px]">{property.ownerName}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="px-5 pb-5 pt-0">
                    <button
                      onClick={() => onSelectProperty(property)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-[#1B382B] bg-[#FAF8F5] hover:bg-[#EAE4DC] border border-[#DDD6CA] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Zobrazit detail & kontaktovat</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Prototype Illustrative Notice & Full Action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#EAE4DC]/40 border border-[#DDD6CA] rounded-xl text-xs text-[#55615B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8CA595]" />
            <span>
              <strong>Poznámka k prototypu:</strong> Všechny výše uvedené nabídky jsou ilustrační ukázkou designu a konceptu přímého pronájmu bez provize.
            </span>
          </div>
          <button
            onClick={onShowAllModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Zobrazit všechny pronájmy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
