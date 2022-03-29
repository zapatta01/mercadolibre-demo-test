import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SearchBar.scss'

export default function SearchBar () {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const loadItems = e => {
    e.preventDefault()

    navigate(`/items?search=${encodeURIComponent(searchText)}`, {
      replace: true
    })
  }

  const handleChange = e => {
    setSearchText(e.target.value)
  }

  return (
    <header>
      <div>
        <form onSubmit={loadItems}>
          <Link to='/'>
            <img src='/Logo_ML.png' alt='logoML' />
          </Link>
          <input
            tabIndex='1'
            type='search'
            placeholder='Nunca dejes de buscar'
            className='search'
            onChange={handleChange}
            value={searchText}
          />
          <button tabIndex='2'>
            <img src='/ic_Search.png' alt='search icon' />
          </button>
        </form>
      </div>
    </header>
  )
}
