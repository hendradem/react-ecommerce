import React from "react";

// custom style
import "../src/assets/css/index.css";
// libraries
import { Switch, Route } from "react-router-dom";
// component
import Navbar from "./component/navigationBar";
// pages
import HomePage from "./pages/homePage";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";
import ProductDetail from "./pages/product/productDetail";
import Cart from "./pages/product/cart";
// state  management
import { connect } from "react-redux";
import { keepLogin } from "./redux/actions";

class App extends React.Component {
  componentDidMount() {
    let userID = localStorage.getItem("userID");
    this.props.keepLogin(userID);
  }

  render() {
    return (
      <div style={style.font}>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/product/:productId" component={ProductDetail}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </div>
    );
  }
}

const style = {
  font: {
    fontFamily: "Inter",
  },
};

export default connect(null, { keepLogin })(App);
