import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Winelist from './Wine/WineList';


class App extends Component {

  state = {
    wine: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8090/dbtest")
      .then(response => {

        // create an array of contacts only with relevant data
        const newWine = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, 
          {wine: newWine}
        );

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Winelist wine={this.state.wine} />
      </div>
    );
  }
}

export default App;
