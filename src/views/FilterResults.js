import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import { fetchFilteredMeals } from '../state/actions';
import SearchBar from '../components/search/SearchBar';
import NavBar from '../components/utils/NavBar';
import MealCard from '../components/meal/MealCard';
import Loading from '../components/utils/Loading';
import sharedStyle from '../assets/css/shared.module.css';

const FilterResults = ({ location }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilteredMeals(location.checked));
  }, [dispatch, location.checked]);

  const renderMeals = () => {
    if (state.loading) {
      return <Loading />;
    }
    if (!state.data.filteredMeals) {
      return <h1>No items to display</h1>;
    }
    return state.data.filteredMeals.map((meal) => (
      <MealCard key={meal.idMeal} id={meal.idMeal} meal={meal.strMeal} image={meal.strMealThumb} />
    ));
  };

  return (
    <>
      <NavBar />
      <SearchBar />
      <div className={sharedStyle.container}>
        { renderMeals() }
      </div>
    </>
  );
};

FilterResults.propTypes = {
  location: propTypes.objectOf(propTypes.string),
};

FilterResults.defaultProps = {
  location: 'Beef',
};

export default FilterResults;
