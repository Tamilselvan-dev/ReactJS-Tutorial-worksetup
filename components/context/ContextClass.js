import React, { Component } from 'react';
import { UserConsumer } from './UseContext';

class ContextClass extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Title'
    }
  }

  render() {
    return (
      <>
      <UserConsumer>
        {(name) => {
           return <h1>{name}</h1>
        }
        }
      
      </UserConsumer>
      </>
    )
  }
}

export default ContextClass