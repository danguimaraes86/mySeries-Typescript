import { GetServerSideProps } from 'next'
import Navbar from '../../components/Navbar'
import FavoriteButton from '../../components/SeriesDetails/FavoriteButton'
import PosterCard from '../../components/SeriesDetails/PosterCard'
import SeriesOverview from '../../components/SeriesDetails/SeriesOverview'
import SeriesTitle from '../../components/SeriesDetails/SeriesTitle'
import DetailsWrapper from '../../components/Utils/DetailsWrapper'
import LeftColumn from '../../components/Utils/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/Utils/DetailsWrapper/RightColumn'
import { Network } from '../../interfaces/Network'
import { SeriesDetails } from '../../interfaces/SeriesDetails'
import { StreamingProvider } from '../../interfaces/StreamingProvider'
import { getYear } from '../../libs/dateParsing'
import { fetcher } from '../../libs/fetcher'

function SeriesDetails({ seriesDetails }: { seriesDetails: SeriesDetails }) {

  return (
    <>
      <Navbar />
      <DetailsWrapper>
        <LeftColumn>
          <PosterCard
            posterPath={seriesDetails.poster}
            name={seriesDetails.name}
          />
          <FavoriteButton />
        </LeftColumn>

        <RightColumn>
          <SeriesTitle
            name={seriesDetails.name}
            original_name={seriesDetails.original_name}
            original_language={seriesDetails.original_language}
            year={getYear(seriesDetails.airDate)}
          />
          <SeriesOverview
            overview={seriesDetails.overview}
            type={seriesDetails.type}
            first_air_date={seriesDetails.airDate}
            number_of_seasons={seriesDetails.number_of_seasons}
            status={seriesDetails.status}
          />
        </RightColumn>
      </DetailsWrapper>
    </>
  )
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const series = await fetcher(`/tv/${id}`, { append_to_response: 'external_ids' })
  const { results: providers } = await fetcher(`/tv/${id}/watch/providers`)
  series['providers'] = providers.hasOwnProperty('BR') ? providers.BR : []

  const seriesDetails: SeriesDetails = {
    id: series.id,
    name: series.name,
    poster: series.poster_path,
    airDate: series.first_air_date,
    original_language: series.original_language,
    original_name: series.original_name,
    overview: series.overview,
    type: series.type,
    status: series.status,
    number_of_seasons: series.number_of_seasons,
    networks: handleNetworks(series.networks),
    providers: handleStreamingProviders(series.providers),
  }

  return { props: { seriesDetails } }
}

export default SeriesDetails