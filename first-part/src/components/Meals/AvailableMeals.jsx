import { useEffect, useState } from 'react';

import Card from '../UI/Card/Card.jsx';
import MealItem from './MealItem/MealItem.jsx';

import classes from './AvailableMeals.module.css';

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsError(null);
        setIsLoading(true);
        const responseMeals = await fetch(
          'https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
        );
        if (!responseMeals.ok) {
          throw new Error('Failed request to the database. Try repeat it later!');
        }
        const dataMeals = await responseMeals.json();
        const arrFromDataMeals = [];
        for (const key in dataMeals) {
          arrFromDataMeals.push({
            id: key,
            ...dataMeals[key],
          });
        }
        setIsLoading(false);
        setMeals(arrFromDataMeals);
      } catch (err) {
        setIsLoading(false);
        setIsError(err.message);
      }
    };

    fetchMeals();
  }, []);

  return (
    <>
      {isLoading && (
        <section className={classes['meals__loading']}>
          <p>Loading...</p>
        </section>
      )}
      {!isLoading && !isError && (
        <section className={classes.meals}>
          <Card>
            <ul>
              {meals.map((meal) => {
                return (
                  <MealItem
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}
                  />
                );
              })}
            </ul>
          </Card>
        </section>
      )}
      {isError && (
        <section className={classes['meals__error']}>
          <p>Something went wrong! Please, try to reload the app later.</p>
        </section>
      )}
    </>
  );
}

export default AvailableMeals;
