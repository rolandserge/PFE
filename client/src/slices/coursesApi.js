import { apiSlice } from "./apiSlice";
const COURSE_URL = "/api"

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: `${COURSE_URL}/create-course`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json"
        }
      }),
    }),
    getAllCourses: builder.query({
      query: () => ({
        url: `${COURSE_URL}/get-admin-courses`,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `${COURSE_URL}/delete-course/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      }),
    }),
    editCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `${COURSE_URL}/edit-course/${id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json"
        }
      }),
    }),
    getUsersAllCourses: builder.query({
      query: () => ({
        url: `${COURSE_URL}/get-courses`,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }),
    }),
    getCourseDetails: builder.query({
      query: (id) => ({
        url: `${COURSE_URL}/get-course/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }),
    }),
    getCourseContent: builder.query({
      query: (id) => ({
        url: `${COURSE_URL}/get-course-content/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllCoursesQuery,
  useDeleteCourseMutation,
  useEditCourseMutation,
  useGetUsersAllCoursesQuery,
  useGetCourseDetailsQuery,
  useGetCourseContentQuery,
} = coursesApi;
