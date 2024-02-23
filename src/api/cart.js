import { api } from "./api";
const TOKEN = "token"

const cartApi = api.injectEndpoints({
    endpoints:builder => ({
        getAllCarts: builder.query ({
            query:() => 'api/carts',
            providesTags: ["Carts"]
        }),
        getCart: builder.query ({
            query:(cartId) => `api/carts${cartId}`,
            providesTags: ["Carts"]
        }),
        getUserCart: builder.query ({
            query:(userId) => `api/carts/user${userId}`,
            providesTags: ["Carts"]
        }),
        addNewCart: builder.mutation ({
            query: (newCart) => ({
                url: 'api/carts',
                method: "POST",
                body: newCart
            }),
            invalidatesTags: ["Carts"]
        }),
        updateCart: builder.mutation ({
            query: (cart) => ({
                url: `api/carts/${cart.id}`,
                method: "PUT",
                body: cart
            }),
            invalidatesTags: ["Carts"]
        }),
        deleteCart: builder.mutation ({
            query: (cartId) => ({
                url: `api/carts/${cartId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Carts"]
        }),

    })

});

export const {} = cartApi