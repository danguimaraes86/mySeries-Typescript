import BlankPoster from '../components/Utils/BlankPoster'
import PosterCard from '../components/Utils/PosterCard'

export function handleSeriesPoster(posterPath: string, name: string, page: string) {
  if (!posterPath) return <BlankPoster page={page} />
  return <PosterCard posterPath={posterPath} name={name} page={page} />
}