import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import Home from './pages/homepage/homepage';
// import Shop from './pages/shop/shop';
// import Auth from './pages/auth/auth';
import Header from './components/header/header';
// import Checkout from './pages/checkout/checkout';

import Spinner from './components/spinner/spinner';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const Home = lazy(() => import('./pages/homepage/homepage'));
const Shop = lazy(() => import('./pages/shop/shop'));
const Auth = lazy(() => import('./pages/auth/auth'));
// const Header = lazy(() => import('./components/header/header'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign-in"
            render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
