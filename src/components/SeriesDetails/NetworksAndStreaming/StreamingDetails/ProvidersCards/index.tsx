import { StreamingProvider } from "../../../../../interfaces/StreamingProvider"
import FreeTag from "../FreeTag"

type Props = {
  providers: StreamingProvider[]
}

export default function ProviderCards({ providers }: Props) {

  return (
    <>
      {providers.map((provider, index) => {
        return (
          <div className={`col-6 col-md-4 col-lg-2 text-center
                              ${provider.type == 'ads' ? 'position-relative' : ''}`} key={index} >

            {provider.type == 'ads' ? <FreeTag /> : ''}

            <img
              className='img-fluid'
              style={{ height: '2em' }}
              src={`https://image.tmdb.org/t/p/w185/${provider.logo_path}`}
              alt={provider.name}
            />
          </div>
        )
      })}
    </>
  )
}
