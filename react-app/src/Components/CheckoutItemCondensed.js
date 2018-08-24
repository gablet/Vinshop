import React, { Component } from "react";
import "./Product.css";
import bottle from "./bottle.jpg";

class CheckoutItemCondensed extends Component {
  render() {
    const product = this.props.product;
    return (
      <li className="">

        <div id="CheckoutItem__details">
          <h4>{product.namn}</h4>
          <p>
          </p>
          <div className="CheckoutItem__price-cart">
            <p>{product.prisinklmoms} SEK</p>
          </div>
          <div className="CheckoutItem__description">{product.name}</div>
        </div>
      </li>
    );
  }
}

export default CheckoutItemCondensed;