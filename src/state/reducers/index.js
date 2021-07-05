import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer';
import modalReducer from './modalReducer';
import detailsReducer from './detailsReducer';

const reducers = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  search: searchReducer,
  modal: modalReducer,
  details: detailsReducer,
});

export default reducers;
