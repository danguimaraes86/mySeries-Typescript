import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import FavoriteButton from '../../components/SeriesDetails/FavoriteButton'
import NetworksAndStreaming from '../../components/SeriesDetails/NetworksAndStreaming'
import SeriesOverview from '../../components/SeriesDetails/SeriesOverview'
import SeriesTitle from '../../components/SeriesDetails/SeriesTitle'
import DetailsWrapper from '../../components/Utils/DetailsWrapper'
import LeftColumn from '../../components/Utils/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/Utils/DetailsWrapper/RightColumn'
import Spinner from '../../components/Utils/Spinner'
import { useSeriesDetails } from '../../hooks/useSeriesDetails'
import { SeriesDetails } from '../../interfaces/SeriesDetails'
import { getYear } from '../../libs/dateParsing'
import { handleSeriesPoster } from '../../libs/handleSeriesPoster'

type Props = {
  seriesDetails: SeriesDetails,
  loading: boolean
}

function SeriesDetailsPage() {
  const { query: { id } } = useRouter()
  const { seriesDetails, loading }: Props = useSeriesDetails(id as string)

  return (
    <>
      <Navbar />
      <DetailsWrapper>
        {loading ? <Spinner /> :
          <>
            <LeftColumn>
              {handleSeriesPoster(seriesDetails.poster, seriesDetails.name, 'details')}
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
              <NetworksAndStreaming 
                networks={seriesDetails.networks}
                providers={seriesDetails.providers}
              />
            </RightColumn>
          </>
        }
      </DetailsWrapper>
    </>
  )
}

export default SeriesDetailsPage