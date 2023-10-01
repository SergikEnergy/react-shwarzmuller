import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersData, setUsersData] = useState([]);
  const addUserHandler = (uName, uAge) => {
    console.log();
    setUsersData((prevUsers) => {
      return [{ name: uName, age: uAge, id: Math.random().toString() }, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
