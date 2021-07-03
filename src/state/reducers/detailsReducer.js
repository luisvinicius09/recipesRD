const initialState = {
  recipe: false,
  ingredients: false,
}

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_RECIPES':
      if (state.ingredients) {
        return {
          ingredients: false,
          recipe: true,
        }
      }
      return {
        ...state,
        recipe: !state.recipe,
      }
    case 'HANDLE_INGREDIENTS':
      if (state.recipe) {
        return {
          recipe: false,
          ingredients: true,
        }
      }
      return {
        ...state,
        ingredients: !state.ingredients,
      }
    case 'HANDLE_DETAILS':
      if (state.recipe || state.ingredients) {
        return {
          recipe: false,
          ingredients: false,
        }
      }
      return {
        ...state,
        recipe: !state.recipe,
      }
    default:
      return state;
  }
}

export default detailsReducer;