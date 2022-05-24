import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import Auth from "./pages/auth/auth";

function App() {
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

export default App;
