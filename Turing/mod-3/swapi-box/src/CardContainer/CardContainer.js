import React from 'react';
import Card from '../Card/Card';
import './styles.css'

const CardContainer = ({state}) => {

  const createIndivCard = (type) => {
    return type.map(item => {
      return <Card 
          item={item} 
          key={item.name} 
        />
    })
  } 

  const type = state.type === 'people' ? state.people :
  state.type === 'vehicle' ? state.vehicle : 
  state.type === 'planet' ? state.planet : []

  return (
      <div className="CardContainer">
          {createIndivCard(type)}
      </div>
    )
}

export default CardContainer;