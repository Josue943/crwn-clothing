import { memo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';
import { login } from '../../store/entities/auth/actions';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { ReactComponent as Bag } from '../../assets/images/shopping-bag.svg';

const Header = ({ counter, user, login }) => {
  return (
    <div className='header'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='header-rigth'>
        {links.map(({ name, url }, index) => (
          <Link key={index} to={url} className='option uppercase'>
            {name}
          </Link>
        ))}
        {user ? (
          <span className='option uppercase' onClick={() => login(false)}>
            sign out
          </span>
        ) : (
          <Link to='/sign-in' className='option uppercase'>
            sign in
          </Link>
        )}
        <span className='cart-icon-container'>
          <Bag className='cart-icon' />
          <span className='counter'>{counter}</span>
        </span>
      </div>
      <div className='cart-dropdown'></div>
    </div>
  );
};

const mapStateToProps = ({ auth, cart }) => ({
  user: auth.user,
  counter: Object.keys(cart.cartItems).length,
});

export default connect(mapStateToProps, { login })(memo(Header));

const links = [
  { name: 'shop', url: '/shop' },
  { name: 'contact', url: '/contact' },
];
