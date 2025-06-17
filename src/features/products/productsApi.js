import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryPublic } from '../../services/fetchBaseQueryPublic';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQueryPublic,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'get_products',
        }),

        getTrendingProducts: builder.query({
            query: () => ({
                url: 'get_products',
                params: { trending: 1 },
            }),
        }),

        getProductDetails: builder.query({
            query: (id) => `get_product_details/${id}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetTrendingProductsQuery,
} = productsApi;
