import React, {useState} from 'react';
import HighOrder from './HighOrder'

const HigherFunction = ({count, increment}) => {
  return (
    <div>
      <h2 onMouseOver={increment}>Hovered {count} Times</h2>
    </div>
  )
}

export default HighOrder(HigherFunction);
