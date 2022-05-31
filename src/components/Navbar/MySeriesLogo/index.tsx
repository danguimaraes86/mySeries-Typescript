import Link from 'next/link'
import appIcons from '../../../util/appIcons'
import appStrings from '../../../util/appStrings'

export default function MySeriesLogo() {

  const APP_NAME: string = appStrings.APP_NAME
  const APP_LOGO: string = appIcons.APP_LOGO

  return (
    <Link href='/'>
      <a className='navbar-brand text-info flex-fill '>
        <i className={`${APP_LOGO} d-inline-block align-text-top`} />
        <span className='ms-2 d-none d-sm-inline-block'>{APP_NAME}</span>
      </a>
    </Link>
  )
}