import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { auth } from "../firebase/firebaseConfig";

export const fetchBaseQueryWithToken = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  prepareHeaders: async (headers) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      headers.set('Authorization', `Token ${token}`);
    }
    return headers;
  },
});
