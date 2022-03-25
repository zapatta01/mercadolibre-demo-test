import { render, screen } from '@testing-library/react'
import SearchBar from './SearchBar';

test.skip('debe encontrar el texto del placeholder del input de busqueda', () => {
  render(<SearchBar />);
  screen.debug();
  // const inputPlaceholder = screen.getByPlaceholderText('Nunca dejes de buscar')
  // console.debug(inputPlaceholder);
  // expect(inputPlaceholder).toBeInTheDocument()
})
