import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNav() {
  const setActive = ({ isActive }) => (isActive ? classes['active-link'] : classes.link);

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <li>
          <NavLink to='/' className={setActive} end={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' className={setActive}>
            Products
          </NavLink>
        </li>
      </nav>
    </header>
  );
}

export default MainNav;
