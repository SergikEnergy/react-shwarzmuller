import { useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

import styles from './AddUser.module.css';

function AddUser({ onAddUser }) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input!',
        message: 'Please enter a valid user name or user age (non-empty values)',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid age!',
        message: 'Please enter a valid user age (more than 0)',
      });
      return;
    }

    onAddUser(userName, userAge);

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

  const closeModalError = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onErrorClick={closeModalError} />}
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
    </>
  );
}

export default AddUser;
