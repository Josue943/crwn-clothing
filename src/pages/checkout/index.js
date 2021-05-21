import { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './styles.scss';
import { selectCartItems, selectCartTotal } from '../../store/entities/cart/selectors';
import CheckoutItem from '../../components/checkoutItem';

const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      {blocks.map(block => (
        <div className='header-block' key={block}>
          <span>{block}</span>
        </div>
      ))}
    </div>
    {cartItems.map(item => (
      <CheckoutItem item={item} key={item.id} />
    ))}
    <div className='total'>Total ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(memo(Checkout));

const blocks = ['product', 'description', 'quantity', 'price', 'remove'];
