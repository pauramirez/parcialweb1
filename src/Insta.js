import React, { Component } from 'react';
import './App.css';

class Insta extends Component {
  render() {
  return (
  	<li>{this.props.username}- {this.props.media} </li>
  	);
  }
  }

  export default Insta;