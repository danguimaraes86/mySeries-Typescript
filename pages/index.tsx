import type { NextPage } from 'next'

const Home: NextPage = () => {

  const name: string = 'Daniel'

  return (
    <>
      <h1 className='display-6'>{name}</h1>
      <i className='bi-alarm-fill'></i>
    </>
  )
}

export default Home
