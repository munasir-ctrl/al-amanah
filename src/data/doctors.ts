export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  category: 'Internal Medicine' | 'ENT' | 'Cardiology' | 'Pediatrics' | 'Dental' | 'Orthodontics' | 'General Practice' | 'Homoeopathy' | 'Unani';
  qualification?: string;
  experience?: string;
  languages?: string[];
  overview: string;
  expertise: string[];
  schedule?: string;
  image: string;
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-sheharban-kochuveettil',
    name: 'Dr. Sheharban Kochuveettil',
    specialty: 'Specialist – Internal Medicine',
    category: 'Internal Medicine',
    qualification: 'MBBS, DNB (Internal Medicine)',
    experience: '11 Years of Experience',
    languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
    overview:
      'Dr. Sheharban Kochuveettil is a specialist in internal medicine at Al Amanah Medical Center, providing comprehensive care for metabolic disorders, acute and chronic diseases, and preventive healthcare.',
    expertise: [
      'Diabetes and metabolic disorders',
      'Hypertension and dyslipidemia',
      'Thyroid disorders',
      'Respiratory diseases, including asthma',
      'Gastrointestinal disorders',
      'Infectious diseases',
      'Cardiovascular risk assessment',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Sheharban.jpeg',
  },
  {
    slug: 'dr-sabeena-ali',
    name: 'Dr. Sabeena Ali',
    specialty: 'Specialist Physician & Diabetologist',
    category: 'Internal Medicine',
    qualification: 'Specialist Physician, Internal Medicine',
    experience: 'Experienced specialist physician',
    languages: ['English', 'Malayalam', 'Arabic'],
    overview:
      'Dr. Sabeena Ali is a specialist physician with expertise in internal medicine, focusing on the management of diabetes, hypertension, and other common medical conditions.',
    expertise: [
      'Diabetes management',
      'Hypertension (high blood pressure)',
      'Executive health checkups',
      'General internal medicine',
      'Preventive healthcare',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Sheharban.jpeg', // Fallback to available image until specific photo is added
  },
  {
    slug: 'dr-ali-akbar',
    name: 'Dr. Ali Akbar',
    specialty: 'ENT Specialist & Surgeon',
    category: 'ENT',
    qualification: 'Specialist ENT Surgeon',
    experience: '20+ years in ENT',
    languages: ['English', 'Arabic', 'Hindi'],
    overview:
      'Dr. Ali Akbar heads the ENT department at Al Amanah Medical Center with over 20 years of experience treating ear, nose, and throat conditions.',
    expertise: [
      'Ear infections & hearing issues',
      'Sinus & nasal conditions',
      'Throat & voice problems',
      'Pediatric ENT care',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Aboobacker.jpeg', // Fallback to available image until specific photo is added
  },
  {
    slug: 'dr-km-saieda',
    name: 'Dr. K.M Saieda',
    specialty: 'Senior Consultant Pediatrician & Lactation Consultant',
    category: 'Pediatrics',
    qualification: 'MBBS, DCh(Ireland), MRCP-Ch(UK)',
    experience: 'Senior Consultant Pediatrician',
    languages: ['English', 'Arabic', 'Hindi', 'Malayalam'],
    overview:
      'Dr. Saieda is a compassionate Senior Consultant Pediatrician and Lactation Consultant experienced in managing pediatric conditions and asthma effectively.',
    expertise: [
      'Asthma management',
      'Lactation and breast-feeding counselling',
      'Growth and development monitoring',
      'Immunization / vaccination',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Sheharban.jpeg', // Fallback to available image until specific photo is added
  },
  {
    slug: 'dr-aboobacker',
    name: 'Dr. Aboobacker Nair Kunnil',
    specialty: 'Consultant Cardiologist',
    category: 'Cardiology',
    qualification: 'MBBS, MRCP (Dublin, Ireland)',
    experience: '54 Years of Experience',
    languages: ['English', 'Malayalam', 'Tamil', 'Hindi', 'Arabic'],
    overview:
      'Dr. Aboobacker Nair Kunnil is a consultant cardiologist at Al Amanah Medical Center, providing expert heart health consultations, cardiovascular risk assessments, and comprehensive cardiac evaluations.',
    expertise: [
      'Comprehensive cardiology consultation',
      'Hypertension and cardiovascular risk management',
      'Chest pain evaluation',
      'Palpitations and arrhythmia assessment',
      'Ischemic heart disease & heart failure management',
      'ECG, ECHO, and Treadmill Test (TMT)',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Aboobacker.jpeg',
  },
  {
    slug: 'dr-boomiga-cholan',
    name: 'Dr. Boomiga Cholan',
    specialty: 'General Practitioner',
    category: 'General Practice',
    qualification: 'MBBS',
    experience: '4 Years of Experience',
    languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
    overview:
      'Dr. Boomiga Cholan is a general practitioner at Al Amanah Medical Center, providing primary healthcare services, acute illness management, and chronic disease supervision.',
    expertise: [
      'Acute illness management',
      'Chronic disease management (diabetes, hypertension, asthma)',
      'Minor wound care and suturing',
      'ECG and ECG interpretation',
      'IV fluid therapy and nebulization',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Boomiga.jpeg',
  },
  {
    slug: 'dr-juneem-kassim',
    name: 'Dr. Juneem Kassim',
    specialty: 'General Dentist',
    category: 'Dental',
    qualification: 'BDS, MDS (Oral & Maxillofacial Pathology)',
    experience: '13 Years of Experience',
    languages: ['English', 'Malayalam', 'Hindi'],
    overview:
      'Dr. Juneem Kassim is a general dentist providing comprehensive dental care including examinations, preventive treatments, restorations, and oral pathology assessments.',
    expertise: [
      'Comprehensive general dentistry',
      'Dental examination and treatment planning',
      'Preventive oral healthcare',
      'Dental caries management and fillings',
      'Scaling and oral hygiene care',
      'Tooth extraction and minor oral biopsy',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Ibrahim.jpeg',
  },
  {
    slug: 'dr-ibrahim-amjad-abuji',
    name: 'Dr. Ibrahim Amjad Abuji',
    specialty: 'General Dentist',
    category: 'Dental',
    qualification: 'BDS, MDS (Orthodontics)',
    experience: '7 Years of Experience',
    languages: ['English', 'Marathi', 'Hindi'],
    overview:
      'Dr. Ibrahim Amjad Abuji is a general dentist specializing in orthodontic assessments, braces, alignments, and comprehensive dental care.',
    expertise: [
      'Comprehensive general dentistry',
      'Orthodontic assessment and treatment planning',
      'Fixed and removable braces',
      'Clear aligners and retainers',
      'Dental crowd and spacing correction',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Ibrahim.jpeg',
  },
  {
    slug: 'dr-syed-hussaini',
    name: 'Dr. Syed Hussaini',
    specialty: 'Unani Practitioner',
    category: 'Homoeopathy',
    qualification: 'BUMS',
    experience: '40 Years of Experience',
    languages: ['English', 'Hindi', 'Telugu'],
    overview:
      'Dr. Syed Hussaini is an experienced Unani Practitioner providing natural healing, traditional approaches to general health, and specialized therapies like Cupping (Hijama).',
    expertise: [
      'Unani medical consultation',
      'Traditional approaches to general health and wellness',
      'Hijama / Cupping Therapy',
      'Musculoskeletal complaints',
      'Digestive and respiratory complaints',
      'Lifestyle and dietary guidance',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: '/Hussaini.jpeg',
  },
];

export const doctorCategories = [
  { id: 'all', label: 'All' },
  { id: 'Internal Medicine', label: 'Internal Medicine' },
  { id: 'ENT', label: 'ENT' },
  { id: 'Cardiology', label: 'Cardiology' },
  { id: 'Pediatrics', label: 'Pediatrics' },
  { id: 'Dental', label: 'Dental' },
  { id: 'Orthodontics', label: 'Orthodontics' },
  { id: 'General Practice', label: 'General Practice' },
  { id: 'Homoeopathy', label: 'Homoeopathy' },
];

export const getDoctorBySlug = (slug: string) =>
  doctors.find((d) => d.slug === slug);