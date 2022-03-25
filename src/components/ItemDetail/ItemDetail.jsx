import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_URL } from '../../config/settings';
import './ItemDetail.scss';

import Categories from '../shared/Categories';
import Price from '../shared/Price';

const apiURL = `${API_URL}/items/`;
let myURL;

export default function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (itemId) {
      setLoading(true);
      myURL = new URL(itemId, apiURL);

      fetch(myURL)
        .then(response => response.json())
        .then(dataJson => {
          setItem(dataJson.item);
          setCategories(dataJson.categories);
        })
        .finally(() => setLoading(false));
    }
  }, [itemId]);
  return (
    <>
      {loading ? (
        <>
          <p className='spinner'>Cargando...</p>
        </>
      ) : (
        <>
          {categories && <Categories categories={categories} />}
          {item && (
            <div className='item-detail'>
              <div className='main'>
                <img
                  className='item-img'
                  src={item.picture}
                  alt={item.title}
                />
                <div className='info'>
                  <div className='condition'>
                    {`${item.condition} - ${item.sold_quantity} vendidos`}
                  </div>
                  <h1>{item.title}</h1>
                  <Price price={item.price} />
                  <button>Comprar</button>
                </div>
              </div>
              {item.description && (
                <div className='description'>
                  <h2>Descripción del producto</h2>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
