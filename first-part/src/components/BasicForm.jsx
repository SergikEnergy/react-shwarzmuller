import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputBlurHandler: nameBlur,
    valueChangeHandler: nameChange,
    reset: nameReset,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlur,
    valueChangeHandler: lastNameChange,
    reset: lastNameReset,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlur,
    valueChangeHandler: emailChange,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    nameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={`form-control ${nameHasError && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChange} onBlur={nameBlur} value={nameInput} />
          {nameHasError && <p className='error-text'>Name should not be empty.</p>}
        </div>
        <div className={`form-control ${lastNameHasError && 'invalid'}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onChange={lastNameChange} onBlur={lastNameBlur} value={lastNameInput} />
          {lastNameHasError && <p className='error-text'>Last name should not be empty.</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError && 'invalid'}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChange} onBlur={emailBlur} value={email} />
        {emailHasError && <p className='error-text'>Please, enter correct email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
