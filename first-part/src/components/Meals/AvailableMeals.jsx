import mealsData from '../../data/dummyMeals.js';
import classes from './AvailableMeals.module.css';

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <ul>
        {mealsData.map((meal) => {
          return <li key={meal.id}>{meal.name}</li>;
        })}
      </ul>
    </section>
  );
}

export default AvailableMeals;
