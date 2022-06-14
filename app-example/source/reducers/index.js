import { combineReducers } from 'redux';
import { app } from '../reducers/app';

const rootReducer = combineReducers({
  app: app
});

export default rootReducer;