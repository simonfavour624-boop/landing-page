import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { PortfolioItem } from '../data/studioData';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} photography preview`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo lightbox"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* High-Resolution Image Viewport */}
        <div className="relative flex flex-1 items-center justify-center bg-black p-2 sm:p-4">
          <SafeImage
            src={item.imageUrl}
            alt={item.title}
            fallbackTitle={item.title}
            className="max-h-[60vh] w-auto rounded-lg object-contain lg:max-h-[82vh]"
          />

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous photograph"
              className="pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-pink-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next photograph"
              className="pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-pink-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Clean EXIF & Client Credits Panel */}
        <div className="flex w-full flex-col justify-between border-t border-zinc-800 bg-zinc-950 p-6 lg:w-80 lg:border-l lg:border-t-0">
          <div>
            <p className="text-xs font-medium text-pink-400">
              {item.category} · {item.year}
            </p>
            <h3 className="font-display mt-2 text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-300">
              {item.client} · {item.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {item.notes}
            </p>

            <dl className="mt-6 space-y-2.5 border-t border-zinc-800 pt-5 text-xs">
              <div className="flex justify-between">
                <dt className="text-zinc-400">Camera Body</dt>
                <dd className="font-mono-tech text-zinc-100">{item.exif.camera}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">Focal Length</dt>
                <dd className="font-mono-tech text-zinc-100">{item.exif.focalLength}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">Aperture</dt>
                <dd className="font-mono-tech text-zinc-100">{item.exif.aperture}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">Shutter Speed</dt>
                <dd className="font-mono-tech text-zinc-100">{item.exif.shutter}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-400">ISO</dt>
                <dd className="font-mono-tech text-zinc-100">{item.exif.iso}</dd>
              </div>
            </dl>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Use arrow keys or ESC to close
          </p>
        </div>
      </div>
    </div>
  );
}
