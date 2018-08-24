import React from 'react';
import ReactModal from 'react-modal';
import Axios from 'axios';
import App from "../App";
import ReactDOM from 'react-dom';
import "./PopUp.css";
import Product from "./Product";
import CheckoutItem from "./CheckoutItem";
import CheckoutItemCondensed from "./CheckoutItemCondensed";


class Popup extends React.Component {
  constructor () {
    super();
    this.renderProducts = this.renderProducts.bind(this);
    this.handleClickCartPopup = this.handleClickCartPopup.bind(this);
    this.state = {
      showModal: false,
    };
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleClickCartPopup(product) {
    this.props.handleRemoveFromCart(product);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    const customer = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      adress: document.getElementById("adress").value,
      adress2: document.getElementById("adress2").value,
      zipcode: document.getElementById("zipcode").value,
      city: document.getElementById("city").value,
      country: document.getElementById("country").value
    };
    const cart = this.props.cart;
    const result = [customer, this.props.cart[0]];
    console.log(cart);
    console.log(customer);
    console.log(result);
    const url = 'http://localhost:8090/createorder';
    const url2 = 'http://localhost:8090/createcustomer';
    Axios.post(url2,
      customer,
    );
    Axios.post(url, 
      cart,
    );
    const element = (<h3>Tack för din beställning! Den levereras inom en timme tillsammans med faktura.</h3>);
    ReactDOM.render(element, document.getElementById("orderinfo")); 
  }

  renderProducts(product) {
    return (
      <CheckoutItem product={product} handleClickCartPopup={this.handleClickCartPopup} />
    );
  }
  renderProductsCondensed(product) {
    return (
      <CheckoutItemCondensed product={product}/>
    );
  }

  render () {
    return (
      <div id="ruta">
        <button className="checkout" onClick={this.handleOpenModal}>
        <p id="title">Checkout</p></button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        > <div id="orderinfo">
          <h1>Leveransinformation: </h1>

          <form className="form" onSubmit={this.handleSubmit}>
            <label>Förnamn:   <input className="input" type="text" id="firstname" name="firstname" /></label><br/>
            <label>Efternamn: <input className="input" type="text" id="lastname" name="lastname"  /></label><br/>
            <label>Email:     <input className="input" type="text" id="email" name="email" /></label><br/>
            <label>Adress:    <input className="input" type="text" id="adress" name="adress" /></label><br/>
            <label>Adress 2:  <input className="input" type="text" id="adress2" name="adress2"  /></label><br/>
            <label>Postnummer: 
              <input className="input" type="text" id="zipcode" name="zipcode" /></label><br/>
            <label>Postort: 
              <input className="input" type="text" id="city" name="city" /></label><br/>
            <label>Land: 
              <input className="input" type="text" id="country" name="country" /></label><br/>
            <input className="kassa" type="submit" value="Lägg din beställning"/>
          </form>
          <button className="kassa" onClick={this.handleCloseModal}>Avbryt köp</button>
         
          </div>
          <div id="order">
            <h2>Din beställning: </h2><br/>
            <ul>
              {this.props.cart
                .map(this.renderProducts)}
            </ul>
          </div>
        </ReactModal>
      </div>
    );
  }
}


export default Popup;
