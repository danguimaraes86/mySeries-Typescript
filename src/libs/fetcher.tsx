import axios from 'axios';

const tmdbAxios = axios.create({
  baseURL: process.env.TMDB_BASEURL,
  headers: {
    'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
  },
  params: { language: 'pt-BR' }
})

export async function tmdbFetcher(url: string, params?: object) {
  const { data } = await tmdbAxios({ url, params })
  return data
}

export async function fetcher(url: string, method: 'GET' | 'POST', data?: object, params?: object) {
  const { data: result } = await axios({ url, method, data, params })
  return result
}
