import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import './ProductsList.css';

function InitProductList(props) {

  const itemInBasket = props.initState.basket.map(el => el.id);
  const item = props.item.map(el => {
    let isItemInBasket = false;

    for (let i = 0; i < itemInBasket.length; i++) {
      if (itemInBasket[i] === el.id) {
        isItemInBasket = true;
      }
    }

    return <Product key={el.id} info={el} isItemInBasket={isItemInBasket} />
  });

  return (
    <div className='wrapper'>
      {item}
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    initState: state.basket,
  };
};

const ProductsList = connect(mapStateToProps)(InitProductList);

export default ProductsList;