import React, { Component } from "react";
import "./Product.css";

class SortButton extends React.Component {
  sortProducts(field) {
    var products = this.props.products;
    this.props.sortProductStateBy(field, products);
  }
  render() {
    return (
      <div className="sort-section">
        <h1>Sortera efter</h1>
        <button
          className="sort-button"
          onClick={this.sortProducts.bind(this, "Prisinklmoms")}
        >
          Pris
        </button>
        <button
          className="sort-button"
          onClick={this.sortProducts.bind(this, "Namn")}
        >
          {" "}
          Namn
        </button>
      </div>
    );
  }
}

export default SortButton;
