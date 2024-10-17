export interface products {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  point: number;
  image: string;
}
export interface CartItem {
  product: products;
  totalAmount: number;
}
export interface productData {
  products: products[];
  name: string;
  url: string;
  category: string;
  price: string;
}
