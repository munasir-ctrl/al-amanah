export interface Offer {
  slug: string;
  treatment: string;
  price: string;
  category: 'Dental' | 'Medical';
  included: string[];
  duration?: string;
  popular?: boolean;
  badge?: string;
}

export const offers: Offer[] = [
  {
    slug: 'free-gp-consultation',
    treatment: 'Free GP Consultation',
    price: 'Free',
    category: 'Medical',
    duration: '20 min',
    included: ['General practitioner consultation', 'Basic health assessment', 'Medical advice'],
    popular: true,
    badge: 'Free',
  },
  {
    slug: 'vitamin-test',
    treatment: 'Vitamin Test',
    price: 'AED 39',
    category: 'Medical',
    duration: '15 min',
    included: ['Vitamin level testing', 'Quick results', 'Basic interpretation'],
    badge: 'New',
  },
  {
    slug: 'ecg-test',
    treatment: 'ECG Test',
    price: 'AED 49',
    category: 'Medical',
    duration: '15 min',
    included: ['Electrocardiogram test', 'Heart rhythm assessment', 'Basic interpretation'],
  },
  {
    slug: 'pediatric-consultation',
    treatment: 'Pediatric Consultation',
    price: 'AED 75',
    category: 'Medical',
    duration: '30 min',
    included: ['Child health consultation', 'Growth & development check', 'Vaccination guidance'],
  },
  {
    slug: 'root-canal-treatment',
    treatment: 'Root Canal Treatment',
    price: 'AED 600',
    category: 'Dental',
    duration: '1 hour',
    included: ['Consultation', 'Local anaesthesia', 'Root canal procedure', 'Follow-up assessment'],
    popular: true,
  },
  {
    slug: 'internal-medicine-consultation',
    treatment: 'Internal Medicine Consultation',
    price: 'AED 150',
    category: 'Medical',
    duration: '30 min',
    included: ['Specialist consultation with Dr. Sabeena Ali', 'Medical assessment', 'Prescription guidance'],
  },
  {
    slug: 'executive-health-checkup',
    treatment: 'Executive Health Checkup',
    price: 'AED 750',
    category: 'Medical',
    duration: '1 hour',
    included: ['Comprehensive blood panel', 'Cardiovascular assessment', 'Specialist consultation', 'Detailed health report'],
    popular: true,
  },
  {
    slug: 'cardiology-consultation',
    treatment: 'Cardiology Consultation',
    price: 'AED 200',
    category: 'Medical',
    duration: '30 min',
    included: ['Heart health consultation', 'Blood pressure assessment', 'ECG evaluation', 'Risk assessment'],
  },
  {
    slug: 'nose-piercing',
    treatment: 'Nose Piercing',
    price: 'AED 100',
    category: 'Medical',
    duration: '15 min',
    included: ['Non-allergic titanium studs', 'Sterile procedure', 'Aftercare guidance'],
  },
  {
    slug: 'dentures-veneers',
    treatment: 'Dentures & Veneers',
    price: 'AED 2,000',
    category: 'Dental',
    included: ['Custom consultation', 'Custom-fitted prosthesis', 'Aesthetic matching'],
  },
  {
    slug: 'smile-designing',
    treatment: 'Smile Designing (Braces)',
    price: 'Custom Quote',
    category: 'Dental',
    duration: '30 min consultation',
    included: ['Smile assessment', 'Orthodontic planning', 'Custom treatment plan'],
  },
];

export const offerDisclaimer =
  'Prices may vary depending on clinical assessment. Please confirm before booking.';
