import React from 'react';
import { NavLink } from 'react-router-dom';

import './Category.css';

export default function Category(props) {
  return (
    <div className='photoWrapper'>
      <NavLink to={"/products/" + props.info.url}>
        <img src={props.info.src} alt={props.info.name} />
        <span className="header-round">{props.info.header}</span>
        <span className="desk-round">{props.info.age}</span>
      </NavLink>
    </div>
  );
}