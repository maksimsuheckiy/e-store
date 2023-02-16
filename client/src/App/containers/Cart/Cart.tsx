import React from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {RootState} from "../../store/types";
import Remove from "../../assets/images/remove.svg";
import styles from "./Cart.scss";
import {removeFromCart} from "../../store/reducers/productsSlice";

const Cart = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.data.cart);

    const handleRemoveProduct = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const productsList = products.map(product => (
        <tr key={product.id} className={styles['cart-list__row']}>
            <td className={styles['cart-list__cell']}>
                <img src={product.thumbnail} alt="" className={styles['cart-list__product-picture']}/>
            </td>
            <td className={styles['cart-list__cell']}>
                {product.title}
            </td>
            <td className={styles['cart-list__cell']}>
                <p className={styles['cart-list__cell-desc']}>
                    {product.description}
                </p>
            </td>
            <td className={styles['cart-list__cell']}>
                <p className={styles['cart-list__cell-price']}>
                    ${product.price}
                </p>
            </td>
            <td className={`${styles['cart-list__cell']} ${styles['cart-list__cell-btn']}`}>
                <Remove className={styles['cart-list__remove-icon']} onClick={() => handleRemoveProduct(product.id!)}/>
            </td>
        </tr>
    ))

    return(
        <div className={styles['cart']}>
            <div className={styles['cart__header']}>
                <h1 className={styles['cart__title']}>Shopping Cart</h1>
            </div>
            <table className={styles['cart-list']}>
                <thead>
                    <tr className={styles['cart-list__row']}>
                        <th className={styles['cart-list__caption']}>Item</th>
                        <th className={styles['cart-list__caption']}>Title</th>
                        <th className={styles['cart-list__caption']}>Description</th>
                        <th className={styles['cart-list__caption']}>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productsList}
                </tbody>
            </table>
        </div>
    )

}

export default Cart