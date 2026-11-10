/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { PropertyListings } from './components/PropertyListings';
import { TrustSection } from './components/TrustSection';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { AddListingModal } from './components/AddListingModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { SAMPLE_PROPERTIES, PropertyListing } from './data/mockData';

export default function App() {
  // Filtering state
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDisposition, setSelectedDisposition] = useState('');
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  // Modals state
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(['prop-praha-vinohrady']);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleQuickFilter = (city: string, disposition: string, price: number | null) => {
    setSelectedCity(city);
    setSelectedDisposition(disposition);
    setMaxPrice(price);
  };

  const handleClearFilters = () => {
    setSelectedCity('');
    setSelectedDisposition('');
    setMaxPrice(null);
  };

  const handleToggleFavorite = (id: string, title: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
      setToastMessage(`Odebráno z oblíbených: ${title}`);
    } else {
      setFavorites([...favorites, id]);
      setToastMessage(`Uloženo do oblíbených: ${title}`);
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = (listingTitle: string) => {
    setToastMessage(`Vaše zpráva majiteli nabídky „${listingTitle}“ byla bezplatně odeslána.`);
  };

  const handleListingPublished = (title: string) => {
    setToastMessage(`Váš inzerát „${title}“ byl úspěšně publikován (Cena: 0 Kč).`);
  };

  const handleAuthSuccess = (email: string) => {
    setToastMessage(`Úspěšně přihlášen jako: ${email}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1B1F1C] flex flex-col font-sans selection:bg-[#1B382B] selection:text-[#FAF8F5]">
      {/* 1. Header */}
      <Header
        onOpenAddListing={() => setIsAddListingOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreListings={() => handleScrollToSection('nabidka')}
          onOpenAddListing={() => setIsAddListingOpen(true)}
          onQuickFilter={handleQuickFilter}
          onOpenSampleDetail={() => setSelectedProperty(SAMPLE_PROPERTIES[0])}
        />

        {/* 3. Value Proposition */}
        <ValueProposition />

        {/* 4. How It Works (Tenants & Landlords) */}
        <HowItWorks />

        {/* 5. Property Listings Preview */}
        <PropertyListings
          properties={SAMPLE_PROPERTIES}
          selectedCity={selectedCity}
          selectedDisposition={selectedDisposition}
          maxPrice={maxPrice}
          onSelectProperty={(property) => setSelectedProperty(property)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onClearFilters={handleClearFilters}
          onShowAllModal={() => {
            handleClearFilters();
            setToastMessage('Zobrazeny všechny aktuální ukázkové pronájmy.');
          }}
        />

        {/* 6. Pricing Section – Most Important */}
        <Pricing
          onStartSearch={() => handleScrollToSection('nabidka')}
          onAddListing={() => setIsAddListingOpen(true)}
          onSelectProTier={(tierName) => {
            setToastMessage(`Zvolen profesionální tarif: ${tierName}. Otevíráme registraci.`);
            setIsAddListingOpen(true);
          }}
        />

        {/* 7. Trust & Safety Section */}
        <TrustSection />

        {/* 8. Frequently Asked Questions */}
        <Faq />

        {/* 9. Final Call to Action */}
        <FinalCta
          onSearchHousing={() => handleScrollToSection('nabidka')}
          onAddListing={() => setIsAddListingOpen(true)}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onSendMessage={handleSendMessage}
      />

      <AddListingModal
        isOpen={isAddListingOpen}
        onClose={() => setIsAddListingOpen(false)}
        onSuccess={handleListingPublished}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Floating Action Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
