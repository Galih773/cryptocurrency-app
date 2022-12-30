import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = { 
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '',
  'X-RapidAPI-Host': ''
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl, headers: cryptoNewsHeaders}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
    })
  })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi
