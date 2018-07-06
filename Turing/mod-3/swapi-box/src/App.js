import React, { Component } from 'react';
import logo from './logo.svg';
import Scroll from './Scroll.js'
import './App.css';
import Header from './Header.js';
import Helper from './helper.js';
import { scroll, people, planets, vehicles } from './helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollText: {},
      cards: [],
      favorites: [],
      // buttonType: null;
    }
  }

  // displayCards = () => {
      //fetch data based on which button was clicked
      //set state  to data received
  // }

//   chooseData = (Helper.buttonType) => {
//     switch(Helper.buttonType) {
//       case 0:
//       buttonType = 'people'
//       break;
//       case 1:
//       buttonType = 'planets'
//       break;
//       case 2:
//       buttonType = 'vehicles'
//       break;
//     }
//     this.setState({buttonType})
//   }

//   componentDidMount(this.state.buttonType) {
//   const url = `http://localhost:3001/api/${this.state.button}`
//   fetch(url)
//   .then(response => response.json())
//   .then(data => this.info(data.bio))
//   .then(displayedCards => this.setState({cards}))
// }


  render() {
    return (
      <div className="App">
        <Scroll />
        <Header />
      </div>
    );
  }
}

export default App;
