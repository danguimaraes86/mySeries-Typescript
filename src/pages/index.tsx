import Navbar from '../components/Navbar'
import SeriesCard from '../components/SeriesCard'
import Spinner from '../components/Utils/Spinner'
import TrendinWrapper from '../components/Utils/TrendinWrapper'
import { useTrending } from '../hooks/useTrending'

function Home() {

  const { trending, error } = useTrending()

  function handleLoading(): JSX.Element | JSX.Element[] {
    if (!trending && !error) return <Spinner />
    return (
      trending.map((series) => {
        return (
          <SeriesCard
            key={series.id}
            series={series}
          />
        )
      })
    )
  }

  return (
    <>
      <Navbar />
      <TrendinWrapper>
        {handleLoading()}
      </TrendinWrapper>
    </>
  )
}

export default Home