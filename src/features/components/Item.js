import React from 'react';
import { connect } from 'react-redux';
import { deleteFromBasket } from './events';

import './Item.css';

function InitItem(props) {

  const deleteFromCart = () => {
    let deletedProduct = props.id;
    deleteFromBasket.emit("deleteProduct", deletedProduct);
  }

  return (
    <div className='item'>
      <div className="basketItemWrapper">
        <div>
          <img src={props.url}></img>
        </div>
        <div className="itemInBasket">{props.producer}</div>
        <div className="itemInBasket">{props.model}</div>
        <div className="itemInBasket">{props.price + " y.e"}</div>
        <div className="itemInBasket"><button className="deleteButton" onClick={deleteFromCart}>Удалить из корзины</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {};
};

const Item = connect(mapStateToProps)(InitItem);

export default Item;