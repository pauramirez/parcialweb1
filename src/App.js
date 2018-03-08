import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frulist from './Frulist.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      frunas: [
        {id: 1, name: "miguel", age: 5},
        {id: 2, name: "test", age: 15}
      ]
    };
  }
  
  render() {
    return (
        <Frulist frunas={this.state.frunas} />
    );
  }
}
export default App;
