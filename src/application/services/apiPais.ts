import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pais } from "../types/Pais";

export const apiPais = createApi({
    reducerPath: 'apiPais',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://restcountries.com/v3.1/'
    }),
    endpoints:(builder)=>({
        getPaises: builder.query<Pais[], void>({
            query: ()=> 'all?fields=name,region,capital,subregion,languages,flags,population,area,currencies'        
        })
    })
})

export const {useGetPaisesQuery} = apiPais