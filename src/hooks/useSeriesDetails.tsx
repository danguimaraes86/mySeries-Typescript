import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Network } from '../interfaces/Network';
import { SeriesDetails } from '../interfaces/SeriesDetails';
import { StreamingProvider } from '../interfaces/StreamingProvider';
import { tmdbFetcher } from '../libs/fetcher';

export function useSeriesDetails(id: string) {

  const [seriesDetails, setSeriesDetails] = useState<SeriesDetails>({
    id: '',
    name: '',
    poster: '',
    airDate: '',
    original_language: '',
    original_name: '',
    overview: '',
    type: '',
    status: '',
    number_of_seasons: 0,
    networks: [],
    providers: []
  })
  const [loading, setLoading] = useState<boolean>(true)
  const { data } = useSWR(`/api/series/${id}`, tmdbFetcher)

  useEffect(() => {
    if (!data) return setLoading(true)
    setSeriesDetails({
      id: data.id,
      name: data.name,
      poster: data.poster_path,
      airDate: data.first_air_date,
      original_language: data.original_language,
      original_name: data.original_name,
      overview: data.overview,
      type: data.type,
      status: data.status,
      number_of_seasons: data.number_of_seasons,
      networks: handleNetworks(data.networks),
      providers: handleStreamingProviders(data.providers),
    })
    setLoading(false)
  }, [data])

  return { seriesDetails, loading }
}

function handleNetworks(networks: []): Network[] {
  return networks.map((network: Network) => {
    return {
      name: network.name,
      logo_path: network.logo_path
    }
  })
}

function handleStreamingProviders(providers: any): StreamingProvider[] {
  if (providers.length === 0) return []

  let result: StreamingProvider[] = []
  if (providers.hasOwnProperty('flatrate')) {
    providers.flatrate.forEach((provider: any) => {
      const providerResult: StreamingProvider = {
        name: provider.provider_name,
        logo_path: provider.logo_path,
        type: 'flatrate'
      }
      result.push(providerResult)
    })
  }

  // [TODO] Add Streaming Ads tier to Details page
  if (providers.hasOwnProperty('ads')) {
    providers.ads.forEach((provider: any) => {
      const providerResult: StreamingProvider = {
        name: provider.provider_name,
        logo_path: provider.logo_path,
        type: 'ads'
      }
      result.push(providerResult)
    })
  }

  return result
}