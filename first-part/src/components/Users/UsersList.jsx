import Card from '../UI/Card/Card';
import styles from './UsersList.module.css';

function UsersList({ users }) {
  return (
    <Card className={styles.users}>
      <ul className=''>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
