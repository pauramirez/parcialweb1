import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instalist from './Instalist.js'
import insta  from "https://www.instagram.com/"

var user_j;

class App extends Component {

imagenes1(user, callback){
  fetch(Insta + user + "/?__a=1").then(function(response) {
  return response.json();
})
.then(function(myjson) {
  var objectURL = URL.createObjectURL(myjson);
  miImagen.src = objectURL;
  me.setState(myjson)
});
console.log(myjson)
}

  constructor() {
    super();
    this.state = {
      Instas: [
        {id: 1, username: "paula", age: 5},
        {id: 2, media: "test", age: 15}
      ]
    };
  }
  
  render() {
    return (
      <div>
        <input type="text" name="usuario1" id="usr"> Usuario1 </input>
        <input type="text" name="usuario1" id="usr"> Usuario2 </input>
        <Frulist Instas={this.state.Instas} />
      </div>
    );
  }
}
export default App;
