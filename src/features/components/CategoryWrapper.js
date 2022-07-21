import React from 'react';

import Category from './Category';

import './CategoryWrapper.css';

export default function CategoryWrapper(props) {

  let category = props.categories.map(el =>
    <Category key={el.id} info={el} />
  );

  return (
    <div className='categoryWrapper'>
      <h1>{props.header}</h1>
      <div className='categories'>
        {category}
      </div>
    </div>
  );
}
