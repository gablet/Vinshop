import React, {Component} from 'react';
import "./Product.css";

class FilterVarugruppButton extends Component {
   filterProducts(criteria){
        var products = this.props.products;
        this.props.filterProductsByVarugrupp(criteria, products);
    }

    render() {
          return (
            <div className="filter-section">
            <h3 class="title">kategorier</h3>
            <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, "Alla viner")}> 
                    Alla viner
                </button>
                <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, "Rött vin")}> 
                    Rött vin
                </button>
                <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, "Vitt vin")}> 
                    Vitt vin
                </button>
                <button 
                    className="filter-button" 
                    onClick={this.filterProducts.bind(this, "Mousserande vin")}> 
                    Mousserande vin
                </button>
                
            </div>
    
          )};
    }
    export default FilterVarugruppButton;