import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFilteredMeals } from '../state/actions';
import SearchBar from '../components/search/SearchBar';
import NavBar from '../components/utils/NavBar';
import MealCard from '../components/meal/MealCard';

const FilterResults = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilteredMeals(props.location.checked));
  }, [dispatch, props.location.checked]);
  
  const renderMeals = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    if (!state.data.filteredMeals) {
      return <h1>No items to display</h1>
    }
    return state.data.filteredMeals.map((meal) => <MealCard key={meal.idMeal} id={meal.idMeal} meal={meal.strMeal} image={meal.strMealThumb}/>)
  };

  return (
    <>
      <NavBar />
      <SearchBar />
      <h1>Hello Filter Results</h1>
      { renderMeals() }
    </>
  )
};

export default FilterResults;