import Navbar from '../components/Navbar'
import SeriesCard from '../components/SeriesCard'
import LayoutWrapper from '../components/Utils/LayoutWrapper'
import Spinner from '../components/Utils/Spinner'
import { useTrending } from '../hooks/useTrending'
import appStrings from '../util/appStrings'

function Home() {

  const TRENDING_TITTLE = appStrings.TRENDING_TITLE

  const { trending, loading } = useTrending()

  return (
    <>
      <Navbar />
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
    </>
  )
}

export default Home