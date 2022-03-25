import { Route, Routes } from 'react-router-dom';

import ItemDetail from './components/ItemDetail/ItemDetail';
import SearchedItems from './components/SearchedItems/SearchedItems';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <SearchBar />
      <main>
        <Routes>
          <Route exact path='/' />
          <Route path='items/:itemId' element={<ItemDetail />} />
          <Route path='items' element={<SearchedItems />} />
          <Route path='*' element={<h1>There's nothing here!</h1>} />
        </Routes>
      </main>
      <footer />
    </>
  );
}

export default App;
