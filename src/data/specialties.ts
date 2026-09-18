export interface SpecialtyPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  content: string;
  services: string[];
  relatedServiceSlug: string;
}

export const specialtyPages: SpecialtyPage[] = [
  {
    slug: 'medical-center-sharjah',
    title: 'Medical Center in Sharjah | Al Amanah Medical Center',
    h1: 'Trusted Medical Center in Sharjah',
    metaDescription:
      'Al Amanah Medical Center in Sharjah offers expert medical and dental care including internal medicine, ENT, cardiology, pediatrics, and dental services. Book an appointment today.',
    intro:
      'Looking for a trusted medical center in Sharjah? Al Amanah Medical Center has been serving the community since 2003 with experienced doctors, comprehensive services, and a patient-first approach.',
    content: `Al Amanah Medical Center is a well-established healthcare facility in Sharjah, UAE, providing quality medical and dental care to the community since 2003. Our center brings together experienced specialists across multiple disciplines under one roof, making it convenient for families to access comprehensive healthcare.

## Why Choose Al Amanah Medical Center?

**Experienced Specialists:** Our doctors have years of experience in their respective fields, from internal medicine and ENT to dentistry and cardiology.

**Comprehensive Services:** We offer both medical and dental services, so you can address multiple health needs in one convenient location.

**Patient-First Approach:** We take the time to listen, explain, and involve you in your care decisions.

**Insurance Accepted:** We work with a wide range of insurance providers to make your healthcare more accessible.

**Central Sharjah Location:** Located in Al Mubarak Center, we are easily accessible from across Sharjah and the Northern Emirates.

## Our Services

- Internal Medicine & Diabetes Care
- ENT (Ear, Nose & Throat)
- Cardiology
- Pediatrics
- General & Cosmetic Dentistry
- Orthodontics & Root Canal Treatment
- Executive Health Checkups

## Book Your Visit

Whether you need a routine checkup, have a specific health concern, or are looking for a trusted family doctor in Sharjah, our team is ready to help. Book an appointment online or contact us via WhatsApp.`,
    services: ['internal-medicine', 'diabetes-care', 'ent', 'cardiology', 'pediatrics'],
    relatedServiceSlug: 'internal-medicine',
  },
  {
    slug: 'ent-specialist-sharjah',
    title: 'ENT Specialist in Sharjah | Al Amanah Medical Center',
    h1: 'ENT Specialist in Sharjah',
    metaDescription:
      'Experienced ENT specialist in Sharjah treating ear infections, sinus problems, hearing issues, and throat conditions. Book your ENT consultation today.',
    intro:
      'Experiencing ear, nose, or throat problems? Our ENT specialist in Sharjah provides expert diagnosis and treatment for a wide range of conditions.',
    content: `Ear, nose, and throat (ENT) conditions are among the most common reasons people seek medical care. At Al Amanah Medical Center, our ENT department is led by Dr. Ali Akbar, an experienced specialist with over 20 years treating ENT conditions in Sharjah, Ajman, and India.

## Conditions We Treat

**Ear Conditions:** Ear infections, hearing loss, ear pain, tinnitus (ringing in the ears), earwax buildup, and balance issues.

**Nose Conditions:** Sinusitis, nasal congestion, deviated septum, nasal polyps, allergies, and nosebleeds.

**Throat Conditions:** Sore throat, tonsillitis, voice problems, swallowing difficulties, and throat infections.

**Pediatric ENT:** Ear infections in children, adenoid and tonsil issues, and breathing problems.

## Why See an ENT Specialist?

While many ENT symptoms resolve on their own, persistent or recurrent issues need specialist evaluation. An ENT specialist has the training and equipment to diagnose conditions that a general practitioner may not be able to identify.

## Book Your ENT Consultation

If you are experiencing persistent ear, nose, or throat symptoms, don't delay. Early diagnosis and treatment can prevent complications and improve your quality of life. Book an appointment with our ENT specialist today.`,
    services: ['ent'],
    relatedServiceSlug: 'ent',
  },
  {
    slug: 'dental-clinic-sharjah',
    title: 'Dental Clinic in Sharjah | Al Amanah Medical Center',
    h1: 'Dental Clinic in Sharjah',
    metaDescription:
      'Comprehensive dental clinic in Sharjah offering general dentistry, root canal, braces, cosmetic dentistry, dentures and veneers. Book your dental appointment.',
    intro:
      'Looking for a trusted dental clinic in Sharjah? Our dental department provides comprehensive oral care from routine checkups to advanced cosmetic treatments.',
    content: `A healthy smile is an essential part of your overall wellbeing. At Al Amanah Medical Center, our dental clinic in Sharjah offers a full range of dental services for the whole family — from routine checkups and cleaning to advanced procedures like root canal treatment, orthodontics, and cosmetic dentistry.

## Our Dental Services

**General Dentistry:** Routine checkups, professional cleaning, fillings, and preventive care to keep your teeth and gums healthy.

**Root Canal Treatment:** Save infected or damaged teeth with modern, comfortable endodontic treatment.

**Braces & Orthodontics:** Straighten misaligned teeth and correct bite issues for children, teens, and adults.

**Cosmetic Dentistry:** Enhance your smile with professional whitening, veneers, and smile-designing treatments.

**Dentures & Veneers:** Restore function and aesthetics with custom-fitted dentures and porcelain veneers.

## Why Choose Our Dental Clinic?

- Experienced dental team
- Modern, well-equipped clinic
- Affordable, transparent pricing
- Comfortable, patient-friendly environment
- Insurance accepted

## Book Your Dental Appointment

Whether you need a routine checkup, are experiencing tooth pain, or want to improve your smile, our dental team is here to help. Book an appointment online or contact us via WhatsApp.`,
    services: ['general-dentistry', 'root-canal-treatment', 'braces-orthodontics', 'cosmetic-dentistry', 'dentures-veneers'],
    relatedServiceSlug: 'general-dentistry',
  },
  {
    slug: 'diabetes-clinic-sharjah',
    title: 'Diabetes Clinic in Sharjah | Al Amanah Medical Center',
    h1: 'Diabetes Clinic in Sharjah',
    metaDescription:
      'Specialist diabetes clinic in Sharjah offering blood sugar management, medication, lifestyle guidance, and complication prevention. Book a diabetes consultation.',
    intro:
      'Managing diabetes requires expert guidance. Our diabetes clinic in Sharjah provides comprehensive care to help you control blood sugar and live well.',
    content: `Diabetes is one of the most common chronic conditions in the UAE, affecting millions of people. At Al Amanah Medical Center, our diabetes clinic in Sharjah is led by Dr. Sabeena Ali, a specialist physician with extensive experience in diabetes management.

## Our Diabetes Care Services

**Diagnosis & Assessment:** Blood sugar testing, HbA1c measurement, and comprehensive diabetes evaluation.

**Medication Management:** Personalized medication plans, including adjustment and monitoring.

**Lifestyle Guidance:** Dietary advice, exercise recommendations, and practical tips for daily diabetes management.

**Complication Prevention:** Regular screening for diabetes-related complications affecting the heart, kidneys, eyes, and nerves.

**Ongoing Monitoring:** Regular checkups to track your progress and adjust your treatment plan.

## Why Is Diabetes Management Important?

Uncontrolled diabetes can lead to serious complications including heart disease, kidney damage, vision problems, and nerve damage. With proper management, most people with diabetes live full, healthy lives.

## Take Control of Your Diabetes

If you have been diagnosed with diabetes, or if you have risk factors such as family history, overweight, or high blood pressure, a consultation with our specialist can help. Book your diabetes consultation today.`,
    services: ['diabetes-care', 'internal-medicine'],
    relatedServiceSlug: 'diabetes-care',
  },
  {
    slug: 'internal-medicine-sharjah',
    title: 'Internal Medicine in Sharjah | Al Amanah Medical Center',
    h1: 'Internal Medicine Specialist in Sharjah',
    metaDescription:
      'Expert internal medicine specialist in Sharjah for diabetes, hypertension, and general medical conditions. Book a consultation with Dr. Sabeena Ali.',
    intro:
      'Need an experienced internal medicine specialist in Sharjah? Our physician provides comprehensive adult healthcare with a patient-first approach.',
    content: `Internal medicine focuses on the prevention, diagnosis, and treatment of adult diseases. At Al Amanah Medical Center, our internal medicine specialist, Dr. Sabeena Ali, provides comprehensive care for a wide range of medical conditions.

## Conditions We Manage

**Diabetes:** Type 1 and Type 2 diabetes management, blood sugar monitoring, and complication prevention.

**Hypertension (High Blood Pressure):** Diagnosis, medication management, and lifestyle guidance.

**Thyroid Disorders:** Evaluation and management of thyroid conditions.

**Cholesterol Management:** Assessment and treatment of high cholesterol.

**General Medical Conditions:** Respiratory infections, digestive issues, fatigue, and other common health concerns.

**Preventive Care:** Executive health checkups and routine screenings for early disease detection.

## Why Choose Our Internal Medicine Specialist?

Dr. Sabeena Ali is recognized as one of the most trusted physicians in Sharjah. She takes a thorough, patient-centered approach — listening carefully, explaining clearly, and developing personalized treatment plans.

## Book Your Consultation

Whether you have a specific health concern or want a routine checkup, our internal medicine specialist is here to help. Book a consultation online or via WhatsApp.`,
    services: ['internal-medicine', 'diabetes-care', 'health-checkups'],
    relatedServiceSlug: 'internal-medicine',
  },
  {
    slug: 'cardiology-consultation-sharjah',
    title: 'Cardiology Consultation in Sharjah | Al Amanah Medical Center',
    h1: 'Cardiology Consultation in Sharjah',
    metaDescription:
      'Cardiology consultation in Sharjah for heart health assessment, blood pressure management, and ECG evaluation. Book your cardiology appointment.',
    intro:
      'Concerned about your heart health? Our cardiology consultation in Sharjah provides comprehensive cardiovascular assessment and guidance.',
    content: `Heart disease is one of the leading health concerns in the UAE. At Al Amanah Medical Center, our cardiology consultation service provides thorough heart health assessments to help you understand and manage your cardiovascular risk.

## What Our Cardiology Consultation Includes

**Heart Health Assessment:** A comprehensive evaluation of your cardiovascular health, including risk factor analysis.

**Blood Pressure Management:** Diagnosis and management of high blood pressure, a major risk factor for heart disease.

**ECG Evaluation:** Electrocardiogram testing to assess your heart's electrical activity and detect abnormalities.

**Cholesterol Assessment:** Evaluation of your cholesterol levels and guidance on management.

**Lifestyle Guidance:** Practical advice on diet, exercise, and habits that support heart health.

## Who Should Consider a Cardiology Consultation?

- Adults over 40 for routine heart health screening
- People with a family history of heart disease
- Those with high blood pressure, diabetes, or high cholesterol
- Anyone experiencing chest pain, palpitations, or shortness of breath
- People with a sedentary lifestyle or high stress

## Book Your Cardiology Consultation

Taking care of your heart is one of the most important things you can do for your long-term health. Book a cardiology consultation today and take a proactive step toward heart health.`,
    services: ['cardiology', 'health-checkups'],
    relatedServiceSlug: 'cardiology',
  },
  {
    slug: 'pediatric-clinic-sharjah',
    title: 'Pediatric Clinic in Sharjah | Al Amanah Medical Center',
    h1: 'Pediatric Clinic in Sharjah',
    metaDescription:
      'Compassionate pediatric clinic in Sharjah offering child health checkups, vaccinations, growth monitoring, and illness treatment. Book a pediatric appointment.',
    intro:
      'Looking for a trusted pediatric clinic in Sharjah? We provide compassionate healthcare for children from infancy through adolescence.',
    content: `Children deserve healthcare that is gentle, patient, and thorough. At Al Amanah Medical Center, our pediatric services in Sharjah cover the full spectrum of child health — from routine checkups and vaccinations to the treatment of common childhood illnesses.

## Our Pediatric Services

**Routine Checkups:** Regular health assessments to monitor your child's growth and development.

**Vaccinations:** Immunization following the UAE recommended vaccination schedule.

**Growth Monitoring:** Tracking your child's height, weight, and developmental milestones.

**Common Illness Treatment:** Care for fevers, infections, respiratory issues, digestive problems, and other common childhood conditions.

**Health Guidance:** Advice on nutrition, sleep, behavior, and general child wellness.

## When to Bring Your Child

- For scheduled checkups and vaccinations
- When your child has a fever, cough, or other illness symptoms
- If you notice changes in your child's eating, sleeping, or behavior
- For any health concerns — when in doubt, it is always better to check

## Book a Pediatric Appointment

Your child's health is our priority. Book an appointment with our pediatric team and give your child the care they deserve.`,
    services: ['pediatrics'],
    relatedServiceSlug: 'pediatrics',
  },
  {
    slug: 'orthodontist-sharjah',
    title: 'Orthodontist in Sharjah | Al Amanah Medical Center',
    h1: 'Orthodontist in Sharjah',
    metaDescription:
      'Expert orthodontist in Sharjah offering braces and orthodontic treatment for children, teens, and adults. Book your orthodontic consultation.',
    intro:
      'Looking for an orthodontist in Sharjah? We offer braces and orthodontic treatment to help you achieve a properly aligned, confident smile.',
    content: `Orthodontic treatment is about more than just straight teeth — it improves your bite, makes cleaning easier, and boosts confidence. At Al Amanah Medical Center, our orthodontic services in Sharjah help patients of all ages achieve healthy, beautiful smiles.

## Our Orthodontic Services

**Braces:** Conventional braces for correcting crowding, gaps, and bite alignment issues.

**Smile Designing:** Customized orthodontic and cosmetic planning for a smile that suits your face.

**Consultation & Assessment:** Thorough evaluation of your teeth and bite to recommend the best treatment plan.

**Treatment for All Ages:** Orthodontic treatment for children, teenagers, and adults.

## When to See an Orthodontist

- Crowded or overlapping teeth
- Gaps between teeth
- Overbite, underbite, or crossbite
- Difficulty chewing or biting
- Jaw pain or clicking
- For your child's first orthodontic evaluation (recommended around age 7)

## Book Your Orthodontic Consultation

A properly aligned smile is a healthy smile. Book an orthodontic consultation and take the first step toward a confident, healthy smile.`,
    services: ['braces-orthodontics', 'smile-designing'],
    relatedServiceSlug: 'braces-orthodontics',
  },
  {
    slug: 'root-canal-treatment-sharjah',
    title: 'Root Canal Treatment in Sharjah | Al Amanah Medical Center',
    h1: 'Root Canal Treatment in Sharjah',
    metaDescription:
      'Professional root canal treatment in Sharjah. Save infected teeth with comfortable, modern endodontic care. Book your appointment today.',
    intro:
      'Tooth pain or infection? Our root canal treatment in Sharjah can save your natural tooth and relieve pain with modern, comfortable techniques.',
    content: `Root canal treatment is a procedure that saves a tooth that has been severely damaged by decay or infection. At Al Amanah Medical Center in Sharjah, we use modern techniques to make the procedure as comfortable as possible while preserving your natural tooth.

## What Is Root Canal Treatment?

Inside each tooth is a soft tissue called the pulp, which contains nerves and blood vessels. When the pulp becomes infected or damaged — usually due to deep decay, a crack, or trauma — it needs to be removed. The root canal procedure cleans out the infected pulp, disinfects the canal, and seals the tooth to prevent further infection.

## Signs You May Need a Root Canal

- Severe tooth pain, especially when chewing
- Prolonged sensitivity to hot or cold
- Tooth discoloration
- Swelling in the gums
- A pimple or abscess on the gums

## What to Expect

1. **Consultation & X-ray:** Your dentist assesses the tooth and confirms the need for treatment.
2. **Procedure:** Under local anaesthesia, the infected pulp is removed and the canal is cleaned and sealed.
3. **Restoration:** A crown is often placed to protect and restore the tooth.

## Is It Painful?

With modern anaesthesia, most patients feel little to no discomfort during the procedure. In fact, root canal treatment relieves the pain caused by the infection.

## Book Your Root Canal Treatment

If you are experiencing tooth pain or have been told you need a root canal, don't delay. Early treatment can save your tooth and prevent the infection from spreading. Book an appointment today.`,
    services: ['root-canal-treatment', 'general-dentistry'],
    relatedServiceSlug: 'root-canal-treatment',
  },
  {
    slug: 'cosmetic-dentistry-sharjah',
    title: 'Cosmetic Dentistry in Sharjah | Al Amanah Medical Center',
    h1: 'Cosmetic Dentistry in Sharjah',
    metaDescription:
      'Cosmetic dentistry in Sharjah including teeth whitening, veneers, and smile makeovers. Enhance your smile with Al Amanah Medical Center.',
    intro:
      'Want a more confident smile? Our cosmetic dentistry services in Sharjah can transform the appearance of your teeth with natural, beautiful results.',
    content: `Your smile is one of the first things people notice about you. At Al Amanah Medical Center, our cosmetic dentistry services in Sharjah are designed to enhance the appearance of your teeth while maintaining their health and function.

## Our Cosmetic Dentistry Services

**Teeth Whitening:** Professional whitening to brighten stained or discolored teeth safely and effectively.

**Veneers:** Thin porcelain shells that cover the front of teeth to correct chips, gaps, discoloration, and minor misalignment.

**Smile Designing:** A comprehensive approach that combines cosmetic and orthodontic treatments to create your ideal smile.

**Dentures & Veneers:** Custom-fitted solutions for restoring function and aesthetics.

## Is Cosmetic Dentistry Right for You?

Cosmetic dentistry can help if you have:
- Stained or discolored teeth
- Chipped or cracked teeth
- Gaps between teeth
- Uneven or misshapen teeth
- A smile you are unhappy with

## The Consultation Process

Your cosmetic journey starts with a consultation. Our dental team will assess your teeth, discuss your goals, and recommend the best treatment options for your needs and budget.

## Book Your Cosmetic Dentistry Consultation

A beautiful smile can transform your confidence. Book a cosmetic dentistry consultation and discover what is possible for your smile.`,
    services: ['cosmetic-dentistry', 'dentures-veneers', 'smile-designing'],
    relatedServiceSlug: 'cosmetic-dentistry',
  },
];

export const getSpecialtyBySlug = (slug: string) =>
  specialtyPages.find((s) => s.slug === slug);
