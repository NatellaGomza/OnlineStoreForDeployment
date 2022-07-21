import React from 'react';

import './Company.css';

export default function Company(props) {
  return (
    <div className="company">
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  );
}
