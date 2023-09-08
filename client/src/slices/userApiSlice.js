import { apiSlice } from "./apiSlice";
const USER_URL = '/api'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json"
                },
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: 'POST',
                 headers: {
                    "Content-Type": "application/json"
                },
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
            })  
        }),
        updateUser: builder.mutation({
            query: (data) => ({
              url: `${USER_URL}/profile`,
              method: 'PUT',
              body: data,
              headers: {
                "Content-Type": "application/json"
            },
            }),
          }),
    })
})
export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserMutation,
  } = userApiSlice;