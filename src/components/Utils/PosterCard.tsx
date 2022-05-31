import Image from 'next/image'

type Props = {
  name: string,
  posterPath: string,
  page: string
}

export default function SeriesPoster({ name, posterPath, page }: Props) {

  const style = (page: string) => {
    if (page === 'home') return 'card-img-top'
    if (page === 'details') return 'rounded'
  }

  return (
    <Image
      className={style(page)}
      src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
      width={500}
      height={800}
      alt={`poster da série ${name}`}
    />
  )
}