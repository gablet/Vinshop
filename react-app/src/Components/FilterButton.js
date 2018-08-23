import React, {Component} from 'react';
import "./Product.css";

class FilterButton extends Component {
   filterProducts(field){
       console.log("HEJSAN");
        var products = this.props.products;
        this.props.filterProductStateBy(field, products);
    }

    render() {
          return (
            <div className="filter-section">
            <h1>Filtrera på:</h1>
                <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, {varugrupp: "Rött vin"})}> 
                    Rött vin
                </button>
                <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, {varugrupp: "Vitt vin"})}> 
                    Vitt vin
                </button>
                <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, {varugrupp: "Mousserande vin"})}> 
                    Mousserande vin
                </button>
            </div>
    
          )};
    }
    export default FilterButton;