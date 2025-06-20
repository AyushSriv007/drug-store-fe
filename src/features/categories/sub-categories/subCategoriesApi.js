import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryPublic } from '../../../services/fetchBaseQueryPublic';

export const subCategoriesApi = createApi({
  reducerPath: 'subCategoriesApi',
  baseQuery: fetchBaseQueryPublic,
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: (categoryId) => ({
        url: 'master/get_sub_categories',
        params: { category_id: categoryId },
      }),
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subCategoriesApi;
