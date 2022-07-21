import React, { useEffect } from 'react';
import { addToBasket } from './events';
import { deleteFromBasket } from './events';
import { connect } from 'react-redux';

import './Basket.css'

function InitBasket(props) {

    const dataBaseName = 'GNR_React_Shop_GAME_DATA';
    const dataBaseServerURL = "https://fe.it-academy.by/AjaxStringStorage2.php";
    let updatePassword = null;
    let data = [];
    let item = null;
    let deletedProduct = null;

    useEffect(() => {
        readStorage();
        deleteFromBasket.addListener("deleteProduct", deleteProduct);
        addToBasket.addListener("newProduct", addProductToBasket);
    }, [])

    const deleteProduct = (deleteProduct) => {
        deletedProduct = deleteProduct;
        updateBasket();
    }

    const addProductToBasket = (newProduct) => {
        item = newProduct;
        updateBasket();
    }

    const updateBasket = () => {
        updatePassword = Math.random();

        let postRequestBeforeUpdate = new URLSearchParams();
        postRequestBeforeUpdate.append('f', 'LOCKGET');
        postRequestBeforeUpdate.append('n', dataBaseName);
        postRequestBeforeUpdate.append('p', updatePassword);

        fetch(dataBaseServerURL, { method: 'post', body: postRequestBeforeUpdate })
            .then(response => response.json())
            .then(data => lockGetReady(data))
            .catch(error => { alert("Ошибка сервера! Повторите попытку позднее!") });
    }

    const lockGetReady = (callresult) => {
        if (callresult.error) {
            alert("Ошибка сервера! Повторите попытку позднее!");
        }

        if (item && callresult.result) {
            data = JSON.parse(callresult.result);
            if (data) {
                data.push(item);
            }
        }

        if (deletedProduct && callresult.result) {
            data = JSON.parse(callresult.result);
            if (data) {
                data = data.filter(el => {
                    return el.id !== deletedProduct
                });
            }
        }

        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'UPDATE');
        postRequestUpdate.append('n', dataBaseName);
        postRequestUpdate.append('p', updatePassword);
        postRequestUpdate.append('v', JSON.stringify(data));

        fetch(dataBaseServerURL, { method: 'post', body: postRequestUpdate })
            .then(response => response.json())
            .then((data) => {
                if (!!data.result) {
                    updateRedux(data)
                }
            })
            .catch(error => alert("Ошибка сервера! Повторите попытку позднее!"));

        deletedProduct = null;
    }

    const updateRedux = () => {
        props.dispatch({ type: "addToCart", payload: data });
        readStorage();
    }

    const readStorage = () => {
        updatePassword = Math.random();

        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'READ');
        postRequestUpdate.append('n', dataBaseName);
        postRequestUpdate.append('p', updatePassword);

        fetch(dataBaseServerURL, { method: 'post', body: postRequestUpdate })
            .then(response => response.json())
            .then(data => readData(data))
            .catch(error => alert("Ошибка сервера! Повторите попытку позднее!"));
    }

    const readData = (data) => {
        if (!data.result) {
            data = [];
            updateBasket();
        } else {
            data = JSON.parse(data.result);
            props.dispatch({ type: "addToCart", payload: data });
        }
    }

    const deleteFromCart = () => {
        let deletedProduct = props;
        props.dispatch({ type: "deleteFromCart", payload: deletedProduct });
    }

    return (
        <></>
    )
}

const mapStateToProps = function (state) {
    return {};
};

const Basket = connect(mapStateToProps)(InitBasket);

export default Basket;