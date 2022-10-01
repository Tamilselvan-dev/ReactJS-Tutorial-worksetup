import React, { useState } from 'react';
import HighOrder from './HighOrder';

const HigherFunction = ({ count, increment, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2 onMouseOver={increment}>Hovered {count} Times</h2>
    </div>
  );
};

export default HighOrder(HigherFunction);
