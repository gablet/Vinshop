import React, { Component } from "react";
//import logo from 'C:\Users\Administrator\IdeaProjects\Vinshop\Vinshop\react-app\src\logo.svg';
import "./Nav.css";
import CartItem from "./CartItem";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
    this.handleClickCart = this.handleClickCart.bind(this);
  }

  handleClickCart(product) {
    this.props.handleRemoveFromCart(product);
  }

  renderProducts(product) {
    return (

        <CartItem product={product} handleClickCart={this.handleClickCart} />
    
    );
  }

  render() {
    return (
      <div className="Nav">
        <div className="Nav-item Nav-logo" />
        <div className="Nav-item Nav-cart">
          <span className="fa fa-cart-plus" /> {this.props.cart.length}
        </div>
        <div>
          {this.props.cart.reduce(function(tot, record) {
            return tot + record.prisinklmoms;
          }, 0)} SEK
        </div>

      </div>
    );
  }
}

export default Navigation;
