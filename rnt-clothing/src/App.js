import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";
import { auth } from "./utils/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
