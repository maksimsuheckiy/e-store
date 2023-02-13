import React, {useEffect} from "react";
import styles from "./ProductsList.scss";
import {getProducts} from "../../store/reducers/productsSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import Product from "../Product/Product";
import {RootState} from "../../store/types";

const ProductsList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.data?.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const productsList = products.map(product => {
        return (
            <Product
                key={product.id}
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
        )
    })

    return (
        <div className={styles['products']}>
            {productsList}
        </div>
    )
}

export default ProductsList