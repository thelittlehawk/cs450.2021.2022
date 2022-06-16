import { createStore, combineReducers } from 'redux';
import friendsReducer from './reducer';

const rootReducer = combineReducers(
    { friends: friendsReducer }
);

const configureStore = () => {

return createStore(rootReducer);
}
export default configureStore;