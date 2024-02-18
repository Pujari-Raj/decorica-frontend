import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listcart: [],
}

const cartSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    setInCart: (state, action) => {
      state.listcart = [...state.listcart, action.payload];
    },
    setOutCart: (state, action) => {
      state.listcart = state.listcart.filter(pid => pid !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { setInCart, setOutCart } = cartSlice.actions;
export const cartState = (state) => state.cartlist;
