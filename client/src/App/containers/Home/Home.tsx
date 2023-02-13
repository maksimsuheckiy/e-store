import React from "react";
import styles from "./Home.modules.scss";
import ProductsList from "../../components/ProductsList/ProductsList";

const Home = () => {
    return (
        <div className={styles['home']}>
            <h1 className={styles['home__title']}>New Products</h1>
            <ProductsList/>
        </div>
    )
}

export default Home