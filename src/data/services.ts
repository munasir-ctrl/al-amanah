export interface Service {
  slug: string;
  title: string;
  category: 'Dental' | 'Medical';
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
    slug: 'general-dentistry',
    title: 'General Dentistry',
    category: 'Dental',
    shortDescription:
      'Comprehensive oral health care including checkups, cleaning, fillings, and preventive treatments.',
    longDescription:
      'Our general dentistry services cover the full spectrum of routine oral healthcare — from regular checkups and professional cleaning to cavity fillings and gum care. Our dental team focuses on prevention and early intervention to keep your smile healthy for life.',
    benefits: [
      'Routine dental checkups',
      'Professional cleaning & scaling',
      'Tooth-coloured fillings',
      'Gum disease management',
    ],
    price: 'From AED 100',
    duration: '20–30 min',
    image: 'general-dentistry',
    icon: 'Stethoscope',
    relatedDoctors: ['dr-juneem-kassim'],
  },
  {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    category: 'Dental',
    shortDescription:
      'Save damaged or infected teeth with comfortable, modern endodontic treatment.',
    longDescription:
      'Root canal treatment removes infected pulp from inside the tooth, relieving pain and preserving your natural tooth. Our dentist uses modern techniques to make the procedure as comfortable and efficient as possible.',
    benefits: [
      'Pain relief from tooth infection',
      'Preserves your natural tooth',
      'Modern, comfortable technique',
      'Long-lasting results',
    ],
    price: 'AED 600',
    duration: '1 hour',
    image: 'root-canal',
    icon: 'Activity',
    relatedDoctors: [],
    faqs: [
      {
        question: 'Is root canal treatment painful?',
        answer:
          'With modern anaesthesia and techniques, the procedure is generally no more uncomfortable than a standard filling. Most patients feel significant relief afterward.',
      },
      {
        question: 'How long does the treatment take?',
        answer:
          'A typical root canal session takes about one hour. Some cases may require a follow-up visit.',
      },
    ],
  },
  {
    slug: 'braces-orthodontics',
    title: 'Braces & Orthodontics',
    category: 'Dental',
    shortDescription:
      'Straighten misaligned teeth and correct bite issues with expert orthodontic care.',
    longDescription:
      'Our orthodontic services help patients of all ages achieve properly aligned teeth and a balanced bite. We offer conventional braces and smile-designing solutions tailored to your needs.',
    benefits: [
      'Corrects crowding & gaps',
      'Improves bite alignment',
      'Smile-designing options',
      'Suitable for teens & adults',
    ],
    image: 'braces',
    icon: 'Smile',
    relatedDoctors: ['dr-sunil-kumar-bn', 'dr-priyankar-panigrahi'],
  },
  {
    slug: 'smile-designing',
    title: 'Smile Designing',
    category: 'Dental',
    shortDescription:
      'Transform your smile with customised cosmetic and orthodontic planning.',
    longDescription:
      'Smile designing combines cosmetic and orthodontic treatments to create a smile that suits your face and personality. Our dental team plans every detail for natural, beautiful results.',
    benefits: [
      'Personalised smile assessment',
      'Cosmetic & orthodontic planning',
      'Natural-looking results',
      'Boosted confidence',
    ],
    image: 'smile-design',
    icon: 'Sparkles',
    relatedDoctors: ['dr-sunil-kumar-bn', 'dr-priyankar-panigrahi'],
  },
  {
    slug: 'dentures-veneers',
    title: 'Dentures & Veneers',
    category: 'Dental',
    shortDescription:
      'Restore function and aesthetics with custom dentures and porcelain veneers.',
    longDescription:
      'Whether you need to replace missing teeth or enhance the appearance of chipped or discoloured teeth, our dentures and veneers are crafted for a comfortable fit and a natural look.',
    benefits: [
      'Custom-fitted dentures',
      'Porcelain veneers',
      'Restored chewing function',
      'Enhanced appearance',
    ],
    price: 'AED 2,000',
    duration: '20 min consultation',
    image: 'dentures-veneers',
    icon: 'Brush',
    relatedDoctors: ['dr-juneem-kassim'],
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'Dental',
    shortDescription:
      'Enhance your smile with whitening, veneers, and aesthetic dental treatments.',
    longDescription:
      'Our cosmetic dentistry services are designed to improve the appearance of your teeth and smile. From professional whitening to veneers and smile makeovers, we tailor every treatment to your goals.',
    benefits: [
      'Professional teeth whitening',
      'Veneers & bonding',
      'Smile makeovers',
      'Natural aesthetic results',
    ],
    image: 'cosmetic-dentistry',
    icon: 'Sparkles',
    relatedDoctors: ['dr-juneem-kassim', 'dr-sunil-kumar-bn'],
  },
  {
    slug: 'internal-medicine',
    title: 'Internal Medicine',
    category: 'Medical',
    shortDescription:
      'Expert diagnosis and management of general medical conditions in adults.',
    longDescription:
      'Our internal medicine specialist provides comprehensive care for adults — from routine health assessments to the management of complex conditions like diabetes, hypertension, and metabolic disorders.',
    benefits: [
      'Comprehensive adult healthcare',
      'Diagnosis & management of chronic conditions',
      'Personalised treatment plans',
      'Ongoing follow-up care',
    ],
    price: 'AED 150',
    duration: '30 min',
    image: 'internal-medicine',
    icon: 'Stethoscope',
    relatedDoctors: ['dr-sabeena-ali'],
  },
  {
    slug: 'diabetes-care',
    title: 'Diabetes Care',
    category: 'Medical',
    shortDescription:
      'Specialised management of diabetes, blood sugar monitoring, and lifestyle guidance.',
    longDescription:
      'Our diabetes care programme helps patients manage Type 1 and Type 2 diabetes through regular monitoring, medication management, dietary guidance, and lifestyle support to prevent complications.',
    benefits: [
      'Blood sugar monitoring',
      'Medication management',
      'Dietary & lifestyle guidance',
      'Complication prevention',
    ],
    image: 'diabetes-care',
    icon: 'Droplet',
    relatedDoctors: ['dr-sabeena-ali'],
  },
  {
    slug: 'cardiology',
    title: 'Cardiology',
    category: 'Medical',
    shortDescription:
      'Heart health consultations and cardiovascular risk assessment.',
    longDescription:
      'Our cardiology consultation service provides heart health assessments, blood pressure management, ECG evaluation, and guidance on cardiovascular risk factors to keep your heart healthy.',
    benefits: [
      'Heart health consultation',
      'Blood pressure management',
      'Cardiovascular risk assessment',
      'ECG evaluation',
    ],
    price: 'AED 200',
    duration: '30 min',
    image: 'cardiology',
    icon: 'HeartPulse',
    relatedDoctors: ['dr-aboobacker'],
  },
  {
    slug: 'pediatrics',
    title: 'Pediatrics',
    category: 'Medical',
    shortDescription:
      'Compassionate healthcare for children, from infancy through adolescence.',
    longDescription:
      'Our pediatric care covers routine checkups, vaccinations, growth monitoring, and treatment of common childhood illnesses — delivered with patience and a child-friendly approach.',
    benefits: [
      'Routine child health checkups',
      'Vaccination & immunisation',
      'Growth & development monitoring',
      'Common illness treatment',
    ],
    image: 'pediatrics',
    icon: 'Baby',
    relatedDoctors: ['dr-km-saieda'],
  },
  {
    slug: 'ent',
    title: 'ENT (Ear, Nose & Throat)',
    category: 'Medical',
    shortDescription:
      'Diagnosis and treatment of ear, nose, and throat conditions for all ages.',
    longDescription:
      'Our ENT department is equipped to handle the full range of ear, nose, and throat conditions — from recurrent infections and sinus issues to hearing concerns and throat problems. Led by an experienced specialist.',
    benefits: [
      'Ear infection treatment',
      'Sinus & nasal care',
      'Throat & voice evaluation',
      'Hearing assessments',
    ],
    image: 'ent',
    icon: 'Ear',
    relatedDoctors: ['dr-ali-akbar'],
  },
  {
    slug: 'health-checkups',
    title: 'Executive Health Checkups',
    category: 'Medical',
    shortDescription:
      'Comprehensive preventive health assessments for early detection and peace of mind.',
    longDescription:
      'Our executive health checkup provides a thorough assessment of your overall health, including blood tests, cardiovascular evaluation, and specialist consultation — all in one visit.',
    benefits: [
      'Comprehensive blood panel',
      'Cardiovascular assessment',
      'Specialist consultation included',
      'Detailed health report',
    ],
    price: 'AED 750',
    duration: '1 hour',
    image: 'health-checkup',
    icon: 'ClipboardCheck',
    relatedDoctors: ['dr-sabeena-ali'],
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'Dental', label: 'Dental Care' },
  { id: 'Medical', label: 'Medical Care' },
];
