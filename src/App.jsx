import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Item from './components/Item'
import getSearchItems from './services/getSearchItems'

function App () {
  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState('')
  const limit = 4

  // useEffect(function () {
  //   getPicture().then((picture) => setGifts(picture));
  // }, []);

  const loadItems = e => {
    e.preventDefault()
    getSearchItems(searchText, limit).then(item => {
      setItems(item)
    })
  }

  const handleChange = e => {
    setSearchText(e.target.value)
  }

  const SearchBar = () => {
    return (
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
    )
  }

  const ListItems = () => {
    return (
      <ul>
        {items !== null
          ? items.map(({ id, picture, title, amount, free_shipping }) => (
            <Item
              id={id}
              url={picture}
              title={title}
              free_shipping={free_shipping}
              key={id}
              amount={amount}
            />
            ))
          : ''}
        <Outlet />
      </ul>
    )
  }

  return (
    <div className='App'>
      <header className='App-header'>
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
      </header>
      <nav>Celulares y Teléfonos &gt; Celulares y Smartphones</nav>
      <main>
        <section>
          <ul>
            {items !== null
              ? items.map(({ id, picture, title, amount, free_shipping }) => (
                <Item
                  id={id}
                  url={picture}
                  title={title}
                  free_shipping={free_shipping}
                  key={id}
                  amount={amount}
                />
                ))
              : ''}
            <Outlet />
          </ul>
        </section>
      </main>
      <footer />
    </div>
  )
}

export default App
