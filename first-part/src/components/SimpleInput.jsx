import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState('');

  const inputNameRef = useRef();

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputName);

    console.log(inputNameRef.current.value);
    // inputNameRef.current.value=''; this is not ideal - DON'T MANIPULATE THE DOM DIRECTLY
    // using setState - more pleasant version
    // input should be controlled - with useState and value or uncontrolled - with useRef and current.value - inly one approach
    setInputName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={inputNameRef} value={inputName} onChange={inputNameChangeHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
