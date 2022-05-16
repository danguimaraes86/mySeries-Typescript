import Image from 'next/image'

export function handleSeriesPoster(posterPath: string, name: string) {

  if (!posterPath) {
    return (
      <div className='card-img-top d-flex justify-content-center align-items-center bg-secondary h-100'>
        <i className='bi bi-image text-info ' style={{ fontSize: '6em' }} />
      </div>
    )
  }

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
      width={500}
      height={800}
      className='card-img-top'
      alt={`poster da série ${name}`}
    />
  )

}