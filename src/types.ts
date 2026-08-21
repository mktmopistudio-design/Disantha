export type PageId = 'home' | 'about' | 'services' | 'thetahealing' | 'journal' | 'contact' | 'book';

export type ServiceCategory = 'private' | 'rituals' | 'community';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  format: 'Online & In-Person' | 'In-Person Sanctuary Only' | 'Online Worldwide';
  whatToExpect: string[];
  whoItsFor: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  service: string;
  location?: string;
  avatar: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Healing & Transformation' | 'Feminine Wellness' | 'Spirituality' | 'ThetaHealing®' | 'Disantha Stories';
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
  tags: string[];
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Sacred Circle' | 'Sound Bath' | 'Workshop' | 'Retreat';
  date: string;
  time: string;
  location: string;
  spotsLeft: number;
  price: string;
  description: string;
  image: string;
}

export interface BookingState {
  serviceId: string;
  serviceTitle: string;
  servicePrice: string;
  serviceDuration: string;
  serviceCategory: ServiceCategory;
  deliveryType: 'online' | 'in-person';
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  intentions: string;
  experienceWithEnergyWork: string;
  preferredLanguage: 'english' | 'portugues';
  paymentMethod: 'card' | 'applepay' | 'paypal';
  confirmed: boolean;
  bookingRef: string;
}
