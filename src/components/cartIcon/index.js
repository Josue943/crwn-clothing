import { memo } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { toggleCart } from '../../store/entities/cart/actions';
import { selectCartItemsCount } from '../../store/entities/cart/selectors';
import { ReactComponent as Bag } from '../../assets/images/shopping-bag.svg';

const CartIcon = ({ counter, toggleCart }) => (
  <span className='cart-icon-container' onClick={toggleCart}>
    <Bag className='cart-icon' />
    <span className='counter'>{counter}</span>
  </span>
);

const mapStateToProps = state => ({ counter: selectCartItemsCount(state) });

export default connect(mapStateToProps, { toggleCart })(memo(CartIcon));
