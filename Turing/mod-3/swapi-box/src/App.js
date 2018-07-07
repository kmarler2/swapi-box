import React, { Component } from 'react';
import {   
  fetchScroll} from './helper.js';
import Header from './Header';
import CardContainer from './CardContainer';
import Scroll from './Scroll';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
     this.fetchScroll();
  }

  async fetchScroll() {
    const filmData = await fetchScroll()
    this.setState({
      filmData 
     })
  }

  render() {
    return (
      <div className="App">
        <Scroll filmInfo={this.state.filmInfo}/>
      </div>
    );
  }
}

export default App;
