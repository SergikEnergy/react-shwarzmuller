import { useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import styles from './AddUser.module.css';

function AddUser() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }

    console.log('submitted-->', userName, userAge);
    setUserAge('');
    setUserName('');
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const handleClick = () => {};

  return (
    <Card className={styles.input}>
      <form className='' onSubmit={addUserHandler}>
        <label htmlFor='userName' className=''>
          User Name
        </label>
        <input type='text' className='' value={userName} id='userName' onChange={userNameChangeHandler} />
        <label htmlFor='userAge' className=''>
          User Age (in years)
        </label>
        <input type='number' className='' id='userAge' value={userAge} onChange={userAgeChangeHandler} />
        <Button className='' type='submit' onClick={handleClick}>
          Add User
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
