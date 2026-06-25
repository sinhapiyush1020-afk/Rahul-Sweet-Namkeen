export interface SweetItem {
  id: string;
  name: string;
  englishName: string;
  description: string;
  priceEstimate?: string;
  category: "indian-sweets" | "special-items";
  image: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  tag?: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface EnquiryForm {
  name: string;
  phone: string;
  message: string;
}
