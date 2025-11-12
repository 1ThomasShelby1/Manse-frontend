import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allApi = createApi({
  reducerPath: 'allApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['Complaint'],  // add tag types if using cache invalidation
  endpoints: (builder) => ({
    // getNavbar: builder.query({
    //   query: () => '/api/navbar/navbar',
    // }),
    // getCards: builder.query({
    //   query: () => '/api/cards/om',
    // }),
    // mutation endpoint for submitting a complaint
    submitComplaint: builder.mutation({
      query: (complaintData) => ({
        url: '/api/complaints',
        method: 'POST',
        body: complaintData,
      }),
      invalidatesTags: ['Complaint'], // invalidate if you want to refetch
    }),
  }),
});

export const {
  // useGetNavbarQuery,
  // useGetCardsQuery,
  useSubmitComplaintMutation,   // hook for the mutation
} = allApi;
