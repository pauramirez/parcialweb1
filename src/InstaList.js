import React, { Component } from 'react';
import './App.css';
import Insta from './Insta.js';

class Intalist extends Component {
  render() {
  return (
 		 <div>
        <input type="text" name="usuario1" id="usr"> Usuario1 </input>
        <input type="text" name="usuario1" id="usr"> Usuario2 </input>
        <button name="Fight" id="button"> Fight 💪🏻 </button>
        <Frulist Instas={this.state.Instas} />
      </div>
  	);
  }
  }

  export default Frulist;



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