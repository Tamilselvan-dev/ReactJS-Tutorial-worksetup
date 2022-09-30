import React, { useState } from 'react';

const Fstate = () => {
  const [name, setName] = useState('Tamilselvan');
  const [subscripe, setSubscripe] = useState(false);
  return (
    <>
      <h1>
        hello {name} your {subscripe ? 'UnSubscripe' : 'Subscripe'} from state
        function{' '}
      </h1>
      <button onClick={() => setSubscripe((prev) => !prev)}>
        {subscripe ? 'Subscript' : 'Unsubscripe'}
      </button>
    </>
  );
};

export default Fstate;
