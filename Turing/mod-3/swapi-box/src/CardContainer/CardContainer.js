import React from 'react';
import Card from '../Card/Card';
import './styles.css'

const CardContainer = ({state}) => {

  const createIndivCard = (type) => {
    return type.map(person => {
      return <Card 
          individual={person} 
          key={person.name} 
        />
    })
  }

  const type = state.type === 'people' ? state.people : []

  return (
      <div className="CardContainer">
          {createIndivCard(type)}
      </div>
    )
}

export default CardContainer;