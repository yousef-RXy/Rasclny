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
    category: string;  // Ensure the 'category' field is defined
    price: string;
  }