import { StreamingProvider } from "../../../../interfaces/StreamingProvider";

type Props = {
  providers: StreamingProvider[]
}

// [TODO] Add next/Image component to logo
export default function StreamingDetails({ providers }: Props) {

  if (providers.length === 0) return <span className='lh-1'>Nenhum encontrado</span>

  return (
    <div className='row g-1'>
      {providers.map((provider, index) => {
        return (
          <div className='col-6 col-md-4 col-lg-2 text-center position-relative' key={index} >
            <span
              className={`bg-black bg-opacity-50 text-white position-absolute bottom-0
                          ${provider.type === 'ads' ? 'visible' : 'invisible'}`}
              style={{ fontSize: '0.5em' }}>grátis</span>
            <img
              className='img-fluid'
              style={{ height: '2em' }}
              src={`https://image.tmdb.org/t/p/w185/${provider.logo_path}`}
              alt={provider.name}
            />

          </div>
        )
      })}
    </div>
  )
}
