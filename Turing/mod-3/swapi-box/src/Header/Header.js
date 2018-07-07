import React from 'react';
import './styles.css'

const Header = ({fetchPeopleData, fetchVehiclesData, fetchPlanetsData}) => { 
  return (
    <div className="header">
      <h1 className="title">SwapiBox</h1>
      <button className='faves'>Your Faves</button>
      <button onClick={fetchPeopleData} className="people">People</button>
      <button onClick={fetchVehiclesData} className="vehicles">Vehicles</button>
      <button onClick={fetchPlanetsData} className="planets">Planets</button>
    </div>
    )
}

export default Header;