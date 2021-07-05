import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFilteredMeals } from '../state/actions';
import SearchBar from '../components/search/SearchBar';
import NavBar from '../components/utils/NavBar';
import MealCard from '../components/meal/MealCard';
import Loading from '../components/utils/Loading';

const FilterResults = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilteredMeals(props.location.checked));
  }, [dispatch, props.location.checked]);
  
  const renderMeals = () => {
    if (state.loading) {
      return <Loading />
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
      <div>
        { renderMeals() }
      </div>
    </>
  )
};

export default FilterResults;