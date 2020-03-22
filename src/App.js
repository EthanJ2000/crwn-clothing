import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import { Link, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop-component";
import Header from "./components/header/header-component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup-component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <HomePage></HomePage> */}
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route exact path="/womens" component={WomensPage} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </div>
    );
  }
}

export default App;
