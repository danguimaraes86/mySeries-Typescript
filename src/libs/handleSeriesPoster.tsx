import Image from 'next/image'

export function handleSeriesPoster(img: string, name: string){
  if(!img){
    return (
      <div className='card-img-top d-flex justify-content-center align-items-center bg-secondary h-100'>
        <i className='bi bi-image text-info ' style={{ fontSize: '6em' }} />
      </div>
    )
  } else {
    return (
      <Image 
        src={`https://image.tmdb.org/t/p/w500/${img}`}
        width={500}
        height={800}
        className='card-img-top'
        alt={`poster da série ${name}`}
      />
    )
  }
}