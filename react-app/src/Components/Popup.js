import React from 'react';
import ReactModal from 'react-modal';
import Axios from 'axios';
import App from "../App";


class Popup extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
    };
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
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
    console.log(customer);
    const result = [customer, this.props.cart];
    console.log(result);
    const url = 'http://localhost:8090/createorder';
    Axios.post(url, {
      result,
    });
  }

  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Gå till kassan</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <h1>Leveransinformation: </h1>

          <form className="form" onSubmit={this.handleSubmit}>
            <label>Förnamn: 
              <input type="text" id="firstname" name="firstname" /></label>
            <label>Efternamn: 
              <input type="text" id="lastname" name="lastname"  /></label>
            <label>Email: 
              <input type="text" id="email" name="email" /></label>
            <label>Adress: 
              <input type="text" id="adress" name="adress" /></label>
            <label>Adress 2: 
              <input type="text" id="adress2" name="adress2"  /></label>
            <label>Postnummer: 
              <input type="text" id="zipcode" name="zipcode" /></label>
            <label>Postort: 
              <input type="text" id="city" name="city" /></label>
            <label>Land: 
              <input type="text" id="country" name="country" /></label>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={this.handleCloseModal}>Avbryt köp</button>
        </ReactModal>
      </div>
    );
  }
}


export default Popup;