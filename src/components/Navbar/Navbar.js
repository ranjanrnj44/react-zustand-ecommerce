import React from "react";
//react-router
import { Link } from "react-router-dom";
//action and dispatch
//import { useSelector } from "react-redux";
//cart
import useCartStore from "../../app/store";

function Navbar() {
  //  let stateItems = useSelector((state) => state.cart);
  //   let stateLength = stateItems.cart.map((item) => item.payload);
  //store
  let cart = useCartStore((state) => state.initialState.cartItem);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 shadow-lg">
      <div className="container">
        <Link className="navbar-brand text-dark fs-4 fw-bolder" to="/">
          ManTra
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                PRODUCT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart">
              <button className="btn btn-dark btn-outline-light" type="submit">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart({cart.length})
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
