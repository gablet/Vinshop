import React, { Component } from "react";
import "./Product.css";
import bottle from "./bottle.jpg";

class CartItem extends Component {
  render() {
    const product = this.props.product;
    return (
      <li className="Cart">

        <div id="Cart__details">
          <div className="Cart__cat">{product.varugrupp}</div>
          <h4>{product.namn}</h4>
          <p>
            {product.ursprung}, {product.ursprungsland}
          </p>
          <div className="Cart__price-cart">
            <p>{product.prisinklmoms} SEK</p>

          </div>
          <div className="CartItem__description">{product.name}</div>
        </div>
      </li>
    );
  }
}

export default CartItem;
