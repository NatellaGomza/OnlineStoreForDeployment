import React from 'react';
import { connect } from 'react-redux';

import CategoryWrapper from '../components/CategoryWrapper';

function InitPageAbout(props) {
  return (
    <CategoryWrapper
      header={props.initState.header}
      categories={props.initState.categoryInfo}
    />
  );
}


const mapStateToProps = function (state) {
  return {
    initState: state.basket,
  };
};

const Page_About = connect(mapStateToProps)(InitPageAbout);

export default Page_About;