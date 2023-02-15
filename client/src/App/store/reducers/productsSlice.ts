import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
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
    sortingParam: ''
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSortParam(state, action: PayloadAction<string>) {
            state.sortingParam = action.payload
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

export const {setSortParam} = productsSlice.actions;
export default productsSlice.reducer;