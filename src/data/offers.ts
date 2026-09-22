export interface Offer {
  slug: string;
  treatment: string;
  price: string;
  category: 'Dental' | 'Medical';
  included: string[];
  duration?: string;
  popular?: boolean;
  badge?: string;
}

export const offers: Offer[] = [];

export const offerDisclaimer =
  'Prices may vary depending on clinical assessment. Please confirm before booking.';