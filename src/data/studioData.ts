export type PortfolioCategory = 'All' | 'Portraits' | 'Brand & Cafe' | 'Editorial Desk';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: Exclude<PortfolioCategory, 'All'>;
  year: string;
  imageUrl: string;
  aspectClass: string;
  spanClass: string;
  exif: {
    camera: string;
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  notes: string;
}

export interface CourseBenefit {
  id: string;
  title: string;
  detail: string;
}

export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  summary: string;
  deliverable: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  outcome: string;
  quote: string;
  avatarUrl?: string;
  initials: string;
  rating: number;
  featured?: boolean;
}

export interface ShootPackage {
  id: string;
  name: string;
  pricePhp: number;
  duration: string;
  idealFor: string;
  deliverables: string[];
}

export const COURSE_PRICE_PHP = 1499;
export const COURSE_ORIGINAL_PRICE_PHP = 2999;

export const HERO_STUDIO_IMAGE =
  '/src/assets/images/hero_photographer_studio_1795010530845.jpg';

export const COURSE_BENEFITS: CourseBenefit[] = [
  {
    id: 'outreach',
    title: 'Land your first paying clients in 14 days',
    detail:
      'Copy-and-send Taglish and English pitch scripts for local cafes, founders, and portrait clients—even with zero prior portfolio.',
  },
  {
    id: 'pricing',
    title: 'Price ₱3,500–₱10,000 packages with confidence',
    detail:
      'Includes Philippine-ready rate card templates, GCash & Maya invoicing checklists, and simple 1-page client agreements.',
  },
  {
    id: 'workflow',
    title: 'Shoot clean editorial photos with gear you own',
    detail:
      'Master natural window lighting, minimal pink-and-white color grading presets, and fast client gallery delivery.',
  },
];

