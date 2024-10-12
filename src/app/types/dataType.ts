export interface products {
    id: number;
    name: string;
    category:string
    price:number 
    url: string;
  }
  
  export interface productData {
    products: products[];
    name: string;
    url: string;
    category: string; 
    price: string;
  }