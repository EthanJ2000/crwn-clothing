import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import { Link, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
