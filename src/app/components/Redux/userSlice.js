import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name:"user",
    initialState:{
        currentUser:null,
        loading:false,
        error:false,

    },
    reducers: {
        loginStart: (state) => {
            state.loading =true
        },
        loginSuccess: (state, action) => {
            state.loading =false,
            state.currentUser =action.payload
        },loginFailure: (state) => {
            state.loading =false,
            state.error= true
        },
        logout: (state) => {
            state.loading =false,
            state.currentUser= null,
            state.error=false
        },
    }
})
export const {loginStart,loginFailure,loginSuccess,logout} =userSlice.actions;
export default userSlice.reducer;