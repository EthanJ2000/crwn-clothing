import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import { Link, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop-component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>Sneakers Page</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>Womens Page</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/jackets" component={JacketsPage} />
      <Route exact path="/sneakers" component={SneakersPage} />
      <Route exact path="/womens" component={WomensPage} />
      <Route exact path="/mens" component={MensPage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
