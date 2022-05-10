import { NextComponentType } from "next"
import Link from "next/link"
import { AppStrings } from '../../util/appStrings'

const MySeriesLogo: NextComponentType = () => {

  const APP_NAME: string = AppStrings.APP_NAME
  const APP_LOGO: string = AppStrings.APP_LOGO

  return (
    <Link href='/'>
      <a className='navbar-brand text-info flex-fill '>
        <i className={`${APP_LOGO} d-inline-block align-text-top`} />
        <span className='ms-2 d-none d-sm-inline-block'>{APP_NAME}</span>
      </a>
    </Link>
  )
}

export default MySeriesLogo