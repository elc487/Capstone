import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com'}),
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
      endpoints: () => ({}),
    })
