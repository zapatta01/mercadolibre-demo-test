import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import getItem from '../services/getItem';
import { API_URL } from '../services/settings';

const apiURL = `${API_URL}/items/`;
let myURL;

export default function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState('');

  useEffect(() => {
    if (itemId) {
      myURL = new URL(itemId, apiURL);
    }

    fetch(myURL)
      .then(response => response.json())
      .then(dataJson => {
        setItem(dataJson.item);
        setCategories(dataJson.categories)
      });
  }, [itemId]);

  return (
    <>
      <h2>ItemDetail: {itemId}</h2>
      <h2>ItemDetail: {categories[0].name}</h2>
      <h2>title: {item.title}</h2>
    </>
  );
}
