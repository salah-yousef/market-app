export interface Category {
    id:string; 
    name:string; 
    category_img_url:string; 
    products: Product[];
}

interface Product {
    id:string;
    name:string;
    weight:string;
    price:string;
    product_img_url:string;
}