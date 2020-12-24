import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = [
      {
        gods: [
          {
            name: 'Yuogg-sototh'
          },
          {
            name: 'Cthulhu'
          },
          {
            name: 'Azatoth'
          },
          {
            name: 'Hastur'
          },
        ]
      }
    ];
  }
  render() {
    return(
      <div className="App">
      {
        this.state.gods.map( gods => { <h1> { gods.name } </h1>})
      }
    </div>
    );
  }
}

export default App;
