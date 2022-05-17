import { CardDetails } from '../interfaces/CardDetails';
import customAxios from './customAxios';

export async function fetchTrendingSeries(url: string): Promise<CardDetails> {
  const { data } = await customAxios({
    method: 'GET',
    url: url,
  })
  const trending: CardDetails = data.results.map((series: any): CardDetails => {
    return {
      id: series.id,
      name: series.name,
      poster: series.poster_path,
      year: series.first_air_date
    }
  })
  return trending
}

export async function fetchSeriesDetails(id: string | string[] | undefined) {
  const { data: series } = await customAxios({
    method: 'GET',
    url: `/tv/${id}`,
    params: { append_to_response: 'external_ids' }
  })
  const providers = await fetchSeriesProviders(id)
  series['providers'] = providers

  return series
}

async function fetchSeriesProviders(id: string | string[] | undefined) {
  const { data } = await customAxios({
    method: 'GET',
    url: `/tv/${id}/watch/providers`,
  })
  return data.results.hasOwnProperty('BR') ? data.results.BR : []
}