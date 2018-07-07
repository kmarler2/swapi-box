import React from 'react';
import './styles.css'

const SideBar = ({filmInfo}) => {
  return filmInfo ? 
      <div className='scrollText'>
        <p>{filmInfo.crawl}</p>
        <h5>{filmInfo.filmTitle}</h5>
        <h5>{filmInfo.date}</h5>
      </div>
      : ''
}

export default SideBar;