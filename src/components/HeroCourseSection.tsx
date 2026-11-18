import { Check } from 'lucide-react';
import {
  COURSE_BENEFITS,
  COURSE_ORIGINAL_PRICE_PHP,
  COURSE_PRICE_PHP,
  HERO_METRICS,
  HERO_STUDIO_IMAGE,
  formatPhp,
} from '../data/studioData';
import { SafeImage } from './SafeImage';

interface HeroCourseSectionProps {
  onOpenCourseModal: () => void;
}

export function HeroCourseSection({ onOpenCourseModal }: HeroCourseSectionProps) {
  return (
    <section
      id="top"
      className="border-b border-pink-100 bg-gradient-to-b from-white via-white to-pink-50/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        {/* 2-Column Hero Split with matching height */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Course Offer & Conversion Anchor */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-pink-700 sm:text-sm">
              Tala Studio Manila
              <span className="mx-2 text-pink-300" aria-hidden="true">
                ·
              </span>
              Freelance Photography &amp; Digital Course
            </p>

            <h1
              className="font-display mt-4 font-extrabold tracking-tight text-zinc-900"
              style={{
                fontSize: 'clamp(2.25rem, 4.1vw, 3.65rem)',
                lineHeight: 1.08,
                textWrap: 'balance',
              }}
            >
              Earn Your First{' '}
              <span className="text-pink-600">₱10,000 Online</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              A clean, step-by-step freelance photography playbook built for Filipino
              creatives—turn your camera or phone into paid Manila shoots and digital
              retainers without expensive studio gear.
            </p>

            {/* 3 Benefits with Checkmarks */}
            <ul className="mt-7 space-y-4">
              {COURSE_BENEFITS.map((benefit) => (
                <li key={benefit.id} className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-700"
                  >
                    <Check className="h-4 w-4 stroke-[2.5]" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-zinc-900 sm:text-base">
                      {benefit.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-zinc-600">
                      {benefit.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Primary Conversion Block */}
            <div className="mt-8 flex flex-col items-start">
              <div className="mb-3 flex flex-wrap items-baseline gap-3">
                <span className="font-mono-tech text-2xl font-bold text-zinc-900 sm:text-3xl">
                  {formatPhp(COURSE_PRICE_PHP)}
                </span>
                <span className="font-mono-tech text-sm text-zinc-400 line-through">
                  {formatPhp(COURSE_ORIGINAL_PRICE_PHP)}
                </span>
                <span className="text-xs font-medium text-pink-700">
                  Launch Price · GCash, Maya &amp; Card accepted
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenCourseModal}
                className="inline-flex min-h-[56px] w-full cursor-pointer items-center justify-center rounded-xl bg-[#EA580C] px-8 py-4 font-display text-base font-extrabold tracking-wide text-white whitespace-nowrap shadow-sm transition-all duration-150 hover:bg-[#C2410C] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:w-auto sm:text-lg"
              >
                GET INSTANT ACCESS NOW
              </button>

              <p className="mt-3 text-xs font-medium text-zinc-600 sm:text-sm">
                30-day money-back guarantee | Instant download
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Studio Photography Anchor */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-pink-200/80 bg-pink-50">
              <SafeImage
                src={HERO_STUDIO_IMAGE}
                alt="Freelance photographer holding a mirrorless camera in a bright pink and white Manila studio"
                fallbackTitle="Tala Studio · Manila Photography"
                className="h-full w-full object-cover object-center lg:h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 sm:p-6">
                <p className="font-display text-sm font-semibold text-white sm:text-base">
                  Tala Mendoza · Manila Creative Studio
                </p>
                <p className="mt-0.5 text-xs text-white/90">
                  Editorial Portraits · Brand Lookbooks · Creator Education
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Metrics Row Below Hero Split */}
        <div className="mt-12 grid grid-cols-2 divide-y divide-pink-100 rounded-2xl border border-pink-100 bg-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="p-5 sm:p-6">
              <p className="font-mono-tech text-2xl font-bold tracking-tight text-pink-600 sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-zinc-600 sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
