import React from 'react';

//WITH JSX
const HelloJsx = () => {
  return (
    <>
      <h1>JSX ELEMENT</h1>
    </>
  );
};

//WITHOUT JSX
export const HelloWithoutJsx = () => {
  return React.createElement(
    'div',
    { id: 'hello', className: 'helloclass' },
    React.createElement('h1', null, 'WITHOUT JSX ELEMENT')
  );
  // return React.createElement('div', null, React.createElement('h1', 'JSX ELEMENT'))
};

export default HelloJsx;
