import { Network } from "../interfaces/Network"
import { SeriesDetails } from "../interfaces/SeriesDetails"
import { StreamingProvider } from "../interfaces/StreamingProvider"
import { fetchSeriesDetails } from "./fetcher"

export default async function handleSeriesDetails(id: string | string[] | undefined): Promise<SeriesDetails> {

  const series = await fetchSeriesDetails(id)

  const serisDetails: SeriesDetails = {
    id: series.id,
    name: series.name,
    poster: series.poster_path,
    year: series.first_air_date,
    original_language: series.original_language,
    original_name: series.original_name,
    overview: series.overview,
    type: series.type,
    status: series.status,
    number_of_seasons: series.number_of_seasons,
    networks: handleNetworks(series.networks),
    providers: handleStreamingProviders(series.providers),
  }

  return serisDetails
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
  if(providers.length === 0) return []

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
