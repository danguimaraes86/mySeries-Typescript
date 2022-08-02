import { Network } from '../../../interfaces/Network';
import { StreamingProvider } from '../../../interfaces/StreamingProvider';
import NetworksDetails from './NetworksDetails';
import StreamingDetails from './StreamingDetails';

type Props = {
  networks: Network[],
  providers: StreamingProvider[]
}

// [TODO] Add or remove Network details ??
export default function NetworksAndStreaming({ networks, providers }: Props) {
  return (
    <div className='col-12 mt-2'>
      <div className='row'>

        {/* <div className='col-6 col-md-4 col-lg-3'>
          <h6>Produção</h6>
          <NetworksDetails networks={networks} />
        </div> */}

        <div className='col-12'>
          <h6>Onde Assistir</h6>
          <StreamingDetails providers={providers} />
        </div>

      </div>
    </div>
  )
}
