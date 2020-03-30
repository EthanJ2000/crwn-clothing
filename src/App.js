import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import { Route, Redirect, withRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop-component";
import Header from "./components/header/header-component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup-component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import HatsPage from "./pages/hats/hats-component";
import JacketsPage from "./pages/jackets/jackets-component";
import SneakersPage from "./pages/sneakers/sneakers-component";
import WomensPage from "./pages/womens/womens-component";
import MensPage from "./pages/mens/mens-component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        this.props.history.push("/");
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
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
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route exact path="/womens" component={WomensPage} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(withRouter(App));
