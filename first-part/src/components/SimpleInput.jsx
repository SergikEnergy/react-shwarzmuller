import { useState } from 'react';

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const enteredNameIsValid = inputName.trim().length !== 0;

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputIsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    setInputName('');
  };

  const inputNameBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const nameInputIsInvalid = !enteredNameIsValid && inputIsTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={inputName}
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
