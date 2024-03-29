import { StreamingProvider } from '../../../interfaces/StreamingProvider';
import ProviderCards from './ProvidersCards';

type Props = {
  providers: StreamingProvider[]
}

// [TODO] Add or remove Network details ??
export default function StreamingDetails({ providers }: Props) {

  if (providers.length === 0) return <span className='lh-1'>Nenhum encontrado</span>

  const paidProviders = providers.filter(provider => provider.type == 'flatrate')
  const freeProviders = providers.filter(provider => provider.type == 'ads')

  return (
    <div className='col-12 mt-2'>
      <div className='row'>

        <div className='col-12'>
          <h6>Onde Assistir</h6>
          <div className='row g-1 mb-1'>
            <ProviderCards providers={paidProviders} />
          </div>
          {freeProviders.length == 0 ? '' :
            <div className="row g-1">
              <ProviderCards providers={freeProviders} />
            </div>
          }
        </div>

      </div>
    </div>
  )
}
