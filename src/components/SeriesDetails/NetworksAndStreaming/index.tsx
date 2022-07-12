/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Network } from '../../../interfaces/Network';
import { StreamingProvider } from '../../../interfaces/StreamingProvider';

type Props = {
  networks: Network[],
  providers: StreamingProvider[]
}

export default function NetworksAndStreaming({ networks, providers }: Props) {
  return (
    <div className='col-12 mb-2'>
      <div className='row'>

        <div className='col-6 col-md-4 col-lg-3'>
          <h6>Emissoras</h6>
          <div className='d-flex flex-wrap'>
            {networks.map((network, index) => {
              return (
                <img
                  key={index}
                  className='img-fluid me-2'
                  style={{ height: '2em' }}
                  src={`https://image.tmdb.org/t/p/w185/${network.logo_path}`}
                  alt={network.name}
                />
              )
            })}
          </div>
        </div>

        <div className='col-6 col-md-4 col-lg-3'>
          <h6>Onde Assistir</h6>
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
        </div>

      </div>
    </div>
  )
}
