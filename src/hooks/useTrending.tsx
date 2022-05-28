import useSWR from "swr";
import { CardDetails } from "../interfaces/CardDetails";
import { fetcher } from "../libs/fetcher";

export function useTrending() {
  const { data, error } = useSWR('/api/trending', fetcher)

  let trending: CardDetails[] = []
  if (data) {
    trending = data.results.map((series: any): CardDetails => {
      return {
        id: series.id,
        name: series.name,
        poster: series.poster_path,
        airDate: series.first_air_date
      }
    })
  }

  return { trending, error }
}