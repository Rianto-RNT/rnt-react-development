import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const Home = lazy(() => import('./pages/homepage/homepage'));
const Shop = lazy(() => import('./pages/shop/shop'));
const Auth = lazy(() => import('./pages/auth/auth'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/sign-in"
              render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
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
