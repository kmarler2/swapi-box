import React from 'react';
import './styles.css';

const Card =({item}) => {

  const Card = item.species ?
    <div className='card'> 
      <h1>name: {item.name}</h1>
      <p className='cardP'>species: {item.species}</p>
      <p className='cardP'>Homeworld: {item.planetName}</p>
      <p className='cardP'>population: {item.population}</p>
      <button className='favesbtn'>Add to faves!</button>
    </div> 
    : item.model ? 
      <div className='card'> 
        <h1>name: {item.name}</h1>
        <p className='cardP'>species: {item.model}</p>
        <p className='cardP'>Homeworld: {item.vehicle_class}</p>
        <p className='cardP'>population: {item.passengers}</p>
        <button className='favesbtn'>Add to faves!</button>
      </div> 
      : item.climate ?
        <div className='card'> 
          <h1>name: {item.name}</h1>
          <p className='cardP'>population: {item.population}</p>
          <p className='cardP'>climate: {item.climate}</p>
          <button className='favesbtn'>Add to faves!</button>
        </div> : '';
  return Card;
};
export default Card;