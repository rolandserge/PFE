import { apiSlice } from "./apiSlice";
const MODULE_URL = "/api"

export const moduleApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createModule: builder.mutation({
          query: (data) => ({
            url: `${MODULE_URL}/add-module`,
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/json"
            }
          }),
        }),
        getAllModules: builder.query({
          query: () => ({
            url: `${MODULE_URL}/get-modules`,
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }),
        }),
        deleteModule: builder.mutation({
          query: (id) => ({
            url: `${COURSE_URL}/delete-course/${id}`,
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
          }),
        }),
        editModule: builder.mutation({
          query: ({ id, data }) => ({
            url: `${COURSE_URL}/edit-course/${id}`,
            method: "PUT",
            body: data,
            headers: {
              "Content-Type": "application/json"
            }
          }),
        }),
        getModuleDetails: builder.query({
          query: (id) => ({
            url: `${COURSE_URL}get-course/${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }),
        }),
        getModuleContent: builder.query({
          query: (id) => ({
            url: `get-course-content/${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }),
        }),
      }),
})

export const {
    useCreateModuleMutation,
    useGetAllModulesQuery,
} = moduleApiSlice