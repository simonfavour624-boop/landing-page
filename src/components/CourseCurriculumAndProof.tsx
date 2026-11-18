import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import {
  COURSE_MODULES,
  COURSE_ORIGINAL_PRICE_PHP,
  COURSE_PRICE_PHP,
  TESTIMONIALS,
  formatPhp,
} from '../data/studioData';
import { SafeImage } from './SafeImage';

interface CourseCurriculumAndProofProps {
  onOpenCourseModal: () => void;
}

export function CourseCurriculumAndProof({
  onOpenCourseModal,
}: CourseCurriculumAndProofProps) {
  const [expandedModule, setExpandedModule] = useState<string>('01');

  const mariaTestimonial = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[0];
  const secondaryTestimonials = TESTIMONIALS.filter((t) => t.id !== mariaTestimonial.id);

  return (
    <>
      {/* Social Proof Section: Maria in Manila 5-Star Feature + Community Reviews */}
      <section
        id="reviews"
        className="border-b border-pink-100 bg-pink-50/45 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-pink-700 sm:text-sm">
              Student Results Across the Philippines
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-zinc-900"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
            >
              Real Filipino creatives earning their first ₱10,000+
            </h2>
          </div>

          {/* Featured 5-Star Testimonial from Maria in Manila */}
          <article className="mt-8 rounded-2xl border border-pink-200 bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
              <div className="flex items-center gap-4 md:col-span-4 md:flex-col md:items-start">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-pink-100 bg-pink-50 sm:h-24 sm:w-24">
                  <SafeImage
                    src={mariaTestimonial.avatarUrl || ''}
                    alt={`${mariaTestimonial.name} in ${mariaTestimonial.city}`}
                    fallbackTitle={mariaTestimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div
                    className="flex items-center gap-1 text-orange-500"
                    aria-label={`${mariaTestimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: mariaTestimonial.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-orange-500 text-orange-500"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1.5 font-mono-tech text-xs font-medium text-zinc-700">
                      5.0 / 5.0
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-lg font-bold text-zinc-900">
                    {mariaTestimonial.name} in {mariaTestimonial.city}
                  </h3>
                  <p className="text-xs text-zinc-600 sm:text-sm">
                    {mariaTestimonial.role}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-pink-700">
                    {mariaTestimonial.outcome}
                  </p>
                </div>
              </div>

              <div className="border-t border-pink-100 pt-5 md:col-span-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <blockquote className="text-base leading-relaxed text-zinc-800 sm:text-lg">
                  “{mariaTestimonial.quote}”
                </blockquote>
              </div>
            </div>
          </article>

          {/* Secondary Student Testimonials */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {secondaryTestimonials.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-pink-100 bg-white p-6"
              >
                <div>
                  <div
                    className="flex items-center gap-1 text-orange-500"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-orange-500 text-orange-500"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1.5 font-mono-tech text-xs text-zinc-600">
                      5.0
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-pink-50 pt-4 text-xs sm:text-sm">
                  <div>
                    <p className="font-display font-bold text-zinc-900">
                      {item.name} · {item.city}
                    </p>
                    <p className="text-zinc-500">{item.role}</p>
                  </div>
                  <span className="font-semibold text-pink-700 whitespace-nowrap">
                    {item.outcome}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum + Repeat Conversion Section */}
      <section id="course" className="border-b border-pink-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Clean Numbered Modules */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-pink-600 sm:text-sm">
                Inside the Digital Course
              </p>
              <h2
                className="font-display mt-2 font-bold tracking-tight text-zinc-900"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
              >
                Six focused modules from zero shoots to ₱10,000+
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Watch on your phone or laptop at your own pace. Includes downloadable templates tailored for Philippine clients and local payment apps.
              </p>

              <div className="mt-8 divide-y divide-pink-100 border-y border-pink-100">
                {COURSE_MODULES.map((mod) => {
                  const isOpen = expandedModule === mod.number;
                  return (
                    <div key={mod.number} className="py-4">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setExpandedModule(isOpen ? '' : mod.number)
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                      >
                        <div className="flex items-baseline gap-3 sm:gap-4">
                          <span className="font-mono-tech text-sm font-semibold text-pink-600">
                            {mod.number}.
                          </span>
                          <span className="font-display text-base font-bold text-zinc-900">
                            {mod.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-mono-tech hidden text-xs text-zinc-500 sm:inline">
                            {mod.duration}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 text-zinc-500" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-zinc-500" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="mt-2.5 pl-8 pr-4">
                          <p className="text-sm leading-relaxed text-zinc-600">
                            {mod.summary}
                          </p>
                          <p className="mt-2 text-xs font-medium text-pink-700">
                            Included Template: {mod.deliverable}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Clean Course Enrollment Summary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-pink-200 bg-pink-50/50 p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wide text-pink-700">
                  Complete Digital Course Bundle
                </p>
                <h3 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-zinc-900">
                  Earn Your First ₱10,000 Online
                </h3>

                <div className="mt-4 flex items-baseline gap-3 border-b border-pink-200/80 pb-5">
                  <span className="font-mono-tech text-3xl font-extrabold text-zinc-900">
                    {formatPhp(COURSE_PRICE_PHP)}
                  </span>
                  <span className="font-mono-tech text-sm text-zinc-500 line-through">
                    {formatPhp(COURSE_ORIGINAL_PRICE_PHP)}
                  </span>
                  <span className="text-xs font-semibold text-pink-700">
                    One-time payment
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-zinc-700">
                  <li>6 HD step-by-step video lessons (lifetime access)</li>
                  <li>Editable Canva &amp; Notion Philippine Rate Card</li>
                  <li>12 Taglish &amp; English client outreach scripts</li>
                  <li>1-page freelance shoot contract &amp; GCash invoice kit</li>
                  <li>3 Tala Clean-Minimal Lightroom desktop &amp; mobile presets</li>
                </ul>

                <button
                  type="button"
                  onClick={onOpenCourseModal}
                  className="mt-7 flex min-h-[56px] w-full cursor-pointer items-center justify-center rounded-xl bg-[#EA580C] px-6 py-4 font-display text-base font-extrabold tracking-wide text-white whitespace-nowrap shadow-sm transition-all duration-150 hover:bg-[#C2410C] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  GET INSTANT ACCESS NOW
                </button>

                <p className="mt-3 text-center text-xs font-medium text-zinc-600">
                  30-day money-back guarantee | Instant download
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
