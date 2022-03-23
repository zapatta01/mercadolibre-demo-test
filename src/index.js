import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import ItemDetail from './routes/itemDetail'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TODO pasar el search aca */}
        <Route path='/' element={<App />} />
        <Route path='items/:itemId' element={<ItemDetail />} />
        <Route path='items' element={<ItemDetail />} />
        <Route path='*' element={<h1>There's nothing here!</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
