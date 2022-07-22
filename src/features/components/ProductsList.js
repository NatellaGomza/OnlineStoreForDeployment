import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import MyButton from './MyButton';
import './ProductsList.css';

function InitProductList(props) {

  const [items, setItems] = useState(props.item);
  const [ammount, setAmmount] = useState(5);
  const pagesAmmountArr = [];
  const [page, setPage] = useState(1);
  const [firstItemOnPage, setFirstItemOnPage] = useState(0);
  const [lastItemOnPage, setLastItemOnPage] = useState(5);

  const itemInBasket = props.initState.basket.map(el => el.id);

  const pagesAmmount = Math.ceil(props.item.length / ammount);

  useEffect(() => {
    console.log(page*ammount-ammount);
    setFirstItemOnPage(page*ammount-ammount);
    setLastItemOnPage(page*ammount);
    console.log(firstItemOnPage);
    console.log(lastItemOnPage);
    console.log(page);
    setItems([...props.item.slice(firstItemOnPage, lastItemOnPage)])
  }, [page, firstItemOnPage, lastItemOnPage])

  for (let i = 0; i < pagesAmmount; i++) {
    pagesAmmountArr.push(i + 1);
  }

  const item = items.map(el => {
    let isItemInBasket = false;

    for (let i = 0; i < itemInBasket.length; i++) {
      if (itemInBasket[i] === el.id) {
        isItemInBasket = true;
      }
    }

    return <Product key={el.id} info={el} isItemInBasket={isItemInBasket} />
  });

  return (
    <div className="wrapperProductList">
      <div className="pageOptions">
        <select>
          <option></option>
        </select>
        {pagesAmmountArr.map(el =>       
          <span key={el} onClick = { ()=> {setPage(el)} }>{el}</span>
        )}
      </div>
      <div className='wrapper'>
        {item}
      </div>
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