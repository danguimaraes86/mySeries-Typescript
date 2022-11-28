import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { CardDetails } from '../interfaces/CardDetails';
import { fetcher } from '../libs/fetcher';

export function useSearch(value: string) {

  const [searchResults, setSearchResults] = useState<CardDetails[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { data } = useSWR(`/api/search?value=${value}`, fetcher)

  useEffect(() => {
    if (!data) return setLoading(true)
    setSearchResults(data.results.map((series: any): CardDetails => {
      return {
        id: series.id,
        name: series.name,
        poster: series.poster_path,
        airDate: series.first_air_date
      }
    }))
    setLoading(false)
  }, [data])

  return { searchResults, loading }
}
