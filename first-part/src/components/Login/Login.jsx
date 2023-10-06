import { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_EMAIL') {
    return {
      value: action.payload,
      isValid: action.payload.includes('@'),
    };
  }
  if (action.type === 'EMAIL_ONBLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 6,
    };
  }
  if (action.type === 'PASSWORD_ONBLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const context = useContext(AuthContext);

  //using useReducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });

  //do as componentWill Unmount
  // useEffect(() => {
  //   //this log will type after component did mount and only one time because of empty dependency array
  //   console.log('this log when component did mount - only after first render');
  //   return () => {
  //     console.log('run before start new use Effect');
  //     //because we don't have a dependency - we get this lod only before component will unmount
  //   };
  // }, []);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setFormIsValid(passwordState.isValid && emailState.isValid);
      console.log('checking form validity');
    }, 500);
    return () => {
      clearTimeout(timerID);
      console.log('cleanUP', timerID);
    };
    // console.log('checking form validity');
  }, [passwordState.isValid, emailState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_EMAIL', payload: event.target.value });
    // setEnteredEmail(event.target.value);

    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_PASSWORD', payload: event.target.value });
    // setEnteredPassword(event.target.value);

    // setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_ONBLUR' });
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_ONBLUR' });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogIn(emailState.value, passwordState.value);
    console.log(context.onLogIn);
    console.log(context);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState.isValid}
          id={'email'}
          label={'E-mail'}
          type={'email'}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          isValid={passwordState.isValid}
          id={'password'}
          label={'Password'}
          type={'password'}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
