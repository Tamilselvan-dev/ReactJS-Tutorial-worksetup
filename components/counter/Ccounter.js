import React, { Component } from 'react';

class Ccounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  addCounter() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
}

subCounter() {
  this.setState(prevState => ({
    counter: prevState.counter - 1
  }))
}

  render() {
    return(
      <div>
     Class Counter
     <button onClick={() => this.subCounter()}>-</button>
     <span> {this.state.counter} </span>
     <button onClick={() =>this.addCounter()}>+</button>
    </div>
    )
  }
}

export default Ccounter;