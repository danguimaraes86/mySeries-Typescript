import useSWR from "swr";
import { Network } from "../interfaces/Network";
import { SeriesDetails } from "../interfaces/SeriesDetails";
import { StreamingProvider } from "../interfaces/StreamingProvider";
import { fetcher } from "../libs/fetcher";

export function useSeriesDetails(id: string) {

  const { data, error } = useSWR(`/api/series/${id}`, fetcher)

  let seriesDetails: SeriesDetails = {
    original_language: "",
    original_name: "",
    overview: "",
    type: "",
    status: "",
    number_of_seasons: 0,
    networks: [],
    providers: [],
    id: "",
    name: "",
    poster: "",
    year: ""
  }

  if (data) {
    seriesDetails = {
      id: data.id,
      name: data.name,
      poster: data.poster_path,
      year: data.first_air_date,
      original_language: data.original_language,
      original_name: data.original_name,
      overview: data.overview,
      type: data.type,
      status: data.status,
      number_of_seasons: data.number_of_seasons,
      networks: handleNetworks(data.networks),
      providers: handleStreamingProviders(data.providers),
    }
  }

  return { seriesDetails, error }
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

  if (providers.hasOwnProperty('ads')) {
    providers.flatrate.forEach((provider: any) => {
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