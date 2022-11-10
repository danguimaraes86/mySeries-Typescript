import { Network } from "../../../interfaces/Network"

type Props = {
  networks: Network[]
}

export default function NetworksDetails({ networks }: Props) {
  return (
    <div className='d-flex flex-wrap'>
      {networks.map((network, index) => {
        return (
          <img
            key={index}
            className='img-fluid'
            style={{ height: '2em' }}
            src={`https://image.tmdb.org/t/p/w185/${network.logo_path}`}
            alt={network.name}
          />
        )
      })}
    </div>
  )
}
