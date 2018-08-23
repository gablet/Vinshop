import React, { Component } from "react";
import logo from "./logo.svg";
import shop from "./shop.svg";
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

        this.state.initialProducts = newState.products;
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.dontShowMenu = this.dontShowMenu.bind(this);
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
    const cartItem = this.state.cart.find(x => x.id === product.id);
    product.lagersaldo > 0 &&
      this.setState({ cart: [...this.state.cart, product] });
    this.state.products.forEach(e => {
      if (e === product && e.lagersaldo > 0) e.lagersaldo--;
    });
  }

  filterProductsByVarugrupp = criteria => {
    let filteredProducts = [];
    this.state.products.forEach(function(e) {
      if (e.varugrupp == criteria) {
        if (e.isvisible == "true") {
          e.isvisible = "false";
        } else {
          e.isvisible = "true";
        }
      }
      filteredProducts.push(e);
    });
    this.setState({ products: filteredProducts });
  };

  sortProductStateBy = (field, products) => {
    // Sorting ...

    console.log(products[1][field]);

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
            <div className="top-left">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="set-height" />
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
            <div className="top-middle">
              {" "}
              <div className="set-height" />
            </div>

            <div className="bottom">
              <ProductList
                products={this.state.products}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
          </div>

          <div id="right" className="column">
            <div className="top-right">
              <div className="set-height">
                
              </div>
            </div>

            <div className="bottom">
              <div className="set-width" />
              <div
                  id="dropmenu"
                  onMouseOver={this.showMenu}
                  onMouseLeave={this.dontShowMenu}
                >
                  <img src={shop} alt="shop" />
                  <Navigation cart={this.state.cart} />

                  {this.state.showMenu ? (
                    <div className="menu">
                      <Popup cart={this.state.cart} />
                    </div>
                  ) : null}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
