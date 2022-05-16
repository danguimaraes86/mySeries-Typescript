import Link from 'next/link'
import { CardDetails } from '../../interfaces/CardDetails'
import { getYear } from '../../libs/dateParsing'
import { handleSeriesPoster } from '../../libs/handleSeriesPoster'
import appIcons from '../../util/AppIcons'

type Props = {
  series: CardDetails
}

function SeriesCard({ series }: Props) {

  const MORE_DETAILS_ICON: string = appIcons.MORE_DETAILS_ICON

  return (
    <div className='col col-12 col-sm-6 col-md-4 col-lg-3'>
      <div className='card h-100'>
        {handleSeriesPoster(series.poster, series.name)}
        <div className='card-body'>
          <h5 className='card-title'>{`${series.name} ${getYear(series.year)}`}</h5>
        </div>
        <Link href={{
          pathname: '/series/[id]',
          query: { id: series.id }
        }}>
          <a className='text-decoration-none'>
            <div className='card-footer bg-dark'>
              <small className='text-info'>Mais detalhes <i className={MORE_DETAILS_ICON} /></small>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SeriesCard