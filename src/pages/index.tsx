import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SeriesCard from '../components/SeriesCard'
import Spinner from '../components/Utils/Spinner'
import TrendinWrapper from '../components/Utils/TrendinWrapper'
import { useTrending } from '../hooks/useTrending'

function Home() {

  const [loading, setLoading] = useState(true)
  const { trending, error } = useTrending()

  useEffect(() => {
    (!trending && !error) ? setLoading(true) : setLoading(false)
  }, [trending, error])

  return (
    <>
      <Navbar />
      <TrendinWrapper>
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
      </TrendinWrapper>
    </>
  )
}

export default Home