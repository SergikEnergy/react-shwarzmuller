import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import mealImg from '../../assets/meals.jpg';

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1 className=''>Food Order</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt='a lot of meal on the table' className='' />
      </div>
    </>
  );
}

export default Header;
