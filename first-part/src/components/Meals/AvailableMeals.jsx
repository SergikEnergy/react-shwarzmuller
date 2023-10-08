import Card from '../UI/Card/Card.jsx';
import MealItem from './MealItem/MealItem.jsx';

import mealsData from '../../data/dummyMeals.js';
import classes from './AvailableMeals.module.css';

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsData.map((meal) => {
            return <MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description} />;
          })}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
