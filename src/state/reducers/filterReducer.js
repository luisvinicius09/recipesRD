const initialState = {
  filter: '',
  checked: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.value
      }
    case 'SET_CHECKED_FILTER':
      return {
        ...state,
        checked: action.value
      }
    default:
      return state;
  }
}

export default filterReducer