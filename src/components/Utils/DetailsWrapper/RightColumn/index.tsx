export default function RightColumn({ children }: Props) {
  return (
    <div className='col'>
      <div className='row'>
        {children}
      </div>
    </div>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
