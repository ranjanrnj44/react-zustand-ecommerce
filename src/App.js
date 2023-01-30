import React from "react";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductListing from "./components/Product/ProductListing";
import ProductDetail from "./components/Product/ProductDetail";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
//router
import { Switch, Route } from "react-router-dom";
//cart
import useCartStore from "./app/store";

const App = () => {
  //cart
  let cart = useCartStore((state) => state.initialState.cartItem);
  console.log(cart);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductListing} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
