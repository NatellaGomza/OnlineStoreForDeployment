import React from 'react';

import PagesRouter from './features/pages/PagesRouter';
import PagesLinks from './features/pages/PagesLinks';
import Basket from './features/components/Basket';


class App extends React.Component {

  render() {

    return (
      <>
        <Basket />
        <PagesLinks />
        <PagesRouter />
      </>
    );
  }

}

export default App;
