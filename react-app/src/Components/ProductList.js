import React, { Component } from 'react';

import Product from './Product'
import './ProductList.css';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.renderProducts = this.renderProducts.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(product) {
        this.props.handleAddToCart(product)
    }

    renderProducts(product) {
        return (
            <div className="col-md-6" key={product.id}>
                <Product
                    product={product}
                    handleClick={this.handleClick}
                ></Product>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.products
                    .filter(e => e.isvisible == "true")
                    .map(this.renderProducts)}
            </div>
        );
    }
}

export default ProductList;