import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SHOOT_PACKAGES, formatPhp } from '../data/studioData';

export function BookingSection() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('portrait');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [shootDate, setShootDate] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<{
    name: string;
    packageName: string;
    email: string;
  } | null>(null);

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    const formEl = document.getElementById('booking-form-anchor');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (clientName.trim().length < 2) {
      setErrorMsg('Please enter your full name so we can address your inquiry.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail.trim())) {
      setErrorMsg('Please enter a valid email address for your shoot quote.');
      return;
    }

    const chosenPkg =
      SHOOT_PACKAGES.find((p) => p.id === selectedPackageId) ?? SHOOT_PACKAGES[0];

    setSubmittedBooking({
      name: clientName.trim(),
      packageName: chosenPkg.name,
      email: clientEmail.trim(),
    });
  };

  return (
    <section id="book" className="bg-pink-50/35 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-pink-700 sm:text-sm">
            Freelance Photography Services · Metro Manila
          </p>
          <h2
            className="font-display mt-2 font-bold tracking-tight text-zinc-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
          >
            Book a minimal portrait or brand shoot
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Available for studio portraits, local cafés, and editorial lookbooks across Makati, BGC, Pasig, and Quezon City.
          </p>
        </div>

        {/* 3-Column Photography Packages */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SHOOT_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-2xl border bg-white p-6 transition-colors duration-150 ${
                  isSelected
                    ? 'border-pink-400 ring-1 ring-pink-200'
                    : 'border-pink-100'
                }`}
              >
                <div>
                  <p className="text-xs font-medium text-pink-700">
                    {pkg.duration}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-bold text-zinc-900">
                    {pkg.name}
                  </h3>
                  <p className="font-mono-tech mt-3 text-2xl font-bold text-zinc-900">
                    {formatPhp(pkg.pricePhp)}
                  </p>
                  <p className="mt-1.5 text-xs text-zinc-500">
                    Ideal for: {pkg.idealFor}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-pink-50 pt-4 text-sm text-zinc-700">
                    {pkg.deliverables.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`mt-6 min-h-[44px] w-full cursor-pointer rounded-xl border px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ${
                    isSelected
                      ? 'border-pink-600 bg-pink-600 text-white hover:bg-pink-700'
                      : 'border-pink-200 bg-white text-zinc-900 hover:border-pink-400 hover:bg-pink-50'
                  }`}
                >
                  {isSelected ? 'Selected in Inquiry Form' : 'Select Package'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Minimalist Lead Capture / Shoot Inquiry Form */}
        <div
          id="booking-form-anchor"
          className="mt-10 rounded-2xl border border-pink-100 bg-white p-6 sm:p-8"
        >
          {submittedBooking ? (
            <div className="flex flex-col items-start gap-3 py-4">
              <div className="flex items-center gap-2.5 text-pink-700">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-zinc-900">
                  Shoot inquiry received
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                Thank you, {submittedBooking.name}. We sent a confirmation and Manila studio availability calendar for{' '}
                <strong className="font-semibold text-zinc-900">
                  {submittedBooking.packageName}
                </strong>{' '}
                to <span className="font-medium text-zinc-900">{submittedBooking.email}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmittedBooking(null);
                  setClientName('');
                  setClientEmail('');
                  setShootDate('');
                  setNotes('');
                }}
                className="mt-2 min-h-[40px] cursor-pointer rounded-lg border border-pink-200 px-4 py-2 text-sm font-semibold text-pink-700 transition-colors hover:bg-pink-50"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col justify-between gap-2 border-b border-pink-100 pb-5 sm:flex-row sm:items-end">
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-900">
                    Request Shoot Availability
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    Replies within 24 hours with a custom rate card and studio calendar.
                  </p>
                </div>
                <span className="text-xs font-medium text-zinc-500">
                  Manila Studio · hello@talastudio.ph
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-semibold text-zinc-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g., Sofia Navarro"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs font-semibold text-zinc-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="sofia@brand.ph"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-package"
                    className="block text-xs font-semibold text-zinc-700"
                  >
                    Photography Package
                  </label>
                  <select
                    id="booking-package"
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  >
                    {SHOOT_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({formatPhp(pkg.pricePhp)})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-semibold text-zinc-700"
                  >
                    Target Shoot Date (Optional)
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold text-zinc-700"
                  >
                    Shoot Concept or Location Notes
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your brand, preferred Manila location, or moodboard ideas..."
                    className="mt-1.5 w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  />
                </div>
              </div>

              {errorMsg && (
                <p role="alert" className="mt-4 text-sm font-medium text-rose-700">
                  {errorMsg}
                </p>
              )}

              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-zinc-500">
                  50% GCash or bank deposit reserves your date upon confirmation.
                </p>
                <button
                  type="submit"
                  className="min-h-[46px] w-full cursor-pointer rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 sm:w-auto"
                >
                  Request Shoot Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
