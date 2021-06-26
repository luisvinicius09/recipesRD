import axios from 'axios';

const API_KEY = '8cdc318e14cb4e0e9cefc312cb97d7a2';

export const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_REQUEST' });

    try {
      const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);

      dispatch({type: 'FETCH_SUCCESS', payload: res.data.recipes })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error })
    }
  };
};