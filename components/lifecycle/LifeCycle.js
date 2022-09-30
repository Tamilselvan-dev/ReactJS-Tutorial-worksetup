import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Tamilselvan',
    };
    console.log('Constructor LifeCycle');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps LifeCycle');
    return null;
  }
  componentDidMount() {
    console.log('getDerivedStateFromProps LifeCycle');
  }

  render() {
    console.log('render LifeCycle');
    return (
      <>
        <h1>change</h1>
      </>
    );
  }
}

export default LifeCycle;
