import { memo } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import CartItem from '../cartItem';
import CustomButton from '../customButton';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown-content'>
        {Object.values(cartItems)
          .sort((a, b) => a.added - b.added)
          .map(item => (
            <CartItem {...item} key={item.id} />
          ))}
      </div>
      <CustomButton color='black' title='Go to checkout' />
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(memo(CartDropDown));
