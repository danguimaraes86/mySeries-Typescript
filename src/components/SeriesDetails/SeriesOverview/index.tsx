import { dateLocale } from '../../../libs/dateParsing'

type Props = {
  overview: string,
  type: string,
  first_air_date: string,
  number_of_seasons: number,
  status: string
}

export default function SeriesOverview({ overview, type, first_air_date, number_of_seasons, status }: Props) {

  return (
    <div className='col-12 mb-2'>

      <div className='row'>
        <div className='col-12'>
          <h6>Descrição</h6>
          <p>{overview}</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-6 col-md-4 col-lg-3'>
          <h6>Tipo de Programa</h6>
          <p>{type}</p>
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <h6>Data de Estréia</h6>
          <p>{dateLocale(first_air_date)}</p>
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <h6>Temporadas</h6>
          <p>{number_of_seasons}</p>
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <h6>Situação</h6>
          <p>{status}</p>
        </div>
      </div>

    </div>
  )
}