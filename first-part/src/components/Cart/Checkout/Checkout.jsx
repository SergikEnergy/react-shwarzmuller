import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChairs = (value) => value.trim().length === 5;

function Checkout(props) {
  const nameInput = useRef();
  const streetInput = useRef();
  const postCodeInput = useRef();
  const cityInput = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    nameValid: true,
    cityValid: true,
    streetValid: true,
    postalCodeValid: true,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostCode = postCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostCodeIsValid = isFiveChairs(enteredPostCode);

    setFormInputsValidity({
      cityValid: enteredCityIsValid,
      nameValid: enteredNameIsValid,
      streetValid: enteredStreetIsValid,
      postalCodeValid: enteredPostCodeIsValid,
    });

    const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostCodeIsValid && enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postCode: enteredPostCode,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={`${classes.control} ${!formInputsValidity.nameValid && classes.invalid}`}>
        <label htmlFor='nameClient'>Your name:</label>
        <input type='text' name='client-name' id='nameClient' ref={nameInput} />
        {!formInputsValidity.nameValid && <p>Please enter a valid name.</p>}
      </div>
      <div className={`${classes.control} ${!formInputsValidity.streetValid && classes.invalid}`}>
        <label htmlFor='street'>Your street:</label>
        <input type='text' name='client-address-street' id='street' ref={streetInput} />
        {!formInputsValidity.streetValid && <p>Please enter a valid street.</p>}
      </div>
      <div className={`${classes.control} ${!formInputsValidity.postalCodeValid && classes.invalid}`}>
        <label htmlFor='postCode'>Your postal code:</label>
        <input type='text' name='client-post-code' id='postCode' ref={postCodeInput} />
        {!formInputsValidity.postalCodeValid && <p>Please enter a valid post code.</p>}
      </div>
      <div className={`${classes.control} ${!formInputsValidity.cityValid && classes.invalid}`}>
        <label htmlFor='city'>Your city:</label>
        <input type='text' name='client-address-city' id='city' ref={cityInput} />
        {!formInputsValidity.cityValid && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
