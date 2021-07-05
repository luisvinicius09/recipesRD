const initialState = {
  boolean: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_MODAL':
      return {
        boolean: action.boolean,
      };
    default:
      return state;
  }
};

export default modalReducer;
