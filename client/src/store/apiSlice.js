import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURI = 'http://localhost:8080'
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // Get Categories
    getCategories: builder.query({
      // get request 'http://localhost:8080'
      query: () => '/api/categories',
    }),

    // Get Labels
    getLabels: builder.query({
      query: () => '/api/labels',
    }),

    // add new transaction
    addTransaction: builder.mutation({
      query: (newTransaction) => ({
        url: '/api/transaction',
        method: 'POST',
        body: newTransaction,
      }),
    }),

    // delete a transaction
    deleteTransaction: builder.mutation({
      query: (transactionID) => ({
        url: '/api/transaction',
        method: 'DELETE',
        body: transactionID,
      }),
    }),
  }),
})

export default apiSlice
