import React from 'react';

const Greet = ({name,children}) => {
  return(
    <>
    <h1>Hello {name}</h1>
    {children}
    </>
  )
}

export default Greet;