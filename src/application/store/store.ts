import { configureStore } from "@reduxjs/toolkit";
import { apiPais } from "../services/apiPais";

export const store = configureStore({
    reducer:{
        [apiPais.reducerPath] : apiPais.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPais.middleware)
})