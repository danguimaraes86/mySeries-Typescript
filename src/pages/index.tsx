import axios from 'axios'
import type { GetServerSideProps } from 'next'
import Navbar from '../components/Navbar'
import TrendinWrapper from '../components/Utils/TrendinWrapper'
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
  const { data } = await axios({
    baseURL: process.env.TMDB_BASEURL,
    method: 'GET',
    url: '/trending/tv/week',
    params: { language: 'pt-BR' },
    headers: {
      'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
    }
  })
  const { results: trending } = data

  return {
    props: {
      trending,
    },
  }
}

export default Home
