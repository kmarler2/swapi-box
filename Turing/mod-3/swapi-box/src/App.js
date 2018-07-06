import React, { Component } from 'react';
import logo from './logo.svg';
import Scroll from './Scroll.js'
import './App.css';
import Header from './Header.js';
import Helper from './helper.js';
import ApiCall from './ApiCall.js'
import { scroll, people, planets, vehicles } from './helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollText: {},
      cards: [],
      favorites: [],
    }
  }

  displayCards = () => {
      //fetch data based on which button was clicked
      //set state  to data received
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Scroll />
      </div>
    );
  }
}

export default App;
