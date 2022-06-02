import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import appIcons from '../../../util/appIcons'

export default function SearchForm() {

  const SEARCH_ICON: string = appIcons.SEARCH_ICON

  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    router.push({
      pathname: '/search',
      query: { value: searchValue }
    })
  }

  return (
    <form
      className='form-inline flex-fill'
      onSubmit={e => handleSubmit(e)}
    >
      <div className='input-group'>
        <input
          id='searchSeries'
          type='text'
          className='form-control'
          placeholder='Digite sua busca...'
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value)
          }} />
        <button type='submit' className='btn input-group-text bg-info border-info'>
          <i className={SEARCH_ICON} />
        </button>
      </div>
    </form>
  )
}