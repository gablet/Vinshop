import React, { Component } from "react";
import "./Product.css";
import bottle from "./bottle.jpg";

class CheckoutItem extends Component {
  render() {
    const product = this.props.product;
    return (
      <li className="">

        <div id="CheckoutItem__details">
          <div className="CheckoutItem__cat"></div>
          <h4>{product.namn}</h4>
          <p>
            {product.ursprung}, {product.ursprungsland}
          </p>
          <div className="CheckoutItem__price-cart">
            <p>{product.prisinklmoms} SEK</p>
            <button onClick={this.props.handleClickCartPopup.bind(this, product)}>
              <span className="RemoveCheckoutItem" /> Ta bort
            </button>
          </div>
          <div className="CheckoutItem__description">{product.name}</div>
        </div>
      </li>
    );
  }
}

export default CheckoutItem;
