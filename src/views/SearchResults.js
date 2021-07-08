import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { fetchMealsBySearch } from '../state/actions';
import NavBar from '../components/utils/NavBar';
import SearchBar from '../components/search/SearchBar';
import MealCard from '../components/meal/MealCard';
import Loading from '../components/utils/Loading';
import sharedStyle from '../assets/css/shared.module.css';

const SearchResults = ({ location }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMealsBySearch(location.inputValue));
  }, [dispatch, location.inputValue]);

  const renderMeals = () => {
    if (state.loading) {
      return <Loading />;
    }
    if (!state.data.results) {
      return <h1>No items to display</h1>;
    }
    return state.data.results.map((meal) => (
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

SearchResults.propTypes = {
  location: propTypes.objectOf(propTypes.string),
};

SearchResults.defaultProps = {
  location: 'Beef',
};

export default SearchResults;
