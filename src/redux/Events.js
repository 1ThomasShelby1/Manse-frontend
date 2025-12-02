import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/event",
  }),

  tagTypes: ["Events"],

  endpoints: (builder) => ({
    // --------------------------------
    // CREATE EVENT (multipart form-data)
    // --------------------------------
    createEvent: builder.mutation({
      query: (formData) => ({
        url: "/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Events"],
    }),

    // --------------------------------
    // GET ALL EVENTS
    // --------------------------------
    getAllEvents: builder.query({
      query: () => "/all",
      providesTags: ["Events"],
    }),

    // --------------------------------
    // GET SINGLE EVENT
    // --------------------------------
    getEventById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Events"],
    }),

    // --------------------------------
    // UPDATE EVENT (multipart form-data)
    // --------------------------------
    updateEvent: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Events"],
    }),

    // --------------------------------
    // DELETE EVENT
    // --------------------------------
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;
