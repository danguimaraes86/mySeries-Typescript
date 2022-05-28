import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FavoriteButton from '../../components/SeriesDetails/FavoriteButton'
import PosterCard from '../../components/SeriesDetails/PosterCard'
import DetailsWrapper from '../../components/Utils/DetailsWrapper'
import LeftColumn from '../../components/Utils/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/Utils/DetailsWrapper/RightColumn'
import Spinner from '../../components/Utils/Spinner'
import { useSeriesDetails } from '../../hooks/useSeriesDetails'

function SeriesDetails() {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(true)
  const { seriesDetails, error } = useSeriesDetails(id as string)

  useEffect(() => {
    (!seriesDetails && !error) ? setLoading(true) : setLoading(false)
  }, [seriesDetails, error])

  return (
    <DetailsWrapper>
      {loading ? <Spinner /> :
        <>
          <LeftColumn>
            <PosterCard
              url={`https://image.tmdb.org/t/p/w500/${seriesDetails.poster}`}
              name={seriesDetails.name}
            />
            <FavoriteButton />
          </LeftColumn>

          <RightColumn>
            {seriesDetails.id}
          </RightColumn>
        </>
      }
    </DetailsWrapper>
  )
}

export default SeriesDetails