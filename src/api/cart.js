import { api } from "./api";
const TOKEN = "token"

const cartApi = api.injectEndpoints({
    endpoints:builder => ({
        getAllCarts: builder.query ({
            query:() => '/carts',
            providesTags: ["Carts"]
        }),
        getCart: builder.query ({
            query:(cartId) => `/carts${cartId}`,
            providesTags: ["Carts"]
        }),
        getUserCart: builder.query ({
            query:(userId) => `/carts/user/${userId}`,
            providesTags: ["Carts"]
        }),
        addNewCart: builder.mutation ({
            query: (newCart) => ({
                url: '/carts',
                method: "POST",
                body: newCart
            }),
            invalidatesTags: ["Carts"]
        }),
        updateCart: builder.mutation ({
            query: (cart) => ({
                url: `/carts/${cart.id}`,
                method: "PUT",
                body: cart
            }),
            invalidatesTags: ["Carts"]
        }),
        deleteCart: builder.mutation ({
            query: (cartId) => ({
                url: `/carts/${cartId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Carts"]
        }),

    })

});

export const {useGetUserCartQuery, useUpdateCartMutation} = cartApi