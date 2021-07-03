import axios from 'axios';

export const fetchCategories = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' });

  try {
    const res = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');

    dispatch({type: 'FETCH_CATEGORIES_SUCCESS', payload: res.data.categories });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};

export const fetchMealsByCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' })
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);

    dispatch({ type: 'FETCH_MEALS_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};

export const fetchMealById = (id) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' })
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    dispatch({ type: 'FETCH_MEAL_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};

export const fetchMealsBySearch = (query) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_REQUEST' });
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);

    dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
}

export const fetchFilterOptions = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH REQUEST' });
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/list.php?i=list`);

    dispatch({ type: 'FETCH_FILTER_SUCCESS', payload: res.data.meals });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
}

export const fetchFilteredMeals = (query) => async (dispatch, getState) => {
  dispatch({type: 'FETCH_REQUEST' });
  try {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${query}`);

    dispatch({ type: 'FETCH_FILTERED_MEALS', payload: res.data.meals })
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
}

export const setFilteredOptions = (value) => ({
  type: 'SET_FILTER',
  value
});

export const setFilter = (value) => ({
  type: 'SET_CHECKED_FILTER',
  value
})

export const setSearch = (value) => ({
  type: 'SET_SEARCH_VALUE',
  value,
});

export const handleModal = (boolean) => ({
  type: 'HANDLE_MODAL',
  boolean,
})

export const handleDetails = () => ({
  type: 'HANDLE_DETAILS',
});

export const handleIngredients = () => ({
  type: 'HANDLE_INGREDIENTS',
});

export const handleRecipes = () => ({
  type: 'HANDLE_RECIPES'
})