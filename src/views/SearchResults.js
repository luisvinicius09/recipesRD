import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsBySearch } from '../state/actions';
import NavBar from '../components/utils/NavBar';
import SearchBar from '../components/search/SearchBar';
import MealCard from '../components/meal/MealCard';

const SearchResults = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMealsBySearch(props.location.inputValue));
  }, [dispatch, props.location.inputValue]);

  const renderMeals = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    if (!state.data.results) {
      return <h1>No items to display</h1>
    }
    return state.data.results.map((meal) => <MealCard key={meal.idMeal} id={meal.idMeal} meal={meal.strMeal} image={meal.strMealThumb}/>)
  };

  return (
    <>
      <NavBar />
      <SearchBar />
      <h1>Hello Results</h1>
      { renderMeals() }
    </>
  );
};

export default SearchResults;