import React, { Component } from "react";
import CartItem from "./CartItem";

export default class ShoesCart extends Component {
  state = {
    cart: [],
    total: 0,
  };

  render() {
    console.log(this.props);
    let { productsData } = this.props;
    return (
      <div>
        <div className="container">
          <h2>Cart</h2>
          <div className="row">
            <CartItem />
          </div>
        </div>
      </div>
    );
  }
}
