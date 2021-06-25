const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        items: [],
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        error: null,
        loading: false,
        items: state
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        items: [],
        error: action.error
      };
    default:
      return state
  }
}

export default dataReducer;