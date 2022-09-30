import React, {useState} from 'react';

const Fcounter = () => {
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <hr />
     Function Counter
     <button onClick={() => setCounter(prev => prev - 1)}>-</button>
     <span> {counter} </span>
     <button onClick={() => setCounter(prev => prev + 1)}>+</button>
    </div>
    )
}

export default Fcounter;