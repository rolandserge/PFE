import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import AuthReducer from "./slices/authSlice"

const store = configureStore({
    
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: AuthReducer
    },
    middleware: (getDefautlMiddleware) => 
        getDefautlMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store