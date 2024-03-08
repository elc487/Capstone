import { api } from "../../../api/api";
import { configureStore,combineReducers} from "@reduxjs/toolkit";
import cartReducer  from "./CartSlice";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { 
    persistReducer,
    persistStore, 
    FLUSH, 
    REHYDRATE, 
    REGISTER,
    PAUSE,
    PERSIST,
    PURGE
  } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [api.reducerPath]
};
const rootReducer = combineReducers({cart:cartReducer, user :userReducer,[api.reducerPath]: api.reducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [  
                FLUSH, 
                REHYDRATE, 
                REGISTER,
                PAUSE,
                PERSIST,
                PURGE]
        }
    }).concat(api.middleware),
    devTools: true
});

let persistor = persistStore(store)
export {persistor}