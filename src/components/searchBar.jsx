import getSearchItems from './services/getSearchItems'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchBar () {
  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState('')
  const limit = 4

  const loadItems = e => {
    e.preventDefault()
    getSearchItems(searchText, limit).then(item => {
      setItems(item)
    })
  }

  const handleChange = e => {
    setSearchText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={loadItems}>
        <Link to='/'>
          <img src='./Logo_ML.png' alt='logoML' className='center' />
        </Link>
        <input
          type='search'
          placeholder='Nunca dejes de buscar'
          className='search'
          tabIndex='1'
          onChange={handleChange}
          value={searchText}
        />
        <button tabIndex='2'>
          <img src='./ic_Search.png' alt='search' />
        </button>
      </form>
    </div>
  )
}
