type Props = {
  children: JSX.Element | JSX.Element[]
}
export default function LeftColumn({ children }: Props) {
  return (
    <div className='col-3'>
      <div className='row'>
        {children}
      </div>
    </div>
  )
}