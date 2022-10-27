import { StreamingProvider } from '../../../interfaces/StreamingProvider';
import StreamingDetails from './StreamingDetails';

type Props = {
  providers: StreamingProvider[]
}

// [TODO] Add or remove Network details ??
export default function NetworksAndStreaming({ providers }: Props) {
  return (
    <div className='col-12 mt-2'>
      <div className='row'>

        <div className='col-12'>
          <h6>Onde Assistir</h6>
          <StreamingDetails providers={providers} />
        </div>

      </div>
    </div>
  )
}
