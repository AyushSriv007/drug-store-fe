import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryPublic } from '../../services/fetchBaseQueryPublic';

export const brandsApi = createApi({
  reducerPath: 'brandsApi',
  baseQuery: fetchBaseQueryPublic,
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => 'master/get_brands',
    }),
  }),
});

export const { useGetBrandsQuery } = brandsApi;
