import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Download, Lock, X } from 'lucide-react';
import {
  COURSE_ORIGINAL_PRICE_PHP,
  COURSE_PRICE_PHP,
  formatPhp,
} from '../data/studioData';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'GCash' | 'Maya' | 'Card / Bank';

export function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('GCash');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const finalPrice = promoApplied ? COURSE_PRICE_PHP - 200 : COURSE_PRICE_PHP;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FIRST10K') {
      setPromoApplied(true);
      setErrorMsg('');
    } else {
      setPromoApplied(false);
      setErrorMsg('Try promo code FIRST10K for ₱200 student savings.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (fullName.trim().length < 2) {
      setErrorMsg('Please enter your name for your course receipt.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address to receive your instant download link.');
      return;
    }

    setIsCompleted(true);
  };

  const handleDownloadStarterKit = () => {
    const content = [
      'EARN YOUR FIRST ₱10,000 ONLINE — TALA STUDIO STARTER KIT',
      '========================================================',
      `Student: ${fullName || 'Filipino Creative'}`,
      `Payment Method: ${paymentMethod}`,
      `Total Paid: ${formatPhp(finalPrice)}`,
      '',
      'INCLUDED MODULES & TEMPLATES:',
      '01. Minimalist Starter Portfolio Checklist (PDF)',
      '02. Philippine ₱10,000 Rate Card Blueprint (Canva & Notion)',
      '03. 12 Taglish & English Client Pitch Scripts',
      '04. Natural Daylight & Pink-White Presets Pack',
      '05. 1-Page Freelance Contract & GCash Invoice Sheet',
      '06. Monthly Retainer Proposal Deck',
      '',
      '30-Day Money-Back Guarantee: Email hello@talastudio.ph anytime.',
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Earn-Your-First-10000-Online-Starter-Kit.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-pink-200 bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enrollment window"
          className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-pink-50 hover:text-zinc-900"
        >
          <X className="h-5 w-5" />
        </button>

        {isCompleted ? (
          <div className="py-2">
            <div className="flex items-center gap-2.5 text-pink-700">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Enrollment Confirmed
              </span>
            </div>

            <h2
              id="access-modal-title"
              className="font-display mt-3 text-2xl font-extrabold text-zinc-900"
            >
              Welcome to Earn Your First ₱10,000 Online
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Your access link and {paymentMethod} receipt ({formatPhp(finalPrice)}) have been prepared for{' '}
              <strong className="font-semibold text-zinc-900">{email}</strong>.
            </p>

            <div className="mt-6 rounded-xl border border-pink-100 bg-pink-50/60 p-4 text-sm text-zinc-700">
              <p className="font-display font-bold text-zinc-900">
                Your Instant Download Bundle is ready
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Download your starter syllabus, Philippine rate card checklist, and outreach guide right away.
              </p>
              <button
                type="button"
                onClick={handleDownloadStarterKit}
                className="mt-4 inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EA580C] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C2410C]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Starter Kit Now
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsCompleted(false);
                onClose();
              }}
              className="mt-5 min-h-[40px] w-full cursor-pointer rounded-lg border border-pink-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-pink-50"
            >
              Return to Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="text-xs font-semibold text-pink-700">
              Instant Digital Course Access
            </p>
            <h2
              id="access-modal-title"
              className="font-display mt-1 text-2xl font-extrabold text-zinc-900"
            >
              Earn Your First ₱10,000 Online
            </h2>

            <div className="mt-4 flex items-baseline justify-between rounded-xl border border-pink-100 bg-pink-50/50 p-4">
              <div>
                <p className="text-xs text-zinc-600">One-time payment</p>
                <p className="font-mono-tech text-2xl font-extrabold text-zinc-900">
                  {formatPhp(finalPrice)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono-tech text-xs text-zinc-400 line-through">
                  {formatPhp(COURSE_ORIGINAL_PRICE_PHP)}
                </p>
                <p className="text-xs font-semibold text-pink-700">
                  {promoApplied ? '₱200 student promo applied' : 'Launch offer'}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="modal-fullname"
                  className="block text-xs font-semibold text-zinc-700"
                >
                  Full Name
                </label>
                <input
                  id="modal-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Maria Santos"
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-pink-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-semibold text-zinc-700"
                >
                  Email for Instant Download
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maria@gmail.com"
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-pink-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  required
                />
              </div>

              <div>
                <span className="block text-xs font-semibold text-zinc-700">
                  Preferred Philippine Payment Method
                </span>
                <div className="mt-1.5 grid grid-cols-3 gap-2">
                  {(['GCash', 'Maya', 'Card / Bank'] as PaymentMethod[]).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`min-h-[42px] cursor-pointer rounded-xl border px-2 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                        paymentMethod === method
                          ? 'border-pink-600 bg-pink-50 text-pink-700'
                          : 'border-pink-100 bg-white text-zinc-700 hover:border-pink-300'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-promo"
                  className="block text-xs font-semibold text-zinc-700"
                >
                  Promo Code (Optional: FIRST10K)
                </label>
                <div className="mt-1.5 flex gap-2">
                  <input
                    id="modal-promo"
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="FIRST10K"
                    className="min-h-[44px] flex-1 rounded-xl border border-pink-200 px-3.5 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="min-h-[44px] cursor-pointer rounded-xl border border-pink-200 px-4 text-xs font-semibold text-pink-700 whitespace-nowrap transition-colors hover:bg-pink-50"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {errorMsg && (
              <p role="alert" className="mt-3 text-xs font-medium text-rose-700">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 flex min-h-[54px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EA580C] px-6 py-3.5 font-display text-base font-extrabold tracking-wide text-white transition-colors hover:bg-[#C2410C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <Lock className="h-4 w-4" aria-hidden="true" />
              GET INSTANT ACCESS NOW
            </button>

            <p className="mt-3 text-center text-xs font-medium text-zinc-600">
              30-day money-back guarantee | Instant download
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
