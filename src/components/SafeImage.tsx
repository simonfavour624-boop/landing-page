import { useState } from 'react';
import { Camera } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-pink-50 via-white to-rose-100 p-6 text-center text-zinc-600 ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white text-pink-600">
          <Camera className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-zinc-800">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
