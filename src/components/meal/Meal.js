import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMealById } from '../../state/actions/index'

const Meal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMealById(id))
  }, [dispatch, id]);

  const meal = state.data.items[0];

  if (!state.data.items[0]) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{ meal.strMeal }</h1>
      <img src={ meal.strMealThumb } alt={ meal.strMeal }/>
    </>
  )
};

export default Meal;