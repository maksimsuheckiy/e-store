import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/redux";
import styles from './SingleProduct.scss';
import rootStyles from '../../assets/styles/main.scss';
import {RootState} from "../../store/types";
import Button from "../../components/Button/Button";

const SingleProduct = () => {
    const {id} = useParams();
    const products = useAppSelector((state: RootState) => state.data.products);
    const currentProduct = products.find(product => product.id === Number(id));

    return (
        <div className={styles['product']}>
            <div className={styles['product__col']}>
                <div className={styles['product-info']}>
                    <div className={styles['product-info__inner']}>
                        {currentProduct?.stock &&
                            <div className={styles['product-info__stock']}>
                                <div className={rootStyles['checkmark']}>
                                    <div className={rootStyles['checkmark__stem']}></div>
                                    <div className={rootStyles['checkmark__kick']}></div>
                                </div>
                                <span className={styles['product-info__stock-caption']}>in stock</span>
                            </div>
                        }
                        <h2 className={styles['product-info__title']}>{currentProduct?.title}</h2>
                        <p className={styles['product-info__category']}>Category: {currentProduct?.category}</p>
                        <p className={styles['product-info__brand']}>Brand - {currentProduct?.brand}</p>
                        <p className={styles['product-info__desc']}>Description: {currentProduct?.description}</p>
                        <p className={styles['product-info__price']}>Price: ${currentProduct?.price}</p>
                        <Button type="button" text="Add to Cart" isPrimary={true} />
                    </div>
                </div>
            </div>
            <div className={styles['product__col']}>
                <img src={currentProduct?.thumbnail} alt={currentProduct?.title}
                     className={styles['product__picture']}/>
            </div>
        </div>
    )
}

export default SingleProduct