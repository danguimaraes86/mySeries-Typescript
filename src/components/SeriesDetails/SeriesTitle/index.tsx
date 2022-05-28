function SeriesTitle({ name, original_name, original_language, year }: Props) {
  return (
    <div className='col-12 mb-4'>
      <span className='display-5'>
        {name} {year}
      </span>
      <br />
      <span className='text-muted'>
        {original_name} ({original_language.toUpperCase()})
      </span>
    </div>
  )
}

type Props = {
  name: string,
  original_name: string,
  original_language: string,
  year: string
}

export default SeriesTitle