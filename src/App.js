import { memo } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import './App.css';
import Header from './components/header';
import Home from './pages/home';
import SignIn from './pages/signIn';
import Shop from './pages/shop';

function App({ user }) {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in' render={() => (user ? <Redirect to='/' /> : <SignIn />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps)(memo(App));
