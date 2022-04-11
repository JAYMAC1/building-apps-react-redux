import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURI = 'http://localhost:8080'
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      // get request 'http://localhost:8080'
      query: () => '/api/categores',
    }),
  }),
})

export default apiSlice
