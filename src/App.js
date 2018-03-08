import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instalist from './Instalist.js'
import instaURL  from "https://www.instagram.com/"



class App extends Component {

  getLikes(imagenes1, imagenes2){
    likes1 = JSON.parse(imagenes1);
    likes2 = JSON.parse(imagenes2);

  }

  imagenes1(user1){
    
    let me1 = this;
    fetch(instaURL + user1 + "/?__a=1")
      .then((res) => {
        return res.json();
      })
      .then((images1) => {
        me1.setState({images1:images1});
      })
      .catch((err) => console.log(err) );
  }

  imagenes2(user2){
   
    let me2 = this;
    fetch(instaURL + user2 + "/?__a=1")
      .then((res) => {
        return res.json();
      })
      .then((followers) => {
        me2.setState({images1:images1});
      })
      .catch((err) => console.log(err) );
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
    <ul>
          {this.props.Instas.map(u => {
            return (
              <Instalist
                key={u.id}
                name={u.username}
                age={u.media}
              />
            );
          })}
    </ul>
  }
}
export default App;







