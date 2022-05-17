import type { GetServerSideProps } from 'next'
import DetailsWrapper from '../../components/Utils/DetailsWrapper'
import LeftColumn from '../../components/Utils/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/Utils/DetailsWrapper/RightColumn'
import { SeriesDetails } from '../../interfaces/SeriesDetails'
import handleSeriesDetails from '../../libs/handleSeriesDetails'

type Props = {
  series: SeriesDetails,
}

function SeriesDetails({ series }: Props) {
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
  const series = await handleSeriesDetails(id)

  return {
    props: { series }
  }
}

export default SeriesDetails