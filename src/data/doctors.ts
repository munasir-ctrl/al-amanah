export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  category: 'Internal Medicine' | 'ENT' | 'Cardiology' | 'Pediatrics' | 'Dental' | 'Orthodontics' | 'General Practice' | 'Homoeopathy';
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
    slug: 'dr-sabeena-ali',
    name: 'Dr. Sabeena Ali',
    specialty: 'Specialist Physician & Diabetologist',
    category: 'Internal Medicine',
    qualification: 'Specialist Physician, Internal Medicine',
    experience: 'Experienced specialist physician',
    languages: ['English', 'Malayalam', 'Arabic'],
    overview:
      'Dr. Sabeena Ali is a specialist physician with expertise in internal medicine, focusing on the management of diabetes, hypertension, and other common medical conditions. She is recognised as one of the most trusted physicians in Sharjah, known for her patient-first approach and thorough diagnostic care.',
    expertise: [
      'Diabetes management',
      'Hypertension (high blood pressure)',
      'Executive health checkups',
      'General internal medicine',
      'Preventive healthcare',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-sabeena-ali',
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
      'Dr. Ali Akbar heads the ENT department at Al Amanah Medical Center with over 20 years of experience treating ear, nose, and throat conditions across the Northern Emirates, Sharjah, Ajman, and India. His department is well-equipped for the diagnosis and treatment of a wide range of ENT problems.',
    expertise: [
      'Ear infections & hearing issues',
      'Sinus & nasal conditions',
      'Throat & voice problems',
      'Pediatric ENT care',
      'ENT diagnostic procedures',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-ali-akbar',
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
      'Dr. Saieda is a compassionate Senior Consultant Pediatrician and Lactation Consultant. She has dealt with the most common and rarest conditions and has developed a keen eye for swift recognition. Her ultimate aim is to make sure your child is healthy and happy, and that you both share a strong bond. She is experienced in managing asthma and its acute attacks effectively, and offers treatments that are holistic to leave no stone unturned.',
    expertise: [
      'Asthma management',
      'Lactation and breast-feeding counselling',
      'Growth and development monitoring',
      'Nutritional advice for anemia and vitamin deficiencies',
      'Immunization / vaccination',
      'Constipation & diarrhea management',
      'Endocrine disorders',
      'Urinary tract infections',
      'Acute respiratory infections',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-km-saieda',
  },
  {
    slug: 'dr-aboobacker',
    name: 'Dr. Aboobacker',
    specialty: 'Consultant Cardiologist',
    category: 'Cardiology',
    qualification: 'Consultant Cardiologist',
    experience: 'Experienced consultant cardiologist',
    languages: ['English', 'Malayalam', 'Hindi'],
    overview:
      'Dr. Aboobacker is a consultant cardiologist at Al Amanah Medical Center, providing expert heart health consultations, cardiovascular risk assessments, and ECG evaluations for patients across Sharjah and the Northern Emirates.',
    expertise: [
      'Heart health consultation',
      'Cardiovascular risk assessment',
      'ECG evaluation',
      'Blood pressure management',
      'Cholesterol management',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-aboobacker',
  },
  {
    slug: 'dr-sameeha-sathar',
    name: 'Dr. Sameeha Sathar',
    specialty: 'General Practitioner',
    category: 'General Practice',
    qualification: 'General Practitioner',
    experience: 'General Practitioner',
    languages: ['English', 'Malayalam', 'Arabic'],
    overview:
      'Dr. Sameeha Sathar is a general practitioner at Al Amanah Medical Center, providing primary healthcare services including routine checkups, minor ailments management, and preventive health guidance for patients of all ages.',
    expertise: [
      'General health consultations',
      'Minor illness treatment',
      'Preventive health checkups',
      'Health screenings',
      'Patient education',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-sameeha-sathar',
  },
  {
    slug: 'dr-juneem-kassim',
    name: 'Dr. Juneem Kassim',
    specialty: 'GP Dentist',
    category: 'Dental',
    qualification: 'General Practitioner Dentist',
    experience: 'Experienced dental practitioner',
    languages: ['English', 'Malayalam', 'Hindi'],
    overview:
      'Dr. Juneem Kassim is a general practitioner dentist at Al Amanah Medical Center, providing comprehensive dental care including checkups, cleaning, fillings, and general oral healthcare for the whole family.',
    expertise: [
      'Dental checkups & cleaning',
      'Cavity fillings',
      'Gum disease management',
      'Preventive dental care',
      'General oral health',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-juneem-kassim',
  },
  {
    slug: 'dr-sunil-kumar-bn',
    name: 'Dr. Sunil Kumar BN',
    specialty: 'Orthodontist',
    category: 'Orthodontics',
    qualification: 'Orthodontist',
    experience: 'Experienced orthodontist',
    languages: ['English', 'Malayalam', 'Hindi'],
    overview:
      'Dr. Sunil Kumar BN is an experienced orthodontist at Al Amanah Medical Center, specializing in braces, smile designing, and orthodontic treatment for children, teens, and adults to achieve properly aligned teeth and a confident smile.',
    expertise: [
      'Braces & orthodontic treatment',
      'Smile designing',
      'Bite correction',
      'Teeth alignment',
      'Orthodontic consultation',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-sunil-kumar-bn',
  },
  {
    slug: 'dr-priyankar-panigrahi',
    name: 'Dr. Priyankar Panigrahi',
    specialty: 'Orthodontist',
    category: 'Orthodontics',
    qualification: 'Orthodontist',
    experience: 'Experienced orthodontist',
    languages: ['English', 'Hindi'],
    overview:
      'Dr. Priyankar Panigrahi is an orthodontist at Al Amanah Medical Center, providing expert orthodontic care including braces, alignment correction, and smile design treatments tailored to each patient.',
    expertise: [
      'Orthodontic treatment',
      'Braces fitting & adjustment',
      'Smile design',
      'Teeth straightening',
      'Bite correction',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-priyankar-panigrahi',
  },
  {
    slug: 'dr-najla-rahmatullah',
    name: 'Dr. Najla Rahmatullah',
    specialty: 'Homoeopathy Specialist',
    category: 'Homoeopathy',
    qualification: 'Homoeopathy Specialist',
    experience: 'Experienced homoeopathy practitioner',
    languages: ['English', 'Arabic', 'Malayalam'],
    overview:
      'Dr. Najla Rahmatullah provides homoeopathic consultations at Al Amanah Medical Center, offering holistic and natural treatment approaches for a range of chronic and acute conditions.',
    expertise: [
      'Homoeopathic consultation',
      'Holistic treatment approaches',
      'Natural medicine',
      'Chronic condition management',
      'Lifestyle counselling',
    ],
    schedule: 'Saturday – Thursday, by appointment',
    image: 'dr-najla-rahmatullah',
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
