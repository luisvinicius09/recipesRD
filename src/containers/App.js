import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../state/actions';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(state.data.items[0])

  const renderRecipes = () => {
    if (state.loading) {
      return <h2>Loading</h2>;
    }
    return state.data.items.map((recipe) => recipe.title);
  }

  return (
    <div>
      <h1>Hello to the real world</h1>
      { renderRecipes() }
    </div>
  );
};

export default App;
