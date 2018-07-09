import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Scroll = ({filmInfo}) => {
  return filmInfo ? 
    <div className='scrollText'>
      <p>{filmInfo.crawl}</p>
      <h5>{filmInfo.filmTitle}</h5>
      <h5>{filmInfo.date}</h5>
    </div>
    : '';
};

Scroll.propTypes = {
  filmInfo: PropTypes.object.isRequired
};

export default Scroll;