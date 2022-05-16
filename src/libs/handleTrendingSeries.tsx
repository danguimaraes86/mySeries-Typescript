import SeriesCard from '../components/SeriesCard'
import { CardDetails } from '../interfaces/CardDetails'

export function handleTrendingSeries(trending: CardDetails[]) {
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