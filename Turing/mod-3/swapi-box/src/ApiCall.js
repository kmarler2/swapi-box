import React from 'react';
import Header from './Header.js';

const StarWarsData = {
  getData(passedUrl) {
    let url = 'https://swapi.co/api/';
    fetch(url)
    .then(response => response.json())
    .then(obj => console.log(obj))
  }
}

export default StarWarsData;
