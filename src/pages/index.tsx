import type { NextPage } from 'next'
import MySeriesLogo from '../components/Navbar/MySeriesLogo'
import SearchForm from '../components/Navbar/SearchForm'
import Separator from '../components/Navbar/Separator'

const Home: NextPage = () => {

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

export default Home
