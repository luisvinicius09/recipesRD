import axios from 'axios';

// const API_KEY = '8cdc318e14cb4e0e9cefc312cb97d7a2';

export const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_REQUEST' });

    try {
      // const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
      const res = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log(res.data.meals);

      dispatch({type: 'FETCH_SUCCESS', payload: res.data.categories })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error })
    }
  };
};