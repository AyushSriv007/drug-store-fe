import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryPublic } from '../../services/fetchBaseQueryPublic';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQueryPublic,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'master/get_products',
        }),

        getTrendingProducts: builder.query({
            query: () => ({
                url: 'master/get_products',
                params: { trending: 1 },
            }),
        }),

        getProductDetails: builder.query({
            query: (id) => `master/get_product_details/${id}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetTrendingProductsQuery,
    useGetProductDetailsQuery
} = productsApi;
