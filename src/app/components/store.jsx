import { api } from "../../api/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    devTools: true
});

export default store