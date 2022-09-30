import React, {useState} from 'react';

const BindingFunction = () => {
  const [name, setName] = useState('Tamilselvan');

  const listenName = e => {
    setName(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${name} \n 
            You can replace this alert with your process`);
  };
    
  return(
    <div>
      <hr />
       <label htmlFor="name">Name: </label>
       <input name="name" id="name" onChange={listenName} placeholder="name" />
       <button type="submit" onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default BindingFunction