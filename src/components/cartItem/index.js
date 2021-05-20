import { memo } from 'react';

import './styles.scss';

const CartItem = ({ imageUrl, quantity, price, name }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt={name} />
    <div className='cart-item-details'>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default memo(CartItem);
