import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton() {
  return (
    <>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className=''>Your cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
