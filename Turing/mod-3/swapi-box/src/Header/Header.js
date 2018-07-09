import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Header = ({fetchPeople, fetchVehicles, fetchPlanets}) => { 
  return (
    <div className="header">
      <h1 className="title">SwapiBox</h1>
      <button className='faves'>Your Faves</button>
      <button onClick={fetchPeople} className="people">People</button>
      <button onClick={fetchVehicles} className="vehicles">Vehicles</button>
      <button onClick={fetchPlanets} className="planets">Planets</button>
    </div>
  );
};

Header.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  fetchVehicles: PropTypes.func.isRequired,
  fetchPeople: PropTypes.func.isRequired
};

export default Header;