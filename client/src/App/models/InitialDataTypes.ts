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

export type CartProductItem = ProductItem & {
    inCart?: boolean;
}

export interface InitialState {
    products: Array<ProductItem>;
    cart: Array<CartProductItem>;
    sortingParam: string;
}