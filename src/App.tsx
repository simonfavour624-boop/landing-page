/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AccessModal } from './components/AccessModal';
import { BookingSection } from './components/BookingSection';
import { CourseCurriculumAndProof } from './components/CourseCurriculumAndProof';
import { Header } from './components/Header';
import { HeroCourseSection } from './components/HeroCourseSection';
import { LightboxModal } from './components/LightboxModal';
import { PortfolioGallery } from './components/PortfolioGallery';
import { PORTFOLIO_ITEMS, type PortfolioItem } from './data/studioData';

export default function App() {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);

  const handleLightboxStep = (direction: -1 | 1) => {
    if (!selectedPhoto) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex(
      (item) => item.id === selectedPhoto.id,
    );
    if (currentIndex === -1) return;
    const nextIndex =
      (currentIndex + direction + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelectedPhoto(PORTFOLIO_ITEMS[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header onOpenCourseModal={() => setIsCourseModalOpen(true)} />

      <main>
        <HeroCourseSection onOpenCourseModal={() => setIsCourseModalOpen(true)} />
        <PortfolioGallery onSelectPhoto={(item) => setSelectedPhoto(item)} />
        <CourseCurriculumAndProof
          onOpenCourseModal={() => setIsCourseModalOpen(true)}
        />
        <BookingSection />
      </main>

      <footer className="border-t border-pink-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="font-display text-base font-bold text-zinc-900">
              Tala Studio
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Kapitolyo, Pasig City · Metro Manila, Philippines · hello@talastudio.ph
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600">
            <a href="#portfolio" className="hover:text-pink-600">
              Portfolio
            </a>
            <a href="#course" className="hover:text-pink-600">
              Digital Course
            </a>
            <a href="#reviews" className="hover:text-pink-600">
              Student Reviews
            </a>
            <a href="#book" className="hover:text-pink-600">
              Book a Shoot
            </a>
            <span className="text-zinc-400">
              © {new Date().getFullYear()} Tala Studio
            </span>
          </div>
        </div>
      </footer>

      <LightboxModal
        item={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={() => handleLightboxStep(-1)}
        onNext={() => handleLightboxStep(1)}
      />

      <AccessModal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
      />
    </div>
  );
}
