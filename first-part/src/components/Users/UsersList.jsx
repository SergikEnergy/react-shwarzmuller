import styles from './AddUser.module.css';
import Card from '../UI/Card/Card';

function UsersList({ users }) {
  return (
    <Card>
      <ul className=''>
        {users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
