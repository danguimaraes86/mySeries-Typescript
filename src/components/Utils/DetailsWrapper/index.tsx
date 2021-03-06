type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function DetailsWrapper({ children }: Props) {
  return (
    <main className='border rounded-top p-3 mt-2'>
      <div className='row'>
        {children}
      </div>
    </main>
  )
}