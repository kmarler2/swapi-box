import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    buttonType: 'people',
    }
  }

  handleClick(event) {
    this.setState({
      buttonType: event.target.innerText,
    })
  }

render() {
return (
  <div>
    <h1>Swapi-box</h1>
    <button className='faves'>Favorites</button>
    <button onClick={handleClick}>people</button>
    <button onClick={handleClick}>vehicles</button>
    <button onClick={handleClick}>planets</button>
  </div>
  )
}
}

export default Header;