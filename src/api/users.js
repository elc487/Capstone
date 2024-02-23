import { api } from "./api";
const TOKEN = "token"

const usersApi = api.injectEndpoints({
    endpoints:builder => ({
        getUsers: builder.query({
            query: () => 'api/users',
        }),
        getUser: builder.query({
            query:(userId) => `api/user/${userId}`,

        }),
        createUser: builder.mutation ({
            query: (userinfo) => ({
                url: `api/users/${userinfo}`,
                method: "POST",
                body: userinfo
            }),
        }),
        updateUser: builder.mutation ({
            query: (user) => ({
                url: `api/user/${user.id}`,
                method: "PUT",
                body: user
            }),
        }),
        deleteUser: builder.mutation ({
            query: (userId) => ({
                url: `api/users/${userId}`,
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