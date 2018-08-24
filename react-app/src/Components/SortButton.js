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
        <h3 class="title">sortera</h3>
        <button
          className="sort-button"
          onClick={this.sortProducts.bind(this, "prisinklmoms")}
        >
          Pris
        </button>
       
        <button
          className="sort-button"
          onClick={this.sortProducts.bind(this, "namn")}
        >
          {" "}
          Namn
        </button>
      </div>
    );
  }
}

export default SortButton;
