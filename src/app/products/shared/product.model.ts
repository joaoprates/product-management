export interface Product {
    id?: number; // Opcional para novos produtos
    name: string;
    description: string;
    price: number;
    categoryPath: string;
    available: boolean;
  }
  