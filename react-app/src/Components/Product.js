import React, { Component } from "react";

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="Product">
        <div
          className="Product__img"
          style={{
            backgroundImage: `add comment here`, //`url($\{product.image\})`
            width: "300px",
            height: "100px",
            backgroundSize: "contain",  
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            display: "inline"
          }}
        >
          <img
            style={{
              maxWidth: "20%",
              height: "auto",
              width: "auto9",
              align: "center"
            }}
            src={product.image}
            alt="Product Item"
          />
        </div>
        <div className="Product__details" style={{ float: "right" }}>
          <div className="Product__cat">{product.category}</div>
          <h4>{product.title}</h4>
          <h5>{product.author}</h5>
          <div className="Product__price-cart">
            <p>{product.price} SEK</p>
            <button onClick={this.props.handleClick.bind(this, product)}>
              <span className="fa fa-cart-plus" /> Köp
            </button>
          </div>
          <div className="BootItem__description">{product.description}</div>
          <div
            className="Product__stock"
            style={{ color: product.inStock >= 5 ? "#417505" : "#CE0814" }}
          >
            {product.inStock} i lager.
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
