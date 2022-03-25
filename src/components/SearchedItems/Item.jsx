import { Link } from 'react-router-dom';

import Price from '../shared/Price';

export default function Item({
  id,
  title,
  url,
  price,
  free_shipping,
  stateName,
}) {
  return (
    <article>
      <Link to={`${id}`}>
        <img src={url} alt={title} className='item-img' />
      </Link>
      <div className='item-info'>
        <div className='price'>
          <Price price={price} />
          {free_shipping && <img src='/ic_shipping.png' alt='free shipping' />}
        </div>
        <Link to={`${id}`}>
          <h1 className='title'>{title}</h1>
        </Link>
      </div>
      <p className='item-state'>{stateName}</p>
    </article>
  );
}
