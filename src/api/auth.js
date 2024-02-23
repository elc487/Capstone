import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const auth = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/auth'}),

      endpoints:builder => ({
        login: builder.mutation ({
            query:(user) => ({
                url: `/login`,
                method: "POST",
                body: user
            })
        })
      }),
    })

    export const {useLoginMutation} = auth