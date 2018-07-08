import React, { Component } from 'react';
import './styles.css';
import helper from '../helper.js';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Scroll from '../Scroll/Scroll.js';
import Card from '../Card/Card.js'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      favorites: [],
    }
  }

  componentDidMount() {
     this.fetchScroll();
     this.fetchPlanets();
    }

  async fetchScroll() {
    const filmInfo = await helper.fetchScrollData()
    this.setState({
      filmInfo
     })
  }

  async fetchPeople() {
    const people = await helper.fetchPeopleData();
    this.setState({
      people: people
    })
    this.setState({
      type: 'people'
    })
  }

    async fetchVehicles() {
    const vehicle = await helper.fetchVehiclesData();
    this.setState({
      vehicle: vehicle
    })
    this.setState({
      type: 'vehicle'
    })
  }

    async fetchPlanets() {
    const planet = await helper.fetchPlanetsData();
    this.setState({
      planet: planet
    })
    this.setState({
      type: 'planet'
    })
  }

  render() {
    return (
      <div className="App">
        <Scroll 
          filmInfo={this.state.filmInfo}
          />
        <Header 
          fetchPeopleData={this.fetchPeopleData}
          fetchVehiclesData={this.fetchVehiclesData}
          fetchPlanetsData={this.fetchPlanetsData}
          />
        <CardContainer
          state={this.state} 
          />
      </div>
    );
  }
}

export default App;