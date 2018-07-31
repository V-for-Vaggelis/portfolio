import React, { Component } from 'react';
import logo from './udacity.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img class="udacity-logo" src={logo} alt=""></img>
          <h1 id="name">Evangelos Athanasakis</h1>
          <h2 id="knowledge">Front end developer | Physicist</h2>
        </header>
      </div>
    );
  }
}

export default App;
