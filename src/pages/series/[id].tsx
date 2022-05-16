import type { GetServerSideProps } from 'next'
import DetailsWrapper from '../../components/Utils/DetailsWrapper'
import LeftColumn from '../../components/Utils/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/Utils/DetailsWrapper/RightColumn'
import { fetchSeriesDetails } from '../../libs/fetcher'

function SeriesDetails({ series }) {

  console.log(series)

  return (
    <DetailsWrapper>
      <LeftColumn>
        {series.name}
      </LeftColumn>

      <RightColumn>
        {series.id}
      </RightColumn>
    </DetailsWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const url = `/tv/${id}`
  const params = { append_to_response: 'external_ids' }
  const series = await fetchSeriesDetails(url, params)

  return {
    props: {
      series
    }
  }
}

export default SeriesDetails