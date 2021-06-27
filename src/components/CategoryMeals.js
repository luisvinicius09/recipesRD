import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMealsByCategory } from '../state/actions';
import MealCard from './MealCard';

const CategoryMeals = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const state = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchMealsByCategory(category))
  }, [dispatch, category]);
  
  console.log(state.data.items)

  const renderMeals = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    return state.data.items.map((meal) => <MealCard id={meal.idMeal} meal={meal.strMeal} image={meal.strMealThumb}/>)
  }

  return (
    <>
      <h1>Category meals of { category }</h1>
      <p>{ renderMeals() }</p>
    </>
  )
};

export default CategoryMeals;