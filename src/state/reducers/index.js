import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  search: searchReducer,
});

export default reducers;