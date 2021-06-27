import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMealsByCategory } from '../../state/actions';
import MealCard from '../meal/MealCard';
import NavBar from '../utils/NavBar'

const CategoryMeals = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const state = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchMealsByCategory(category))
  }, [dispatch, category]);
  
  const renderMeals = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    return state.data.items.map((meal) => <MealCard key={meal.strMeal} id={meal.idMeal} meal={meal.strMeal} image={meal.strMealThumb}/>)
  }

  return (
    <>
      <NavBar />
      <h1>Category meals of { category }</h1>
      { renderMeals() }
    </>
  )
};

export default CategoryMeals;