export const HERO_METRICS = [
  {
    value: '14 Days',
    label: 'Average time to first paid client shoot',
  },
  {
    value: '₱10,000+',
    label: 'First-month freelance income target',
  },
  {
    value: '420+',
    label: 'Filipino creatives enrolled nationwide',
  },
  {
    value: '6 Modules',
    label: 'HD video lessons & Philippine templates',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'linen-editorial-makati',
    title: 'Soft Plaster Linen Series',
    client: 'Solenne Manila Lookbook',
    location: 'Makati, Metro Manila',
    category: 'Portraits',
    year: '2026',
    imageUrl: '/src/assets/images/portfolio_editorial_portrait_1795010531025.jpg',
    aspectClass: 'aspect-[3/4] lg:aspect-auto lg:h-full',
    spanClass: 'lg:col-span-5 lg:row-span-2',
    exif: {
      camera: 'Fujifilm X-T5',
      focalLength: '50mm',
      aperture: 'f/1.8',
      shutter: '1/500s',
      iso: '160',
    },
    notes:
      'Natural side-window portrait session shot on pale blush limewash plaster without artificial strobes.',
  },
  {
    id: 'aveline-cafe-bgc',
    title: 'Morning Pour & Peony Table',
    client: 'Aveline Roastery',
    location: 'BGC, Taguig',
    category: 'Brand & Cafe',
    year: '2026',
    imageUrl: '/src/assets/images/portfolio_cafe_brand_1795010532279.jpg',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-7',
    exif: {
      camera: 'Sony A7 IV',
      focalLength: '35mm',
      aperture: 'f/2.8',
      shutter: '1/320s',
      iso: '200',
    },
    notes:
      'Half-day commercial menu and social campaign captured on travertine marble during early morning window light.',
  },
  {
    id: 'studio-desk-kit',
    title: 'Minimalist Rate Card & Studio Desk',
    client: 'Tala Studio Editorial',
    location: 'Kapitolyo, Pasig',
    category: 'Editorial Desk',
    year: '2026',
    imageUrl: '/src/assets/images/portfolio_creative_workspace_1795010531884.jpg',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-4',
    exif: {
      camera: 'Fujifilm X-T5',
      focalLength: '23mm',
      aperture: 'f/4.0',
      shutter: '1/160s',
      iso: '320',
    },
    notes:
      'Overhead flat-lay documenting the exact client rate card and studio workflow taught inside the course.',
  },
  {
    id: 'daylight-portrait-studio',
    title: 'Daylight Backdrop Session',
    client: 'Founder Personal Branding',
    location: 'Ortigas, Pasig',
    category: 'Portraits',
    year: '2026',
    imageUrl: '/src/assets/images/hero_photographer_studio_1795010530845.jpg',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-3',
    exif: {
      camera: 'Sony A7 IV',
      focalLength: '35mm',
      aperture: 'f/2.2',
      shutter: '1/400s',
      iso: '250',
    },
    notes:
      'Behind-the-scenes studio portrait session pairing seamless blush backdrop paper with crisp window diffusion.',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    number: '01',
    title: 'Your Minimalist Starter Portfolio in One Weekend',
    duration: '28 mins',
    summary:
      'Curate 8–12 cohesive test shots using friends, local cafés, or everyday objects so clients immediately trust your eye.',
    deliverable: 'Portfolio Checklist & Shot List PDF',
  },
  {
    number: '02',
    title: 'The ₱10,000 Pricing & Package Blueprint',
    duration: '34 mins',
    summary:
      'Break down ₱10,000 into two ₱5,000 brand shoots or three ₱3,500 portrait sessions—priced cleanly for the Philippine market.',
    deliverable: 'Editable Canva & Notion Rate Card',
  },
  {
    number: '03',
    title: 'Taglish & English Client Outreach That Converts',
    duration: '31 mins',
    summary:
      'Where to find paying café owners, Shopee/Instagram brands, and graduation/portrait clients in Metro Manila and online.',
    deliverable: '12 Proven DM & Email Pitch Scripts',
  },
  {
    number: '04',
    title: 'Natural Daylight & Minimal Color Grading',
    duration: '42 mins',
    summary:
      'Capture crisp skin tones, clean whites, and soft editorial contrast without buying expensive studio strobes.',
    deliverable: '3 Tala Clean-Minimal Lightroom Presets',
  },
  {
    number: '05',
    title: 'Contracts, Downpayments & GCash/Maya Workflows',
    duration: '24 mins',
    summary:
      'Protect your time with 50% booking deposits, clear revision limits, and stress-free Philippine payment invoicing.',
    deliverable: '1-Page Freelance Contract & Invoice Template',
  },
  {
    number: '06',
    title: 'Gallery Delivery & Repeat Retainer Clients',
    duration: '26 mins',
    summary:
      'Turn one-off ₱3,500 bookings into recurring monthly content retainers for growing Filipino businesses.',
    deliverable: 'Monthly Retainer Proposal Deck',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'maria-manila',
    name: 'Maria',
    city: 'Manila',
    role: 'Freelance Portrait & Brand Photographer',
    outcome: 'Earned ₱12,500 in 3 weeks',
    quote:
      'Before enrolling in Earn Your First ₱10,000 Online, I was only taking unpaid photos for friends and felt nervous quoting prices. After following Module 2 and sending the cafe outreach script, I booked two paid shoots in Makati and earned ₱12,500 within three weeks.',
    avatarUrl: '/src/assets/images/avatar_maria_manila_1795010532407.jpg',
    initials: 'MM',
    rating: 5,
    featured: true,
  },
  {
    id: 'bea-qc',
    name: 'Bea Dizon',
    city: 'Quezon City',
    role: 'Lifestyle & Product Photographer',
    outcome: 'First ₱10,500 month',
    quote:
      'The Canva rate card and GCash deposit workflow alone made me look like an established studio. Two local skincare brands booked my ₱5,250 mini-lookbook package in the same week.',
    initials: 'BD',
    rating: 5,
  },
  {
    id: 'carlo-cebu',
    name: 'Carlo Mendoza',
    city: 'Cebu City',
    role: 'Weekend Event & Portrait Creative',
    outcome: '3 bookings in 14 days',
    quote:
      'Super clear and practical for Filipino creatives—walang fluff. I used the natural light checklist with just my entry-level kit lens and already recovered the course fee five times over.',
    initials: 'CM',
    rating: 5,
  },
];

export const SHOOT_PACKAGES: ShootPackage[] = [
  {
    id: 'portrait',
    name: 'Minimalist Portrait Session',
    pricePhp: 4500,
    duration: '90 mins · Manila Studio or Natural Light',
    idealFor: 'Founders, creatives, graduation & personal branding',
    deliverables: [
      '25 high-resolution edited portraits',
      '2 wardrobe & backdrop styling changes',
      'Private online gallery within 5 business days',
    ],
  },
  {
    id: 'brand',
    name: 'Brand & Cafe Lookbook',
    pricePhp: 9500,
    duration: 'Half-Day (4 hrs) · On-Location',
    idealFor: 'Cafes, local skincare, fashion & food startups',
    deliverables: [
      '50 editorial product & lifestyle photographs',
      'Vertical & square social media crops included',
      'Commercial usage rights for web and socials',
    ],
  },
  {
    id: 'editorial',
    name: 'Full-Day Editorial Campaign',
    pricePhp: 15000,
    duration: 'Full-Day (8 hrs) · Studio + Location',
    idealFor: 'Seasonal campaigns, lookbooks & multi-SKU launches',
    deliverables: [
      '100+ retouched campaign images',
      'Pre-shoot creative moodboard & shot list',
      'Priority 72-hour express gallery delivery',
    ],
  },
];

export function formatPhp(amount: number): string {
  return `₱${amount.toLocaleString('en-PH')}`;
}
