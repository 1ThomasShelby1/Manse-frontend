import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allApi = createApi({
  reducerPath: 'allApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getNavbar: builder.query({
      query: () => '/api/navbar/navbar',
    }),
    getCards: builder.query({
      query: () => '/api/cards/om',
    }),
  }),
});

export const { useGetNavbarQuery, useGetCardsQuery } = allApi;
