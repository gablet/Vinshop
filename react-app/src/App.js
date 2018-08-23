import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import Popup from "./Components/Popup";
import FilterButton from "./Components/FilterButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      customer: []
    };

  
    axios
      .get("http://localhost:8090")
      .then(response => {
        // create an array of contacts only with relevant data
        const newWine = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, { products: newWine });

        this.state.initialProducts = newState.products;
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
      this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    const cartItem = this.state.cart.find(x => x.id === product.id);
    product.lagersaldo > 0 && this.setState({ cart: [...this.state.cart, product] });
    this.state.products.forEach(e => {if (e===product && e.lagersaldo>0) e.lagersaldo--})
  }
  
  filterProductStateBy = (criteria, products) => {
  var filteredProducts = products.filter(function(obj) {
      return Object.keys(criteria).every(function (c) {
        return obj[c] === (criteria[c]);
      });
    });
    this.setState({products: filteredProducts});
  }

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
              <FilterButton products={this.state.products}
                  filterProductStateBy={this.filterProductStateBy}/>
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
