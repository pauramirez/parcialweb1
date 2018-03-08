import React, { Component } from 'react';
import './App.css';
import Insta from './Insta.js';

class Intalist extends Component {
  render() {
  return (
 		<ul>
          {this.props.frunas.map(u => {
            return (
              <Insta
                key={u.id}
                name={u.username}
                age={u.media}
              />
            );
          })}
        </ul>
  	);
  }
  }

  export default Frulist;