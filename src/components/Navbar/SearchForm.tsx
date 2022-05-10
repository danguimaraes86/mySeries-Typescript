import { NextComponentType } from 'next'
import { FormEvent, useState } from 'react'
import { AppStrings } from '../../util/appStrings'

const SearchForm: NextComponentType = () => {

  const SEARCH_ICON: string = AppStrings.SEARCH_ICON

  const [searchValue, setSearchValue] = useState<string>('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(searchValue)
  }

  return (
    <form className='form-inline flex-fill' onSubmit={e => handleSubmit(e)} >
      <div className='input-group'>
        <input
          id='searchSeries'
          type='text'
          className='form-control'
          placeholder='Digite sua busca...'
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value)
          }}
        />
        <button type='submit' className='btn input-group-text bg-info border-info' >
          <i className={SEARCH_ICON} />
        </button>
      </div>
    </form>
  )
}

export default SearchForm