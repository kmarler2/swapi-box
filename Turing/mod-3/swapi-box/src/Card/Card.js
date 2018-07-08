import React from 'react';
import './styles.css';

const Card = ({individual}) => {

  if(individual.species) {
        return <div> 
          <h2>Name: {individual.name}</h2>
          <p>Species: {individual.species}</p>
          <p>Homeworld: {individual.planetName}</p>
          <p>Homeworld Population: {individual.population}</p>
        </div>
  }
}

export default Card;