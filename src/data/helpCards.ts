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
    description: 'Tooth pain, cleaning, fillings, root canal, braces, cosmetic dentistry',
    icon: 'Smile',
    link: '/services?category=Dental',
  },
  {
    id: 'ent',
    title: 'ENT',
    description: 'Ear, nose & throat conditions',
    icon: 'Ear',
    link: '/services/ent',
  },
  {
    id: 'internal-medicine',
    title: 'Internal Medicine',
    description: 'Diabetes, hypertension and general medical conditions',
    icon: 'Stethoscope',
    link: '/services/internal-medicine',
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Heart health and cardiovascular consultation',
    icon: 'HeartPulse',
    link: '/services/cardiology',
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    description: 'Healthcare for children',
    icon: 'Baby',
    link: '/services/pediatrics',
  },
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    description: 'Preventive and executive health assessments',
    icon: 'ClipboardCheck',
    link: '/services/health-checkups',
  },
];

export interface SymptomItem {
  label: string;
  serviceSlug: string;
}

export const symptomSearch: SymptomItem[] = [
  { label: 'Tooth pain', serviceSlug: 'general-dentistry' },
  { label: 'Diabetes', serviceSlug: 'diabetes-care' },
  { label: 'High blood pressure', serviceSlug: 'internal-medicine' },
  { label: 'Ear pain', serviceSlug: 'ent' },
  { label: 'Sinus problem', serviceSlug: 'ent' },
  { label: 'Child consultation', serviceSlug: 'pediatrics' },
  { label: 'Heart checkup', serviceSlug: 'cardiology' },
  { label: 'Braces', serviceSlug: 'braces-orthodontics' },
  { label: 'Root canal', serviceSlug: 'root-canal-treatment' },
  { label: 'Teeth whitening', serviceSlug: 'cosmetic-dentistry' },
  { label: 'Health checkup', serviceSlug: 'health-checkups' },
  { label: 'Veneers', serviceSlug: 'dentures-veneers' },
];
