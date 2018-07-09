import React, { Component } from 'react';
import './styles.css';
import helper from '../helper.js';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Scroll from '../Scroll/Scroll.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    this.fetchScroll();
  }

  async fetchScroll() {
    const filmInfo = await helper.fetchScrollData();
    this.setState({
      filmInfo
    });
  }

  fetchPeople = async () => {
    const people = await helper.fetchPeopleData();
    this.setState({
      people: people
    });
    this.setState({
      type: 'people'
    });
    console.log(this.state)
  }

  fetchVehicles = async () => {
    const vehicle = await helper.fetchVehiclesData();
    this.setState({
      vehicle: vehicle
    });
    this.setState({
      type: 'vehicle'
    });
  }

  fetchPlanets = async () => {
    const planet = await helper.fetchPlanetsData();
    this.setState({
      planet: planet
    });
    this.setState({
      type: 'planet'
    });
  }

  render() {
    return (
      <div className="App">
        <Scroll 
          filmInfo={this.state.filmInfo}
        />
        <Header 
          fetchPeople={this.fetchPeople}
          fetchVehicles={this.fetchVehicles}
          fetchPlanets={this.fetchPlanets}
        />
        <CardContainer
          state={this.state} 
        />
      </div>
    );
  }
}

export default App;