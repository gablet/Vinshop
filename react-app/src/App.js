import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import axios from "axios";
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import Popup from "./Components/Popup";
import FilterVarugruppButton from "./Components/FilterVarugruppButton";
import SortButton from "./Components/SortButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      products: [],
      cart: [],
      search: ""
    };

    axios
      .get("http://localhost:8090")
      .then(response => {
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
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.dontShowMenu = this.dontShowMenu.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true
    });
  }

  dontShowMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: false
    });
  }

  handleAddToCart(product) {
    console.log(this.state.products);
    const cartItem = this.state.cart.find(x => x.id === product.id);
    product.lagersaldo > 0 &&
      this.setState({ cart: [...this.state.cart, product] });
    var array = this.state.products;
    array.forEach(e => {
      if (e === product && e.lagersaldo > 0) e.lagersaldo--;
    });
    this.setState({ products: array });
  }

  handleRemoveFromCart(product) {
    console.log(this.state.products);
    const cartItem = this.state.cart.find(x => x.id === product.id);
    var array = [...this.state.cart]; // make a separate copy of the array
    var index = array.indexOf(product);
    array.splice(index, 1);
    this.setState({ cart: array });
    this.setState({ products: [...this.state.products, product] });
    var array2 = this.state.products;
    array2.forEach(e => {
      if (e === product && e.lagersaldo > 0) e.lagersaldo++;
    });
    this.setState({ products: array2 });
  }

  filterProductsByVarugrupp = criteria => {
    let filteredProducts = [];

    this.state.products.forEach(function(e) {
      if (!(criteria == "Alla viner")) {
        if (e.varugrupp == criteria) {
          e.isvisible = "true";
        } else {
          e.isvisible = "false";
        }
      } else {
        e.isvisible = "true";
      }

      filteredProducts.push(e);
    });
    this.setState({ products: filteredProducts });
  };

  sortProductStateBy = (field, products) => {
    // Sorting ...
    var sortedProducts = products.sort((a, b) => {
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    });
    // Then call setState
    this.setState({ products: sortedProducts });
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div id="left" className="column">
            <div id="top-left" className="set-height">
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div id="leftcolumn" className="bottom">
              <div class="bottom">
                <FilterVarugruppButton
                  products={this.state.products}
                  filterProductsByVarugrupp={this.filterProductsByVarugrupp}
                />

                <SortButton
                  products={this.state.products}
                  sortProductStateBy={this.sortProductStateBy}
                />
              </div>
            </div>
          </div>
          <div id="middle" className="column">
            <div id="top-middle" className="set-height">
              <input
                id="search"
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </div>

            <div className="bottom" id="content">
              <ProductList
                search={this.state.search}
                products={this.state.products}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
          </div>

          <div id="right" className="column">
            <div id="top-right" className="set-height">
              <div id="dropmenu">
                <Navigation
                  id="vagn"
                  cart={this.state.cart}
                  products={this.state.products}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                />

                <div className="menu">
                  <Popup
                    cart={this.state.cart}
                    handleRemoveFromCart={this.handleRemoveFromCart}
                  />
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="set-width" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
