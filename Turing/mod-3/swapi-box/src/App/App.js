import React, { Component } from 'react';
import './styles.css';
import { 
  fetchPlanetsData, 
  fetchPeopleData, 
  fetchVehiclesData,  
  fetchScrollData} from '../helper.js';
import Header from '../Header/Header.js';
// import CardContainer from '../CardContainer/CardContainer.js';
import Scroll from '../Scroll/Scroll.js';

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
    const filmInfo = await fetchScrollData()
    this.setState({
      filmInfo 
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