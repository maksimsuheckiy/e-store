import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../types";

export const SelectSortedProducts = createSelector(
    (state: RootState) => state.data.products,
    (state: RootState) => state.data.sortingParam,
    (products, param) => {
        switch (param) {
            case 'popular':
                return [...products].sort((productFirst, productSecond) => {
                    return productSecond.rating - productFirst.rating
                })
            case 'price-up':
                return [...products].sort((productFirst, productSecond) => {
                    return (productFirst.price < productSecond.price) ? 1 : (productFirst.price > productSecond.price) ? -1 : 0
                });
            case 'price-down':
                return [...products].sort((productFirst, productSecond) => {
                    return productFirst.price - productSecond.price
                });
            default:
                return products
        }
    }
)