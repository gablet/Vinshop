import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      cart: []
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    const cartItem = this.state.cart.find(x => x.id === product.id);
    product.inStock > 0 &&
      this.setState({ cart: [...this.state.cart, product] });
    this.state.products.forEach(e => {
      if (e === product && e.inStock > 0) e.inStock--;
    });
  }

  state = {
    wine: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080")
      .then(response => {
        alert(response.data);
        // create an array of contacts only with relevant data
        const newWine = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, { wine: newWine });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  //<Winelist wine={this.state.wine} />
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div id="left" class="column">
            <div class="top-left">
              <div className="set-height" />
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="bottom">
              <a href="#white">Vitt</a> <br/>
              <a href="#red">Rött</a>   <br/>
              <a href="#sparkling">Mousserande</a>  <br/>
            </div>
          </div>

          <div id="middle" class="column">
            <div class="top-middle">
              {" "}
              <div className="set-height" />
            </div>

            <div class="bottom">
              <ProductList
                products={this.state.products}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
          </div>
          <div id="right" class="column">
            <div class="top-right">
            

              <div className="set-height">
              <Navigation cart={this.state.cart} /></div>
            </div>
            <div class="bottom">
            <div className="set-width" />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
