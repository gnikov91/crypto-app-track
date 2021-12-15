import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
	'x-rapidapi-key': '1a6f4c0003msh003b4ffe611fa7bp15424ejsn471d13945796',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getExchanges: builder.query({
			query: () => createRequest('/exchanges'),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				createRequest(`coin/${coinId}/history/${timeperiod}`),
		}),
	}),
})

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi
