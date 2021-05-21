import { memo } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './styles.scss';
import CartItem from '../cartItem';
import CustomButton from '../customButton';
import { toggleCart } from '../../store/entities/cart/actions';
import { selectCartItems } from '../../store/entities/cart/selectors';

const CartDropDown = ({ cartItems, history, toggleCart }) => (
  <div className='cart-dropdown'>
    <div className='cart-dropdown-content'>
      {cartItems.length ? cartItems.map(item => <CartItem {...item} key={item.id} />) : <span className='empty'>Your cart is empty</span>}
    </div>
    <CustomButton
      color='black'
      title='Go to checkout'
      onClick={() => {
        toggleCart();
        history.push('/checkout');
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps, { toggleCart })(memo(CartDropDown)));
