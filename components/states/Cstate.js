import React, {Component} from 'react';

class Cstate extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tamilselvan',
      buttonValue: false
    }
  }

  changeSubscriptMethod() {
    this.setState({
      buttonValue: !this.state.buttonValue
    })
  }

  render() {
    return (
      <>
      <h1>hello {this.state.name} {this.state.buttonValue? 'Subscripe' : 'UnSubscripe'} your are from class state component</h1>
      <button onClick={()=> this.changeSubscriptMethod()}>{this.state.buttonValue? 'Unsubscripe' : 'Subscripe'}</button>
      </>
    )
  }
}

export default Cstate