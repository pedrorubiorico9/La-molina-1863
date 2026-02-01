
export interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
}
