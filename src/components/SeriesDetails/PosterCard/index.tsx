import Image from 'next/image'

type Props = {
  url: string,
  name: string
}

export default function PosterCard({ url, name }: Props): JSX.Element {
  return (
    <div className='col-12'>
      <Image
        className='rounded'
        src={url}
        width={500}
        height={800}
        alt={`poster da série ${name}`}
      />
    </div>
  )
}
