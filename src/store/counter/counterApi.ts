import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const counterApi = createApi({
	reducerPath: "counterApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
	endpoints: (builder) => ({
		getAllCountries: builder.query<any, string>({
			query: () => `/all`,
		}),
		getCountryByName: builder.query<any, string>({
			query: (name) => `/name/${name}`,
		}),
	}),
})

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } = counterApi

// Need to use the React-specific entry point to import createApi
