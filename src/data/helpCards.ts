export interface HelpCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const helpCards: HelpCard[] = [
  {
    id: 'dental',
    title: 'Dental Care',
    description: 'Tooth pain, cleaning, fillings, root canal, restorative and cosmetic dentistry',
    icon: 'Smile',
    link: '/services/dental-care', // Updated to match standard service routes
  },
  {
    id: 'internal-medicine',
    title: 'Internal Medicine',
    description: 'Diabetes, hypertension, chronic and general medical conditions',
    icon: 'Stethoscope',
    link: '/services/internal-medicine',
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Heart health and advanced cardiovascular consultations',
    icon: 'HeartPulse',
    link: '/services/cardiology',
  },
  {
    id: 'general-practice',
    title: 'General Practice',
    description: 'Frontline primary care and routine health evaluations',
    icon: 'UserCheck',
    link: '/services/general-practice',
  },
  {
    id: 'unani',
    title: 'Unani Medicine',
    description: 'Traditional Unani medical treatments and natural regimen therapies',
    icon: 'Leaf',
    link: '/services/unani-medicine',
  },
  {
    id: 'homoeopathy',
    title: 'Homoeopathy',
    description: 'Holistic, individualized homeopathic healing solutions',
    icon: 'Sparkles',
    link: '/services/homoeopathy',
  },
];

export interface SymptomItem {
  label: string;
  serviceSlug: string;
}

export const symptomSearch: SymptomItem[] = [
  { label: 'Tooth pain', serviceSlug: 'dental-care' },
  { label: 'Diabetes', serviceSlug: 'internal-medicine' },
  { label: 'High blood pressure', serviceSlug: 'internal-medicine' },
  { label: 'Heart checkup', serviceSlug: 'cardiology' },
  { label: 'Root canal', serviceSlug: 'dental-care' },
  { label: 'General checkup', serviceSlug: 'general-practice' },
  { label: 'Natural remedies', serviceSlug: 'unani-medicine' },
  { label: 'Homeopathic consultation', serviceSlug: 'homoeopathy' },
  { label: 'Cosmetic dentistry', serviceSlug: 'dental-care' },
];