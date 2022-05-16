import appStrings from "../../util/appStrings"

type Props = {
  children?: JSX.Element[]
}

function TrendinWrapper ({ children }: Props) {

  const TRENDING_TITTLE = appStrings.TRENDING_TITTLE

  return (
    <main className='border rounded-top p-3 mt-2'>
      <h5 className='display-5'>
        {TRENDING_TITTLE}
      </h5>
      <div className='row g-3'>
        {children}
      </div>
    </main>
  )
}

export default TrendinWrapper