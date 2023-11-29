import { useEffect, useState } from 'react';

import Card from '../UI/Card/Card.jsx';
import MealItem from './MealItem/MealItem.jsx';

import classes from './AvailableMeals.module.css';

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const responseMeals = await fetch(
          'https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
        );
        const dataMeals = await responseMeals.json();
        const arrFromDataMeals = [];
        for (const key in dataMeals) {
          arrFromDataMeals.push({
            id: key,
            ...dataMeals[key],
          });
        }
        setMeals(arrFromDataMeals);
        // console.log(arrFromDataMeals);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMeals();
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => {
            return (
              <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />
            );
          })}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
