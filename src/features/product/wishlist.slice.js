import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  list: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setInWishlist: (state, action) => {
      state.list = [...state.list, action.payload]
    },
    setOutWishlist: (state, action) => {
      state.list = state.list.filter(pid => pid !== action.payload)
    }
  },
});


export default wishlistSlice.reducer;
export const { setInWishlist, setOutWishlist } = wishlistSlice.actions;
export const wishlistState = (state) => state.wishlist;