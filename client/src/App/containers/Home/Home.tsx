import React from "react";
import styles from "./Home.scss";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsFilter from "../../parts/ProductsFilter/ProductsFilter";

const Home = () => {
    return (
        <div className={styles['home']}>
            <div className={styles['home__header']}>
                <h1 className={styles['home__title']}>Our Products</h1>
            </div>
            <ProductsFilter/>
            <ProductsList/>
        </div>
    )
}

export default Home