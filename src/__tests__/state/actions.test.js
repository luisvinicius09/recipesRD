import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as importedActions from '../../state/actions/index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let initialDataState = {
  categories: [],
  meals: [],
  meal: [],
  results: [],
  filterOptions: [],
  filteredMeals: [],
  loading: false,
  error: null,
};

describe('should retrieve data and insert on the data state', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialDataState);
  });

  afterEach(() => {
    initialDataState = {
      categories: [],
      meals: [],
      meal: [],
      results: [],
      filterOptions: [],
      filteredMeals: [],
      loading: false,
      error: null,
    };
  });

  it('should successfully retrieve categories', () => (
    store.dispatch(importedActions.fetchCategories())
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual('FETCH_CATEGORIES_SUCCESS');
      })
      .catch((err) => err)
  ));

  it('should successfully retrieve meals by category', () => {
    store.dispatch(importedActions.fetchMealsByCategory('Beef'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual('FETCH_MEALS_SUCCESS');
      })
      .catch((err) => err);
  });

  it('should successfully retrieve filter options', () => {
    store.dispatch(importedActions.fetchFilterOptions())
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual('FETCH_FILTER_SUCCESS');
      })
      .catch((err) => err);
  });

  it('should successfully retrieve meal by id', () => {
    store.dispatch(importedActions.fetchMealById('53050'))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual('FETCH_MEAL_SUCCESS');
      })
      .catch((err) => err);
  });

  it('should successfully retrieve meals by search', () => {
    store.dispatch(importedActions.fetchMealsBySearch('Japanese'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[4].type).toEqual('FETCH_SEARCH_SUCCESS');
      })
      .catch((err) => err);
  });

  it('should successfully retrieve filtered meals', () => {
    store.dispatch(importedActions.fetchFilteredMeals('Chicken'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[3].type).toEqual('FETCH_FILTERED_MEALS');
      })
      .catch((err) => err);
  });
});

const initialSearchState = {
  value: '',
};

describe('should update the state that holds the search value', () => {
  it('should set a new value to the store', () => {
    const store = mockStore(initialSearchState);
    store.dispatch(importedActions.setSearch('Beef'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('SET_SEARCH_VALUE');
  });
});

const initialDetailsState = {
  recipe: false,
  ingredients: false,
};

describe('should handle the state of meal component', () => {
  it('should set the details open', () => {
    const store = mockStore(initialDetailsState);
    store.dispatch(importedActions.handleDetails());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('HANDLE_DETAILS');
  });

  it('should set the details open', () => {
    const store = mockStore(initialDetailsState);
    store.dispatch(importedActions.handleIngredients());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('HANDLE_INGREDIENTS');
  });

  it('should set the details open', () => {
    const store = mockStore(initialDetailsState);
    store.dispatch(importedActions.handleRecipes());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('HANDLE_RECIPES');
  });
});
