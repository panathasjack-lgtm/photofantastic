export interface PortfolioItem {
  id: string;
  title: string;
  category: 'hotel' | 'golden-hour' | 'private' | 'editorial';
  imageUrl: string;
  location: string;
  hotel?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  coverImage: string;
  highlights: string[];
}

export interface InquiryFormState {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  hotelName: string;
  serviceType: string;
  details: string;
}
