import { api } from "../../../api/api";
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./CartSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        cart: cartReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    devTools: true
});

export default store