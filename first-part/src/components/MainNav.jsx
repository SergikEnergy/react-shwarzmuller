import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNav() {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </nav>
    </header>
  );
}

export default MainNav;
