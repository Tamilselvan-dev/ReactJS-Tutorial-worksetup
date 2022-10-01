import React, { Component } from 'react';
import HighOrder from './HighOrder';

class HigherClass extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>  
    <button onClick={this.props.increment}>Clicked {this.props.count} Times</button>
    </>
    )
  }
}

export default HighOrder(HigherClass)