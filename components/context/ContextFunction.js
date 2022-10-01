import React from 'react';
import { UserConsumer } from './UseContext';

const ContextFunction = () => {

  return(
    <>
  <UserConsumer>
    {name => {
             return <h1>{name}</h1>
      }
    }
  </UserConsumer>
    </>
  )
}

export default ContextFunction