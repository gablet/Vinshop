import React, { Component } from 'react';
//import logo from 'C:\Users\Administrator\IdeaProjects\Vinshop\Vinshop\react-app\src\logo.svg';
import './Nav.css';

class Navigation extends Component {
    render() {
        return (
            <div className="Nav">

                <div className="Nav-item Nav-logo">
                </div>
                <div className="Nav-item Nav-cart">
                    <span className="fa fa-cart-plus"></span> {this.props.cart.length}
                </div>
            </div>
        );
    }
}

export default Navigation;