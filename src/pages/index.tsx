import SeriesCard from '../components/SeriesCard'
import LayoutWrapper from '../components/Utils/LayoutWrapper'
import Spinner from '../components/Utils/Spinner'
import { useTrending } from '../hooks/useTrending'

function Home() {

  const TRENDING_TITTLE = 'Em Alta'

  const { trending, loading } = useTrending()

  return (
    <LayoutWrapper title={TRENDING_TITTLE}>
      {loading ? <Spinner /> :
        trending.map((series) => {
          return (
            <SeriesCard
              key={series.id}
              series={series}
            />
          )
        })
      }
    </LayoutWrapper>
  )
}

export default Home