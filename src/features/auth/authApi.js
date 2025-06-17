import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithToken } from '../../services/fetchBaseQueryWithToken';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQueryWithToken,
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: ({ phone, country_code }) => {
                const formData = new FormData();
                formData.append('phone', phone);
                formData.append('country_code', country_code);

                return {
                    url: 'users/auth_user',
                    method: 'POST',
                    body: formData,
                };
            },
        }),
        updateUser: builder.mutation({
            query: ({
                phone,
                full_name,
                country_code,
                email,
                gender,
                dob,
            }) => {
                const formData = new FormData();
                formData.append('phone', phone);
                formData.append('full_name', full_name);
                formData.append('country_code', country_code);
                formData.append('email', email);
                formData.append('gender', gender);
                formData.append('dob', dob);

                return {
                    url: 'users/update_user',
                    method: 'PUT',
                    body: formData,
                };
            },
        }),
    }),
});

export const {
    useLoginUserMutation,
    useUpdateUserMutation,
} = authApi;
