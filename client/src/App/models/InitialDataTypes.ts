export type ProductItem = {
    id?: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface InitialState {
    products: Array<ProductItem>;
    sortingParam: string;
}