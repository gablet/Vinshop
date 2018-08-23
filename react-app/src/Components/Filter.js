import React, {Component} from 'react';
import Button from 'react-button-component';
import "./Product.css";

class Filter extends React.Component {

    filterProducts(field){
        var products = this.props.products;
        this.props.filter(field, products);
    }

      render() {
          return (
            <div className="filter-section">
                <button 
                    className="filter-button" 
                    onclick={this.filterProducts.bind(this, "Varugrupp")}> 
                    Rött vin
                </button>
            </div>
    
          )};
    }
    export default Filter;