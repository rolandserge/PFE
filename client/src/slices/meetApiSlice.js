import { apiSlice } from "./apiSlice";
const MEET_URL = "/api"

export const meetApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      createMeeting: builder.mutation({
        query: () => ({
          url: `${MEET_URL}/meetings`,
          method: "POST",
          body: JSON.stringify({ title: "La reunion a demarrer" }),
          headers: {
            "Content-Type": "application/json",
          }
        }),
      }),
      joinMeeting: builder.mutation({
        query: (id) => ({
          url: `${MEET_URL}/meetings/${id}/participants`,
          method: "POST",
          body: JSON.stringify({ name: "new user", preset_name: "group_call_host" }),
          headers: {
            "Content-Type": "application/json",
          }
        }),
      }),
      getMeetingId: builder.query({
        query: () => ({
          url: `${MEET_URL}/meet`,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }),
      })
    }),
  });
  
  export const {
    useCreateMeetingMutation,
    useJoinMeetingMutation,
    useGetMeetingIdQuery
  } = meetApiSlice;