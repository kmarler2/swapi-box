import React from 'react';

const Card = ({individual, toggleFaves, isFavorite}) => {

  const displayResidents = (residents) => {
    return residents.map(resident => <li key={resident}>{resident}</li> )
  }

  const handleClick = () => {
    toggleFaves(individual)
  }
}

export default Card;