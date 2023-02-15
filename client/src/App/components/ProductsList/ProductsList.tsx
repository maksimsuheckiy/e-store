import React, {useEffect} from "react";
import styles from "./ProductsList.scss";
import { Link } from "react-router-dom";
import {getProducts} from "../../store/reducers/productsSlice";
import {SelectSortedProducts} from "../../store/selectors/SelectSortedProducts";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import Product from "../ProductItem/Product";

const ProductsList = () => {
    const dispatch = useAppDispatch();
    const sortedProducts = useAppSelector(SelectSortedProducts);
    const storage = localStorage.getItem('persist:root');

    useEffect(() => {
        if (storage === null) {
            dispatch(getProducts());
        }
    }, []);

    const productsList = sortedProducts.map(product => {
        return (
            <Link key={product.id} to={`/product/${product.id}`}>
                <Product
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                    rating={product.rating}
                    stock={product.stock}
                    brand={product.brand}
                    category={product.category}
                    thumbnail={product.thumbnail}
                    images={product.images}
                />
            </Link>
        )
    })

    return (
        <div className={styles['products']}>
            {productsList}
        </div>
    )
}

export default ProductsList