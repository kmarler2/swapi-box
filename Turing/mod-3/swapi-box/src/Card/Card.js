import React from 'react';
import './styles.css';

const Card =({item}) => {

  const getResident = (residents) => {
    return residents.map(resident => <li key={resident}>{resident}</li> )
  }

const Card = item.species ?
        <div className='card'> 
          <h2>name: {item.name}</h2>
          <p>species: {item.species}</p>
          <p>Homeworld: {item.planetName}</p>
          <p>population: {item.population}</p>
        </div> 
        : item.model ? 
        <div className='card'> 
          <h2>name: {item.name}</h2>
          <p>species: {item.model}</p>
          <p>Homeworld: {item.vehicle_class}</p>
          <p>population: {item.passengers}</p>
        </div> 
        : item.climate ?
        <div className='card'> 
          <h2>name: {item.name}</h2>
          <p>population: {item.population}</p>
          <p>climate: {item.climate}</p>
          <p>residents: {getResident(item.residents)}</p>
        </div> : ''
        return Card
}
export default Card;