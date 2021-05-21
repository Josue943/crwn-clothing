import { memo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';
import CartDropDown from '../cartDropDown';
import CartIcon from '../cartIcon';
import { createStructuredSelector } from 'reselect';
import { login } from '../../store/entities/auth/actions';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { selectCartHidden } from '../../store/entities/cart/selectors';
import { selectCurrentUser } from '../../store/entities/auth/selectors';

const Header = ({ currentUser, hidden, login }) => (
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
      {currentUser ? (
        <span className='option uppercase' onClick={() => login(false)}>
          sign out
        </span>
      ) : (
        <Link to='/sign-in' className='option uppercase'>
          sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, { login })(memo(Header));

const links = [
  { name: 'shop', url: '/shop' },
  { name: 'contact', url: '/contact' },
];
