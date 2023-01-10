import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { CardDetails } from '../interfaces/CardDetails';
import { tmdbFetcher } from '../libs/fetcher';

export function useTrending() {

  const [trending, setTrending] = useState<CardDetails[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  const { data } = useSWR('/api/trending', tmdbFetcher)

  useEffect(() => {
    if (!data) return setLoading(true)
    setTrending(data.results.map((series: any): CardDetails => {
      return {
        id: series.id,
        name: series.name,
        poster: series.poster_path,
        airDate: series.first_air_date
      }
    }))
    setLoading(false)
  }, [data])

  return { trending, loading }
}