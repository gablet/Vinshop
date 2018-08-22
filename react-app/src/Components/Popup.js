import React from 'react';
import ReactModal from 'react-modal';

class Popup extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <h1>Leveransinformation: </h1>
          <form onSubmit={this.handleSubmit}>
            <label>Förnamn: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Efternamn: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Email: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Adress: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Adress 2: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Postnummer: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Postort: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <label>Land: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default Popup;

const props = {};
