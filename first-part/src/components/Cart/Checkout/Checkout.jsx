import classes from './Checkout.module.css';

function Checkout(props) {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='nameClient'>Your name:</label>
        <input type='text' name='client-name' id='nameClient' />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Your street:</label>
        <input type='text' name='client-address-street' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postCode'>Your postal code:</label>
        <input type='text' name='client-post-code' id='postCode' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>Your city:</label>
        <input type='text' name='client-address-city' id='city' />
      </div>
      <button type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
}

export default Checkout;
