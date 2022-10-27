import { Network } from "../../../../interfaces/Network"

type Props = {
  networks: Network[]
}

export default function NetworksDetails({ networks }: Props) {
  return (
    <div className='row g-1'>
      {networks.map((network, index) => {
        return (
          <div className='col-4 col-lg-3' key={index} >
            <img
              className='img-fluid me-2'
              style={{ height: '2em' }}
              src={`https://image.tmdb.org/t/p/w185/${network.logo_path}`}
              alt={network.name}
            />
          </div>
        )
      })}
    </div>
  )
}
