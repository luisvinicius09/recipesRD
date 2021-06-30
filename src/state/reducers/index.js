import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
  data: dataReducer,
  filter: filterReducer,
});

export default reducers;