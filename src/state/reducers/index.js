import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  search: searchReducer,
  modal: modalReducer,
});

export default reducers;