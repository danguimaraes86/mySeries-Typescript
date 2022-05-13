import SeriesCard from '../components/SeriesCard'
import { SeriesCardType } from '../interfaces/SeriesModels'

export function handleTrendingSeries(trending: Object[]) {
  return (
    trending.map((series: any) => {

      const details: SeriesCardType = {
        id: series.id,
        name: series.name,
        poster: series.poster_path,
        year: series.first_air_date
      }

      return (
        <SeriesCard
          key={series.id}
          details={details}
        />
      )
    })
  )
}