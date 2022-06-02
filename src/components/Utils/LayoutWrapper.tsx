type Props = {
  children?: JSX.Element | JSX.Element[],
  title: string
}

export default function LayoutWrapper ({ children, title }: Props) {

  return (
    <main className='border rounded-top p-3 mt-2'>
      <h5 className='display-5'>
        {title}
      </h5>
      <div className='row g-3'>
        {children}
      </div>
    </main>
  )
}