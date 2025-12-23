export interface Product {
  id: string;
  name: string;
  category: 'Salado' | 'Dulce' | 'Salsa' | 'Picante';
  description: string;
  image: string;
  price: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Section {
  HOME = 'home',
  PRODUCTS = 'products',
  AI_CHEF = 'ai-chef',
  CONTACT = 'contact'
}