// src/types/product.ts

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string; // Path to image in public/ or external URL
  currency: string; // e.g. "USD"
}