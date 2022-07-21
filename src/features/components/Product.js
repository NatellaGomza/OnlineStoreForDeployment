import React from 'react';
import { connect } from 'react-redux';
import { addToBasket } from './events';

import './Product.css';

function AddProduct(props) {

    const addToCart = () => {
        let newProduct = props.info;
        addToBasket.emit("newProduct", newProduct);
    }

    return (
        <div className='itemProduct'>
            <img src={props.info.url} alt={props.info.model} />
            <span className="producer">{props.info.producer}</span>
            <span className="model">{props.info.model}</span>
            <span className="model">{props.info.price + " y.e"}</span>
            {(!props.isItemInBasket) ? <button className="addingButton" onClick={addToCart}>Добавить в корзину</button> : <button className="addingButton" disabled>Уже в корзине</button>}
        </div>
    );
}

const mapStateToProps = function (state) {
    return {};
};

const Product = connect(mapStateToProps)(AddProduct);

export default Product;