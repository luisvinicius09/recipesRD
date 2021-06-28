import axios from 'axios';

// const API_KEY = '8cdc318e14cb4e0e9cefc312cb97d7a2';

export const fetchCategories = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' });

  try {
    // const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
    const res = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');

    dispatch({type: 'FETCH_SUCCESS', payload: res.data.categories });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};

export const fetchMealsByCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' })
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);

    dispatch({ type: 'FETCH_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};

export const fetchMealById = (id) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' })
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    dispatch({ type: 'FETCH_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};

export const fetchMealsBySearch = (query) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' });
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);

    dispatch({ type: 'FETCH_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
}