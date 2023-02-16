import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import styles from './SingleProduct.scss';
import rootStyles from '../../assets/styles/main.scss';
import {RootState} from "../../store/types";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import {addToCart} from "../../store/reducers/productsSlice";
import {useAuth0} from "@auth0/auth0-react";

const SingleProduct = () => {
    const {id} = useParams();
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    const {isAuthenticated} = useAuth0();
    const products = useAppSelector((state: RootState) => state.data.products);
    const currentProduct = products.find(product => product.id === Number(id))!;

    const handleAddToCart = () => {
        if (isAuthenticated) {
            dispatch(addToCart(currentProduct));
        } else {
            setError(true);
        }
    }

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
                        <Button type="button" text="Add to Cart" isPrimary={true} onClick={handleAddToCart}/>
                        {error && <Alert type="error" message="To add an item to your cart, you need to sign in"/>}
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