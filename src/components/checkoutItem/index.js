import { memo } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { addItem, clearItem, decreaseItem } from '../../store/entities/cart/actions';

const CheckoutItem = ({ addItem, clearItem, decreaseItem, item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='img-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => decreaseItem(item)}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => addItem(item)}>
          {' '}
          &#10095;
        </span>
      </span>
      <span className='price'>${price}</span>
      <span className='remove-item' onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );
};

export default connect(null, { addItem, clearItem, decreaseItem })(memo(CheckoutItem));
