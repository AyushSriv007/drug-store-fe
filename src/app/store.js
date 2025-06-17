import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from '../features/categories/categoriesApi';
import { subCategoriesApi } from '../features/categories/sub-categories/subCategoriesApi';
import { productsApi } from '../features/products/productsApi';
import { brandsApi } from '../features/brands/brandsApi';
import { authApi } from '../features/auth/authApi';

export const store = configureStore({
    reducer: {
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [brandsApi.reducerPath]: brandsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            subCategoriesApi.middleware,
            productsApi.middleware,
            brandsApi.middleware,
            authApi.middleware
        ),
});
