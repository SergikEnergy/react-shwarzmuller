import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <header className=''>
      <nav className=''>
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
