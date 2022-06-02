import SeriesCard from "../components/SeriesCard"
import { CardDetails } from "../interfaces/CardDetails"
import appStrings from "../util/appStrings"

export function handleSearchResults(searchResults: CardDetails[]) {

  const NO_RESULTS_FOUND = appStrings.NO_RESULTS_FOUND

  if (searchResults.length === 0) return (
    <div className='col'>
      <h4>{NO_RESULTS_FOUND}</h4>
    </div>
  )

  return searchResults.map((series) => {
    return (
      <SeriesCard
        key={series.id}
        series={series}
      />
    )
  })
}