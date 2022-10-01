import React, { Component } from 'react';

const HighOrder = Original => {

  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      }
    }

    increment = () => {
      this.setState(prev => {
        return {count: prev.count + 1}
      })
    }

    render() {
      return <Original count={this.state.count} increment={this.increment} />
    }
  }

  return NewComponent
}

export default HighOrder;