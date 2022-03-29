import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Landing page', route)

  return render(ui, { wrapper: BrowserRouter })
}

test('debe encontrar el texto del placeholder del input de busqueda', () => {
  renderWithRouter(<App />)

  expect(
    screen.getByPlaceholderText('Nunca dejes de buscar')
  ).toBeInTheDocument()
})

test('mostrar mensaje, cuando se navegue a una ruta no existente', () => {
  renderWithRouter(<App />, { route: '/cualquier-otra-ruta' })

  expect(screen.getByText(/no hay nada por aca!/i)).toBeInTheDocument()
})
