import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import LayoutWrapper from '../components/Utils/LayoutWrapper'
import Spinner from '../components/Utils/Spinner'
import { useSearch } from '../hooks/useSearch'
import { handleSearchResults } from '../libs/handleSearchResults'
import appStrings from '../util/appStrings'

function Search() {

  const RESULTS_TITLE = appStrings.RESULTS_TITLE

  const { query: { value } } = useRouter()
  const { searchResults, loading } = useSearch(value as string)

  return (
    <>
      <Navbar />
      <LayoutWrapper title={RESULTS_TITLE} >
        {loading ? <Spinner /> : handleSearchResults(searchResults)}
      </LayoutWrapper >
    </>
  )
}

export default Search