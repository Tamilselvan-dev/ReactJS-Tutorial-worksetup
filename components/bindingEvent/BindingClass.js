import React, {Component} from 'react';

class BindingClass extends Component {
  constructor() {
    super();
    this.state ={
      name: 'Tamilselvan'
    }
  }
  listenName(e) {
       this.setState({
         name: e.target.value
       })
  }

  render() {
    const { name } = this.state;
    return(
      <div>
        <h1>{name}</h1>
       <label htmlFor="name">Name: </label>
       <input name="name" id="name" onChange={() => this.listenName()} placeholder="name" />
       <button type="submit">submit</button>
      </div>
    )
  }
}

export default BindingClass;