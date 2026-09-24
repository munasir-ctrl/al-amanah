export interface Doctor {
  slug: string;
  name: string;
  title: string;
  category: string;
  image: string;
  qualifications: string;
  qualification: string; // for singular compatibility
  experience: string;
  languages: string[];
  bio: string;
  overview: string;
  expertise: string[];
  schedule: string;
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-aboobacker',
    name: 'Dr. Aboobacker',
    title: 'Consultant Cardiologist',
    category: 'Cardiology',
    image: '/Aboobacker.jpeg',
    qualifications: 'MD, DM - Cardiology',
    qualification: 'MD, DM - Cardiology',
    experience: '15+ Years of Clinical Excellence',
    languages: ['English', 'Arabic'],
    bio: 'Specialized in advanced cardiovascular evaluations, heart health management, and preventive cardiology care.',
    overview: 'Dr. Aboobacker brings extensive international clinical expertise in diagnosing and managing complex cardiac disorders. Committed to patient-first preventive cardiology, he utilizes state-of-the-art diagnostics to ensure optimal heart health outcomes.',
    expertise: ['Advanced Cardiac Evaluation', 'Preventive Cardiology', 'Hypertension Management', 'Electrocardiogram (ECG) & Echo'],
    schedule: 'Sunday - Thursday: 9:00 AM - 2:00 PM',
  },
  {
    slug: 'dr-ibrahim',
    name: 'Dr. Ibrahim',
    title: 'Specialist – Internal Medicine',
    category: 'Internal Medicine',
    image: '/Ibrahim.jpeg',
    qualifications: 'MBBS, MD - Internal Medicine',
    qualification: 'MBBS, MD - Internal Medicine',
    experience: '12+ Years Experience',
    languages: ['English', 'Arabic'],
    bio: 'Expert in managing chronic conditions such as diabetes, hypertension, and complex adult internal disorders.',
    overview: 'Dr. Ibrahim specializes in comprehensive adult primary care and chronic disease management. He focuses on personalized treatment plans for metabolic disorders, infectious diseases, and preventive wellness screenings.',
    expertise: ['Chronic Disease Management', 'Diabetes & Endocrinology', 'Hypertension Care', 'Comprehensive Health Screenings'],
    schedule: 'Saturday - Thursday: 10:00 AM - 6:00 PM',
  },
  {
    slug: 'dr-hussaini',
    name: 'Dr. Hussaini',
    title: 'General Practitioner',
    category: 'General Practice',
    image: '/Hussaini.jpeg',
    qualifications: 'MBBS',
    qualification: 'MBBS',
    experience: '8+ Years Experience',
    languages: ['English', 'Arabic'],
    bio: 'Providing comprehensive primary health checkups, initial diagnoses, and acute primary care treatment.',
    overview: 'Dr. Hussaini serves as the frontline provider for acute illnesses, routine family health evaluations, and preventive healthcare guidance for patients of all ages.',
    expertise: ['Acute Care & First Aid', 'Family Medicine', 'Routine Health Checkups', 'Preventive Vaccinations'],
    schedule: 'Monday - Saturday: 8:00 AM - 4:00 PM',
  },
  {
    slug: 'dr-boomiga',
    name: 'Dr. Boomiga',
    title: 'General Dentist',
    category: 'Dental',
    image: '/Boomiga.jpeg',
    qualifications: 'BDS, MDS',
    qualification: 'BDS, MDS',
    experience: '10+ Years Experience',
    languages: ['English', 'Arabic'],
    bio: 'Dedicated to complete oral health, routine preventative checkups, fillings, and patient dental hygiene.',
    overview: 'Dr. Boomiga offers comprehensive dental care, combining cosmetic dentistry and restorative procedures with gentle, patient-friendly techniques to ensure radiant smiles and oral hygiene.',
    expertise: ['Preventive & Restorative Dentistry', 'Cosmetic Dental Procedures', 'Root Canal Therapy', 'Pediatric Dental Care'],
    schedule: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
  },
  {
    slug: 'dr-juneem',
    name: 'Dr. Juneem',
    title: 'Unani Practitioner',
    category: 'Unani',
    image: '/Juneem.jpeg',
    qualifications: 'BUMS',
    qualification: 'BUMS',
    experience: '9+ Years Experience',
    languages: ['English', 'Arabic'],
    bio: 'Specialist in traditional Unani medical treatments, holistic natural remedies, and lifestyle care.',
    overview: 'Dr. Juneem provides traditional Unani medicinal solutions, incorporating natural therapies, herbal remedies, and specialized regimen therapy to restore balanced health and vitality.',
    expertise: ['Traditional Unani Therapies', 'Herbal & Natural Remedies', 'Regimen Therapy (Ilaj-bit-Tadbeer)', 'Holistic Wellness Consultations'],
    schedule: 'Saturday - Thursday: 2:00 PM - 9:00 PM',
  },
  {
    slug: 'dr-sheharban',
    name: 'Dr. Sheharban',
    title: 'Homeopathy Practitioner',
    category: 'Homoeopathy',
    image: '/Sheharban.jpeg',
    qualifications: 'BHMS',
    qualification: 'BHMS',
    experience: '7+ Years Experience',
    languages: ['English', 'Arabic'],
    bio: 'Focused on holistic, individualized homeopathic healing solutions for chronic and acute wellness paths.',
    overview: 'Dr. Sheharban practices classical and clinical homeopathy, tailoring gentle, root-cause healing therapies for chronic ailments, allergies, and constitutional wellness.',
    expertise: ['Classical Homeopathy', 'Chronic Disease Care', 'Allergy & Respiratory Support', 'Constitutional Health Healing'],
    schedule: 'Sunday - Thursday: 10:00 AM - 4:00 PM',
  },
];

export const doctorCategories = [
  { id: 'all', label: 'All Doctors' },
  { id: 'Cardiology', label: 'Cardiology' },
  { id: 'Internal Medicine', label: 'Internal Medicine' },
  { id: 'General Practice', label: 'General Practice' },
  { id: 'Dental', label: 'Dental' },
  { id: 'Unani', label: 'Unani' },
  { id: 'Homoeopathy', label: 'Homoeopathy' },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doc) => doc.slug === slug);
}