import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    accessToken: undefined,
    accessPath: "",
    userId: 0
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUsername: (state, action) =>{
            state.user = action.payload;
            console.log(state.user)
        },
        setAccessToken:  (state, action) =>{
            state.accessToken = action.payload;
        },
        setAccessPath : (state,action) =>{
            state.accessPath = action.payload;
        },
        setUserId : (state,action) =>{
            state.userId = action.payload;
        },
    }
});

export default authSlice.reducer;
export const {setUsername, setAccessToken, setAccessPath, setUserId} = authSlice.actions;

export const authState = (state) => state.auth;