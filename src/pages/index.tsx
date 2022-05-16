import type { GetServerSideProps } from 'next'
import Navbar from '../components/Navbar'
import SeriesCard from '../components/SeriesCard'
import TrendinWrapper from '../components/Utils/TrendinWrapper'
import { CardDetails } from '../interfaces/CardDetails'
import { fetchTrendingSeries } from '../libs/fetcher'
import { handleTrendingSeries } from '../libs/handleTrendingSeries'

type Props = {
  trending: CardDetails[]
}

function Home({ trending }: Props) {
  return (
    <>
      <Navbar />
      <TrendinWrapper>
        {handleTrendingSeries(trending)}
      </TrendinWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const trending = await fetchTrendingSeries('/trending/tv/week')
  return {
    props: {
      trending
    }
  }
}

export default Home