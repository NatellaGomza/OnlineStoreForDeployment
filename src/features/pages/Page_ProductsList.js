import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

import ProductsList from '../components/ProductsList';

const withRouter = Component => props => {
  const params = useParams();
  return <Component {...props} params={params} />;
};

function InitPageProductsList(props){
    const productId = props.params.item;
    const productData = props.initState.products.filter(el => el.category == productId);

    return (
        <ProductsList
          item={productData}
        />
    );
  }

const mapStateToProps = function (state) {
  
  return {
      initState: state.basket,
  };
};

const Page_ProductsList = connect(mapStateToProps)(InitPageProductsList);

export default withRouter(Page_ProductsList);
