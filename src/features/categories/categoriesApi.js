import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryPublic } from '../../services/fetchBaseQueryPublic';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQueryPublic,
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'master/get_categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
