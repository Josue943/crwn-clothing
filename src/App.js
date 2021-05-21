import { memo } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import './App.css';
import Checkout from './pages/checkout';
import Header from './components/header';
import Home from './pages/home';
import { selectCurrentUser } from './store/entities/auth/selectors';
import SignIn from './pages/signIn';
import Shop from './pages/shop';

function App({ currentUser }) {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/checkout' component={Checkout} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in' render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({ currentUser: selectCurrentUser(state) });

export default connect(mapStateToProps)(memo(App));
