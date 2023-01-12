import axios, { AxiosError } from 'axios';

const tmdbAxios = axios.create({
  baseURL: process.env.TMDB_BASEURL,
  headers: {
    'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
  },
  params: { language: 'pt-BR' }
})

export async function tmdbFetcher(url: string, params?: object) {
  try {
    const { data } = await tmdbAxios({ url, params })
    return data
  } catch (error) {
    let e = error as AxiosError
    console.error({ code: e.code, stack: e.stack })
  }
}

export async function fetcher(url: string, method: 'GET' | 'POST', data?: object, params?: object) {
  try {
    const { data: result } = await axios({ url, method, data, params })
    return result
  } catch (error) {
    let e = error as AxiosError
    console.error({ code: e.code, stack: e.stack })
  }
}
