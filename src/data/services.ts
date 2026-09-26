export interface Service {
  slug: string;
  title: string;
  category: 'Internal Medicine' | 'Cardiology' | 'Dental' | 'General Practice' | 'Homoeopathy' | 'Unani';
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  price?: string;
  duration?: string;
  image: string;
  icon: string;
  relatedDoctors?: string[];
  faqs?: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'dental-care', // Matches the "Dental Care" card link on your homepage
    title: 'General Dentistry',
    category: 'Dental',
    shortDescription:
      'Comprehensive oral health care including checkups, cleaning, fillings, and preventive treatments by our General Dentist.',
    longDescription:
      'Our general dentistry services cover the full spectrum of routine oral healthcare — from regular checkups and professional cleaning to cavity fillings and gum care, delivered by our expert General Dentist.',
    benefits: [
      'Routine dental checkups',
      'Professional cleaning & scaling',
      'Tooth-coloured fillings',
      'Gum disease management',
    ],
    price: 'From AED 100',
    duration: '20–30 min',
    image: '/general%20dent.jpg',
    icon: 'Stethoscope',
    relatedDoctors: ['dr-general-dentist'],
  },
  {
    slug: 'internal-medicine',
    title: 'Internal Medicine',
    category: 'Internal Medicine',
    shortDescription:
      'Expert diagnosis and management of general medical conditions and chronic metabolic disorders in adults.',
    longDescription:
      'Our Specialist in Internal Medicine provides comprehensive care for adults — from routine health assessments to the management of complex conditions like diabetes, hypertension, and metabolic disorders.',
    benefits: [
      'Comprehensive adult healthcare',
      'Diagnosis & management of chronic conditions',
      'Personalised treatment plans',
      'Ongoing follow-up care',
    ],
    price: 'AED 150',
    duration: '30 min',
    image: '/internal-med.jpg',
    icon: 'Stethoscope',
    relatedDoctors: ['dr-internal-medicine-specialist'],
  },
  {
    slug: 'cardiology',
    title: 'Cardiology Consultation',
    category: 'Cardiology',
    shortDescription:
      'Heart health consultations and cardiovascular risk assessment by our Consultant Cardiologist.',
    longDescription:
      'Our cardiology consultation service provides expert heart health assessments, blood pressure management, ECG evaluation, and guidance on cardiovascular risk factors.',
    benefits: [
      'Heart health consultation',
      'Blood pressure management',
      'Cardiovascular risk assessment',
      'ECG evaluation',
    ],
    price: 'AED 200',
    duration: '30 min',
    image: '/cardio.jpg',
    icon: 'HeartPulse',
    relatedDoctors: ['dr-consultant-cardiologist'],
  },
  {
    slug: 'general-practice',
    title: 'General Practice & Primary Care',
    category: 'General Practice',
    shortDescription:
      'Primary healthcare services, acute illness management, and routine checkups by our General Practitioner.',
    longDescription:
      'Our General Practitioner delivers everyday medical care, handling acute illnesses, common complaints, and essential primary care treatments.',
    benefits: [
      'Acute illness & fever management',
      'Minor health consultations',
      'Respiratory & gastrointestinal care',
      'Primary care support',
    ],
    price: 'AED 150',
    duration: '20 min',
    image: '/internal-med.jpg',
    icon: 'Stethoscope',
    relatedDoctors: ['dr-general-practitioner'],
  },
  {
    slug: 'homoeopathy',
    title: 'Homeopathic Consultation',
    category: 'Homoeopathy',
    shortDescription:
      'Individualized homeopathic care for chronic complaints, allergies, and holistic wellness.',
    longDescription:
      'Experience natural, individualized healing through our Homeopathy Practitioner. We focus on treating the root cause of acute and chronic complaints to support long-term physical and emotional balance.',
    benefits: [
      'Individualized homeopathic remedies',
      'Allergy & respiratory care',
      'Chronic lifestyle & skin complaints',
      'Holistic support',
    ],
    price: 'AED 150',
    duration: '30 min',
    image: '/homeopathy.jpg',
    icon: 'Sparkles',
    relatedDoctors: ['dr-homeopathy-practitioner'],
  },
  {
    slug: 'unani-medicine',
    title: 'Unani Medicine Therapy',
    category: 'Unani',
    shortDescription:
      'Traditional Unani healing consultations and lifestyle guidance by our Unani Practitioner.',
    longDescription:
      'Discover time-tested natural healing through our Unani medicine department. We combine traditional health principles and specialized therapies to address wellness concerns.',
    benefits: [
      'Traditional Unani medical consultation',
      'Musculoskeletal & joint pain relief support',
      'Holistic dietary counseling',
      'Natural wellness guidance',
    ],
    price: 'AED 200',
    duration: '45 min',
    image: '/unani.jpg',
    icon: 'Activity',
    relatedDoctors: ['dr-unani-practitioner'],
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'Internal Medicine', label: 'Internal Medicine' },
  { id: 'Cardiology', label: 'Cardiology' },
  { id: 'Dental', label: 'Dental' },
  { id: 'General Practice', label: 'General Practice' },
  { id: 'Homoeopathy', label: 'Homoeopathy' },
  { id: 'Unani', label: 'Unani' },
];