import { StreamingProvider } from "../../../../interfaces/StreamingProvider"

type Props = {
  providers: StreamingProvider[]
}

export default function StreamingDetails({ providers }: Props) {
  return (
    <div className='d-flex flex-wrap'>
      {providers.length === 0 ? <span className='lh-1'>Nenhum encontrado</span> :
        providers.map((provider, index) => {
          return (
            <img
              key={index}
              className='img-fluid me-2'
              style={{ height: '2em' }}
              src={`https://image.tmdb.org/t/p/w185/${provider.logo_path}`}
              alt={provider.name}
            />
          )
        })}
    </div>
  )
}
