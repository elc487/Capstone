import { api } from "./api";
const TOKEN = "token"

const usersApi = api.injectEndpoints({
    endpoints:builder => ({
        getUsers: builder.query({
            query: () => '/users',
        }),
        getUser: builder.query({
            query:(userId) => `/users/${userId}`,

        }),
        createUser: builder.mutation ({
            query: (userinfo) => ({
                url: `/users/${userinfo}`,
                method: "POST",
                body: userinfo
            }),
        }),
        updateUser: builder.mutation ({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PUT",
                body: user
            }),
        }),
        deleteUser: builder.mutation ({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "DELETE",
            }),
        }),
    
    
    }),
});
export const {
    useGetUsersQuery,
    useGetUserQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi