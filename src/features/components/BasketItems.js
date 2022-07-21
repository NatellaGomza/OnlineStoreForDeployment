import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import './Basket.css'

function InitBasketItems(props) {

    const items = props.initState.basket.map(el =>
        <Item key={el.id}
            id={el.id}
            producer={el.producer}
            model={el.model}
            url={el.url}
            price={el.price}
        />
    )

    const totalPrise = props.initState.basket.map(el => el.price);
    const sum = totalPrise.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    return (
        <div>
            <h1 className="basketHeader">Товары в корзине</h1>
            {(!!items.length) ? <div>{items}</div> : <p>Корзина пуста</p>}
            {(!!items.length) &&
                <div className="result">
                    <div className="resultText">Итого:</div>
                    <div className="sum">{sum + " y.e"}</div>
                </div>}
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        initState: state.basket,
    };
};

const BasketItems = connect(mapStateToProps)(InitBasketItems);

export default BasketItems;