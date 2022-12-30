import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '',
  'X-RapidAPI-Host': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl, headers: cryptoApiHeaders}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`
    }),

    getGlobalStats: builder.query({
      query: () => '/stats'
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`
    }),

    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => `/coin/${coinId}/history?timePeriod=${timePeriod}`
    })
  })
})

export const {useGetCryptosQuery, useGetGlobalStatsQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi
