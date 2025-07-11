import { configureStore } from "@reduxjs/toolkit";
import { apiPais } from "../services/apiCountry";
import { apiComment } from "../services/apiCommet";

export const store = configureStore({
    reducer:{
        [apiPais.reducerPath] : apiPais.reducer,
        [apiComment.reducerPath] : apiComment.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(apiPais.middleware)
        .concat(apiComment.middleware)
})