import { CardDetails } from '../interfaces/CardDetails';
import customAxios from './customAxios';

export async function fetchTrendingSeries(url: string) {
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

export async function fetchSeriesDetails(url: string, params: object ){
  const { data } = await customAxios({
    method: 'GET',
    url: url,
    params: params
  })
  console.log(data);
  
  return data
}