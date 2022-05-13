import Separator from '../Utils/Separator'
import MySeriesLogo from './MySeriesLogo'
import SearchForm from './SearchForm'

function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark rounded-bottom'>
      <div className='container-fluid'>
        <MySeriesLogo />
        <Separator />
        <SearchForm />
      </div>
    </nav>
  )
}

export default Navbar