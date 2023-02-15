import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialState} from "../../models/InitialDataTypes";

export const getProducts = createAsyncThunk(
    'products/data',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        return response.json();
    }
);

const initialState: InitialState = {
    products: [],
    cart: [],
    sortingParam: '',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSortParam(state, action: PayloadAction<string>) {
            state.sortingParam = action.payload;
        },
        addToCart(state, action: PayloadAction<any>) {
            const productInCart = state.cart.find((product) => product.id === action.payload.id);
            if (!productInCart) {
                state.cart.push({...action.payload, inCart: true});
            }
        },
        removeFromCart(state, action: PayloadAction<number | undefined>) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.fulfilled,
                (state, action) => {
                    state.products = action.payload.products;
                }
            )
    }
})

export const {setSortParam, addToCart, removeFromCart} = productsSlice.actions;
export default productsSlice.reducer;