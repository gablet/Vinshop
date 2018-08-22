import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import ExampleApp from "./Components/ExampleApp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: []
    };
    axios
      .get("http://localhost:8090")
      .then(response => {
        // create an array of contacts only with relevant data
        const newWine = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, { products: newWine });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
      this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    const cartItem = this.state.cart.find(x => x.id === product.id);
    product.prisinklmoms > 0 && this.setState({ cart: [...this.state.cart, product] });
    this.state.products.forEach(e => {if (e===product && e.prisinklmoms>0) e.prisinklmoms--})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vinshoppen</h1>
          <Navigation cart={this.state.cart} />
          <ExampleApp/>
        </header>
        <div id="wrapper">
        <div className="sidebar">

        </div>
        
        <div className="App-main">
          <ProductList
            products={this.state.products}
            handleAddToCart={this.handleAddToCart}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
