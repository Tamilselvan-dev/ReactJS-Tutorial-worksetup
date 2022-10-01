import React, { Component } from 'react';
import HighOrder from './HighOrder';

class HigherClass extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.name)
    return (
      <>  
      <h1>{this.props.name}</h1>
    <button onClick={this.props.increment}>Clicked {this.props.count} Times</button>
    </>
    )
  }
}

export default HighOrder(HigherClass)