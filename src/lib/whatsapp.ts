import { siteConfig } from '@/data/siteConfig';

export function buildWhatsAppUrl(message: string, number?: string) {
  const num = number || siteConfig.whatsapp.general;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  dental: 'Hello, I would like to book a dental appointment at Al Amanah Medical Center.',
  medical: 'Hello, I would like to book a medical appointment at Al Amanah Medical Center.',
  insurance: 'Hello, I would like to check my insurance coverage at Al Amanah Medical Center.',
  general: 'Hello, I would like to speak to the team at Al Amanah Medical Center.',
  directions: 'Hello, I need directions to Al Amanah Medical Center.',
};

export const whatsappQuickOptions = [
  { label: 'Dental Appointment', message: whatsappMessages.dental, number: siteConfig.whatsapp.dental, phoneDisplay: '056 467 1652' },
  { label: 'Medical Appointment', message: whatsappMessages.medical, number: siteConfig.whatsapp.general, phoneDisplay: siteConfig.phone },
  { label: 'Check Insurance', message: whatsappMessages.insurance, number: siteConfig.whatsapp.general, phoneDisplay: siteConfig.phone },
  { label: 'Speak to Our Team', message: whatsappMessages.general, number: siteConfig.whatsapp.general, phoneDisplay: siteConfig.phone },
  { label: 'Get Directions', message: whatsappMessages.directions, number: siteConfig.whatsapp.general, phoneDisplay: siteConfig.phone },
];