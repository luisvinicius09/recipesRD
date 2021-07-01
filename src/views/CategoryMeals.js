import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMealsByCategory } from '../state/actions';
import MealCard from '../components/meal/MealCard';
import NavBar from '../components/utils/NavBar'
import SearchBar from '../components/search/SearchBar';

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
    return state.data.meals.map((meal) => <MealCard key={meal.idMeal} id={meal.idMeal} meal={meal.strMeal} image={meal.strMealThumb}/>)
  }

  return (
    <>
      <NavBar />
      <SearchBar />
      { renderMeals() }
    </>
  )
};

export default CategoryMeals;