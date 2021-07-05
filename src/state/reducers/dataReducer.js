const initialState = {
  categories: [],
  meals: [],
  meal: [],
  results: [],
  filterOptions: [],
  filteredMeals: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case 'FETCH_MEALS_SUCCESS':
      return {
        ...state,
        loading: false,
        meals: action.payload,
      };
    case 'FETCH_MEAL_SUCCESS':
      return {
        ...state,
        loading: false,
        meal: action.payload,
      };
    case 'FETCH_SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case 'FETCH_FILTERED_MEALS':
      return {
        ...state,
        loading: false,
        filteredMeals: action.payload,
      };
    case 'FETCH_FILTER_SUCCESS':
      return {
        ...state,
        loading: false,
        filterOptions: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;
