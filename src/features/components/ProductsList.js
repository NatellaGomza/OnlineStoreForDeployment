import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import SelectOptions from './SelectOptions';
import './ProductsList.css';

function InitProductList(props) {

  const [ammount, setAmmount] = useState(5);
  const [page, setPage] = useState(1);
  const [firstItemOnPage, setFirstItemOnPage] = useState(0);
  const [lastItemOnPage, setLastItemOnPage] = useState(5);

  const pagesAmmountArr = [];
  const itemInBasket = props.initState.basket.map(el => el.id);
  const pagesAmmount = Math.ceil(props.item.length / ammount);
  const items = [...props.item.slice(firstItemOnPage, lastItemOnPage)];

  for (let i = 0; i < pagesAmmount; i++) {
    pagesAmmountArr.push(i + 1);
  }

  useEffect(() => {
    loadItems(ammount);
  }, [page, firstItemOnPage, ammount, lastItemOnPage])

  const loadItems = (ammountToShow) => {
    if (page > pagesAmmount) {
      setPage(1);
    }
    
    setFirstItemOnPage(page * ammountToShow - ammountToShow);
    setLastItemOnPage(page * ammountToShow);
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
      <div>
        <SelectOptions
          defaultValue="Количество элементов на странице"
          value={ammount}
          onChange={el => setAmmount(el)}
          options={[
            { value: 5, name: 5 },
            { value: 10, name: 10 },
            { value: props.item.length, name: "Показать всё" },
          ]} />
        <div className="pageOptions">
          {pagesAmmountArr.map(el =>
            <span className = { page === el ? "page pageActive" : "page"} key={el} onClick={() => { setPage(el) }}>{el}</span>
          )}
        </div>
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