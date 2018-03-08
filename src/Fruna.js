import React, { Component } from 'react';
import './App.css';

class Fruna extends Component {
  render() {
  return (
  	<li>{this.props.name}- {this.props.age} </li>
  	);
  }
  }

  export default Fruna;