import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('debe encontrar el texto del placeholder del input de busqueda', () => {
  const { testa } = render(<App />);
  
  console.debug(testa);
  // expect(inputPlaceholder).toBeInTheDocument();
});
