import Image from 'next/image'
import appIcons from '../../../util/appIcons'

type Props = {
  posterPath: string,
  name: string
}

export default function PosterCard({ posterPath, name }: Props): JSX.Element {

  const NO_POSTER_ICON = appIcons.NO_POSTER_ICON

  if (!posterPath) {
    return (
      <div className='rounded d-flex justify-content-center align-items-center'>
        <i className={NO_POSTER_ICON} style={{ fontSize: '6em' }} />
      </div>
    )
  }

  return (
    <div className='col-12'>
      <Image
        className='rounded'
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        width={500}
        height={800}
        alt={`poster da série ${name}`}
      />
    </div>
  )
}
