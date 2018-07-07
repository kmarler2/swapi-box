import React from 'react';
import './styles.css';

const Card = ({individual, toggleFavorites, isFavorite}) => {

  const displayResidents = (residents) => {
    return residents.map(resident => <li key={resident}>{resident}</li> )
  }

  const handleClick = () => {
    toggleFavorites(individual)
  }

export default Card;