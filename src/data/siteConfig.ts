export const siteConfig = {
  name: 'Al Amanah Medical Center',
  shortName: 'Al Amanah',
  legalName: 'Al Amanah Medical Center LLC',
  established: 2003,
  tagline: 'Healthcare You Can Trust. Care You Can Feel.',
  description:
    'Expert medical and dental care in Sharjah, delivered by experienced doctors with a patient-first approach.',
  address: {
    suite: 'Suite #308',
    building: 'Al Mubarak Center',
    city: 'Sharjah',
    country: 'UAE',
    full: 'Suite #308, Al Mubarak Center, Sharjah, UAE',
  },
  phone: '06 561 55 45',
  phoneRaw: '+97165615545',
  email: 'amcdiabetes@gmail.com',
  whatsapp: {
    general: '971506379389',
    dental: '971564671652',
    ent: '971509803434',
    diabetes: '971506379389',
  },
  hours: [
    { day: 'Saturday – Thursday', time: '9:00 AM – 10:00 PM' },
    { day: 'Friday', time: '4:00 PM – 10:00 PM' },
  ],
  social: {
    facebook: 'https://www.facebook.com/alamanahmedicalcenter',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Al+Amanah+Medical+Center+Sharjah',
  mapsEmbed:
    'https://www.google.com/maps?q=Al+Mubarak+Center+Sharjah&output=embed',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Specialties', path: '/specialties' },
  { label: 'Offers', path: '/offers' },
  { label: 'Insurance', path: '/insurance' },
  { label: 'Health Guide', path: '/health-guide' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];
