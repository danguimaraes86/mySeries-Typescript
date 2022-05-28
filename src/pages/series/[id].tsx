import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import FavoriteButton from '../../components/SeriesDetails/FavoriteButton'
import PosterCard from '../../components/SeriesDetails/PosterCard'
import SeriesOverview from '../../components/SeriesDetails/SeriesOverview'
import SeriesTitle from '../../components/SeriesDetails/SeriesTitle'
import DetailsWrapper from '../../components/Utils/DetailsWrapper'
import LeftColumn from '../../components/Utils/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/Utils/DetailsWrapper/RightColumn'
import Spinner from '../../components/Utils/Spinner'
import { useSeriesDetails } from '../../hooks/useSeriesDetails'
import { getYear } from '../../libs/dateParsing'

function SeriesDetails() {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(true)
  const { seriesDetails, error } = useSeriesDetails(id as string)

  useEffect(() => {
    (!seriesDetails && !error) ? setLoading(true) : setLoading(false)
  }, [seriesDetails, error])

  return (
    <>
      <Navbar />
      <DetailsWrapper>
        {loading ? <Spinner /> :
          <>
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
          </>
        }
      </DetailsWrapper>
    </>
  )
}

export default SeriesDetails