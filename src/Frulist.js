import React, { Component } from 'react';
import './App.css';
import Fruna from './Fruna.js';

class Frulist extends Component {
  render() {
  return (
 		<ul>
          {this.props.frunas.map(u => {
            return (
              <Fruna
                key={u.id}
                name={u.name}
                age={u.age}
              />
            );
          })}
        </ul>
  	);
  }
  }

  export default Frulist;