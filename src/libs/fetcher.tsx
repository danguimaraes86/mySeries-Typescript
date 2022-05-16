import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.TMDB_BASEURL,
  headers: {
    'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
  },
  params:  { language: 'pt-BR' }
});

export async function fetchTrendingSeries(url: string) {
  const { data } = await customAxios({
    method: 'GET',
    url: url,
  })
  return data
}

export async function fetchSeriesDetails(url: string, params: object ){
  const { data } = await customAxios({
    method: 'GET',
    url: url,
    params: params
  })
  return data
}