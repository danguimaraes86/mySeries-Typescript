import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.TMDB_BASEURL,
  headers: {
    'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
  }
});

export async function fetchTrendingSeries(url: string) {
  const { data } = await instance({
    method: 'GET',
    url: url,
    params: { language: 'pt-BR' }
  })
  return data
}