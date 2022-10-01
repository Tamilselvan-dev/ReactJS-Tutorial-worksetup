import * as React from 'react';
import './style.css';
// import Greet from './components/Greet';
// import GreetClass from './components/GreetClass';
// import HelloJsx from './jsx/Hello'
// import {HelloWithoutJsx} from './jsx/Hello'
// import Cstate from './components/states/Cstate';
// import Fstate from './components/states/Fstate';
// import Ccounter from './components/counter/Ccounter';
// import Fcounter from './components/counter/Fcounter';
// import BindingClass from './components/bindingEvent/BindingClass'
// import BindingFunction from './components/bindingEvent/BindingFunction'
// import LifeCycle from './components/lifecycle/LifeCycle';
// import HigherClass from './components/higherorderfunction/HigherClass';
// import HigherFunction from './components/higherorderfunction/HigherFunction';
// import ContextClass from './components/context/ContextClass';
// import ContexFunction from './components/context/ContextFunction';
// import { UserProvider } from './components/context/UseContext';
import ApiClass from './api/ApiClass';

export default function App() {
  const name = 'Tamilselvan Velayudham props';
  return (
    <div>
      {/* Components with props */}
      {/* <Greet name={name}>
        <h2>children prop value</h2>
      </Greet>

      <GreetClass name={name}>
      <h2>children prop value</h2>
      </GreetClass> */}
      {/* Components with props */}

      {/* JSX ELEMENT */}
      {/* <HelloJsx />
        <HelloWithoutJsx /> */}
      {/* JSX ELEMENT */}

      {/* STATE ELEMENT */}
      {/* <Cstate />
      <Fstate /> */}
      {/* STATE ELEMENT */}

      {/* Counter */}
      {/* <Ccounter />
      <Fcounter /> */}
      {/* Counter */}

      {/* Counter */}
      {/* <BindingClass />
      <BindingFunction /> */}
      {/* Counter */}

      {/* <LifeCycle /> */}

      {/* <HigherClass name={'Tamilselvan'} />
<HigherFunction name={'Tamilselvan'} /> */}

      {/* <UserProvider value="Tamilselvan">
        <ContextClass />
        <ContexFunction />
      </UserProvider> */}

<ApiClass />
    </div>
  );
}
