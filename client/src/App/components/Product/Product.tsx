import React from "react";
import {Rating} from "react-simple-star-rating";
import {calculateDiscount} from "../../utils/calculateDiscount";
import {ProductItem} from "../../models/InitialDataTypes";
import styles from "./Product.scss";
import Button from "../Button/Button";

const Product = (props: ProductItem) => {
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail
    } = props;

    const oldPrice = calculateDiscount(price, discountPercentage);

    return (
        <div className={styles.product}>
            <div className={styles['product__content']}>
                {stock &&
                    <div className={styles['product__stock']}>
                        <div className={styles['checkmark']}>
                            <div className={styles['checkmark__stem']}></div>
                            <div className={styles['checkmark__kick']}></div>
                        </div>
                        <span className={styles['product__stock-caption']}>in stock</span>
                    </div>
                }
                <div className={styles['product__picture-box']}>
                    <img src={thumbnail} alt={title} className={styles['product__picture']}/>
                </div>
                <Rating initialValue={Math.round(rating)} size={15} fillColor={"#E9A426"} emptyColor={"#CACDD8"} className={styles['product__rating']} readonly/>
                <p className={styles['product__desc']}>{description}</p>
                <p className={styles['product__price--old']}>${oldPrice}</p>
                <p className={styles['product__price']}>${price}</p>
            </div>
            <div className={styles['product__btn-box']}>
                <Button type="button" text="Add to cart" isPrimary={false}/>
            </div>
        </div>
    )
}

export default Product