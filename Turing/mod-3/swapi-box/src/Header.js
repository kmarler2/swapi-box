import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      buttonType: '',
      url: '',
    }
  }

  handleClick = (event) => {  
    this.setState({buttonType: event.target.innerText})
    this.chooseData(this.state.buttonType)
  }

  chooseData = (buttonType) => {
    if(this.state.buttonType === 'people') {
      this.setState({url: 'https://swapi.co/api/people/'})
      console.log(this.state)
    } if(this.state.buttonType === 'planets') {
      this.setState({url: 'https://swapi.co/api/planets/'})
      console.log(this.state)
    } else if(this.state.buttonType === 'vehicles') {
      this.setState({url: 'https://swapi.co/api/vehicles/'})
      console.log(this.state)
    }
    this.apiCall(this.state.url)
  }

  apiCall = (passedUrl) => {
    let url = passedUrl
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({requestedData: data}))
  }

  render() {
    return (
      <div>
        <h1>Swapi-box</h1>
        <button className='faves'>Favorites</button>
        <button onClick={this.handleClick}>people</button>
        <button onClick={this.handleClick}>vehicles</button>
        <button onClick={this.handleClick}>planets</button>
      </div>
    )
  }
}

export default Header;