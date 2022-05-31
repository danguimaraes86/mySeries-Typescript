import customAxios from './customAxios';

export async function fetcher(url: string, params?: object) {
  const { data } = await customAxios({ url, params })
  return data
}