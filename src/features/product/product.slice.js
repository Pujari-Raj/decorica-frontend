import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList:[],
    sortedList: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        setProductList: (state, action) =>{
            state.productsList = action.payload;
            state.sortedList = action.payload
        },
        setSortedList: (state, action) =>{
            state.sortedList = action.payload;
        }
    }
});

export default productSlice.reducer;
export const { setProductList, setSortedList } = productSlice.actions;

export const productState = (state) => state.product;