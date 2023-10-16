import { forwardRef } from 'react';

import classes from './Input.module.css';

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className='' {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
