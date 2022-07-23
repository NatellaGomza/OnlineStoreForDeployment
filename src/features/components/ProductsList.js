import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import SelectOptions from './SelectOptions';
import './ProductsList.css';

function InitProductList(props) {

  const [items, setItems] = useState(props.item);
  const [ammount, setAmmount] = useState(5);
  
  const [selectedAmmount, setSelectedAmmount] = useState([
    {id:1, value:5, name:5},
    {id:2, value:10, name:10},
    {id:3, value:props.item.length, name:"Показать всё"},
  ]);

  const pagesAmmountArr = [];
  const [page, setPage] = useState(1);
  const [firstItemOnPage, setFirstItemOnPage] = useState(0);
  const [lastItemOnPage, setLastItemOnPage] = useState(5);

  const itemInBasket = props.initState.basket.map(el => el.id);

  const pagesAmmount = Math.ceil(props.item.length / ammount);

  useEffect(() => {
    setFirstItemOnPage(page * ammount - ammount);
    setLastItemOnPage(page * ammount);
    setItems([...props.item.slice(firstItemOnPage, lastItemOnPage)])
  }, [page, firstItemOnPage, lastItemOnPage, ammount])

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
      <div>
        <SelectOptions 
        defaultValue="Количество элементов на странице"
        value={ammount}
        onChange={el => setAmmount(el)}
        options={[
          {value:5, name:5},
          {value:10, name:10},
          {value:props.item.length, name:"Показать всё"},
        ]}/>
        <div className="pageOptions">
          {pagesAmmountArr.map(el =>
            <span key={el} onClick={() => { setPage(el) }}>{el}</span>
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