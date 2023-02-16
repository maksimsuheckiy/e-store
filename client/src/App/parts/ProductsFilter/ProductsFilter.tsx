import React from "react";
import styles from "./ProductsFilter.scss";
import {setSortParam} from "../../store/reducers/productsSlice";
import {useAppDispatch} from "../../store/hooks/redux";
import Button from "../../components/Button/Button";

const ProductsFilter = () => {
    const dispatch = useAppDispatch();

    const handleSort = (param: string) => {
        dispatch(setSortParam(param));
    }

    return (
        <aside className={styles['sorting']}>
            <div className={styles['sorting__inner']}>
                <div className={styles['sorting__heading']}>
                    <h4 className={styles['sorting__title']}>Sorting:</h4>
                </div>
                <ul className={styles['sorting-params']}>
                    <li className={styles['sorting-params__item']} onClick={() => handleSort('popular')}>
                        Popularity
                    </li>
                    <li className={styles['sorting-params__item']} onClick={() => handleSort('price-down')}>
                        Lower price
                    </li>
                    <li className={styles['sorting-params__item']} onClick={() => handleSort('price-up')}>
                        High price
                    </li>
                </ul>
            </div>
            <Button type="button" text="Reset" isPrimary={true} smaller={true} onClick={() => handleSort('')}/>
        </aside>
    )
}

export default ProductsFilter