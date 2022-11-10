import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import AuthenticationModal from '../components/AuthenticationModal'
import Navbar from '../components/Navbar'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='container bg-gray'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/tv-black.svg' />
        <title>mySeries</title>
      </Head>

      <Navbar />
      <AuthenticationModal />
      <Component {...pageProps} />

      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p' crossOrigin='anonymous' />

    </div>
  )

}

export default MyApp
