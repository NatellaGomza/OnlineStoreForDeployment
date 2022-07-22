import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
import Page_Basket from './Page_Basket';
import Page_ProductsList from './Page_ProductsList';
import Page_AllProducts from './Page_AllProducts';

function PagesRouter() {

    return (
        <Routes>
          <Route path="/" element={<Page_About />} />
          <Route path="/company" element={<Page_Company />} />
          <Route path="/basket" element={<Page_Basket />} />
          <Route path="/products/" element={<Page_AllProducts />} />
          <Route path="/products/:item" element={<Page_ProductsList />} />
        </Routes>
    );
  }

export default PagesRouter;