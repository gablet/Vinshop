import React, { Component } from "react";
import './Product.css';

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="Product">
        <div className="Product__img">
          <img className="images"
            src={product.image}
            alt="Product Item"
          />
        </div>
        <div className="Product__details">
          <div className="Product__cat">{product.country}</div>
          <h4>{product.id}</h4>
          <h5>{product.name}</h5>
          <div className="Product__price-cart">
            <p>{product.id} SEK</p>
            <button onClick={this.props.handleClick.bind(this, product)}>
              <span className="fa fa-cart-plus" /> Köp
            </button>
          </div>
          <div className="BootItem__description">{product.name}</div>
          <div
            className="Product__stock"
            style={{ color: product.id >= 5 ? "#417505" : "#CE0814" }}
          >
            {product.id} i lager.
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
