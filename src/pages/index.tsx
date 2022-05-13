import type { GetServerSideProps } from 'next'
import Navbar from '../components/Navbar'
import TrendinWrapper from '../components/Utils/TrendinWrapper'
import { fetchTrendingSeries } from '../libs/fetcher'
import { handleTrendingSeries } from '../libs/handleTrendingSeries'

type Props = {
  trending: Object[]
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
  const { results: trending } = await fetchTrendingSeries('/trending/tv/week')

  return {
    props: {
      trending
    }
  }
}

export default Home