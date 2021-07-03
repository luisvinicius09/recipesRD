import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMealById, handleDetails, handleIngredients, handleRecipes } from '../state/actions/index'
import NavBar from '../components/utils/NavBar'
import styles from '../assets/css/MealPage.module.css';

const Meal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.data);
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchMealById(id))
  }, [dispatch, id]);

  const meal = state.meal[0];

  if (!meal) {
    return <h1>Loading...</h1>;
  }

  const handleOpenRecipes = () => {
    dispatch(handleRecipes());
  }

  const handleOpenIngredients = () => {
    dispatch(handleIngredients());
  }

  const handleOpenDetails = () => {
    dispatch(handleDetails());
  }

  const filteredIngredients = Object.entries(meal).filter((key) =>  /strIngredient[0-9]|&[0-9]/.test(key));

  return (
    <>
      <NavBar displaySearch={true} />
      <div className={styles.container}>
        <img src={ meal.strMealThumb } alt={ meal.strMeal }/>
      </div>
      <div className={styles.overlay}>
        <div className={styles.overlayBtns}>
          <button type="button" onClick={handleOpenRecipes}>Recipe</button>
          <button type="button" onClick={handleOpenIngredients}>Ingredients</button>
          <button type="button" onClick={handleOpenDetails}><img src="." alt="Hide" /></button>
        </div>
        {details.recipe ?
          <div className={styles.recipe}>
            {meal.strInstructions}
          </div> : null
        }
        {details.ingredients ?
          <div className={styles.recipe}>
            <ul>
              {filteredIngredients.map(element => (
                  <li>{element[1]}</li>
                ))
              }
            </ul>

          </div> : null
        }
      </div>
    </>
  )
};

export default Meal;