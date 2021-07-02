import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMealById } from '../state/actions/index'
import NavBar from '../components/utils/NavBar'
import styles from '../assets/css/MealPage.module.css';

const Meal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMealById(id))
  }, [dispatch, id]);

  const meal = state.data.meal[0];

  if (!state.data.meal[0]) {
    return <h1>Loading...</h1>;
  }
  console.log(meal)
  return (
    <>
      <NavBar displaySearch={true} />
      <div className={styles.container}>
        <img src={ meal.strMealThumb } alt={ meal.strMeal }/>
      </div>
      <div className={styles.overlay}>
        <div className={styles.overlayBtns}>
          <button type="button">Recipe</button>
          <button type="button">Ingredients</button>
          <button type="button"><img src="." alt="Hide" /></button>
        </div>
        <div className={styles.recipe}>
          {meal.strInstructions}
        </div>
      </div>
    </>
  )
};

export default Meal;