import Separator from '../Utils/Separator'
import LoginButton from './LoginButton'
import MySeriesLogo from './MySeriesLogo'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark rounded-bottom sticky-top'>
      <div className='container-fluid'>
        <MySeriesLogo />
        <Separator />
        <SearchForm />
        <LoginButton />
      </div>
    </nav>
  )
}