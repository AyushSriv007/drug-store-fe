import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchBaseQueryPublic = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
});
