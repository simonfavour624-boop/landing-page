import { useState } from 'react';
import { Expand } from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
  type PortfolioItem,
} from '../data/studioData';
import { SafeImage } from './SafeImage';

interface PortfolioGalleryProps {
  onSelectPhoto: (item: PortfolioItem) => void;
}

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Portraits',
  'Brand & Cafe',
  'Editorial Desk',
];

export function PortfolioGallery({ onSelectPhoto }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="border-b border-pink-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wide text-pink-600 sm:text-sm">
              Selected Photography Works
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-zinc-900"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
            >
              Clean, minimal photography crafted in natural light
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Every frame below was shot on location in Metro Manila and delivered using the exact workflow inside the course.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Elements) */}
          <div
            role="tablist"
            aria-label="Filter photography portfolio by category"
            className="flex flex-wrap items-center gap-1 self-start rounded-xl border border-pink-100 bg-pink-50/60 p-1 sm:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[38px] cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 sm:text-sm ${
                    isActive
                      ? 'bg-white text-pink-700 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media-First Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {filteredItems.map((item) => {
            const isGridFull = activeCategory === 'All';
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPhoto(item)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white text-left transition-all duration-200 hover:border-pink-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ${
                  isGridFull ? item.spanClass : 'lg:col-span-6'
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-pink-50 ${
                    isGridFull ? item.aspectClass : 'aspect-[4/3]'
                  }`}
                >
                  <SafeImage
                    src={item.imageUrl}
                    alt={`${item.title} — ${item.client} in ${item.location}`}
                    fallbackTitle={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-800 opacity-0 shadow-xs transition-opacity duration-150 group-hover:opacity-100"
                  >
                    <Expand className="h-4 w-4" />
                  </span>
                </div>

                {/* Clean Unboxed Metadata */}
                <div className="flex flex-col gap-1.5 p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-base font-bold text-zinc-900 sm:text-lg">
                      {item.title}
                    </h3>
                    <span className="font-mono-tech text-xs text-zinc-500 shrink-0">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 sm:text-sm">
                    <span>{item.client}</span>
                    <span className="mx-2 text-pink-300" aria-hidden="true">
                      ·
                    </span>
                    <span>{item.location}</span>
                  </p>

                  <p className="font-mono-tech mt-1 text-[11px] text-zinc-500">
                    {item.exif.focalLength} · {item.exif.aperture} · {item.exif.shutter} · ISO {item.exif.iso}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
