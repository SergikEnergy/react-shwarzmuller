import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  // const inputNameRef = useRef();

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputIsTouched(true);
    if (inputName.trim().length === 0) {
      setInputIsValid(false);
      return;
    }

    setInputIsValid(true);

    // inputNameRef.current.value=''; this is not ideal - DON'T MANIPULATE THE DOM DIRECTLY
    // using setState - more pleasant version
    // input should be controlled - with useState and value or uncontrolled - with useRef and current.value - inly one approach
    setInputName('');
  };

  const nameInputIsInvalid = !inputIsValid && inputIsTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' /*ref={inputNameRef}*/ value={inputName} onChange={inputNameChangeHandler} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
