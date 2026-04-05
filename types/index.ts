export type OpenStatus = {
  isOpen: boolean;
  label: string; // "Open Now" | "Closed"
  nextChange: string; // "Closes at 8 PM" | "Opens Wed at 11 AM"
};

export type NewsletterState = 'idle' | 'loading' | 'success' | 'error';

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};
