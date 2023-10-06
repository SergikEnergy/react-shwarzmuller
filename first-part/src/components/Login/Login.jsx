import { useState, useEffect, useReducer, useContext, useRef } from 'react';

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
  const [formIsValid, setFormIsValid] = useState(false);
  const context = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const timerID = setTimeout(() => {
      setFormIsValid(passwordState.isValid && emailState.isValid);
    }, 500);
    return () => {
      clearTimeout(timerID);
    };
  }, [passwordState.isValid, emailState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_EMAIL', payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_PASSWORD', payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_ONBLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_ONBLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      context.onLogIn(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      //make a focus on the first wrong item
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={emailState.isValid}
          id={'email'}
          label={'E-mail'}
          type={'email'}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordRef}
          isValid={passwordState.isValid}
          id={'password'}
          label={'Password'}
          type={'password'}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
