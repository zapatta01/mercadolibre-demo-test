import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { API_URL } from '../../config/settings';
import './SearchedItems.scss';

import Categories from '../shared/Categories';
import Item from './Item';

export default function SearchedItems() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const limit = '4';
  const search = searchParams.get('search');

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/items?q=${search}&limit=${limit}`)
      .then(response => response.json())
      .then(json => {
        setItems(json.items);
        setCategories(json.categories);
      })
      .catch(err => {
        console.log({ err });
        setHasError(true);
      })
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <>
      {hasError && <h1>Ha ocurrido un error :(</h1>}
      {loading ? (
        <>
          <p className='spinner'>Cargando...</p>
        </>
      ) : (
        <>
          {categories && !loading && <Categories categories={categories} />}
          <section>
            {items &&
              items.map(
                ({
                  id,
                  picture,
                  title,
                  price,
                  free_shipping,
                  stateName,
                  categories,
                }) => (
                  <Item
                    id={id}
                    url={picture}
                    title={title}
                    free_shipping={free_shipping}
                    key={id}
                    price={price}
                    stateName={stateName}
                    categories={categories}
                  />
                )
              )}
          </section>
        </>
      )}
    </>
  );
}
