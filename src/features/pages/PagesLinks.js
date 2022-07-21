import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './PagesLinks.css';

function InitPagesLinks(props) {
  return (
    <div className="header">
      <div>
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>
          <img className="logo" src="https://www.optikakids.by/wp-content/themes/optikakids/img/logo1.png" alt="Company Logo" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>Главная</NavLink>
      </div>
      <div>
        <NavLink to="/company" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>О компании</NavLink>
      </div>
      <div>
        <NavLink to="/basket" className={obj => ("pageLink" + " button" + (obj.isActive ? " activePageLink" : ""))}>
          <span>Корзина(<b>{!props.initState.basket.length ? 0 : props.initState.basket.length}</b>)</span></NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    initState: state.basket,
  };
};

const PagesLinks = connect(mapStateToProps)(InitPagesLinks);
export default PagesLinks;
