import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {InitialState} from "../../models/InitialDataTypes";

export const getProducts = createAsyncThunk(
    'products/data',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        return response.json();
    }
);

const initialState: InitialState = {
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProducts.fulfilled,
                (state, action) => {
                    state.products = action.payload.products;
                }
            )
    }
})

export default productsSlice.reducer