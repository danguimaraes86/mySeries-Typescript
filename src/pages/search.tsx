import { useRouter } from 'next/router'
import LayoutWrapper from '../components/Utils/LayoutWrapper'
import Spinner from '../components/Utils/Spinner'
import { useSearch } from '../hooks/useSearch'
import { handleSearchResults } from '../libs/handleSearchResults'

function Search() {

  const RESULTS_TITLE = 'Resultados'

  const { query: { value } } = useRouter()
  const { searchResults, loading } = useSearch(value as string)

  return (
    <LayoutWrapper title={RESULTS_TITLE} >
      {loading ? <Spinner /> : handleSearchResults(searchResults)}
    </LayoutWrapper >
  )
}

export default Search